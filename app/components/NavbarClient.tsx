"use client";


import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import userIcon from "@/assets/user-icon-svgrepo-com.svg"
import Image from "next/image";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
  const checkLogin = async () => {
    try {
      const res = await fetch("/api/me", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setLoggedIn(!!data.user);
      } else {
        setLoggedIn(false);
      }
    } catch {
      setLoggedIn(false);
    }
  };

  checkLogin();
}, [pathname]);


  // useEffect(() => {
  //   const cookies = document.cookie;

  //   // cek apakah cookie "user_id" ada
  //   if (cookies.includes("user_id=")) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login";
  };

  return (
    <header className="z-50 w-full fixed top-0 left-0 flex items-center">
      <div className="container mx-auto">

        {/* MOBILEEEEEEEEEEEEEEEEEE */}
        {!loggedIn && (
          <div className="lg:hidden">
            <nav className="w-full">
              <div className="flex items-center justify-between mx-5 my-4">
                <button onClick={toggleMenu} className="cursor-pointer border px-4 py-2 rounded-full backdrop-blur-xl bg-darkb/30 shadow-xl border-secondary">
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
                <Link href="/login" className="border px-3 py-2 rounded-xl font-poppins bg-primary border-primary font-semibold hover:bg-sky-700 hover:border-sky-700 text-white">Sign Up | Login</Link>
                {/* <Link href="/userProfile">
                  <div className="border p-2 rounded-full border-white bg-white hover:bg-slate-300 hover:border-slate-300 duration-200">
                    <Image src={userIcon} alt="userIcon" className="w-5" />
                  </div>
                </Link> */}
              </div>
            </nav>
          </div>
        )}
        {loggedIn && (
          <div className="lg:hidden">
            <nav className="w-full">
              <div className="flex items-center justify-between mx-5 my-4">
                <button onClick={toggleMenu} className="cursor-pointer border px-4 py-2 rounded-full backdrop-blur-xl bg-darkb/30 shadow-xl border-secondary">
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
                {/* <Link href="/login" className="border px-3 py-2 rounded-xl font-poppins bg-primary border-primary font-semibold hover:bg-sky-700 hover:border-sky-700 text-white">Sign Up | Login</Link> */}
                <Link href="/userProfile">
                  <div className="border p-2 rounded-full border-white bg-white hover:bg-slate-300 hover:border-slate-300 duration-200">
                    <Image src={userIcon} alt="userIcon" className="w-5" />
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        )}

        {isOpen && (
          <nav className="absolute bg-darkb/30 backdrop-blur-3xl left-3 top-full px-8 py-5 border rounded-md border-secondary shadow-xl">
            <div className="flex flex-col text-center text-s100 space-y-5">
              <Link href="/" className="text-lg font-semibold font-poppins text-white">Beranda</Link>
              <Link href="/about" className="text-lg font-semibold font-poppins text-white">Tentang Kami</Link>
              <Link href="/guide" className="text-lg font-semibold font-poppins text-white">Panduan</Link>
              <Link href="/layanan" className="text-lg font-semibold font-poppins text-white">Layanan Kami</Link>
            </div>
          </nav>
        )}

        {/* DESKTOOOOOOOOOOOOOOOOOPP */}
        {!loggedIn && (
          <div className="hidden lg:flex justify-center items-center">
            <div className="border border-white px-10 rounded-2xl mt-5 backdrop-blur-xl bg-darkb/30 shadow-xl">
              <nav className="py-2 space-x-8 flex items-center justify-center">
                <Link href="/" className={pathname === '/' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Beranda</Link>
                <Link href="/about" className={pathname === '/about' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Tentang Kami</Link>
                <Link href="/guide" className={pathname === '/guide' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Panduan</Link>
                <Link href="/layanan" className={pathname === '/layanan' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Layanan Kami</Link>
                <Link href="/signup" className={pathname === '/signup' ? 'border px-3 py-2 rounded-xl font-poppins  border-white text-darkb bg-white hover:text-darkb duration-200' : 'border px-3 py-2 rounded-xl font-poppins  border-white text-white hover:bg-white hover:text-darkb duration-200'}>Sign Up</Link>
                <Link href="/login" className="border px-3 py-2 rounded-xl font-poppins bg-primary border-primary hover:bg-sky-700 hover:border-sky-700 duration-200 text-white">Login</Link>
                {/* <Link href="/userProfile">
                <div className="border p-2 rounded-full border-white bg-white hover:bg-slate-300 hover:border-slate-300 duration-200">
                  <Image src={userIcon} alt="userIcon" className="w-5" />
                </div>
              </Link> */}
              </nav>
            </div>
          </div>
        )}

        {loggedIn && (
          <div className="hidden lg:flex justify-center items-center">
            <div className="border border-white px-10 rounded-2xl mt-5 backdrop-blur-xl bg-darkb/30 shadow-xl">
              <nav className="py-2 space-x-8 flex items-center justify-center">
                <Link href="/" className={pathname === '/' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Beranda</Link>
                <Link href="/about" className={pathname === '/about' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Tentang Kami</Link>
                <Link href="/guide" className={pathname === '/guide' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Panduan</Link>
                <Link href="/layanan" className={pathname === '/layanan' ? 'text-darkb bg-white border px-3 py-2 rounded-xl border-transparent font-poppins' : 'text-white hover:text-darkb  hover:bg-white duration-200 py-2 rounded-xl px-3 border-transparent font-poppins'}>Layanan Kami</Link>
                {/* <Link href="/signup" className={pathname === '/signup' ? 'border px-3 py-2 rounded-xl font-poppins  border-white text-darkb bg-white hover:text-darkb duration-200' : 'border px-3 py-2 rounded-xl font-poppins  border-white text-white hover:bg-white hover:text-darkb duration-200'}>Sign Up</Link>
              <Link href="/login" className="border px-3 py-2 rounded-xl font-poppins bg-primary border-primary hover:bg-sky-700 hover:border-sky-700 duration-200 text-white">Login</Link> */}
                <Link href="/userProfile">
                  <div className="border p-2 rounded-full border-white bg-white hover:bg-slate-300 hover:border-slate-300 duration-200">
                    <Image src={userIcon} alt="userIcon" className="w-5" />
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}