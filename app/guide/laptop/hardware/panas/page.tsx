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

export default function Panas() {
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
                        <p className="text-darkb text-center text-4xl xl:text-5xl font-poppins">Suhu Laptop Tinggi</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 pt-16 pb-16 px-6">
                <div className="container mx-auto bg-slate-200 border border-secondary rounded-xl shadow-xl p-5">
                    <div>
                        <p className="font-poppins text-darkb text-justify">1. Buka Task Manager, Cek aplikasi berat apa saja yang sedang berjalan</p>
                        <p className="font-poppins text-darkb text-justify">2. Jika memang banyak aplikasi berat sedang berjalan, wajar kalau laptop mu panas</p>
                        <p className="font-poppins text-darkb text-justify">3. Jika tidak ada aplikasi berat berjalan, coba untuk bongkar laptop dan lihat kondisi kipas laptop mu</p>
                        <p className="font-poppins text-darkb text-justify">4. Kemungkinan besar kipas laptop mu penuh debu dan perlu untuk dibersihkan, serta pergantian pasta 6 bulan sekali dan 1 tahun sekali jika penggunaan laptop sangat intens setiap hari</p>
                    </div>
                </div>
            </section>

            <FooterClient />
        </div>
    );
}