"use client";

import { useState } from "react";
import Link from "next/link";
import NavbarClient from "../components/NavbarClient";

export default function SignUp() {
    return (
        <div>
            <NavbarClient />
            <section className="min-h-screen w-full flex items-center bg-gradient-to-t from-[#1d293d] via-[#23385e] to-[#3b82f6] relative pt-16">
                <div className="container mx-auto flex items-center justify-center px-4 xl:px-0">
                    <div className="w-full xl:w-1/2 bg-white/5 backdrop-blur-2xl border border-darkb shadow-2xl rounded-2xl flex flex-col items-center justify-center px-7 xl:px-10 py-10">
                        <h1 className="font-poppins text-3xl text-white font-semibold mb-8">Sign Up</h1>
                        <div className="flex flex-col w-full xl:w-2/3 mb-3">
                            {/* <label htmlFor="" className="font-poppins text-sm">Email</label> */}
                            <input type="email" className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full" placeholder="Email Address" />
                        </div>
                        <div className="flex flex-col w-full xl:w-2/3 mb-3">
                            {/* <label htmlFor="" className="font-poppins text-sm">Phone Number</label> */}
                            <input type="text" className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full" placeholder="Phone Number" />
                        </div>
                        <div className="flex flex-col w-full xl:w-2/3 mb-3">
                            {/* <label htmlFor="" className="font-poppins text-sm">Username</label> */}
                            <input type="text" className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full" placeholder="Username"/>
                        </div>
                        <div className="flex flex-col w-full xl:w-2/3 mb-3">
                            {/* <label htmlFor="" className="font-poppins text-sm">Password</label> */}
                            <input type="password" className="border focus:outline-none px-4 py-2 font-poppins border-white rounded-full" placeholder="Password"/>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <button className="border rounded-full px-6 py-2 font-poppins border-primary bg-primary text-white shadow-xl cursor-pointer">Buat Akun</button>
                            <p className="font-poppins text-sm">Sudah punya akun? <Link href="/login" className="font-semibold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};