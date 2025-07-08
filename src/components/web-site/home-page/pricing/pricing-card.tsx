import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Image from "next/image";
import React from "react";
import pricingData from "@/data/mobile-pricing.json";
import Link from "next/link";
import { ENTOBO_BOOK_A_DEMO_LINK } from "@/constants/common.constant";

interface PricingCardProps {
  isMostPopular?: boolean;
  data: (typeof pricingData)["plans"][0];
}

export default function PricingCard({ data, isMostPopular }: PricingCardProps) {
  return (
    <div className="relative grid">
      {isMostPopular && (
        <span className="text-white font-medium p-2.5 rounded-t-xl bg-[#C837AB] absolute -top-9 right-3">
          Most Popular
        </span>
      )}
      <div
        className={`grid rounded-xl relative p-[1px] ${
          isMostPopular &&
          "bg-[linear-gradient(278.64deg,_#FFC0CB_16.15%,_#FE8AFE_43.13%,_#7070CA_63.49%,_#EEAACC_83.85%)]"
        }`}
      >
        <div className="relative grid rounded-xl overflow-hidden bg-white">
          {isMostPopular && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={"/website-ui/grid-dot.svg"}
                fill
                objectFit="cover"
                objectPosition="center"
                priority
                alt="Background Grid"
              />
            </div>
          )}

          <div className="relative grid grid-rows-[auto_1fr_auto] content-start gap-5 px-2.5 py-8 [background:_radial-gradient(120.82%_60.72%_at_90%_15%,_rgba(255,_255,_255,_0)_0%,_#FFFFFF_55.03%)]">
            <h3 className="text-2xl font-bold">{data?.name}</h3>
            <div className="grid content-start gap-10">
              <p className="font-medium text-[#555555] text-lg lg:text-base">
                {data?.tagline}
              </p>

              <div className="grid lg:hidden gap-5">
                <h4 className="text-lg font-bold">
                  {pricingData.plans.indexOf(data) > 0
                    ? `Everything in ${data?.inherits} and:`
                    : "Key Features Include:"}
                </h4>

                {/* Features */}
                <div className="grid gap-2.5">
                  {data?.features.map((feature, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[auto_1fr] items-center gap-2.5"
                    >
                      <span className="bg-black grid place-content-center rounded-full w-5 h-5">
                        <Icon type={Icons.Check} size={18} color="#FFFFFF" />
                      </span>
                      <p className="font-medium">{feature?.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={ENTOBO_BOOK_A_DEMO_LINK}
              target="_blank"
              className="grid"
            >
              <Button
                variant={
                  isMostPopular
                    ? ButtonVariants.BlackFilledRounded
                    : ButtonVariants.BlackOutlinedRounded
                }
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
