import React from "react";
import { IconProps } from "../types";

export default function SettingsTwo({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.334 4.66669H7.33398"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33398 11.3333H3.33398"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.334 13.3333C12.4386 13.3333 13.334 12.4379 13.334 11.3333C13.334 10.2287 12.4386 9.33331 11.334 9.33331C10.2294 9.33331 9.33398 10.2287 9.33398 11.3333C9.33398 12.4379 10.2294 13.3333 11.334 13.3333Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 6.66669C5.77059 6.66669 6.66602 5.77126 6.66602 4.66669C6.66602 3.56212 5.77059 2.66669 4.66602 2.66669C3.56145 2.66669 2.66602 3.56212 2.66602 4.66669C2.66602 5.77126 3.56145 6.66669 4.66602 6.66669Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
