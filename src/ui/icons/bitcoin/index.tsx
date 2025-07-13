import React from "react";
import { IconProps } from "../types";

export default function Bitcoin({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 8.75C17.25 10.8211 15.5711 12.5 13.5 12.5H9.75V5H13.5C15.5711 5 17.25 6.67893 17.25 8.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 12.5H14.25C16.3211 12.5 18 14.1789 18 16.25C18 18.3211 16.3211 20 14.25 20H9.75V12.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 3V21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
