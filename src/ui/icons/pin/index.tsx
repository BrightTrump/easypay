import React from "react";
import { IconProps } from "../types";

export default function Pin({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4375 9.5625L3.1875 13.8125M10.9793 2.125L14.875 6.02066L11.4856 9.24853C11.3815 9.34778 11.2986 9.46714 11.242 9.59937C11.1854 9.73159 11.1562 9.87394 11.1562 10.0178V11.9988C11.1562 12.4716 10.5841 12.7091 10.2494 12.3744L4.62559 6.75059C4.29091 6.41591 4.52784 5.84375 5.00119 5.84375H6.98222C7.12606 5.84378 7.26841 5.8146 7.40063 5.75798C7.53286 5.70136 7.65222 5.61849 7.75147 5.51438L10.9793 2.125Z"
        stroke={color}
        strokeWidth="1.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
