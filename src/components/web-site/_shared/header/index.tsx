"use client";
import React from "react";
import LogoImage from "../logo/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navigation from "./navigation/navigation";
import { Button } from "@/ui/button";
import { ButtonVariants } from "@/ui/button/types";
export default function Header() {
  const pathName = usePathname();

  return (
    <header className="py-5 layout-spacing z-20 sticky bg-white top-0 left-0 w-full">
      <div className="container mx-auto grid grid-flow-col justify-between lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-16">
        {/* Logo */}
        <p className="text-3xl font-bold">
          Home<span className="text-[#003DA6]">lands</span>
        </p>
        {/* <LogoImage variant="black" className="w-32 mx-auto" /> */}

        <div className="grid grid-flow-col items-center gap-5">
          <div>
            {/* Navigation  */}
            <Navigation />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-3 [&_Button]:cursor-pointer">
            <Link href={"/login"} className="grid">
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.BlackOutlinedRounded}
              >
                Sign in
              </Button>
            </Link>
            <Link href={"/login"} className="grid">
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.BlackFilledRounded}
              >
                Sign Out
              </Button>
              {/* Here */}
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.PrimaryFilled}
              >
                PF
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.PrimaryFilledRounded}
              >
                PFR
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.PrimaryOutlined}
              >
                PO
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.PrimaryOutlinedRounded}
              >
                POR
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.DangerFilled}
              >
                DF
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.DangerOutlined}
              >
                DO
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.Default}
              >
                Default
              </Button>
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.WhiteFilledRounded}
              >
                WF
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
