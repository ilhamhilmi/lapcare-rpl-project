import {NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.execute(
            "SELECT id,nama,perangkat,alamat_lengkap,nomor_hp,tanggal,kendala,foto,created_at FROM home_service"
        );

        return NextResponse.json(rows);
    } catch (error) {
        console.error("API ERROR", error);
        return NextResponse.json(
            { message: "Gagal mengambil data pengguna" },
            { status: 500}
        );
 
    }
}