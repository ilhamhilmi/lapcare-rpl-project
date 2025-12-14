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

export default function hardwareLaptop() {
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
                        <h1 className="text-darkb font-poppins text-2xl 2xl:text-3xl font-semibold border-b pb-5 border-secondary">Panduan Hardware Laptop</h1>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <p className="text-darkb text-center text-4xl xl:text-5xl font-poppins">Silahkan pilih kendala yang kamu alami</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 pt-16 pb-16 px-6">
                <div className="container mx-auto bg-gradient-to-tl from-[#1d293d] via-[#23385e] to-[#3b82f6] border border-secondary rounded-xl shadow-xl p-5">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                        <Link href="/guide/laptop/hardware/aud" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Port Audio Tidak Terbaca</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/baterai" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Baterai Bermasalah</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/charger" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Port Charger Bermasalah</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/keyboard" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Tombol Keyboard Tidak Merespon</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/panas" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Suhu Laptop Tinggi</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/speaker" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Speaker Tidak Mengeluarkan Suara</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/touchpad" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Touchpad Tidak Merespon</h1>
                            </div>
                        </Link>
                        <Link href="/guide/laptop/hardware/usb" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Port USB Tidak Terbaca</h1>
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