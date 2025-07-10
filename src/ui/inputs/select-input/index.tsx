"use client";

import React, { useEffect, useState } from "react";
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
  options?: string[];
  required?: boolean;
  readonly?: boolean;
  value?: string;
  defaultValue?: any;
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
    !value && setSelectedOption(e);
    onChange?.(e);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined && value !== selectedOption) {
      setSelectedOption(value);
    }
    if (defaultValue !== undefined && defaultValue !== selectedOption) {
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
