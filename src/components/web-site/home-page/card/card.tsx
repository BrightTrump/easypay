"use client";

import { motion } from "framer-motion";
import React from "react";
import { plans } from "./card.json";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export default function Card() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="card"
      className="py-10 sm:py-24 layout-spacing grid gap-10 sm:gap-20 h-full"
    >
      <Icon type={Icons.Check} size={60} color="#252525" />
      {/* Header */}
      <div className="md:max-w-2xl mx-auto grid place-items-center gap-4 text-center">
        <p className="text-[#555555]">Card</p>
        <h3 className="font-bold text-3xl sm:text-3xl md:text-4xl leading-normal">
          Our Card Ratings
        </h3>
      </div>

      {/* Our Services Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-xl px-6 lg:px-20 overflow-hidden">
        {Object.entries(plans).map(([planKey, planData]) =>
          planData.map((plan, index) => (
            <div
              key={`${planKey}-${index}`}
              className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-1">
                {plan.title}
              </h3>
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase">
                {plan.subTitle}
              </p>
              <ul className="space-y-3">
                {plan.desc.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Icon type={item.icon} size={60} color="#252525" />
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
