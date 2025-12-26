"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavbarClient from "@/app/components/NavbarClient";

interface RiwayatLayanan {
  id: number;
  jenis: "home_service" | "konsultasi";
  tanggal_layanan: string;
  status: "pending" | "proses" | "selesai";
}

export default function RiwayatUser() {
  const [data, setData] = useState<RiwayatLayanan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const res = await fetch("/api/user/riwayat-layanan");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Gagal mengambil riwayat:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRiwayat();
  }, []);

  const renderStatus = (status: RiwayatLayanan["status"]) => {
    if (status === "pending") return "Menunggu";
    if (status === "proses") return "Diproses";
    return "Selesai";
  };

  const renderLayanan = (jenis: RiwayatLayanan["jenis"]) => {
    return jenis === "home_service"
      ? "Home Service"
      : "Konsultasi Chat";
  };

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
                  {loading ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center">
                        Memuat data...
                      </td>
                    </tr>
                  ) : data.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center">
                        Belum ada riwayat layanan
                      </td>
                    </tr>
                  ) : (
                    data.map((item) => (
                      <tr
                        key={`${item.jenis}-${item.id}`}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">
                          {new Date(item.tanggal_layanan).toLocaleDateString(
                            "id-ID"
                          )}
                        </td>

                        <td className="px-4 py-3">
                          {renderLayanan(item.jenis)}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs text-white ${
                              item.status === "pending"
                                ? "bg-gray-400"
                                : item.status === "proses"
                                ? "bg-orange-500"
                                : "bg-green-600"
                            }`}
                          >
                            {renderStatus(item.status)}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
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
}
