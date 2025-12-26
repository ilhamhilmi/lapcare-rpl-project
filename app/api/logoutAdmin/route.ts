import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // HAPUS SESSION ADMIN SAJA
  res.cookies.set("admin_id", "", {
    path: "/",
    maxAge: 0,
  });

  res.cookies.set("admin_role", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}
