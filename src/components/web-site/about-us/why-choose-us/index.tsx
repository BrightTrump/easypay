"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="inset-0 grid gap-5 md:grid-cols-2 items-center px-6 lg:px-20 z-10"
      >
        {/* Text Content */}
        <div className="max-w-60 sm:max-w-xl grid gap-16">
          <div className="grid gap-4 text-center sm:text-left">
            <p className="text-[#555555] text-xl">Why Choose Us</p>
            <h3 className="font-bold text-2xl lg:text-4xl">
              We Are Giving You the Best Service.
            </h3>
          </div>

          <div className="grid gap-12 [&>div]:w- [&_span]:rounded-full [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:p-4 [&_span]:border [&_span]:border-[#285ab1] [&_p]:text-[#939191]">
            <div className="flex gap-5">
              <span>1</span>
              <div>
                <h3>Lowest Transaction Fee</h3>
                <p>
                  Internal, Domestic, International, and Fast Transfers are done
                  at a cheaper fee.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>2</span>
              <div>
                <h3>Secure Service</h3>
                <p>
                  End-to-End-Encryption, Session Timeout and Auto-Logout,
                  Real-Time Alerts, and Secure Data Storage.
                </p>
              </div>
            </div>
          </div>
        </div>

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
      </motion.div>
    </section>
  );
}
