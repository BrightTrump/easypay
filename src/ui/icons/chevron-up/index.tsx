import React from "react";
import { IconProps } from "../types";

export default function ChevronUp({ color, size }: IconProps) {
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
        d="M7.99853 5.79297L11.8525 9.64597L11.1455 10.354L7.99853 7.20697L4.85253 10.354L4.14453 9.64597L7.99853 5.79297Z"
        fill={color}
      />
    </svg>
  );
}
