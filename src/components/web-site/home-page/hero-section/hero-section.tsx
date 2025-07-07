import React from "react";
import SectionImage from "./hero-background";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ButtonVariants } from "@/ui/button/types";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="py-10 sm:py-20 lg:py-40 grid relative layout-spacing"
    >
      {/* Background Image */}
      <SectionImage />
      <div className="relative grid container mx-auto">
        {/* Content */}
        <div className="max-md sm:max-w-2xl grid gap-24">
          <div className=" grid gap-8 text-white text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold ">
              Welcome to <span className="text-[#285ab1]">Homelands</span>
            </h1>
            <span>
              We simplify banking so you can focus on what&apos;s most important
              to you: growing your business. Enjoy complete visibility of the
              money going into and out of your
            </span>
          </div>

          <Link href="/login" target="_blank">
            <Button
              variant={ButtonVariants.BlackFilled}
              className="w-max cursor-pointer mx-auto sm:mx-0"
            >
              Online Banking
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
