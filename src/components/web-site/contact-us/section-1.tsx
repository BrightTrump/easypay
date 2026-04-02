"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Input, Inputs } from "@/components/ui";

export default function Section1() {
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto container grid md:max-w-4xl"
      >
        {/* Text Content */}

        <form className="grid gap-5">
          <Input type={Inputs.Text} name="name" placeholder="Name" required />
          <Input
            type={Inputs.Email}
            id="email"
            name="email"
            placeholder="Email"
            readonly
          />
          <Input
            type={Inputs.Text}
            id="tel"
            name="tel"
            placeholder="Phone Number"
            required
          />

          <Button type="submit" variant="primary" className="w-full mt-3">
            Send
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
