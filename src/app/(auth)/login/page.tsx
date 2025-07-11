import LoginForm from "@/components/auth/login/login-form";
import { Icon, Icons } from "@/ui";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="relative hidden bg-[#F6FAFF] md:grid">
        {/* <Image
          src={"authentication-background-box.svg"}
          fill
          objectFit="cover"
          alt="Background Image"
        /> */}
        <div className=" grid grid-rows-[auto_1fr_auto] p-10 relative">
          {/* <Logo variant="black" className="w-28" /> */}

          <div className="grid place-content-center">
            <span className="relative">
              <Image
                src={"login.svg"}
                width={500}
                height={500}
                alt="Background Image"
              />
            </span>
          </div>

          <p className="italic md:max-w-2xl">
            With Entobo, you can centralize your communications in one place.
            Manage customer emails, calls, and chats directly from a single,
            easy-to-use platform.
          </p>
        </div>
      </div>

      <div className="w-full mx-auto relative max-w-md px-5 md:px-10 rounded-xl py-8 grid content-center gap-8">
        {/* <Logo variant="black" className="w-28 mx-auto md:hidden" /> */}

        {/* Form Description */}
        <div className="text-black text-center grid gap-2">
          <p className="text-2xl font-bold">Login to your account</p>
          <p className="font-medium text-[#697483]">
            Welcome back! Please enter your login details
          </p>
        </div>

        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
}
