import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        // TOTAL DATA
        const [user] = await db.query<any[]>(`
  SELECT COUNT(*) AS total FROM user
`);

        // total konsultasi
        const [konsultasi] = await db.query<any[]>(`
  SELECT COUNT(*) AS total FROM konsultasi
`);

        // total home service
        const [homeService] = await db.query<any[]>(`
  SELECT COUNT(*) AS total FROM home_service
`);

        // status konsultasi
        const [konsultasiStatus] = await db.query<any[]>(`
    SELECT
    COALESCE(SUM(status = 'pending'), 0) AS pending,
    COALESCE(SUM(status = 'proses'), 0) AS proses,
    COALESCE(SUM(status = 'selesai'), 0) AS selesai
    FROM konsultasi
`);

        // status home service
        const [homeServiceStatus] = await db.query<any[]>(`
    SELECT
    COALESCE(SUM(status = 'pending'), 0) AS pending,
    COALESCE(SUM(status = 'proses'), 0) AS proses,
    COALESCE(SUM(status = 'selesai'), 0) AS selesai
    FROM home_service
`);

        return NextResponse.json({
            totalUser: Number(user[0].total),
            totalKonsultasi: Number(konsultasi[0].total),
            totalHomeService: Number(homeService[0].total),

            konsultasi: {
                pending: Number(konsultasiStatus[0].pending),
                proses: Number(konsultasiStatus[0].proses),
                selesai: Number(konsultasiStatus[0].selesai),
            },

            homeService: {
                pending: Number(homeServiceStatus[0].pending),
                proses: Number(homeServiceStatus[0].proses),
                selesai: Number(homeServiceStatus[0].selesai),
            },
        });

    } catch (err) {
        return NextResponse.json(
            { message: "Error dashboard" },
            { status: 500 }
        );
    }
}
