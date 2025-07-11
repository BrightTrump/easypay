import RegistrationForm from "@/components/auth/register/registration-form";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="relative hidden bg-[#F6FAFF] md:grid">
        <Image
          src={"authentication-background-box.svg"}
          fill
          objectFit="cover"
          alt="Background Image"
        />
        <div className=" grid grid-rows-[auto_1fr_auto] p-10 relative">
          {/* <Logo variant="black" className="w-28" /> */}

          <div className="grid place-content-center">
            <span className="relative">
              <Image
                src={"registration.svg"}
                width={500}
                height={500}
                alt="Background Image"
              />
            </span>
          </div>

          <p className="italic">
            Whether your team is remote, hybrid, or in-office, Entobo ensures
            seamless collaboration across multiple locations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md px-5 md:px-10 mx-auto rounded-xl py-8 grid content-center gap-8">
        {/* <Logo className="w-28 mx-auto md:hidden" /> */}

        {/* Form Description */}
        <div className="text-black text-center grid gap-2">
          <p className="text-lg font-bold">Your Details</p>
          <p className="font-medium text-sm text-[#697483]">
            Please provide your name and email address
          </p>
        </div>
        {/* Form */}
        <RegistrationForm />
      </div>
    </div>
  );
}
