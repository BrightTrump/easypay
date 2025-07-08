"use client";

import React, { useEffect, useRef, useState } from "react";
import PricingCard from "./pricing-card";
import { Button, ButtonVariants } from "@/ui";
import { AnimatePresence, motion } from "framer-motion";
import pricingData from "@/data/mobile-pricing.json";
import Link from "next/link";
import { ENTOBO_BOOK_A_DEMO_LINK } from "@/constants/common.constant";

export default function PricingCards() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const current = elementRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <>
      <div
        ref={elementRef}
        className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-5"
      >
        <span className="hidden lg:grid"></span>
        {pricingData.plans.map((plan, index) => (
          <PricingCard key={index} data={plan} isMostPopular={index === 1} />
        ))}
      </div>

      {/* Component for when cards are no longer visible */}
      {!isVisible && (
        <AnimatePresence>
          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            className="bg-white hidden lg:grid fixed w-full top-0 left-0 z-20 py-5 layout-spacing overflow-hidden"
          >
            <div className="container mx-auto grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-5">
              <h2 className="text-4xl font-bold">Pricing Plans</h2>

              {/* Starter */}
              <div className="grid grid-rows-[1fr_auto] gap-5 px-2.5">
                <p className="font-bold text-lg xl:text-xl">Starter</p>
                <Link
                  href={ENTOBO_BOOK_A_DEMO_LINK}
                  target="_blank"
                  className="grid"
                >
                  <Button variant={ButtonVariants.BlackOutlinedRounded}>
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Professional */}
              <div className="grid grid-rows-[1fr_auto] gap-5 px-2.5">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg xl:text-xl">Professional</p>
                  <span className="text-white text-xs font-medium p-1 rounded-sm bg-[#C837AB]">
                    Most Popular
                  </span>{" "}
                </div>
                <Link
                  href={ENTOBO_BOOK_A_DEMO_LINK}
                  target="_blank"
                  className="grid"
                >
                  <span className="rounded-xl p-[1px] bg-[linear-gradient(278.64deg,_#FFC0CB_16.15%,_#FE8AFE_43.13%,_#7070CA_63.49%,_#EEAACC_83.85%)] grid">
                    <Button variant={ButtonVariants.BlackFilledRounded}>
                      Contact Sales
                    </Button>
                  </span>
                </Link>
              </div>

              {/* Starter */}
              <div className="grid grid-rows-[1fr_auto] gap-5 px-2.5">
                <p className="font-bold text-lg xl:text-xl">Enterprise</p>
                <Link
                  href={ENTOBO_BOOK_A_DEMO_LINK}
                  target="_blank"
                  className="grid"
                >
                  <Button variant={ButtonVariants.BlackOutlinedRounded}>
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
