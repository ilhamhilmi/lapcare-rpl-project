import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const runtime = "nodejs";

const pool = mysql.createPool({
  host: "yamanote.proxy.rlwy.net",
  port: 51698,
  user: "root",
  password: "OXcFFYOhsiXCYBxHEAMHrTztviBjEGrh",
  database: "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function GET() {
  try {
    const query = `
      SELECT 
        id,
        name,
        job,
        message,
        created_at
      FROM reviews
      ORDER BY created_at DESC
    `;

    const [rows] = await pool.execute(query);

    return NextResponse.json({
      success: true,
      data: Array.isArray(rows) ? rows : [],
    });
  } catch (error) {
    console.error("REVIEWS ADMIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        data: [],
        message: "Gagal mengambil data ulasan",
      },
      { status: 500 }
    );
  }
}






// import {NextResponse} from "next/server";
// import {db} from "@/lib/db";

// export const runtime = "nodejs";
// export async function GET() {
//     try {
//         // const [rows] = await db.execute 
//         const [rows]: any = await db.query(
//             "SELECT id,name,job,message,created_at FROM reviews"
//         );

//         return NextResponse.json(rows);
//     } catch (error) {
//         console.error("API ERROR", error);
//         return NextResponse.json(
//             { message: "Gagal mengambil data pengguna" },
//             { status: 500}
//         );
 
//     }
// }