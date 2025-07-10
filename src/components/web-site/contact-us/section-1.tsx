"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input, Inputs } from "@/ui";

export default function Section1() {
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="inset-0 px-6 lg:px-20 z-10"
      >
        {/* Text Content */}
        <div className="grid gap-4">
          <div className="grid grid-cols-3 items-center">
            <Input
              type={Inputs.Text}
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <Input
              type={Inputs.Email}
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <Input
              type={Inputs.Number}
              name="phone-number"
              id="phone-number"
              placeholder="PhoneNumber"
            />
          </div>
          <Input
            type={Inputs.TextArea}
            name="message"
            id="message"
            placeholder="Leave a message"
          />
        </div>
      </motion.div>
    </section>
  );
}
