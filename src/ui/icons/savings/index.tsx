import React from "react";
import { IconProps } from "../types";

export default function Savings({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Money bag top tie */}
      <path d="M24 8L32 2L40 8V14H24V8Z" fill={color} />
      {/* Bag shape */}
      <path
        d="M16 20C16 15 28 14 28 14H36C36 14 48 15 48 20C48 24.5 44.5 27.5 44.5 34.5C44.5 44 50 50 32 62C14 50 19.5 44 19.5 34.5C19.5 27.5 16 24.5 16 20Z"
        fill={color}
      />
      {/* Dollar symbol */}
      <path
        d="M32 28C30.3431 28 29 29.3431 29 31H26C26 27.6863 28.6863 25 32 25V23H34V25C35.6569 25 37 26.3431 37 28C37 29.6569 35.6569 31 34 31H32C30.8954 31 30 31.8954 30 33C30 34.1046 30.8954 35 32 35C33.1046 35 34 34.1046 34 33H37C37 36.3137 34.3137 39 31 39V41H29V39C27.3431 39 26 37.6569 26 36C26 34.3431 27.3431 33 29 33H31C32.1046 33 33 32.1046 33 31C33 29.8954 32.1046 29 31 29H32Z"
        fill="white"
      />
    </svg>
  );
}
