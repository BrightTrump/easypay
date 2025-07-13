"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export interface SelectInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  options?: string[] | ReactNode;
  required?: boolean;
  readonly?: boolean;
  value?: string;
  defaultValue?: string;
  className?: string;
  onInput?: () => void;
  onChange?: (e: string) => void;
}

export function SelectInput({
  label,
  placeholder,
  name,
  options,
  required,
  readonly,
  value,
  defaultValue,
  onInput,
  onChange,
}: SelectInputProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || defaultValue || ""
  );

  const handleOnValueChange = (e: string) => {
    if (!value) {
      setSelectedOption(e);
    }
    onChange?.(e);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    } else if (defaultValue !== undefined) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue, value]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className="label">
          {label} {required && "*"}
        </label>
      )}

      <Select
        name={name}
        value={selectedOption}
        onValueChange={handleOnValueChange}
      >
        <SelectTrigger disabled={readonly}>
          <input
            type="text"
            className="w-full bg-transparent outline-none cursor-pointer text-[#555555] placeholder:text-[#8C8C8C]"
            value={selectedOption}
            placeholder={placeholder}
            readOnly
          />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options?.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
