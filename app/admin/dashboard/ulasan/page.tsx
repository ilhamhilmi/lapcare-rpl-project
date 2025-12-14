"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface Ulasan {
    id: number;
    name: string;
    job: string;
    message: string;
    createdAt: string;
}

export default function ulasan() {
    const [Ulasan, setUlasan] = useState<Ulasan[]>([]);
        const [loading, setLoading] = useState(true);

            useEffect(() => {
        const fetchUlasan = async () => {
            try {
                const res = await fetch("/api/ulasan");
                const data = await res.json();
                setUlasan(data);
            } catch (error) {
                console.error("Gagal mengambil data pengguna:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUlasan();
    }, []);
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">Data Ulasan Pengguna</h1>

                <div className="overflow-x-auto rounded-xl shadow bg-white">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Tanggal Dibuat</th>
                                {/* <th className="px-4 py-3">Email</th> */}
                                <th className="px-4 py-3">Job</th>
                                <th className="px-4 py-3">Nama</th>
                                <th className="px-4 py-3">Pesan</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                             {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center">
                                        Memuat data...
                                    </td>
                                </tr>
                            ) : Ulasan.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center">
                                        Data pengguna tidak tersedia
                                    </td>
                                </tr>
                            ) : (
                                Ulasan.map((reviews, index) => (
                                    <tr key={reviews.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>
                                                {new Date(reviews.createdAt).toLocaleDateString("id-ID")}
                                            </h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{reviews.job}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{reviews.name}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{reviews.message}</h1>
                                        </td>
                                        {/* <td className="px-4 py-3">
                                            <h1>{user.password}</h1>
                                        </td> */}
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
