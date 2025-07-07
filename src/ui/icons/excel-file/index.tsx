import React from "react";
import { IconProps } from "../types";

export default function ExcelFile({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83333 9.16732H7.5M5.83333 12.5007H7.5M5.83333 15.834H7.5M10.8333 9.16732H14.1667M10.8333 12.5007H14.1667M10.8333 15.834H14.1667M12.5 0.833984V5.00065C12.5 5.46732 12.8667 5.83398 13.3333 5.83398H17.5M17.5 5.35065V18.334C17.5 18.8006 17.1333 19.1673 16.6667 19.1673H3.33333C2.86667 19.1673 2.5 18.8006 2.5 18.334V1.66732C2.5 1.20065 2.86667 0.833984 3.33333 0.833984H12.9833C13.2 0.833984 13.4167 0.917318 13.5667 1.08398L17.25 4.76732C17.4167 4.91732 17.5 5.11732 17.5 5.35065Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </svg>
  );
}
