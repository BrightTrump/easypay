import React from "react";
import { IconProps } from "../types";

export default function Shrink({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10.5L14 14.5M10 10.5V13.7M10 10.5H13.2M6 13.7V10.5M6 10.5H2.8M6 10.5L2 14.5M10 3.3V6.5M10 6.5H13.2M10 6.5L14 2.5M6 3.3V6.5M6 6.5H2.8M6 6.5L2 2.5"
        stroke="#555555"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
