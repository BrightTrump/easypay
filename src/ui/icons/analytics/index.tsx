import React from "react";
import { IconProps } from "../types";

export default function Analytics({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7V3.5M4.08333 8.16667V3.5M9.91667 9.33333V3.5M3.15 1.75H10.85C11.2213 1.75 11.5774 1.8975 11.8399 2.16005C12.1025 2.4226 12.25 2.7787 12.25 3.15V10.85C12.25 11.2213 12.1025 11.5774 11.8399 11.8399C11.5774 12.1025 11.2213 12.25 10.85 12.25H3.15C2.7787 12.25 2.4226 12.1025 2.16005 11.8399C1.8975 11.5774 1.75 11.2213 1.75 10.85V3.15C1.75 2.96615 1.78621 2.7841 1.85657 2.61424C1.92693 2.44439 2.03005 2.29005 2.16005 2.16005C2.4226 1.8975 2.7787 1.75 3.15 1.75Z"
        stroke="#555555"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
