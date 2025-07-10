"use client";

import React, { useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "@/utils/date.utils";

export interface DateInputProps extends InputBaseProps {
  isLoading?: boolean;
}

export function DateInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
  isLoading,
}: DateInputProps) {
  const [inputValue, setInputValue] = useState<Date | null>(null);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label htmlFor={id} className={`label`}>
          {label} {required && "*"}
        </label>
      )}

      <DatePicker
        selected={inputValue}
        onChange={(date) => {
          setInputValue(date);
          onChange?.(date);
        }}
        customInput={
          <div className="outline-none p-2.5 border border-[#DFDFDF] rounded-sm grid grid-cols-[auto_1fr] items-center gap-3">
            {isLoading ? (
              <span className="border border-[#8C8C8C] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
            ) : (
              <Icon type={Icons.Calendar} size={17} color="#555555" />
            )}
            <input
              id={id}
              type={"text"}
              placeholder={placeholder}
              className="outline-none w-full bg-transparent text-sm text-[#555555]"
              value={inputValue ? formatDate(inputValue) : ""}
              name={name}
              readOnly
            />
          </div>
        }
      />
    </div>
  );
}
