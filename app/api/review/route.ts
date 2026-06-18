import { NextResponse } from "next/server";
import { db } from "@/lib/db";

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
      SELECT id, name, job, message, created_at
      FROM reviews
      ORDER BY created_at DESC
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
