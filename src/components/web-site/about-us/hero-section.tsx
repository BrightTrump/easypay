"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full layout-spacing">
      {/* Image as background */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/about-2.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />

        {/* Overlay content on the image */}
        {/* <div className="absolute inset-0 grid md:grid-cols-2 items-center px-6 lg:px-20 z-10 text-white bg-black/50">
          <div className="grid gap-4">
            <p className="text-[#e0e0e0] text-xl">Services</p>
            <h3 className="font-bold text-2xl lg:text-4xl">
              We Make Your Life Comfortable With Our Services.
            </h3>
          </div>
        </div> */}
        <div className="absolute inset-0 flex gap-1 justify-center items-center text-3xl font-bold">
          {" "}
          <p className="text-white">About Us</p>{" "}
          <span className="w-[2px] h-9 bg-black" />
          <Link href="/" className="text-[#285ab1]">
            Home{" "}
          </Link>
        </div>
      </div>

      {/* Best Services Grid (resting on image) */}
      <div className="-mt-16 z-10 relative conatainer mx-auto px-6 lg:px-20 pb-8 grid gap-8 bg-[#FFFFFF] border border-[#252525] rounded-xl">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 [&>div]:grid [&>div]:gap-4 p-8 [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:text-center md:[&_h1]:text-left [&_p]:text-[#555555]">
          <div>
            <h1>Who We Are?</h1>
            <p>
              Founded by a team of seasoned financial professionals, EasyPay
              brings together years of experience and a passion for excellence.
              Our diverse expertise spans business advising, financial planning,
              savings and investments, tax consultancy, risk management, and
              trade & stock. We are committed to delivering personalized
              services that cater to your unique needs and aspirations.
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
            Our mission is to provide innovative financial solutions and expert
            guidance that drive success and prosperity.
          </p>
        </div>
      </div>
    </section>
  );
}
