import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // HAPUS SESSION 
  res.cookies.set("teknisi_id", "", {
    path: "/",
    maxAge: 0,
  });

  res.cookies.set("teknisi_role", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}
