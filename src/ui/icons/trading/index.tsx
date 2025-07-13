import React from "react";
import { IconProps } from "../types";

export default function Trading({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3V21H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17L10 13L13 16L17 10L21 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17" r="1" fill={color} />
      <circle cx="10" cy="13" r="1" fill={color} />
      <circle cx="13" cy="16" r="1" fill={color} />
      <circle cx="17" cy="10" r="1" fill={color} />
      <circle cx="21" cy="14" r="1" fill={color} />
    </svg>
  );
}
