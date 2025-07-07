"use client";
import React, { useState } from "react";
import { ButtonProps, ButtonVariants } from "../types";

export default function Neutral({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hoveredClass = isHovered
    ? ButtonVariants.BlackFilledRounded
    : ButtonVariants.Neutral;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`grid grid-flow-col gap-2 bg-[#E9E9E9] border border-[#E9E9E9] rounded-xl items-center justify-center font-semibold text-sm px-5 py-2  ${hoveredClass} ${
        disabled && "opacity-60"
      } ${className} `}
    >
      {isLoading && (
        <span className="block border-2 border-[#555555] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      )}

      {!isLoading && children}
    </button>
  );
}
