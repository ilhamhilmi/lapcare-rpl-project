import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

/* GET */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const teknisiId = cookieStore.get("teknisi_id")?.value;

    if (!teknisiId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // ambil username teknisi
    const [teknisiRows]: any = await db.query(
      "SELECT username FROM user WHERE id = ? AND role = 'teknisi'",
      [teknisiId]
    );

    if (!teknisiRows.length) {
      return NextResponse.json(
        { message: "Teknisi tidak ditemukan" },
        { status: 404 }
      );
    }

    // FIX UTAMA ADA DI SINI
const [homeServiceRows]: any = await db.query(`
  SELECT 
    id,
    nama
  FROM home_service
  WHERE status = 'proses'
  ORDER BY id DESC
`);


    return NextResponse.json({
      username_teknisi: teknisiRows[0].username,
      home_services: homeServiceRows,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/*  POST (TIDAK DIUBAH) */
export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const teknisiId = cookieStore.get("teknisi_id")?.value;

    if (!teknisiId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const [teknisiRows]: any = await db.query(
      "SELECT username FROM user WHERE id = ? AND role = 'teknisi'",
      [teknisiId]
    );

    if (!teknisiRows.length) {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const teknisiUsername = teknisiRows[0].username;
    const formData = await req.formData();

    const homeServiceId = Number(formData.get("home_service_id"));
    const usernameCustomer = formData.get("username_customer") as string;
    const detailKerusakan = formData.get("detail_kerusakan") as string;
    const ongkosPerbaikan = Number(formData.get("ongkos_perbaikan"));
    const biayaSparepart = Number(formData.get("biaya_sparepart") || 0);

    if (!homeServiceId || !usernameCustomer || !detailKerusakan || !ongkosPerbaikan) {
      return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    const uploadFile = async (file: File | null, folder: string) => {
      if (!file) return null;

      const filePath = `${folder}/${Date.now()}_${file.name}`;

      const { error } = await supabase.storage
        .from("laporan-teknisi")
        .upload(filePath, file, { contentType: file.type });

      if (error) throw error;

      return supabase.storage
        .from("laporan-teknisi")
        .getPublicUrl(filePath).data.publicUrl;
    };

    const buktiSparepart = await uploadFile(
      formData.get("bukti_pembelian_sparepart") as File | null,
      "sparepart"
    );

    const buktiPembayaran = await uploadFile(
      formData.get("bukti_pembayaran_customer") as File | null,
      "pembayaran"
    );

    await db.execute(
      `INSERT INTO laporan_teknisi
      (home_service_id, username_customer, username_teknisi, detail_kerusakan,
       ongkos_perbaikan, biaya_sparepart, bukti_pembelian_sparepart, bukti_pembayaran_customer)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        homeServiceId,
        usernameCustomer,
        teknisiUsername,
        detailKerusakan,
        ongkosPerbaikan,
        biayaSparepart,
        buktiSparepart,
        buktiPembayaran,
      ]
    );

    return NextResponse.json(
      { message: "Laporan berhasil disimpan" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}





















// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { db } from "@/lib/db";
// import path from "path";
// import fs from "fs/promises";

// // GET → ambil data teknisi untuk form
// export async function GET() {
//   try {
//     const cookieStore = await cookies();
//     const teknisiId = cookieStore.get("teknisi_id")?.value;

//     if (!teknisiId) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const [rows]: any = await db.query(
//       "SELECT username FROM user WHERE id = ? AND role = 'teknisi'",
//       [teknisiId]
//     );

//     if (!rows || rows.length === 0) {
//       return NextResponse.json({ message: "Akun bukan teknisi" }, { status: 403 });
//     }

//     return NextResponse.json({ username_teknisi: rows[0].username });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
//   }
// }

// // POST → simpan laporan teknisi
// export async function POST(req: Request) {
//   try {
//     const cookieStore = await cookies();
//     const teknisiId = cookieStore.get("teknisi_id")?.value;

//     if (!teknisiId) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const [teknisiRows]: any = await db.query(
//       "SELECT username FROM user WHERE id = ? AND role = 'teknisi'",
//       [teknisiId]
//     );

//     if (!teknisiRows || teknisiRows.length === 0) {
//       return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
//     }

//     const teknisiUsername = teknisiRows[0].username;

//     const formData = await req.formData();

//     const homeServiceIdRaw = formData.get("home_service_id");
//     const usernameCustomer = formData.get("username_customer") as string;
//     const detailKerusakan = formData.get("detail_kerusakan") as string;
//     const ongkosPerbaikan = formData.get("ongkos_perbaikan") as string;
//     const biayaSparepart = formData.get("biaya_sparepart") as string;

//     if (!homeServiceIdRaw || !usernameCustomer || !detailKerusakan || !ongkosPerbaikan) {
//       return NextResponse.json({ message: "Data wajib belum lengkap" }, { status: 400 });
//     }

//     const homeServiceId = Number(homeServiceIdRaw);
//     if (isNaN(homeServiceId)) {
//       return NextResponse.json({ message: "home_service_id tidak valid" }, { status: 400 });
//     }

//     const [homeServiceCheck]: any = await db.query(
//       "SELECT id FROM home_service WHERE id = ?",
//       [homeServiceId]
//     );

//     if (!homeServiceCheck || homeServiceCheck.length === 0) {
//       return NextResponse.json({ message: "home_service_id tidak ditemukan" }, { status: 400 });
//     }

//     const uploadDir = path.join(process.cwd(), "public/uploads");
//     await fs.mkdir(uploadDir, { recursive: true });

//     let buktiSparepartPath: string | null = null;
//     let buktiPembayaranPath: string | null = null;

//     const sparepart = formData.get("bukti_pembelian_sparepart") as File | null;
//     if (sparepart && sparepart.size > 0) {
//       const buffer = Buffer.from(await sparepart.arrayBuffer());
//       const name = `sparepart_${Date.now()}_${sparepart.name}`;
//       await fs.writeFile(path.join(uploadDir, name), buffer);
//       buktiSparepartPath = `/uploads/${name}`;
//     }

//     const pembayaran = formData.get("bukti_pembayaran_customer") as File | null;
//     if (pembayaran && pembayaran.size > 0) {
//       const buffer = Buffer.from(await pembayaran.arrayBuffer());
//       const name = `pembayaran_${Date.now()}_${pembayaran.name}`;
//       await fs.writeFile(path.join(uploadDir, name), buffer);
//       buktiPembayaranPath = `/uploads/${name}`;
//     }

//     await db.execute(
//       `INSERT INTO laporan_teknisi 
//       (home_service_id, username_customer, username_teknisi, detail_kerusakan, ongkos_perbaikan, biaya_sparepart, bukti_pembelian_sparepart, bukti_pembayaran_customer)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//       [homeServiceId, usernameCustomer, teknisiUsername, detailKerusakan, ongkosPerbaikan, biayaSparepart || 0, buktiSparepartPath, buktiPembayaranPath]
//     );

//     return NextResponse.json({ message: "Laporan teknisi berhasil disimpan" }, { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
//   }
// }
