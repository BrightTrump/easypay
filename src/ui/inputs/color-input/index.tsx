import React, { useState } from "react";
import { InputBaseProps } from "../types";

export type ColorInputProps = Pick<
  InputBaseProps,
  "required" | "onChange" | "label" | "id" | "name" | "defaultValue"
> & {
  onInput?: () => void;
};

export default function ColorInput({
  name,
  label,
  id,
  required,
  defaultValue,
  onChange,
}: ColorInputProps) {
  const [selectedColor, setSelectedColor] = useState(defaultValue || "#E9E9E9");

  const handleOnChange = (color: string) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  return (
    <div className="relative w-max">
      <label htmlFor={id} className="w-max cursor-pointer">
        <div className="grid gap-3">
          {label && (
            <span className="label">
              {label} {required && "*"}
            </span>
          )}
          <span
            style={{ backgroundColor: selectedColor }}
            className="block w-10 h-10 rounded-sm"
          ></span>
        </div>
      </label>

      <input
        type="color"
        name={name}
        id={id}
        className="w-max invisible absolute inset-0"
        defaultValue={defaultValue || "#A6A6A6"}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}
