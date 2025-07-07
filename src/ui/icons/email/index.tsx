import React from "react";
import { IconProps } from "../types";

export default function Email({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 4.70102C1.75 4.49685 1.855 4.31018 2.03 4.20518L7 1.16602L11.97 4.20518C12.145 4.31018 12.25 4.49685 12.25 4.70102V10.4993C12.25 10.8202 11.9875 11.0827 11.6667 11.0827H2.33333C2.0125 11.0827 1.75 10.8202 1.75 10.4993V4.70102Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 4.95703L7 8.16536L12.25 4.95703"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
