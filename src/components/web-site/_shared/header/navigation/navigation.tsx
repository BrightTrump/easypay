"use client";

import React from "react";
import NavigationItem from "./navigation-item";
import Link from "next/link";
import { Button, ButtonVariants } from "@/ui";

export default function Navigation() {
  return (
    <div className="hidden md:grid md:grid-flow-col md:gap-4 md:items-center">
      <div className="sm:relative sm:top-10 sm:right-12 md:right-0 lg:top-0 md:grid md:grid-flow-col md:gap-5 md:w-max md:items-center md:hover:text-[#285ab1]">
        <NavigationItem url="/">Home</NavigationItem>
        <NavigationItem url="/about-us">About Us</NavigationItem>
        <NavigationItem url="#services">Services</NavigationItem>
        <NavigationItem url="#card">Card</NavigationItem>
        <NavigationItem url="contact-us">Contact Us</NavigationItem>
        <NavigationItem url="/ways-to-bank">Ways to Bank</NavigationItem>
      </div>

      {/* Call to Actions */}
      <div className=" md:grid md:grid-cols-2 md:gap-3 [&_Button]:cursor-pointer sm:relative md:right-24 lg:right-0">
        <Link href={"/login"} className="grid">
          <Button
            variant={ButtonVariants.BlackOutlined}
            className="sm:hidden lg:block whitespace-nowrap border border-[#141414] rounded-xl"
          >
            Sign in
          </Button>
        </Link>
        <Link href={"#"} className="grid">
          <Button
            variant={ButtonVariants.BlackFilled}
            className="whitespace-nowrap border border-[#141414] rounded-xl"
          >
            Book a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
