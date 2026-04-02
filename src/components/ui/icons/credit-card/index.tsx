import React from "react";
import { IconProps } from "../_types";

export default function CreditCardIcon({ className }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Card background */}
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Stripe line */}
      <rect x="2" y="8" width="20" height="2" fill="currentColor" />
      {/* Small indicators (simulate card info) */}
      <circle cx="6.5" cy="16" r="1.5" fill="currentColor" />
      <rect x="10" y="15" width="6" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}
