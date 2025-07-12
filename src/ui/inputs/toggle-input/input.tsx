"use client";

import { cn } from "../../../../lib/utils";
import React from "react";

export interface ToggleInputProps {
  value: boolean;
  disabled?: boolean;
  onChange?: (e: boolean) => void;
}

export function ToggleInput({ value, disabled, onChange }: ToggleInputProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        onChange?.(!value);
      }}
      className={cn(
        "w-10 p-1 rounded-full grid cursor-pointer relative",
        value ? "bg-black" : "bg-[#DBDBDB]",
        disabled && "cursor-default"
      )}
    >
      <span
        className={`block w-4 h-4 rounded-full relative transition-all bg-white ${
          value ? "left-1/2" : "left-0"
        }`}
      ></span>
    </button>
  );
}
