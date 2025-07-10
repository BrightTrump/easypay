"use client";

import React from "react";
import { useCounter } from "@/components/hooks/counter.hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section4() {
  const { count, countRef } = useCounter(25, 5000);
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
        {/* Image Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          {/* Main Image */}
          <Image
            src="/ways-to-2.jpg"
            alt="About Us"
            fill
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="grid gap-6 items-start [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:text-center md:[&_h1]:text-left [&_p]:text-[#555555]">
          <h1 className="pb-5">Online Banking</h1>
          <p>
            Online Banking Complete control at your fingertips. Homelands's
            Online Banking completely changes the way you handle your finances.
            With safe access, real-time updates, and user-friendly features, you
            can bank from anywhere and at any time. Enhance your online banking
            experience with Homelands, where connectivity meets convenience.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
