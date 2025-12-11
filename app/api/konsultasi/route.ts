import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nama = formData.get("nama") as string;
    const perangkat = formData.get("perangkat") as string;
    const pesan = formData.get("pesan") as string;
    const file = formData.get("foto") as File | null;

    let fileName = null;

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);
    }

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "lapcare", 
    });

    await db.execute(
      "INSERT INTO konsultasi (nama, perangkat, pesan, foto) VALUES (?, ?, ?, ?)",
      [nama, perangkat, pesan, fileName]
    );

    await db.end();

    return NextResponse.json({
      message: "Data berhasil disimpan",
      data: {
        nama,
        perangkat,
        pesan,
        foto: fileName ? `/uploads/${fileName}` : null,
      },
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Terjadi kesalahan server",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
