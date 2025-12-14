import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username dan password wajib diisi" },
      { status: 400 }
    );
  }

  const [users]: any = await db.query(
    "SELECT * FROM `user` WHERE username = ? AND role = 'admin'",
    [username]
  );

  if (users.length === 0) {
    return NextResponse.json(
      { message: "Admin tidak ditemukan" },
      { status: 404 }
    );
  }

  const admin = users[0];

  // PLAIN CHECK — SESUAI BACKEND KAMU
  if (String(password).trim() !== String(admin.password).trim()) {
    return NextResponse.json(
      { message: "Password salah" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
    message: "Login admin berhasil",
  });

  // COOKIE KHUSUS ADMIN (TIDAK TABRAKAN DENGAN USER)
  response.cookies.set("admin_id", String(admin.id), {
    httpOnly: false,
    path: "/admin",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  response.cookies.set("adminLogin", "true", {
    httpOnly: false,
    path: "/admin",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
