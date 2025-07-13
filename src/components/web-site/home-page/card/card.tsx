"use client";

import { plans } from "@/constants.ts/home-page/card.json";
import { Icon } from "@/ui/icons";
import { motion } from "framer-motion";
import React from "react";

export default function Card() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="card"
      className="py-24 layout-spacing grid gap-10 sm:gap-20 h-full"
    >
      {/* Header */}
      <div className="md:max-w-2xl mx-auto grid place-items-center gap-4 text-center">
        <p className="text-[#555555]">Cards</p>
        <h3 className="font-bold text-3xl sm:text-3xl md:text-4xl leading-normal">
          See our plans
        </h3>
      </div>

      {/* Our Services Grid */}
      {/* Card Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-xl px-6 lg:px-20 overflow-hidden">
        {Object.entries(plans).map(([planKey, planData]) =>
          planData.map((plan, index) => (
            <div
              key={`${planKey}-${index}`}
              className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase">
                {plan.subTitle}
              </p>
              <ul className="space-y-3">
                {plan.desc.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <Icon type={item.icon} size={24} color="#252525" />
                    </span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </motion.section>
  );
}
