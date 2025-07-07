import React from "react";
import { IconProps } from "../types";

export default function Import({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33203 7.58333V11.0833C2.33203 11.3928 2.45495 11.6895 2.67374 11.9083C2.89253 12.1271 3.18928 12.25 3.4987 12.25H10.4987C10.8081 12.25 11.1049 12.1271 11.3237 11.9083C11.5424 11.6895 11.6654 11.3928 11.6654 11.0833V7.58333M6.9987 1.75V8.75M6.9987 8.75L4.95703 6.70833M6.9987 8.75L9.04036 6.70833"
        stroke={color}
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
