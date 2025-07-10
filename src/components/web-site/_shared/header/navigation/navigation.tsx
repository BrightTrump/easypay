"use client";

import React from "react";
import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <>
      {/* <MobileNavigation /> */}

      <div className="hidden lg:grid grid-flow-col gap-5 w-max items-center hover:text-[#285ab1]">
        <NavigationItem url="/">Home</NavigationItem>
        <NavigationItem url="/about-us">About Us</NavigationItem>
        <NavigationItem url="#services">Services</NavigationItem>
        <NavigationItem url="#card">Card</NavigationItem>
        <NavigationItem url="#card">Contact Us</NavigationItem>
      </div>
    </>
  );
}
