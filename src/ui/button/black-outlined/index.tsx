import React from "react";
import { ButtonProps } from "../types";

export default function BlackOutlined({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`grid grid-flow-col gap-2 rounded-xl bg-white cursor-pointer border border-black text-black items-center justify-center font-medium text-sm px-5 py-2 ${
        disabled && "opacity-60"
      } ${className}`}
    >
      {isLoading && (
        <span className="block border-2 border-black border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      )}

      {!isLoading && children}
    </button>
  );
}
