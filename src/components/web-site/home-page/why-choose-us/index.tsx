"use client";

import React from "react";
import { Icons } from "@/ui/icons/types";

// const ServicesIcons = [
//   {
//     title: "Withdraw Funds",
//     description:
//       "Withdrawing money from your account is quick, secure, and easy. You can transfer funds to any linked bank account, mobile wallet, or card.",
//     icon: Icons.Home,
//   },
//   {
//     title: "Deposit Funds",
//     description:
//       "We have two deposit schemes for you, one is Deposit Pension Scheme and another one is the Fixed Deposit Receipt.",
//     icon: Icons.Bag,
//   },
//   {
//     title: "Fast Transfer",
//     description:
//       "Send money instantly and securely with one tap. Just select a recipient, enter an amount, and transfer securely. Quick, easy, and hassle-free.",
//     icon: Icons.CreditCard,
//   },
// ];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-10 sm:py-20 layout-spacing">
      {/* Image as background */}
      <div className="inset-0 grid md:grid-cols-2 items-center px-6 lg:px-20 z-10 ">
        <div className="grid gap-16">
          <div className="grid gap-4">
            <p className="text-[#555555] text-xl">Why Choose Us</p>
            <h3 className="font-bold text-2xl lg:text-4xl">
              We Are Giving You the Best Service.
            </h3>
          </div>

          <div className="grid gap-20 [&_span]:rounded-full [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:p-4 [&_span]:border [&_span]:border-[#285ab1] [&_p]:text-[#939191]">
            <div className="flex gap-5">
              <span className="">1</span>
              <div>
                <h3>Lowest Transaction Fee</h3>
                <p>
                  Internal, Domestic, International, and Fast Transfers are done
                  at a cheaper fee.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>2</span>
              <div>
                <h3>Secure Service</h3>
                <p>
                  End-to-End-Encryption, Session Timeout and Auto-Logout,
                  Real-Time Alerts, and Secure Data Storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid (resting on image) */}
      {/* <div className="-mt-24 container mx-auto grid gap-6 md:grid-cols-3 px-4 lg:px-0">
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
      </div> */}
    </section>
  );
}
