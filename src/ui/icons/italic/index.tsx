import React from "react";
import { IconProps } from "../types";

export default function Italic({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33268 3.33301H11.3327M4.66602 12.6663H8.66602M9.33268 3.33301L6.66602 12.6663"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
