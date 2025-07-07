"use client";

import React from "react";
import Image from "next/image";
import { Icons } from "@/ui/icons/types";
import { Icon } from "@/ui/icons";

const ServicesIcons = [
  {
    title: "Withdraw Funds",
    description:
      "Withdrawing money from your account is quick, secure, and easy. You can transfer funds to any linked bank account, mobile wallet, or card.",
    icon: Icons.Home,
  },
  {
    title: "Deposit Funds",
    description:
      "We have two deposit schemes for you, one is Deposit Pension Scheme and another one is the Fixed Deposit Receipt.",
    icon: Icons.Bag,
  },
  {
    title: "Fast Transfer",
    description:
      "Send money instantly and securely with one tap. Just select a recipient, enter an amount, and transfer securely. Quick, easy, and hassle-free.",
    icon: Icons.CreditCard,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-10 sm:py-20 layout-spacing">
      {/* Image as background */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/about-2.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />

        {/* Overlay content on the image */}
        <div className="absolute inset-0 grid md:grid-cols-2 items-center px-6 lg:px-20 z-10 text-white bg-black/50">
          <div className="grid gap-4">
            <p className="text-[#e0e0e0] text-xl">Services</p>
            <h3 className="font-bold text-2xl lg:text-4xl">
              We Make Your Life Comfortable With Our Services.
            </h3>
          </div>
        </div>
      </div>

      {/* Features Grid (resting on image) */}
      <div className="-mt-24 relative z-20 container mx-auto grid gap-6 md:grid-cols-3 px-4 lg:px-0">
        {ServicesIcons.map((card, index) => (
          <div
            key={index}
            className="grid place-items-center gap-4 p-8 bg-[#F7F8FA] rounded-xl shadow-md"
          >
            <div className="bg-[#285ab1] rounded-full p-4">
              <Icon type={card.icon} size={60} color="#FFFFFF" />
            </div>
            <div className="grid gap-5 text-center">
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="text-[#555555]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
