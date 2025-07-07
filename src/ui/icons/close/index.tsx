import React from "react";
import { IconProps } from "../types";

export default function Close({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16602 4.16651L15.8327 15.8332M4.16604 15.8332L9.99937 9.99984L15.8327 4.1665"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
