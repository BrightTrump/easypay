"use client";

import Image from "next/image";
import React from "react";

export default function StreamlineYourWork() {
  return (
    <div className="grid gap-10 [background:_radial-gradient(77.88%_71.91%_at_86.48%_84.34%,_#6D90B9_0%,_#9DA9BE_100%)] rounded-[18px] p-4 sm:p-8">
      <span className="relative w-full max-w-[450px] mx-auto aspect-[1/0.5]">
        <Image
          src={"/website-ui/streamline-your-work.png"}
          fill
          sizes="640px"
          alt="Illustration"
          className="mx-auto"
        />
      </span>

      <div className="grid gap-2.5 text-[#141414]">
        <h3 className="text-xl sm:text-2xl font-bold">
          Streamline your work, amplify your impact.{" "}
        </h3>
        <p className="sm:text-lg font-medium">
          Entobo combines relationship management, team collaboration, and
          service delivery into one smart, unified platform, so you can spend
          less time switching apps and more time driving results.
        </p>
      </div>
    </div>
  );
}
