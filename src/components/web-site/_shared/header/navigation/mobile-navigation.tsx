import { Button, ButtonVariants, Icon, Icons } from "@/ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationItem from "./navigation-item";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Logo from "../../logo/Logo";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    initial: () => ({
      height: 0,
      opacity: 0,
    }),
    animate: {
      height: "100%",
      opacity: 1,
    },
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <button className="lg:hidden cursor-pointer" onClick={handleToggle}>
        <Icon type={Icons.Hamburger} size={32} color="#141414" />
      </button>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white w-full h-[100svh] grid py-5 overflow-hidden"
          >
            <div className="grid gap-8 content-start overflow-hidden">
              {/* Logo and Close button */}
              <div className="px-5">
                <div className="container mx-auto grid grid-flow-col items-center justify-between">
                  <Logo />

                  <button onClick={handleToggle} className="cursor-pointer">
                    <Icon type={Icons.Close} size={32} color="#141414" />
                  </button>
                </div>
              </div>

              {/* Navigations */}
              <div className="grid gap-8 overflow-y-scroll custom-scroll-bar">
                <div className="grid gap-8 px-0 sm:px-10">
                  {/* Navigation  */}
                  <NavigationItem url="/">Home</NavigationItem>
                  <NavigationItem url="/about-us">About Us</NavigationItem>
                  <NavigationItem url="#services">Services</NavigationItem>
                  <NavigationItem url="#card">Card</NavigationItem>
                  <NavigationItem url="contact-us">Contact Us</NavigationItem>
                  <NavigationItem url="/ways-to-bank">
                    Ways to Bank
                  </NavigationItem>
                </div>
                {/* Call to Actions */}
                <div className="grid grid-cols-2 gap-3 [&_Button]:cursor-pointer px-5 sm:px-8">
                  <Link href={"/login"} className="grid">
                    <Button
                      variant={ButtonVariants.BlackOutlined}
                      className="whitespace-nowrap border border-[#141414] rounded-xl"
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
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
