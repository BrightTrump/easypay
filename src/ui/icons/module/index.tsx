import React from "react";
import { IconProps } from "../types";

export default function Module({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13907_7509)">
        <path
          d="M1.59375 9.5625H6.375C6.375 9.5625 7.4375 9.5625 7.4375 10.625V15.4062C7.4375 15.4062 7.4375 16.4687 6.375 16.4687H1.59375C1.59375 16.4687 0.53125 16.4687 0.53125 15.4062V10.625C0.53125 10.625 0.53125 9.5625 1.59375 9.5625ZM10.625 9.5625H15.4062C15.4062 9.5625 16.4687 9.5625 16.4687 10.625V15.4062C16.4687 15.4062 16.4687 16.4687 15.4062 16.4687H10.625C10.625 16.4687 9.5625 16.4687 9.5625 15.4062V10.625C9.5625 10.625 9.5625 9.5625 10.625 9.5625ZM6.10937 0.53125H10.8906C10.8906 0.53125 11.9531 0.53125 11.9531 1.59375V6.375C11.9531 6.375 11.9531 7.4375 10.8906 7.4375H6.10937C6.10937 7.4375 5.04687 7.4375 5.04687 6.375V1.59375C5.04687 1.59375 5.04687 0.53125 6.10937 0.53125Z"
          stroke={color}
          strokeWidth="1.0625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13907_7509">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
