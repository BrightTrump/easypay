import React from "react";
import { IconProps } from "../types";

export default function List({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5H14M5 8.5H14M5 12H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.5C2.77614 5.5 3 5.27614 3 5C3 4.72386 2.77614 4.5 2.5 4.5C2.22386 4.5 2 4.72386 2 5C2 5.27614 2.22386 5.5 2.5 5.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9C2.77614 9 3 8.77614 3 8.5C3 8.22386 2.77614 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5C2.77614 12.5 3 12.2761 3 12C3 11.7239 2.77614 11.5 2.5 11.5C2.22386 11.5 2 11.7239 2 12C2 12.2761 2.22386 12.5 2.5 12.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
