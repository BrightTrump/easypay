"use client";
import React from "react";
import Navigation from "./navigation/navigation";
import Logo from "../logo/Logo";
import MobileNavigation from "./navigation/mobile-navigation";
export default function Header() {
  return (
    <header className="px-6 md:px-20 grid justify-between grid-cols-[1fr_auto] md:gap-8 items-center py-5 sm:pb-12 layout-spacing z-20 sticky bg-white top-0 left-0 w-full">
      <Logo />

      <div className="block md:hidden">
        <MobileNavigation />
      </div>

      <div className="hidden sm:block">
        <Navigation />
      </div>
    </header>
  );
}
