"use client";

import AdminSidebar from "@/app/components/AdminSidebar";

export default function dataPengguna() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">Data Pengguna</h1>

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
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <h1>1</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>12-12-2025</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>nabilmpruy@gmail.com</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>nabil</h1>
                                </td>
                                 <td className="px-4 py-3">
                                    <h1>089349314123</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>foto.jpg</h1>
                                </td>
                            </tr>

                            {/* baris lain bisa duplikat h1 sama aja */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <h1>2</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>13-12-2025</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>jampruympruy@gmail.com</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>mpruy</h1>
                                </td>
                                 <td className="px-4 py-3">
                                    <h1>089349314123</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>123</h1>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
