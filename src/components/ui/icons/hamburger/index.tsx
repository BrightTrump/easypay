import React from "react";
import { IconProps } from "../../../../ui/icons/types";

export default function HamburgerIcon({ className }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.16669 4.375C3.82151 4.375 3.54169 4.65482 3.54169 5C3.54169 5.34518 3.82151 5.625 4.16669 5.625H15.8334C16.1785 5.625 16.4584 5.34518 16.4584 5C16.4584 4.65482 16.1785 4.375 15.8334 4.375H4.16669Z"
        fill="currentColor"
      />
      <path
        d="M4.16669 9.375C3.82151 9.375 3.54169 9.65482 3.54169 10C3.54169 10.3452 3.82151 10.625 4.16669 10.625H15.8334C16.1785 10.625 16.4584 10.3452 16.4584 10C16.4584 9.65482 16.1785 9.375 15.8334 9.375H4.16669Z"
        fill="currentColor"
      />
      <path
        d="M4.16669 14.375C3.82151 14.375 3.54169 14.6548 3.54169 15C3.54169 15.3452 3.82151 15.625 4.16669 15.625H15.8334C16.1785 15.625 16.4584 15.3452 16.4584 15C16.4584 14.6548 16.1785 14.375 15.8334 14.375H4.16669Z"
        fill="currentColor"
      />
    </svg>
  );
}
