"use client";

import Image from "next/image";
import React from "react";

export default function StayInFlow() {
  return (
    <div className="grid gap-10 [background:_linear-gradient(319.41deg,_#5D9494_-4.3%,_#5191EA_94.69%)] rounded-[18px] p-4 sm:p-8">
      <span className="relative w-full max-w-[400px] mx-auto aspect-[1/0.7]">
        <Image
          src={"/website-ui/stay-in-flow.png"}
          fill
          sizes="430px"
          alt="Illustration"
          className="mx-auto"
        />
      </span>

      <div className="grid gap-2.5 text-[#141414]">
        <h3 className="text-xl sm:text-2xl font-bold">
          Stay in flow, no matter the channel
        </h3>
        <p className="sm:text-lg font-medium">
          From Slack to WhatsApp to email, Entobo unites your communication and
          workflows so you can move fast and stay aligned.
        </p>
      </div>
    </div>
  );
}
