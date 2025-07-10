"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full layout-spacing">
      {/* Image as background */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/about-2.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex gap-1 justify-center items-center text-3xl font-bold">
          {" "}
          <p className="text-white">Ways to Bank</p>{" "}
          <span className="w-[2px] h-9 bg-black" />
          <Link href="/" className="text-[#285ab1]">
            Home{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
