"use client";

import React, { useState } from "react";
import { InputBaseProps } from "../types";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import RequiredField from "../_shared/required-field";

export function NumberInput({
  label,
  description,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
}: InputBaseProps) {
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidNumberRegex = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    const isNotEmptyAndNotNegative =
      inputValue !== "" && parseFloat(inputValue) >= 0;

    if (isValidNumberRegex.test(inputValue) || inputValue === "") {
      if (inputValue.startsWith("-")) {
        setOnInvalid(true);
      } else {
        setOnInvalid(false);
      }
      onChange?.(e);
    } else {
      setOnInvalid(true);
    }

    if (!isNotEmptyAndNotNegative) {
      setOnInvalid(false);
    }
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  return (
    <div className="grid gap-2 grid-rows-[auto_1fr]">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      {description && (
        <div className="grid grid-cols-[auto_1fr] gap-1 text-[#555555] text-sm">
          <Icon type={Icons.Info} size={16} color="#555555" />
          <p>{description}</p>
        </div>
      )}

      <div className={`base-input`}>
        <input
          id={id}
          type="number"
          name={name}
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className="h-full"
        />
      </div>

      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
