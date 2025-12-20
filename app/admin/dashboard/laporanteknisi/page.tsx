"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

export default function KonsulTable() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">Data Laporan Teknisi</h1>

                <div className="overflow-x-auto rounded-xl shadow bg-white">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Id Home Service</th>
                                <th className="px-4 py-3">Tanggal Laporan</th>
                                <th className="px-4 py-3">Username Pengguna</th>
                                <th className="px-4 py-3">Username Teknisi</th>
                                <th className="px-4 py-3">Kerusakan</th>
                                <th className="px-4 py-3">Biaya Sparepart</th>
                                <th className="px-4 py-3">Ongkos Perbaikan</th>
                                <th className="px-4 py-3">Bukti Pembayaran</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <h1>1</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>37</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>
                                        25-12-2025
                                    </h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>MPROY</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>Agus Wahyudi</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>LCD kena bos</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>2.000.000</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>200.000</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>Foto</h1>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
