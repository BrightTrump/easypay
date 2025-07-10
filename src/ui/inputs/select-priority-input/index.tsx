"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Priority } from "@/@types/_index";
import { convertEnumToArray } from "@/utils/convert.utils";
import { getPriorityColor } from "@/utils/priority.util";

export interface SelectPriorityInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  readonly?: boolean;
  required?: boolean;
  value?: Priority;
  defaultValue?: Priority;
  onInput?: () => void;
  onChange?: (e: Priority) => void;
}

export function SelectPriorityInput({
  label,
  placeholder,
  name,
  required,
  value,
  defaultValue,
  readonly,
  onInput,
  onChange,
}: SelectPriorityInputProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || defaultValue || ""
  );

  const [onInValid, setOnInvalid] = useState(false);

  const handleOnValueChange = (e: Priority) => {
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
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <span
              style={{
                backgroundColor: getPriorityColor(selectedOption as Priority),
              }}
              className={`w-2 h-2 rounded-full block`}
            ></span>
            <input
              type="text"
              className="w-full bg-transparent outline-none cursor-pointer text-[#555555] placeholder:text-[#8C8C8C]"
              value={selectedOption}
              placeholder={placeholder}
              readOnly
            />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {convertEnumToArray(Priority)?.map((option, index) => (
              <SelectItem key={`${Priority}-${index}`} value={option}>
                <span className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <span
                    style={{
                      backgroundColor: getPriorityColor(option as Priority),
                    }}
                    className={`w-2 h-2 rounded-full block`}
                  ></span>
                  {option}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
