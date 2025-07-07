import React from "react";
import { IconProps } from "../types";

export default function FormatQuote({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33268 11.3337H5.33268L6.66602 8.66699V4.66699H2.66602V8.66699H4.66602L3.33268 11.3337ZM9.99935 11.3337H11.9993L13.3327 8.66699V4.66699H9.33268V8.66699H11.3327L9.99935 11.3337Z"
        fill={color}
      />
    </svg>
  );
}
