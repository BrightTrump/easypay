import React from "react";
import { IconProps } from "../types";

export default function Info({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.9987 14.1673C11.4045 14.1673 14.1654 11.4064 14.1654 8.00065C14.1654 4.59489 11.4045 1.83398 7.9987 1.83398C4.59294 1.83398 1.83203 4.59489 1.83203 8.00065C1.83203 11.4064 4.59294 14.1673 7.9987 14.1673Z"
        stroke={color}
        strokeWidth="1.25"
      />
      <path
        d="M8 7.87695V11.2103"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M7.9974 6.45964C8.45763 6.45964 8.83073 6.08654 8.83073 5.6263C8.83073 5.16606 8.45763 4.79297 7.9974 4.79297C7.53716 4.79297 7.16406 5.16606 7.16406 5.6263C7.16406 6.08654 7.53716 6.45964 7.9974 6.45964Z"
        fill={color}
      />
    </svg>
  );
}
