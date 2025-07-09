"use client";

import { OUR_SERVICES_SCHEMA } from "@/constants.ts/data.constants";
import { Icon } from "@/ui/icons";
import { motion } from "framer-motion";
import React from "react";
import BestServices from "./best-services";

export default function OurServices() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="services"
      className="py-10 sm:py-24 layout-spacing grid gap-10 sm:gap-20 h-full bg-[#f9f5f5]"
    >
      {/* Header */}
      <div className="md:max-w-2xl mx-auto grid place-items-center gap-4 text-center">
        <p className="text-[#555555]">Our Services</p>
        <h3 className="font-bold text-3xl sm:text-3xl md:text-4xl leading-normal">
          We Offer Best Financial Consultancy Services in Affordable Cost
        </h3>
      </div>

      {/* Our Services Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-xl px-6 lg:px-20 overflow-hidden">
        {OUR_SERVICES_SCHEMA.map((item, index) => (
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

      <BestServices />
    </motion.section>
  );
}
