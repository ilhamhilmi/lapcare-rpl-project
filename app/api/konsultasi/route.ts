export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const perangkat = formData.get("perangkat") as string;
    const pesan = formData.get("pesan") as string;
    const file = formData.get("foto") as File | null;

    if (!perangkat || !pesan) {
      return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    const [rows]: any = await db.query(
      "SELECT username, no_tlp FROM user WHERE id = ?",
      [userId]
    );

    if (!rows.length) {
      return NextResponse.json({ message: "User tidak ditemukan" }, { status: 404 });
    }

    const { username: nama, no_tlp: nomorHP } = rows[0];

    const uploadFile = async (file: File | null) => {
      if (!file) return null;

      const filePath = `uploads/${Date.now()}_${file.name}`;

      const { error } = await supabase.storage
        .from("konsultasi")
        .upload(filePath, file, { contentType: file.type });

      if (error) throw error;

      return supabase.storage
        .from("konsultasi")
        .getPublicUrl(filePath).data.publicUrl;
    };

    const fotoUrl = await uploadFile(file);

    await db.execute(
      `INSERT INTO konsultasi
      (user_id, nama, nomorHP, perangkat, pesan, foto, status)
      VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
      [userId, nama, nomorHP, perangkat, pesan, fotoUrl]
    );

    return NextResponse.json({ message: "Permintaan konsultasi berhasil dikirim" });
  } catch (error) {
    console.error("KONSULTASI ERROR:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
  }
}





// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";
// import { cookies } from "next/headers";
// import { supabase } from "@/lib/supabase";

// export async function POST(req: Request) {
//   let db;

//   try {
//     const formData = await req.formData();

//     // AMBIL USER ID DARI COOKIE
//     const cookieStore = await cookies();
//     const userId = cookieStore.get("user_id")?.value;

//     if (!userId) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const perangkat = formData.get("perangkat") as string;
//     const pesan = formData.get("pesan") as string;
//     const file = formData.get("foto");

//     if (!perangkat || !pesan) {
//       return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
//     }

//     if (file && !(file instanceof File)) {
//       return NextResponse.json({ message: "File tidak valid" }, { status: 400 });
//     }

//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "lapcare",
//     });

//     // Ambil data user dari ID login
//     const [rows]: any = await db.execute(
//       "SELECT username, no_tlp FROM user WHERE id = ?",
//       [userId]
//     );

//     if (!rows || rows.length === 0) {
//       return NextResponse.json({ message: "User tidak ditemukan" }, { status: 404 });
//     }

//     const nama = rows[0].username;
//     const nomorHP = rows[0].no_tlp;

//     // Fungsi upload file ke Supabase
//     const uploadFile = async (file: File | null, folder: string) => {
//       if (!file) return null;

//       const filePath = `${folder}/${Date.now()}_${file.name}`;
//       const { error } = await supabase.storage
//         .from("konsultasi")
//         .upload(filePath, file, { contentType: file.type });

//       if (error) throw error;

//       const { data } = supabase.storage.from("konsultasi").getPublicUrl(filePath);
//       return data.publicUrl;
//     };

//     const fotoUrl = await uploadFile(file as File, "uploads");

//     // INSERT ke database
//     await db.execute(
//       `INSERT INTO konsultasi
//       (user_id, nama, nomorHP, perangkat, pesan, foto, status)
//       VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
//       [userId, nama, nomorHP, perangkat, pesan, fotoUrl]
//     );

//     return NextResponse.json({ message: "Permintaan konsultasi berhasil dikirim" });
//   } catch (error) {
//     console.error("KONSULTASI ERROR:", error);
//     return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
//   } finally {
//     if (db) await db.end();
//   }
// }





// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import path from "path";
// import fs from "fs";
// import { writeFile } from "fs/promises";
// import mysql from "mysql2/promise";
// import { cookies } from "next/headers";

// export async function POST(req: Request) {
//   let db;

//   try {
//     const formData = await req.formData();

//     // USER ID DARI COOKIE
//     const cookieStore = await cookies();
//     const userId = cookieStore.get("user_id")?.value;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const perangkat = formData.get("perangkat") as string;
//     const pesan = formData.get("pesan") as string;
//     const file = formData.get("foto");

//     if (!perangkat || !pesan) {
//       return NextResponse.json(
//         { message: "Data tidak lengkap" },
//         { status: 400 }
//       );
//     }

//     if (file && !(file instanceof File)) {
//       return NextResponse.json(
//         { message: "File tidak valid" },
//         { status: 400 }
//       );
//     }

//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "lapcare",
//     });

//     // AMBIL DATA USER LOGIN
//     const [rows]: any = await db.execute(
//       "SELECT username, no_tlp FROM user WHERE id = ?",
//       [userId]
//     );

//     if (!rows || rows.length === 0) {
//       return NextResponse.json(
//         { message: "User tidak ditemukan" },
//         { status: 404 }
//       );
//     }

//     const nama = rows[0].username;
//     const nomorHP = rows[0].no_tlp;

//     // UPLOAD FOTO
//     let fileName: string | null = null;
//     const uploadDir = path.join(process.cwd(), "public/uploads");

//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     if (file instanceof File) {
//       const buffer = Buffer.from(await file.arrayBuffer());
//       fileName = `${Date.now()}-${file.name}`;
//       await writeFile(path.join(uploadDir, fileName), buffer);
//     }
// // new
//     if (file && !(file instanceof File)) {
//   return NextResponse.json({ message: "File tidak valid" }, { status: 400 });
// }


//     // INSERT + user_id + status
//     await db.execute(
//       `INSERT INTO konsultasi
//       (user_id, nama, nomorHP, perangkat, pesan, foto, status)
//       VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
//       [userId, nama, nomorHP, perangkat, pesan, fileName]
//     );

//     return NextResponse.json({
//       message: "Permintaan konsultasi berhasil dikirim",
//     });

//   } catch (error) {
//     console.error("KONSULTASI ERROR:", error);
//     return NextResponse.json(
//       { message: "Terjadi kesalahan server" },
//       { status: 500 }
//     );
//   } finally {
//     if (db) await db.end();
//   }
// }
