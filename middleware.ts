import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("user_id")?.value;

  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    "/konsultasi",
    "/userProfile",
    "/homeService"
  ];

  // kalau belum login dan mengakses protected route
  if (!session && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // kalau sudah login dan mencoba masuk halaman login
  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/guide/:path*",
    "/konsultasi/:path*",
    "/homeService/:path*",
    "/userProfile/:path*",
    "/login"
  ],
};