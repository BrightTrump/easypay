"use client";
import React from "react";
export default function Header() {
  const pathName = usePathname();

  return (
    <header className="py-5 layout-spacing z-20 sticky bg-white top-0 left-0 w-full">
      <div className="container mx-auto grid grid-flow-col justify-between lg:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-16">
        {/* Logo */}
        <Logo variant="black" className="w-32 mx-auto" />

        {/* Navigation  */}
        <Navigation />

        <div className="hidden lg:grid grid-cols-2 gap-3">
          <Link href={"/login"} className="grid">
            <Button
              className="whitespace-nowrap border border-[#141414] rounded-xl"
              variant={ButtonVariants.BlackOutlinedRounded}
            >
              Sign in
            </Button>
          </Link>
          <Link
            href={ENTOBO_BOOK_A_DEMO_LINK}
            target="_blank"
            className="grid whitespace-nowrap"
          >
            <Button variant={ButtonVariants.BlackFilledRounded}>
              Book a demo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
