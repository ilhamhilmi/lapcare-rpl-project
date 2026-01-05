"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface Konsultasi {
  id: number;
  nama: string;
  nomorHP: string;
  perangkat: string;
  pesan: string;
  foto: string | null;
  status: "pending" | "proses" | "selesai";
  created_at: string;
}

export default function KonsulTable() {
  const [data, setData] = useState<Konsultasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/konsulchat");
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

  const updateStatus = async (
    id: number,
    status: "proses" | "selesai"
  ) => {
    try {
      setProcessingId(id);

      await fetch("/api/konsulchat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
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
        <h1 className="text-2xl font-semibold mb-4">Data Konsultasi</h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Perangkat</th>
                <th className="px-4 py-3">Pesan</th>
                <th className="px-4 py-3">Foto</th>
                <th className="px-4 py-3">No HP</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-6">
                    Memuat data...
                  </td>
                </tr>
              ) : (
                data.map((item, i) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3">
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-4 py-3">{item.nama}</td>
                    <td className="px-4 py-3">{item.perangkat}</td>
                    <td className="px-4 py-3">{item.pesan}</td>
                    <td className="px-4 py-3">
                      {item.foto ? (
                        <img
                          src={item.foto}
                          alt="Foto"
                          className="w-10 h-10 rounded object-cover"
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-3">{item.nomorHP}</td>

                    <td className="px-4 py-3 text-center">
                      {item.status === "pending" && (
                        <button
                          onClick={() => updateStatus(item.id, "proses")}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                        >
                          Proses
                        </button>
                      )}

                      {item.status === "proses" && (
                        <button
                          onClick={() => updateStatus(item.id, "selesai")}
                          className="px-3 py-1 bg-orange-500 text-white rounded text-sm"
                        >
                          Selesaikan
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
