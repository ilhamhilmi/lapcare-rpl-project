export const runtime = "nodejs";

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import mysql from "mysql2/promise";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  let db;

  try {
    const formData = await req.formData();

    // AMBIL USER ID DARI COOKIE (BUKAN DARI FORM)
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const perangkat = formData.get("perangkat") as string;
    const alamat_lengkap = formData.get("alamat_lengkap") as string;
    const tanggal = formData.get("tanggal") as string;
    const kendala = formData.get("kendala") as string;
    const file = formData.get("foto");

    if (!perangkat || !alamat_lengkap || !tanggal || !kendala) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    if (file && !(file instanceof File)) {
      return NextResponse.json(
        { message: "File tidak valid" },
        { status: 400 }
      );
    }

    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "lapcare",
    });

    //  AMBIL DATA USER DARI ID LOGIN
    const [rows]: any = await db.execute(
      "SELECT username, no_tlp FROM user WHERE id = ?",
      [userId]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    const nama = rows[0].username;
    const nomor_hp = rows[0].no_tlp;

    // UPLOAD FOTO
    let fileName: string | null = null;
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      fileName = `${Date.now()}-${file.name}`;
      await writeFile(path.join(uploadDir, fileName), buffer);
    }

    // INSERT + USER_ID + STATUS
    await db.execute(
      `INSERT INTO home_service
      (user_id, nama, nomor_hp, perangkat, alamat_lengkap, tanggal, kendala, foto, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        userId,
        nama,
        nomor_hp,
        perangkat,
        alamat_lengkap,
        tanggal,
        kendala,
        fileName,
      ]
    );

    return NextResponse.json({
      message: "Permintaan home service berhasil dikirim",
    });

  } catch (error) {
    console.error("HOME SERVICE ERROR:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  } finally {
    if (db) await db.end();
  }
}
