"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorksItems = [
  {
    title: "Open An Account",
    description:
      "To become an account holder, you must first create an account by clicking on th signup button",
    steps: "1",
  },
  {
    title: "Verification",
    description:
      "Upon a successful registration, you will receive a mail which will require you to verify your Email",
    steps: "2",
  },
  {
    title: "Deposit",
    description: "Deposit some funds before applying on any FDR or DPS plans.",
    steps: "3",
  },
  {
    title: "Get Services",
    description:
      "You can now use any of our services as a registered account holder.",
    steps: "4",
  },
];

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-20 layout-spacing bg-gradient-to-br from-[#7d97cb] via-[#e4e8f1] to-[#0e59ae]"
    >
      <div className="grid gap-10 place-items-center px-6 lg:px-20">
        {/* Header */}
        <div className="grid gap-4 text-center">
          <p className="text-xl text-[#285ab1]">How It Works</p>
          <h3 className="font-bold text-2xl lg:text-4xl">
            It&apos;s Easy To Join With Us.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {HowItWorksItems.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid place-items-center gap-4 p-8"
            >
              <div className="text-[#285ab1] text-4xl rounded-full w-28 h-28 flex items-center justify-center p-4 bg-white shadow-md hover:bg-[#285ab1] hover:text-white">
                {card.steps}
              </div>
              <div className="grid gap-2 text-center">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="text-[#555555]">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
