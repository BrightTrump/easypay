"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="inset-0 grid gap-10 md:grid-cols-2 items-center px-6 lg:px-20 z-10"
      >
        {/* Text Content */}
        <div className="grid gap-6 items-start [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:text-center md:[&_h1]:text-left [&_p]:text-[#555555]">
          <h1 className="pb-5">Ways To Bank</h1>
          <p>
            EasyPay offers a wide range of flexible banking options designed to
            help you diversify and manage your finances with ease. Whether you
            prefer mobile banking on the go, secure internet services from the
            comfort of your home, or a combination of both — EasyPay gives you
            the freedom to choose what works best for your lifestyle. We
            prioritize your convenience, giving you control, accessibility, and
            confidence in every transaction.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          {/* Main Image */}
          <Image
            src="/ways-to-bank.jpg"
            alt="About Us"
            fill
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
