"use client";

import AdminSidebar from "@/app/components/AdminSidebar";

export default function KonsulTable() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">Data Konsultasi</h1>

                <div className="overflow-x-auto rounded-xl shadow bg-white">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Tanggal Dibuat</th>
                                <th className="px-4 py-3">Nama</th>
                                <th className="px-4 py-3">Perangkat</th>
                                <th className="px-4 py-3">Pesan</th>
                                <th className="px-4 py-3">Foto</th>
                                <th className="px-4 py-3">No. Telp</th>
                                <th className="px-4 py-3">Status</th>
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
                                    <h1>Ilham</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>Laptop</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>Layar kedip-kedip</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>foto.jpg</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>089349314123</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1 className="border text-center rounded-md border-yellow-500 bg-yellow-500 text-white">Menunggu</h1>
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
                                    <h1>Budi</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>PC</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>Restart sendiri</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>budi.jpg</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1>089349314123</h1>
                                </td>
                                <td className="px-4 py-3">
                                    <h1 className="border text-center rounded-md border-orange-500 bg-orange-500 text-white">Diproses</h1>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
