import React from "react";
import { IconProps } from "../types";

export default function GmailColored({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10642_8802)">
        <path
          d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z"
          fill="#F4F2ED"
        />
        <path
          d="M3.25281 15.8624H5.73859V9.82547L2.1875 7.16219V14.7971C2.1875 15.3866 2.66516 15.8624 3.25281 15.8624Z"
          fill="#4285F4"
        />
        <path
          d="M14.2617 15.8624H16.7476C17.337 15.8624 17.8129 15.3848 17.8129 14.7971V7.16211L14.2617 9.82547"
          fill="#34A853"
        />
        <path
          d="M14.2617 5.20898V9.82547L17.8129 7.16219V5.74156C17.8129 4.42414 16.309 3.67305 15.2561 4.4632"
          fill="#FBBC04"
        />
        <path
          d="M5.73828 9.82547V5.20906L9.99961 8.40492L14.2609 5.20891V9.82539L9.99961 13.0215"
          fill="#EA4335"
        />
        <path
          d="M2.1875 5.74164V7.16211L5.73859 9.82547V5.20906L4.7443 4.46328C3.68961 3.67312 2.1875 4.42422 2.1875 5.74164Z"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_10642_8802">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
