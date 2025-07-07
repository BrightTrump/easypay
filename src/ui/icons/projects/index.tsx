import React from "react";
import { IconProps } from "../types";

export default function Projects({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10V5M5.83333 11.6667V5M14.1667 13.3333V5M4.5 2.5H15.5C16.0304 2.5 16.5391 2.71071 16.9142 3.08579C17.2893 3.46086 17.5 3.96957 17.5 4.5V15.5C17.5 16.0304 17.2893 16.5391 16.9142 16.9142C16.5391 17.2893 16.0304 17.5 15.5 17.5H4.5C3.96957 17.5 3.46086 17.2893 3.08579 16.9142C2.71071 16.5391 2.5 16.0304 2.5 15.5V4.5C2.5 4.23736 2.55173 3.97728 2.65224 3.73463C2.75275 3.49198 2.90007 3.2715 3.08579 3.08579C3.46086 2.71071 3.96957 2.5 4.5 2.5Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
