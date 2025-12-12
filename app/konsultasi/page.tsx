"use client"
import { useState } from "react";
import { useEffect } from "react";
import NavbarClient from "../components/NavbarClient";
import FooterClient from "../components/FooterClient";
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from "react-hot-toast";


export default function Konsultasi() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const [fileName, setFileName] = useState("Belum ada file");
    const [nama, setNama] = useState("");
    const [perangkat, setPerangkat] = useState("");
    const [pesan, setPesan] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const [form, setForm] = useState({
        nama: "",
        perangkat: "",
        pesan: "",
        foto: "",
    });

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("nama", nama);
            formData.append("perangkat", perangkat);
            formData.append("pesan", pesan);
            if (file) formData.append("foto", file);

            const res = await fetch("/api/konsultasi", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const err = await res.json();
                toast.error("Gagal mengirim: " + err.message);
                return;
            }

            if (!form.nama || !form.perangkat || !form.pesan || !form.foto) {
                toast.error("Semua field wajib diisi!");
                return;
            }

            const data = await res.json();
            toast.success(data.message);

            // Reset form
            setNama("");
            setPerangkat("");
            setPesan("");
            setFile(null);
            setFileName("Belum ada file");

        } catch (error) {
            alert("Terjadi kesalahan: " + error);
        }
    };

    return (
        <div>
            <NavbarClient />

            <section className="bg-slate-200 pt-32 pb-12">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center mb-5">
                        <h1 className="text-darkb font-poppins text-2xl 2xl:text-3xl font-semibold border-b pb-5 border-secondary text-center">Konsultasi</h1>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <p className="text-darkb text-center text-2xl xl:text-4xl font-poppins">Beritahu kami kendala mu, kami akan segera menghubungi Anda</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex items-center bg-slate-200 pb-16">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-full flex items-center justify-center">
                            <input type="text" className="border focus:outline-none px-4 py-2 font-poppins border-darkb rounded-full text-darkb w-3/4 xl:w-1/2 mb-3" placeholder="Nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <input type="text" className="border focus:outline-none px-4 py-2 font-poppins border-darkb rounded-full text-darkb w-3/4 xl:w-1/2 mb-3" placeholder="Perangkat"
                                value={perangkat}
                                onChange={(e) => setPerangkat(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <textarea className="border focus:outline-none px-4 py-2 font-poppins border-darkb rounded-full text-darkb w-3/4 xl:w-1/2 mb-3" placeholder="Tulis kendala yang kamu alami"
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mb-3">
                            <label htmlFor="uploadFoto" className="flex items-center justify-center border border-dashed border-darkb rounded-full w-3/4 xl:w-1/2 px-4 py-3 font-poppins text-darkb cursor-pointer hover:border-sky-hover:text-sky-600 hover:shadow transition">
                                <span className="flex flex-col items-center space-y-2">
                                    <span>📤</span>
                                    <h1>Upload Foto Kendala</h1>
                                    {fileName && (
                                        <p className="text-darkb font-poppins text-sm mt-[-10px] mb-3 text-center">
                                            File dipilih: {fileName}
                                        </p>
                                    )}
                                </span>

                            </label>
                            <input id="uploadFoto" type="file" accept="image/*" className="hidden"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFile(e.target.files[0]);
                                        setFileName(e.target.files[0].name);
                                    }
                                }} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button onClick={handleSubmit} className="border rounded-full px-6 py-2 font-poppins border-primary bg-primary text-white cursor-pointer hover:bg-sky-500 hover:border-sky-500 shadow-md hover:shadow-2xl duration-300">Kirim</button>
                        </div>
                    </div>
                </div>
            </section>

            <FooterClient />
        </div>
    );
}
