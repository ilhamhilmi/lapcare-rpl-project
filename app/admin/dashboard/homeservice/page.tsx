"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface HomeService {
  id: number;
  nama: string;
  perangkat: string;
  alamat_lengkap: string;
  nomor_hp: string;
  tanggal: string;
  kendala: string;
  foto: string | null;
  status: "pending" | "proses" | "selesai";
  created_at: string;
}

export default function HomeServiceTable() {
  const [data, setData] = useState<HomeService[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/servicehome");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateStatus = async (
    id: number,
    nextStatus: "pending" | "proses" | "selesai"
  ) => {
    try {
      setProcessingId(id);

      await fetch("/api/servicehome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });

      await fetchData();
    } catch (error) {
      console.error("Gagal update status:", error);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">
          Data Home Service
        </h1>

        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Tanggal Dibuat</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Perangkat</th>
                <th className="px-4 py-3">Alamat Lengkap</th>
                <th className="px-4 py-3">Nomor HP</th>
                <th className="px-4 py-3">Tanggal Layanan</th>
                <th className="px-4 py-3">Kendala</th>
                <th className="px-4 py-3">Foto</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {loading ? (
                <tr>
                  <td colSpan={10} className="px-4 py-6 text-center">
                    Memuat data...
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-4 py-6 text-center">
                    Data tidak tersedia
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </td>

                    <td className="px-4 py-3">{item.nama}</td>
                    <td className="px-4 py-3">{item.perangkat}</td>
                    <td className="px-4 py-3">{item.alamat_lengkap}</td>
                    <td className="px-4 py-3">{item.nomor_hp}</td>

                    <td className="px-4 py-3">
                      {new Date(item.tanggal).toLocaleDateString("id-ID")}
                    </td>

                    <td className="px-4 py-3">{item.kendala}</td>

                    <td className="px-4 py-3">
                      {item.foto ? (
                        <img
                          src={`/uploads/${item.foto}`}
                          alt="Foto"
                          className="w-10 h-10 rounded object-cover"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* STATUS + ACTION */}
                    <td className="px-4 py-3 text-center">
                      {item.status === "pending" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(item.id, "proses")
                          }
                          disabled={processingId === item.id}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:bg-gray-400"
                        >
                          {processingId === item.id
                            ? "Memproses..."
                            : "Proses"}
                        </button>
                      )}

                      {item.status === "proses" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(item.id, "selesai")
                          }
                          disabled={processingId === item.id}
                          className="px-3 py-1 bg-orange-500 text-white rounded text-sm disabled:bg-gray-400"
                        >
                          {processingId === item.id
                            ? "Menyelesaikan..."
                            : "Selesaikan"}
                        </button>
                      )}

                      {item.status === "selesai" && (
                        <span className="px-3 py-1 bg-green-600 text-white rounded text-sm">
                          Selesai
                        </span>
                      )}
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
