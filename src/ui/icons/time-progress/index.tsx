import React from "react";
import { IconProps } from "../types";

export default function TimeProgress({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75739 4.25733C2.77583 5.23888 2.16497 6.53041 2.0289 7.91186C1.89284 9.2933 2.23997 10.6792 3.01117 11.8334C3.78237 12.9876 4.9299 13.8387 6.25826 14.2416C7.58662 14.6446 9.0136 14.5745 10.2961 14.0433C11.5785 13.5121 12.6371 12.5526 13.2915 11.3284C13.9459 10.1042 14.1555 8.69097 13.8847 7.3295C13.6139 5.96804 12.8794 4.7426 11.8064 3.86197C10.7334 2.98134 9.38819 2.50001 8.00006 2.5V3.83333M8.00006 8.5L4.00006 4.5M14.0001 8.5H12.6667M8.00006 13.1667V14.5M3.33339 8.5H2.00006"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
}
