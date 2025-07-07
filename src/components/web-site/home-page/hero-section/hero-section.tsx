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
        {/* Content and Image */}
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-y-20 relative">
          {/* Content */}
          <div className="max-w-2xl grid gap-24">
            <div className=" grid gap-8 text-white">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold ">
                Welcome to <span className="text-[#003DA6]">Homelands</span>
              </h1>
              <span>
                We simplify banking so you can focus on what's most important to
                you: growing your business. Enjoy complete visibility of the
                money going into and out of your
              </span>
            </div>
            <div>
              <Link href="/" target="_blank">
                <Button
                  variant={ButtonVariants.PrimaryFilled}
                  className="w-max cursor-pointer"
                >
                  Online Banking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
