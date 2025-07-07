import React from "react";
import { IconProps } from "../types";

export default function Instagram({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6263 2.97852H6.3763C4.22469 2.97852 2.48047 4.72274 2.48047 6.87435V11.1243C2.48047 13.276 4.22469 15.0202 6.3763 15.0202H10.6263C12.7779 15.0202 14.5221 13.276 14.5221 11.1243V6.87435C14.5221 4.72274 12.7779 2.97852 10.6263 2.97852Z"
        stroke={color}
        strokeWidth="1.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49956 11.5538C9.91024 11.5538 11.0538 10.4102 11.0538 8.99956C11.0538 7.58889 9.91024 6.44531 8.49956 6.44531C7.08889 6.44531 5.94531 7.58889 5.94531 8.99956C5.94531 10.4102 7.08889 11.5538 8.49956 11.5538Z"
        stroke={color}
        strokeWidth="1.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9679 6.2619C12.3708 6.2619 12.6974 5.93526 12.6974 5.53232C12.6974 5.12938 12.3708 4.80273 11.9679 4.80273C11.5649 4.80273 11.2383 5.12938 11.2383 5.53232C11.2383 5.93526 11.5649 6.2619 11.9679 6.2619Z"
        fill={color}
      />
    </svg>
  );
}
