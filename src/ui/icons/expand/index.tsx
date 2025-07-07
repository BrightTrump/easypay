import React from "react";
import { IconProps } from "../types";

export default function Expand({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99935 6.50008L2.66602 3.16675M2.66602 3.16675V5.83341M2.66602 3.16675H5.33268M9.99935 6.50008L13.3327 3.16675M13.3327 3.16675V5.83341M13.3327 3.16675H10.666M5.99935 10.5001L2.66602 13.8334M2.66602 13.8334V11.1667M2.66602 13.8334H5.33268M9.99935 10.5001L13.3327 13.8334M13.3327 13.8334V11.1667M13.3327 13.8334H10.666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
