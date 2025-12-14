import {NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.execute(
            "SELECT id,nama,nomorHP,perangkat,pesan,foto,created_at FROM konsultasi"
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