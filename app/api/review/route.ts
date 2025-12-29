import { NextResponse } from "next/server";
import mysql from "mysql2/promise";


export const db = mysql.createPool({
  host: "interchange.proxy.rlwy.net",
  port: 36631,                  // Port harus terpisah seperti ini
  user: "root",
  password: "pgkSuXlsZyfRewrdhtjnvFfcBkymqwAH",
  database: "railway",          // Ini nama DB default di Railway
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


export async function POST(req: Request) {
  try {
    const { name, job, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Nama dan pesan wajib diisi" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO reviews (name, job, message)
      VALUES (?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      name,
      job || null,
      message,
    ]);

    return NextResponse.json(
      {
        success: true,
        data: {
          id: (result as any).insertId,
          name,
          job,
          message,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const query = `
      SELECT id, name, job, message, createdAt
      FROM reviews
      ORDER BY createdAt DESC
    `;

    const [rows] = await db.execute(query);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal mengambil data review" },
      { status: 500 }
    );
  }
}
