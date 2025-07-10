"use client";

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";

export interface TextAreaInputProps extends InputBaseProps {
  height?: number;
  minHeight?: number;
  maxHeight?: number;
}

export function TextAreaInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
  readonly,
  height,
  minHeight,
  maxHeight,
}: TextAreaInputProps) {
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e?.target.value);
    setOnInvalid(false);
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  return (
    <div className="grid grid-rows-[auto_1fr] gap-2">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
          onInvalid={handleOnInvalid}
          required={required}
          defaultValue={defaultValue}
          readOnly={readonly}
          className="resize-none input-scroll-bar"
          style={{
            minHeight: minHeight || 120,
            height,
            maxHeight: maxHeight,
          }}
        />
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
