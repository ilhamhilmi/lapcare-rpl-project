"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginTeknisi() {
    return (
        <section className="min-h-screen w-full flex items-center bg-darkb pt-16">
            <div className="container mx-auto flex items-center justify-center px-4">
                <div className="w-full xl:w-1/2 bg-white backdrop-blur-2xl shadow-2xl rounded-2xl flex flex-col items-center px-7 py-10 border border-secondary">
                    <h1 className="text-3xl text-darkb mb-8 font-poppins font-semibold">
                        Teknisi Login
                    </h1>
                    
                    <form
                        
                        className="flex flex-col w-full items-center"
                        autoComplete="off"
                    >
                        <div className="w-full xl:w-2/3 mb-3">
                            <input
                                name="username"
                                type="text"
                                className="border px-4 py-2 rounded-full w-full text-darkb border-darkb focus:outline-none"
                                placeholder="Username"
                            />
                        </div>

                        <div className="w-full xl:w-2/3 mb-3">
                            <input
                                name="password"
                                type="password"
                                className="border px-4 py-2 rounded-full w-full text-darkb border-darkb focus:outline-none"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="border rounded-full px-6 py-2 bg-primary border-primary hover:bg-sky-700 hover:border-sky-700 shadow-md hover:shadow-2xl cursor-pointer duration-300 text-white font-poppins mb-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}