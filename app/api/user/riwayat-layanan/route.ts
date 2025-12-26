import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET() {
  try {
    
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;

    //  Jika belum login → return ARRAY KOSONG
    if (!userId) {
      return NextResponse.json([], { status: 401 });
    }

    const [rows] = await db.execute(
      `
      SELECT 
        id,
        'home_service' AS jenis,
        tanggal AS tanggal_layanan,
        kendala AS deskripsi,
        status
      FROM home_service
      WHERE user_id = ?

      UNION ALL

      SELECT
        id,
        'konsultasi' AS jenis,
        created_at AS tanggal_layanan,
        pesan AS deskripsi,
        status
      FROM konsultasi
      WHERE user_id = ?

      ORDER BY tanggal_layanan DESC
      `,
      [userId, userId]
    );

    //  rows SELALU array
    return NextResponse.json(rows);
  } catch (error) {
    console.error("RIWAYAT ERROR:", error);

    //  error server juga return array
    return NextResponse.json([], { status: 500 });
  }
}
