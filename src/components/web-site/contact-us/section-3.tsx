"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section3() {
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
          <h1 className="pb-5">EasyPay ATM Services</h1>
          <p>
            EasyPay&apos;s broad ATM network allows you to access your funds at
            any time and from any location. Our ATM services are secure and
            convenient, allowing for quick cash withdrawals, balance inquiries,
            and other transactions. Experience banking on your own terms with
            EasyPay ATMs, where convenience meets dependability.
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
