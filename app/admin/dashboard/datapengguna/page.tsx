"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface User {
    id: number;
    email: string;
    username: string;
    nama: string;
    no_tlp: string;
    password: string;
    created_at: string;
}

export default function dataPengguna() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("/api/datapengguna");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Gagal mengambil data pengguna:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">
                    Data Pengguna
                </h1>

                <div className="overflow-x-auto rounded-xl shadow bg-white">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Tanggal Dibuat</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Username</th>
                                <th className="px-4 py-3">No. Telp</th>
                                <th className="px-4 py-3">Password</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center">
                                        Memuat data...
                                    </td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center">
                                        Data pengguna tidak tersedia
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>
                                                {new Date(user.created_at).toLocaleDateString("id-ID")}
                                            </h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{user.email}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{user.username}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{user.no_tlp}</h1>
                                        </td>
                                        <td className="px-4 py-3">
                                            <h1>{user.password}</h1>
                                        </td>
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
