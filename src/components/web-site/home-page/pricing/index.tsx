import React from "react";
import PricingCards from "./pricing-cards";
import pricingData from "@/data/desktop-pricing.json";
import Features from "./features";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="pt-10 sm:pt-20 pb-20 sm:pb-40 grid gap-16 sm:gap-28 relative layout-spacing bg-no-repeat bg-cover bg-center">
      <span className="absolute w-full aspect-[1/0.5]">
        <Image
          src={"/website-ui/about-us-hero-section.png"}
          fill
          priority
          alt="Background Image"
        />
        <span className="bg-white inset-0 absolute bg-opacity-40"></span>
      </span>
      <div className="grid gap-16 sm:gap-28 container content-start mx-auto relative">
        <div className="grid gap-2.5 w-full max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Pricing Plans</h1>
          <p className="text-[#555555]">
            Entobo is a next-generation platform built to help businesses manage
            relationships, collaborate seamlessly, and get work done, all in one
            place.
          </p>
        </div>

        {/* Pricing */}
        <PricingCards />
      </div>

      <div className="container mx-auto relative">
        <div className="hidden lg:grid gap-10">
          {pricingData.categories.map((category, index) => (
            <Features
              key={index}
              category={category}
              defaultCollaspedState={index > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
