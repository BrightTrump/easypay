"use client";
import React from "react";
import Link from "next/link";
import Navigation from "./navigation/navigation";
import { Button } from "@/ui/button";
import { ButtonVariants } from "@/ui/button/types";
export default function Header() {
  // const pathName = usePathname();

  return (
    <header className="py-5 layout-spacing z-20 sticky bg-white top-0 left-0 w-full">
      <div className="container mx-auto grid grid-flow-col justify-between lg:grid-cols-[1fr_auto] items-center gap-8">
        {/* Logo */}
        <p className="text-3xl font-bold">
          Easy<span className="text-[#003DA6]">Pay</span>
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
                variant={ButtonVariants.BlackOutlined}
              >
                Sign in
              </Button>
            </Link>
            <Link href={"/login"} className="grid">
              <Button
                className="whitespace-nowrap border border-[#141414] rounded-xl"
                variant={ButtonVariants.BlackFilled}
              >
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
