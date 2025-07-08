"use client";

import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const aboutUsCards = [
  { title: "Retirement", icon: Icons.Check },
  { title: "International Payments", icon: Icons.Check },
  { title: "Funding an Education", icon: Icons.Check },
  { title: "Major Purchases", icon: Icons.Check },
  { title: "Premium Support", icon: Icons.Check },
  { title: "Direct Debit", icon: Icons.Check },
];
export default function AboutUs() {
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="inset-0 grid gap-10 md:grid-cols-2 items-center px-6 lg:px-20 z-10"
      >
        {/* Image Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          {/* Main Image */}
          <Image
            src="/about-3.png"
            alt="About Us"
            fill
            className="object-cover w-full h-full rounded-xl"
          />

          {/* Overlapping Image */}
          <Image
            src="/about-4.png"
            alt="About Icon"
            width={300}
            height={400}
            className="absolute  bottom-[-15] left-0 "
          />
        </div>

        {/* Text Content */}
        <div className="grid gap-8">
          <div className="grid gap-4">
            <p className="text-[#285ab1] text-xl">About Us</p>
            <h3 className="font-bold text-2xl lg:text-4xl">
              Invest In Your Future.
            </h3>
          </div>

          <div className="grid gap-12 [&_span]:rounded-full [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:p-4 [&_span]:border [&_span]:border-[#285ab1] ">
            <div>
              <p className="text-[#939191]">
                We&apos;re here to help you examine investment and retirement
                options as you work toward your goals, regardless of where you
                are in the planning process.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              {aboutUsCards.map((items, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center bg-[#c3c0c0] text-white rounded-xl p-2 bg-gradient-to-r from-[#c3c0c0] to-[#285ab1]
                 bg-[length:200%_100%] bg-left
                 transition-all duration-500 ease-in-out
                 hover:bg-right"
                >
                  <Icon type={items.icon} size={20} color="#285ab1" />
                  <div>{items.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
