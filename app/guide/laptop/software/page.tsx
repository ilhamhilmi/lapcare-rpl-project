"use client"

import { useEffect } from "react";
import NavbarClient from "@/app/components/NavbarClient";
import FooterClient from "@/app/components/FooterClient";
import Image from "next/image";
import computer from "@/assets/guide/computer.svg";
import laptop from "@/assets/guide/laptop.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function SoftwareLaptop() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div>
            <NavbarClient />

            <section className="bg-slate-200 pt-32">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center mb-5">
                        <h1 className="text-darkb font-poppins text-2xl 2xl:text-3xl font-semibold border-b pb-5 border-secondary">Panduan Software Laptop</h1>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <p className="text-darkb text-center text-4xl xl:text-5xl font-poppins">Silahkan pilih kendala yang kamu alami</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 pt-16 pb-16 px-6">
                <div className="container mx-auto bg-gradient-to-tl from-[#1d293d] via-[#23385e] to-[#3b82f6] border border-secondary rounded-xl shadow-xl p-5">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                        <Link href="/guide/laptop/software/lemot" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Terasa Lemot Padahal Baru Nyala</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/notresponding" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Aplikasi Not Responding</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/wifi" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Tidak Bisa Terhubung Ke Wi-Fi</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/penyimpanan" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Penyimpanan Penuh</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/iklanmalware" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Sering Muncul Iklan / Terkena Malware Virus</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/installapp" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Tidak Bisa Install Aplikasi</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/winupd" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Windows Update Selalu Gagal & Stuck</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/software/oserror" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Sistem Operasi Sering Error / Crash</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center mt-5">
                    <Link href="/konsultasi" className="font-poppins text-white bg-primary border-primary px-4 py-2 rounded-full hover:bg-sky-600 hover:border-sky-600 shadow-xl duration-250">Punya Kendala lain? Konsultasi Sekarang</Link>
                </div>
            </section>

            <FooterClient />
        </div>
    );
}