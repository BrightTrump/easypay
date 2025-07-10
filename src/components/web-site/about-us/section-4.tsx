"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section4() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="features"
      className="py-20 layout-spacing grid gap-10 sm:gap-20"
    >
      {/* Header */}
      <div className="mx-auto container">
        <div className="mx-auto grid place-items-center gap-4 text-center">
          <p className="text-[#555555]">Why Apply With Us?</p>
          <h3 className="text-lg max-w-lg md:max-w-2xl">
            We make the process simple and rewarding — helping you get the best
            financial solutions with ease.
          </h3>
        </div>

        {/* Why Apply With US */}
        <div className="grid gap-6 md:grid-cols-3 [&>div]:grid [&>div]:gap-4 p-8 [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:text-center md:[&_h1]:text-left [&_p]:text-[#555555]">
          <div>
            <h1>Multiple Loan Options</h1>
            <p>
              Choose from a wide range of flexible loan plans designed to suit
              your unique needs and financial goals.
            </p>
          </div>
          <div>
            <h1> Competitive Rates</h1>
            <p>
              Enjoy low interest rates and fair terms that help you save more
              and borrow smarter.
            </p>
          </div>
          <div>
            <h1>Safe & Secure</h1>
            <p>
              Your information and transactions are protected with the highest
              security standards for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
