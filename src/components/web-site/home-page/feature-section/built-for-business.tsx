"use client";

import Image from "next/image";
import React from "react";

export default function BuiltForBusiness() {
  return (
    <div className="lg:col-[1/3] grid lg:grid-cols-[auto_1fr] gap-10 lg:h-[350px] xl:h-[450px] overflow-hidden [background:_radial-gradient(77.88%_71.91%_at_86.48%_84.34%,_#96C6EA_0%,_#B597F6_100%),_linear-gradient(0deg,_rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2))] rounded-[18px] pr-0 p-4 sm:p-8 sm:pr-0">
      <div className="grid content-center gap-2.5 text-[#141414] lg:max-w-sm order-1 lg:order-none pr-4">
        <h3 className="text-xl sm:text-2xl font-bold">
          Built for the way business moves today{" "}
        </h3>
        <p className="sm:text-lg font-medium">
          From managing relationships to delivering work, Entobo streamlines
          your operations into one intelligent, connected platform.
        </p>
      </div>

      <span className="relative xl:w-[680px] xl:justify-self-end">
        <Image
          src={"/website-ui/bulk-upload.png"}
          width={980}
          height={695}
          alt="Illustration"
          className="relative left-1 sm:left-2 lg:absolute lg:-right-12 lg:-bottom-12"
        />
      </span>
    </div>
  );
}
