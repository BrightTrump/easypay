import React from "react";
import { IconProps } from "../types";

export default function Flag({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.125 1.41699H8.08492L9.50158 2.83366H15.1782L13.5037 7.43783L15.1782 12.042H8.91508L7.49842 10.6253H3.54167V15.9378H2.125V1.41699Z"
        fill={color}
      />
    </svg>
  );
}
