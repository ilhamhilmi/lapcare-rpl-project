"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

export default function LaporanTeknisi() {
    return (
        <div>
            <section className="bg-darkb pt-16 pb-16 min-h-screen flex items-center">
                <div className="container mx-auto">
                    <div className="text-center mb-5">
                        <h1 className="font-poppins text-3xl text-white">Laporan Teknisi</h1>
                    </div>
                    <div className="">
                        <div className="w-full flex items-center justify-center">
                            <input
                                type="text"
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="ID Home Service"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <input
                                type="text"
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="Username Customer"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <input
                                type="text"
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="Username Teknisi"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <textarea
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="Detail Kerusakan"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <input
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="Ongkos & Biaya Perbaikan"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <input
                                className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full text-white w-3/4 xl:w-1/2 mb-3"
                                placeholder="Biaya Sparepart (Opsional)"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mb-3">
                            <label
                                htmlFor="uploadFoto"
                                className="flex items-center justify-center border border-dashed border-white rounded-full w-3/4 xl:w-1/2 px-4 py-3 font-poppins text-white cursor-pointer hover:border-sky-hover:text-sky-600 hover:shadow transition"
                            >
                                <span className="flex flex-col items-center space-y-2 text-center">
                                    <span>📤</span>
                                    <h1>Upload Foto Bukti Pembayaran Pembelian Sparepart (Opsional)</h1>
                                        <p className="text-white font-poppins text-sm mt-[-10px] mb-3 text-center">
                                            File dipilih: 
                                        </p>
                                </span>
                            </label>
                            <input
                                id="uploadFoto"
                                type="file"
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mb-3">
                            <label
                                htmlFor="uploadFoto"
                                className="flex items-center justify-center border border-dashed border-white rounded-full w-3/4 xl:w-1/2 px-4 py-3 font-poppins text-white cursor-pointer hover:border-sky-hover:text-sky-600 hover:shadow transition"
                            >
                                <span className="flex flex-col items-center space-y-2 text-center">
                                    <span>📤</span>
                                    <h1>Upload Foto Bukti Pembayaran Customer</h1>
                                        <p className="text-white font-poppins text-sm mt-[-10px] mb-3 text-center">
                                            File dipilih: 
                                        </p>
                                </span>
                            </label>
                            <input
                                id="uploadFoto"
                                type="file"
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className="border rounded-full px-6 py-2 font-poppins border-primary bg-primary text-white cursor-pointer hover:bg-sky-500 hover:border-sky-500 shadow-md hover:shadow-2xl duration-300">Kirim</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
