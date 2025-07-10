"use client";

import React, { useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import { TimeInput } from "../time-input";

export function TimeRangeInput({
  label,
  onChange,
  id,
  name,
  required,
  defaultValue,
  readonly,
}: InputBaseProps) {
  const [inputValue, setInputValue] = useState<string>(
    defaultValue || "01 : 00 AM;02 : 00 AM"
  );

  const handleOnChangeFrom = (e: string) => {
    setInputValue(`${e};${inputValue.split(";")[1]}`);
    onChange?.(`${e};${inputValue.split(";")[1]}`);
  };

  const handleOnChangeTo = (e: string) => {
    setInputValue(`${inputValue.split(";")[0]};${e}`);
    onChange?.(`${inputValue.split(";")[0]};${e}`);
  };

  useEffect(() => {
    defaultValue && setInputValue(defaultValue);
    onChange?.(defaultValue || "01 : 00 AM;02 : 00 AM");
  }, [defaultValue]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label htmlFor={id} className={`label`}>
          {label} {required && "*"}
        </label>
      )}

      <div className="grid relative gap-3 items-center text-right [&>div]:grid [&>div]:grid-cols-[32px_1fr] [&>div]:items-center [&>div]:gap-2 [&>div>span]:text-blackgray [&>div>span]:text-sm">
        <div>
          <span>From</span>
          <TimeInput
            id={id + "-from"}
            name={name + "-from"}
            defaultValue={inputValue?.split(";")[0]}
            onChange={handleOnChangeFrom}
            readonly={readonly}
          />
        </div>

        <div>
          <span>To</span>
          <TimeInput
            id={id + "-to"}
            name={name + "-to"}
            defaultValue={inputValue?.split(";")[1]}
            onChange={handleOnChangeTo}
            readonly={readonly}
          />
        </div>

        <input
          type="text"
          value={inputValue}
          id={id}
          name={name}
          required={required}
          readOnly
          className="absolute inset-0 invisible"
        />
      </div>
    </div>
  );
}
