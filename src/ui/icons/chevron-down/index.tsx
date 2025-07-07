import React from "react";
import { IconProps } from "../types";

export default function ChevronDown({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99853 10.7075L11.8525 6.85448L11.1455 6.14648L7.99853 9.29348L4.85253 6.14648L4.14453 6.85448L7.99853 10.7075Z"
        fill={color}
      />
    </svg>
  );
}
