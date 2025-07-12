import { Icon, Icons } from "@/ui";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import Logo from "../../logo/Logo";
import NavigationItem from "./navigation-item";

export default function Navigation() {
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

  return (
    <>
      <button type="button">
        <Icon type={Icons.Hamburger} size={32} color="#141414" />
      </button>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white w-full h-[100svh] grid py-5 overflow-hidden"
          >
            <div className="grid gap-16 content-start overflow-hidden">
              {/* Logo and Close button */}
              <div className="px-5">
                <div className="container mx-auto grid grid-flow-col items-center justify-between">
                  <Logo />

                  <button onClick={handleToggle}>
                    <Icon type={Icons.Close} size={32} color="#141414" />
                  </button>
                </div>
              </div>

              {/* Navigations */}
              <div className="overflow-y-auto custom-scroll-bar px-5">
                <div className="hidden lg:grid grid-flow-col gap-5 w-max items-center hover:text-[#285ab1]">
                  <NavigationItem url="/">Home</NavigationItem>
                  <NavigationItem url="/about-us">About Us</NavigationItem>
                  <NavigationItem url="#services">Services</NavigationItem>
                  <NavigationItem url="#card">Card</NavigationItem>
                  <NavigationItem url="contact-us">Contact Us</NavigationItem>
                  <NavigationItem url="/ways-to-bank">
                    Ways to Bank
                  </NavigationItem>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
