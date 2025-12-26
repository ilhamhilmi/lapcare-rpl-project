"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface LaporanTeknisi {
  id: number;
  home_service_id: string;
  username_customer: string;
  username_teknisi: string;
  detail_kerusakan: string;
  ongkos_perbaikan: string;
  biaya_sparepart: string;
  bukti_pembelian_sparepart: string | null;
  bukti_pembayaran_customer: string | null;
  status: "pending" | "proses" | "selesai";
  created_at: string;
}

export default function LaporanTeknisi() {
  const [data, setData] = useState<LaporanTeknisi[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);

  // AMBIL DATA
  const fetchData = async () => {
    try {
      const res = await fetch("/api/laporan-homeservice-to-admin");
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

  // UPDATE STATUS
  const handleUpdateStatus = async (
    id: number,
    currentStatus: LaporanTeknisi["status"]
  ) => {
    try {
      setProcessingId(id);

      let nextStatus: LaporanTeknisi["status"] = "proses";
      if (currentStatus === "proses") nextStatus = "selesai";

      await fetch("/api/laporan-homeservice-to-admin", {
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
        <h1 className="text-2xl font-semibold mb-4">
          Data Laporan Teknisi
        </h1>

        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Id Home Service</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Teknisi</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Detail</th>
                <th className="px-4 py-3">Ongkos</th>
                <th className="px-4 py-3">Sparepart</th>
                <th className="px-4 py-3">Bukti Sparepart</th>
                <th className="px-4 py-3">Bukti Bayar</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {loading ? (
                <tr>
                  <td colSpan={11} className="px-4 py-6 text-center">
                    Memuat data...
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-4 py-6 text-center">
                    Data tidak tersedia
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.home_service_id}</td>
                    <td className="px-4 py-3">
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-4 py-3">{item.username_teknisi}</td>
                    <td className="px-4 py-3">{item.username_customer}</td>
                    <td className="px-4 py-3">{item.detail_kerusakan}</td>
                    <td className="px-4 py-3">{item.ongkos_perbaikan}</td>
                    <td className="px-4 py-3">{item.biaya_sparepart}</td>

                    <td className="px-4 py-3">
                      {item.bukti_pembelian_sparepart ? (
                        <img
                          src={`/${item.bukti_pembelian_sparepart}`}
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {item.bukti_pembayaran_customer ? (
                        <img
                          src={`/${item.bukti_pembayaran_customer}`}
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* STATUS + BUTTON */}
                    <td className="px-4 py-3 text-center">
                      {item.status === "pending" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(item.id, item.status)
                          }
                          disabled={processingId === item.id}
                          className="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:bg-gray-400"
                        >
                          {processingId === item.id
                            ? "Menunggu..."
                            : "Proses"}
                        </button>
                      )}

                      {item.status === "proses" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(item.id, item.status)
                          }
                          disabled={processingId === item.id}
                          className="px-3 py-1 bg-orange-500 text-white rounded text-sm disabled:bg-gray-400"
                        >
                          {processingId === item.id
                            ? "Memproses..."
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
