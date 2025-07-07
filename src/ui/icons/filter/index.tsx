import React from "react";
import { IconProps } from "../types";

export default function Filter({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.334 5.16406H7.33398"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33398 11.8359H3.33398"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.334 13.8359C12.4386 13.8359 13.334 12.9405 13.334 11.8359C13.334 10.7314 12.4386 9.83594 11.334 9.83594C10.2294 9.83594 9.33398 10.7314 9.33398 11.8359C9.33398 12.9405 10.2294 13.8359 11.334 13.8359Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 7.16406C5.77059 7.16406 6.66602 6.26863 6.66602 5.16406C6.66602 4.05949 5.77059 3.16406 4.66602 3.16406C3.56145 3.16406 2.66602 4.05949 2.66602 5.16406C2.66602 6.26863 3.56145 7.16406 4.66602 7.16406Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
