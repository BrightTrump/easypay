import React from "react";
import { IconProps } from "../types";

export default function Monitor({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M1.41797 7.08317C1.41797 4.41205 1.41797 3.07613 2.24814 2.24667C3.0783 1.41721 4.41351 1.4165 7.08464 1.4165H9.91797C12.5891 1.4165 13.925 1.4165 14.7545 2.24667C15.5839 3.07684 15.5846 4.41205 15.5846 7.08317V7.7915C15.5846 9.79467 15.5846 10.797 14.962 11.4189C14.3401 12.0415 13.3378 12.0415 11.3346 12.0415H5.66797C3.6648 12.0415 2.66251 12.0415 2.04059 11.4189C1.41797 10.797 1.41797 9.79467 1.41797 7.7915V7.08317Z"
          stroke={color}
          strokeWidth="1.0625"
        />
        <path
          d="M11.3346 15.583H5.66797M8.5013 12.0413V15.583M15.5846 9.20801H1.41797"
          stroke={color}
          strokeWidth="1.0625"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
