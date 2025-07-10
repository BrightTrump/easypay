import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ButtonVariants } from "@/ui/button/types";

export default function HeroSection() {
  return (
    <section className="py-10 sm:py-20 lg:py-40 grid place-items-center relative layout-spacing bg-[url('/about-2.jpg')] bg-cover bg-center">
      <div className="w-full sm:max-w-2xl grid gap-24 px-6 lg:px-20 text-white text-center">
        <div className="flex gap-1 justify-center items-center text-3xl font-bold">
          <Link href="/" className="text-[#003DA6]">
            Home
          </Link>
          <span className="w-[2px] h-9 bg-black" />
          <p>About Us</p>
        </div>
      </div>
    </section>
  );
}
