import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    await db.execute(
      "UPDATE laporan_teknisi SET status = ? WHERE id = ?",
      [status, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("UPDATE STATUS ERROR:", error);
    return NextResponse.json(
      { message: "Gagal update status" },
      { status: 500 }
    );
  }
}
