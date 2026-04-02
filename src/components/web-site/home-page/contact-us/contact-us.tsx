"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function ContactUs() {
  return (
    <section className="py-20 bg-[#d3d1d1]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl mx-auto container overflow-hidden grid grid-flow-col border place-items-center border-black p-4 rounded-xl"
      >
        <div>
          <h3 className="sm:text-2xl">Have any question about us?</h3>
          <p className="text-[#4d4a4a]">Don&apos;t hesitate to contact us.</p>
        </div>
        <Link href={"/contact-us"}>
          <Button variant="primary">Contact Us</Button>
        </Link>
      </motion.div>
    </section>
  );
}
