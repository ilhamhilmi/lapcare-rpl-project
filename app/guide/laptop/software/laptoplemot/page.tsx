"use client"

import { useEffect } from "react";
import NavbarClient from "@/app/components/NavbarClient";
import FooterClient from "@/app/components/FooterClient";
import Image from "next/image";
import computer from "@/assets/guide/computer.svg";
import laptop from "@/assets/guide/laptop.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function laptopLemot() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div>
            <NavbarClient />

            <section className="bg-slate-200 pt-32">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center mb-5">
                        <h1 className="text-darkb font-poppins text-2xl 2xl:text-3xl font-semibold border-b pb-5 border-secondary">Panduan Software Laptop</h1>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <p className="text-darkb text-center text-4xl xl:text-5xl font-poppins">Laptop lemot saat dinyalakan</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 pt-16 pb-16 px-6">
                <div className="container mx-auto bg-slate-200 border border-secondary rounded-xl shadow-xl p-5">
                    <div>
                        <p className="font-poppins text-darkb text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, odio sapiente eveniet culpa illum harum. Temporibus voluptas eveniet ipsa exercitationem? Libero ea, voluptatum dolor laudantium, minima impedit totam corporis voluptas quos tempore cum facilis cupiditate animi provident aliquid nemo ipsum iste eius est vitae. Quo molestiae repellat sit eum alias? Amet veritatis, minima modi aliquid quia enim temporibus quod, consequuntur quos itaque provident dolores debitis distinctio? Alias fuga ex modi similique rerum repudiandae distinctio unde iste porro cumque veniam mollitia numquam in qui velit, sit neque, deleniti dolores commodi, architecto fugit ea voluptates eos! Facere, aliquid? Culpa quia rerum architecto praesentium asperiores facere doloremque voluptate ad eum distinctio amet sequi ex beatae, possimus cupiditate consequuntur alias, saepe impedit esse quos libero est eligendi soluta repellendus. Totam debitis maxime dolorem perferendis nobis assumenda error, aspernatur vero non nulla vitae illo beatae veritatis optio corporis magni nesciunt deserunt quasi ducimus quibusdam odio. Quas, sed obcaecati! Rerum veniam sint quisquam ratione nam ipsa velit? Eligendi ducimus earum nobis laudantium, repellat amet neque cumque debitis nisi, perferendis labore provident vitae illum, voluptatem delectus dignissimos blanditiis distinctio aspernatur ad. Vero doloribus, autem placeat, officia possimus nam soluta nostrum nemo dolor accusamus laborum natus itaque quidem dolore voluptates voluptatem numquam, inventore quasi rerum a nihil veritatis eum! Repellendus, distinctio doloremque eum cum exercitationem debitis culpa dolor perferendis harum labore, doloribus velit, provident nesciunt nam? Corporis aperiam earum quidem doloremque ducimus libero suscipit harum et sunt sapiente quis odio dolores veniam accusamus esse, voluptatem nobis modi quo.</p>
                    </div>
                </div>
            </section>

            <FooterClient />
        </div>
    );
}