import React from "react";
import RegistrationForm from "@/components/auth/register/registration";
import Footer from "@/components/web-site/_shared/footer";
import Logo from "@/components/web-site/_shared/logo/Logo";
import Image from "next/image";

export default function Registration() {
  return (
    <div className="h-full">
      <div className="grid md:grid-cols-[auto_1fr]">
        <div className="relative hidden md:grid bg-[#FFF7E6] w-80 overflow-y-clip">
          {/* <Image
            src={"authentication-background-box.svg"}
            fill
            objectFit="cover"
            alt="Background Image"
          /> */}
          <div className=" grid grid-rows-[auto_1fr_auto] p-10 relative">
            {/* <Logo variant="black" className="w-28" /> */}
            <Logo />
            <div className="grid place-content-end relative">
              <span className="absolute w-[420px] left-0 -bottom-4">
                <Image
                  src={"/recovery-code.svg"}
                  width={500}
                  height={1500}
                  alt="Background Image"
                />
              </span>
            </div>

            <p className="italic">
              EasyPay ensures seamless transactions across multiple locations.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md px-5 md:px-10 mx-auto rounded-xl py-8 grid content-center gap-8">
          {/* <Logo className="w-28 mx-auto md:hidden" /> */}

          {/* Form */}
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
