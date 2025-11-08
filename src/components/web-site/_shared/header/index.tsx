"use client";
import React from "react";
import Navigation from "./navigation/navigation";
import Logo from "../logo/Logo";
import MobileNavigation from "./navigation/mobile-navigation";
export default function Header() {
  return (
    <header className="px-6 md:px-20 py-5 sm:pb-12 layout-spacing sticky top-0 left-0 z-20 bg-white w-full">
      <div className="container mx-auto grid justify-between grid-cols-[1fr_auto] md:gap-8 items-center">
        <Logo />

        <div className="block md:hidden">
          <MobileNavigation />
        </div>

        <div className="hidden sm:block">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
