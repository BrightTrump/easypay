"use client";

import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { motion } from "framer-motion";
import React from "react";

const ourServices = [
  {
    label: "Business Advising",
    icon: Icons.User,
    description:
      "Empower your business with expert advice and strategic insights to drive growth and success.",
  },
  {
    label: "Finacial Planning",
    icon: Icons.Bag,
    description:
      "Plan your financial future with precision and confidence, tailored to your unique goals and needs.",
  },
  {
    label: "Savings",
    icon: Icons.Savings,
    description:
      "Maximize your wealth with smart savings strategies and diverse investment opportunities.",
  },
  {
    label: "Tax Consultancy",
    icon: Icons.Billing,
    description:
      "Navigate the complexities of tax regulations with our comprehensive and personalized tax consultancy services.",
  },
  {
    label: "Risk Management",
    icon: Icons.DangerCircle,
    description:
      "Mitigate risks and protect your assets with our robust risk management solutions.",
  },
  {
    label: "Trade & Stock",
    icon: Icons.UserGroup,
    description:
      "Enhance your trading prowess and stock portfolio with cutting-edge tools and expert guidance.",
  },
];

export default function Card() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 sm:py-24 layout-spacing grid gap-10 sm:gap-20 h-full bg-[#f9f5f5]"
    >
      {/* Header */}
      <div className="md:max-w-2xl mx-auto grid place-items-center gap-4 text-center ">
        <p className="text-[#555555]">Card</p>
        <h3 className="font-bold text-3xl sm:text-3xl md:text-4xl leading-normal">
          Our Card Ratings
        </h3>
      </div>

      {/* Our Services Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-xl overflow-hidden">
        {ourServices.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid place-items-center gap-5 p-4 bg-white [&>div]:grid [&>div]:gap-4 [&>div]:text-center "
          >
            <Icon type={item.icon} size={80} color="#285ab1" />
            <div>
              <h2 className="text-2xl font-semibold">{item.label}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
