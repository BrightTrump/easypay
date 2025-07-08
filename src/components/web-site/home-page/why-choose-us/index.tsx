"use client";

import Image from "next/image";
import React from "react";
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

        {/* Images */}
        <div className="relative z-20 w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/about-3.png"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="relative top-4 right-4 z-20">
            <Image
              src="/about-4.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
