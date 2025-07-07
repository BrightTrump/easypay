import React from "react";
import { IconProps } from "../types";

export default function SwitchOn({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="35" height="22" rx="11" fill={color} />
      <circle cx="24" cy="11" r="9" fill="white" />
    </svg>
  );
}
