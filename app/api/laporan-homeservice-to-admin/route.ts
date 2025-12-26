import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET : AMBIL DATA
export async function GET() {
  try {
    const [rows] = await db.execute(
      `SELECT 
        id,
        home_service_id,
        username_customer,
        username_teknisi,
        detail_kerusakan,
        ongkos_perbaikan,
        biaya_sparepart,
        bukti_pembelian_sparepart,
        bukti_pembayaran_customer,
        status,
        created_at
      FROM laporan_teknisi
      ORDER BY created_at DESC`
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("API ERROR (GET):", error);
    return NextResponse.json(
      { message: "Gagal mengambil data laporan teknisi" },
      { status: 500 }
    );
  }
}

// POST : UPDATE STATUS
export async function POST(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { message: "ID dan status wajib diisi" },
        { status: 400 }
      );
    }

    // validasi status (penting)
    const allowedStatus = ["pending", "proses", "selesai"];
    if (!allowedStatus.includes(status)) {
      return NextResponse.json(
        { message: "Status tidak valid" },
        { status: 400 }
      );
    }

    await db.execute(
      "UPDATE laporan_teknisi SET status = ? WHERE id = ?",
      [status, id]
    );

    return NextResponse.json({
      success: true,
      message: "Status berhasil diperbarui",
    });
  } catch (error) {
    console.error("API ERROR (POST):", error);
    return NextResponse.json(
      { message: "Gagal update status laporan" },
      { status: 500 }
    );
  }
}
