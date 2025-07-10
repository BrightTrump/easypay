"use client";

import React from "react";
import { useCounter } from "@/components/hooks/counter.hooks";
import { Icon } from "@/ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_US_CARD_SCHEMA } from "@/constants.ts/data.constants";

export default function Section() {
  const { count, countRef } = useCounter(25, 5000);
  return (
    <section className="relative w-full py-20 layout-spacing">
      {/* Content & Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="inset-0 grid gap-10 md:grid-cols-2 items-center px-6 lg:px-20 z-10"
      >
        {/* Image Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          {/* Main Image */}
          <Image
            src="/slider-1.jpg"
            alt="About Us"
            fill
            className="object-cover w-full h-full rounded-xl"
          />

          {/* Overlapping Image */}
          <div
            ref={countRef}
            className="absolute -top-2 right-0 z-10 text-[#285ab1] text-center grid gap-5 place-items-center font-bold bg-white rounded-xl p-4 sm:px-4 sm:py-8 border border-[#555555] shadow-sm"
          >
            <h1 className="text-3xl sm:text-6xl">{count}</h1>
            <p className="text-2xl sm:text-3xl max-w-28 sm:max-w-44">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="-mt-16 z-10 relative conatainer mx-auto px-6 lg:px-20 pb-8 grid gap-8 bg-[#FFFFFF] border border-[#252525] rounded-xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 [&>div]:grid [&>div]:gap-4 p-8 [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:text-center md:[&_h1]:text-left [&_p]:text-[#555555]">
            <div>
              <h1>Ways To Bank</h1>
              <p>
                EasyPay offers a variety of banking choices to help you
                diversify. Choose the method that best fits your lifestyle,
                whether it's mobile banking or internet services. Your
                convenience and choice.
              </p>
            </div>
            <div>
              <h1>What We Offer?</h1>
              <p>
                At EasyPay, we are dedicated to building long-lasting
                relationships with our clients based on trust, transparency, and
                mutual respect. We take the time to understand your financial
                situation and goals, allowing us to create customized solutions
                that truly make a difference. Our team stays at the forefront of
                financial innovation, continuously adapting to the ever-changing
                landscape to provide you with the best possible service.
              </p>
            </div>
          </div>

          <div className="grid grid-4 text-center">
            <h1 className="text-4xl font-bold">Our Vision & Mission</h1>
            <p>
              Our mission is to provide innovative financial solutions and
              expert guidance that drive success and prosperity.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
