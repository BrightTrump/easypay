import React from "react";
interface LogoProps {
  width?: number;
  height?: number;
}
export default function Logo({ width, height }: LogoProps) {
  return (
    <div>
      {/* <Image
        src={"/logo.png"}
        alt=""
        width={width}
        height={height}
        className="object-contain cursor-pointer"
      /> */}

      <p className="text-3xl text-center font-bold">
        Easy<span className="text-[#003DA6]">Pay</span>
      </p>
    </div>
  );
}
