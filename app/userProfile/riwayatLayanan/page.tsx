"use client";

import Link from "next/link";
import NavbarClient from '@/app/components/NavbarClient';

export default function riwayatUser() {
    return (
        <div>
            <NavbarClient />

            <div className="min-h-screen w-full flex items-center bg-slate-200 relative pt-16 text-start">
                <div className="container mx-auto flex items-center justify-center px-4 xl:px-0">

                    <div className="w-full xl:w-2/3 bg-white backdrop-blur-2xl border border-darkb shadow-2xl rounded-2xl flex flex-col items-center justify-center px-7 xl:px-10 py-10">

                        <h1 className="font-poppins text-3xl text-darkb font-semibold mb-5">
                            Riwayat Layanan Kamu
                        </h1>

                        {/* TABEL */}
                        <div className="w-full overflow-x-auto shadow mb-6">
                            <table className="min-w-full text-sm text-left font-poppins">
                                <thead className="bg-gray-100 text-darkb">
                                    <tr>
                                        <th className="px-4 py-3">Tanggal</th>
                                        <th className="px-4 py-3">Layanan</th>
                                        <th className="px-4 py-3">Status</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y border">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3"><h1>23/10/2025</h1></td>
                                        <td className="px-4 py-3"><h1>Home Service</h1></td>
                                        <td className="px-4 py-3"><h1>Selesai</h1></td>
                                    </tr>

                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3"><h1>23/10/2025</h1></td>
                                        <td className="px-4 py-3"><h1>Konsultasi Chat</h1></td>
                                        <td className="px-4 py-3"><h1>Menunggu</h1></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        {/* BUTTON */}
                        <div className="flex flex-col items-center justify-center space-y-2 w-full xl:w-2/3 text-center">
                            <Link
                                href="/userProfile"
                                className="border rounded-full px-6 py-1 font-poppins border-primary bg-primary hover:bg-sky-700 hover:border-sky-700 shadow-md hover:shadow-2xl duration-300 text-white cursor-pointer w-full"
                            >
                                Kembali
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
