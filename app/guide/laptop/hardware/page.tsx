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
                        <Link href="/guide/laptop/software/laptoplemot" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Laptop lemot saat dinyalakan</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Lambat saat membuka aplikasi</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">WiFi tidak muncul</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Icon/taskbar hilang</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">CPU usage tinggi</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Aplikasi tidak bisa dibuka</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Windows update error</h1>
                            </div>
                        </Link>
                        <Link href="" className="border text-center p-4 flex items-center justify-center rounded-xl border-secondary bg-white/5 backdrop-blur-2xl hover:bg-white/15 duration-250">
                            <div>
                                <h1 className="font-poppins text-slate-200 font-semibold text-lg">Bluetooth tidak muncul</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center mt-5">
                    <Link href="/" className="font-poppins text-white bg-primary border-primary px-4 py-2 rounded-full hover:bg-sky-600 hover:border-sky-600 shadow-xl duration-250">Punya Kendala lain? Hubungi Kami</Link>
                </div>
            </section>

            <FooterClient />
        </div>
    );
}