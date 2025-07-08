"use client";

import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { motion } from "framer-motion";
import React from "react";

const features = [
  { label: "Mortgage", icon: Icons.Home },
  { label: "Business", icon: Icons.Bag },
  { label: "CreditCards", icon: Icons.CreditCard },
  { label: "Savings", icon: Icons.Savings },
];

export default function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 sm:py-20 layout-spacing grid gap-10 sm:gap-20"
    >
      {/* Header */}
      <div className="mx-auto grid place-items-center gap-4 text-center">
        <p className="text-[#555555]">Great Offer for Great Experience</p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl">
          Choose What&apos;s Right for You
        </h3>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 bg-white rounded-xl divide-y sm:divide-y-0 divide-black/10 overflow-hidden">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid place-items-center gap-2 px-4 py-6 relative"
          >
            <Icon type={feature.icon} size={60} color="#285ab1" />
            <h2 className="text-2xl font-semibold text-center">
              {feature.label}
            </h2>

            {/* Vertical Divider - hide for last item */}
            {index < features.length - 1 && (
              <div className="absolute right-0 top-2 -translate-y-1/2 h-64 w-px bg-black/20" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
