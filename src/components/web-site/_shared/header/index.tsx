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
    <header className="py-5 layout-spacing z-20 sticky bg-blackgray top-0 left-0 w-full">
      <div className="container mx-auto grid grid-flow-col justify-between lg:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-16">
        {/* Logo */}
        <p className="text-3xl font-bold">
          Home<span className="text-[#003DA6]">lands</span>
        </p>
        {/* <LogoImage variant="black" className="w-32 mx-auto" /> */}

        {/* Navigation  */}
        <Navigation />

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
              variant={ButtonVariants.BlackOutlinedRounded}
            >
              Sign Out
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
