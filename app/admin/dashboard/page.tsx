"use client";

import AdminSidebar from "@/app/components/AdminSidebar";

export default function AdminDashboard() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Konten Dashboard */}
            <section className="min-h-screen bg-white px-4 flex">
                <div className="container mx-auto flex items-center ">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="border border-secondary flex flex-col text-center p-5 rounded-md  bg-gradient-to-tr from-darkb to-primary space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Total Pengguna Terdaftar</h1>
                        </div>
                        <div className="border border-secondary flex flex-col text-center p-5 rounded-md  bg-gradient-to-tr from-darkb to-primary space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Total Permintaan Konsultasi</h1>
                        </div>
                        <div className="border border-secondary flex flex-col text-center p-5 rounded-md  bg-gradient-to-tr from-darkb to-primary space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Total Permintaan Home Service</h1>
                        </div>
                        <div className="border border-yellow-500 flex flex-col text-center p-5 rounded-md  bg-yellow-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Konsultasi Menunggu</h1>
                        </div>
                        <div className="border border-orange-500 flex flex-col text-center p-5 rounded-md  bg-orange-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Konsultasi Diproses</h1>
                        </div>
                        <div className="border border-green-500 flex flex-col text-center p-5 rounded-md  bg-green-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Konsultasi Selesai</h1>
                        </div>
                        <div className="border border-yellow-500 flex flex-col text-center p-5 rounded-md  bg-yellow-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Home Service Menunggu</h1>
                        </div>
                        <div className="border border-orange-500 flex flex-col text-center p-5 rounded-md  bg-orange-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Home Service Diproses</h1>
                        </div>
                        <div className="border border-green-500 flex flex-col text-center p-5 rounded-md  bg-green-500 space-y-2">
                            <h1 className="font-poppins text-white text-6xl">999</h1>
                            <h1 className="font-poppins text-white font-semibold">Permintaan Home Service Selesai</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
