"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Globe } from "lucide-react"; // or use your custom Icon component
import { COUNTRY_SCHEMA } from "@/constants.ts/countries.constants";

export interface SelectCountryInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  readonly?: boolean;
  className?: string;
  onInput?: () => void;
  onChange?: (value: string) => void;
}

export default function SelectCountryInput({
  label,
  placeholder = "Select your country",
  name,
  value,
  defaultValue,
  required,
  readonly,
  className,
  onChange,
  onInput,
}: SelectCountryInputProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || defaultValue || ""
  );

  const handleOnValueChange = (val: string) => {
    if (!value) setSelectedOption(val);
    onChange?.(val);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined) setSelectedOption(value);
    else if (defaultValue !== undefined) setSelectedOption(defaultValue);
  }, [value, defaultValue]);

  return (
    <div className={`grid gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#141414]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative cursor-pointer ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Globe className="w-4 h-4 text-gray-400" />
        </div>

        <Select
          name={name}
          value={selectedOption}
          onValueChange={handleOnValueChange}
        >
          <SelectTrigger
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285ab1] focus:border-[#285ab1] text-sm text-[#555555]"
            disabled={readonly}
          >
            {selectedOption || placeholder}
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {COUNTRY_SCHEMA.map((country, i) => (
                <SelectItem key={i} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <i data-lucide="chevron-down" className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
