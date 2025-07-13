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
  customOptions?: (
    setValue: (v: string) => void,
    selectedValue: string
  ) => ReactNode;
  options?: string[];
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
  customOptions,
  options,
  required,
  readonly,
  value,
  defaultValue,
  className,
  onInput,
  onChange,
}: SelectInputProps) {
  const [selectedOption, setSelectedOption] = useState<string>(
    value || defaultValue || ""
  );

  const handleOnValueChange = (val: string) => {
    if (!value) {
      setSelectedOption(val);
    }
    onChange?.(val);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    } else if (defaultValue !== undefined) {
      setSelectedOption(defaultValue);
    }
  }, [value, defaultValue]);

  return (
    <div className={`grid gap-2 content-start ${className || ""}`}>
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
            {customOptions
              ? customOptions(handleOnValueChange, selectedOption)
              : options?.map((option, index) => (
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
y;
