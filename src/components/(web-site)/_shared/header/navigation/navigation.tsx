"use client";

import React from "react";
import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <>
      {/* <MobileNavigation /> */}

      <div className="hidden lg:grid grid-flow-col gap-5 w-max items-center">
        <NavigationItem url="/">Home</NavigationItem>
        <NavigationItem url="/about-us">About Us</NavigationItem>
      </div>
    </>
  );
}
