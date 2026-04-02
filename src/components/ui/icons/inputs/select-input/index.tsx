import React from "react";
import type { SelectInputProps } from "./_types";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../../select";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export default function SelectInput({
  label,
  name,
  value,
  defaultValue,
  options,
  readonly,
  required,
  placeholder,
  onChange,
}: SelectInputProps) {
  // Initialize state with defaultValue if provided, otherwise empty string
  // If value is provided (controlled mode), we don't strictly need state for the value itself,
  // but we use it to handle the uncontrolled case or internal updates.
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const isDeselectingRef = React.useRef(false);

  // Determine the current value to display:
  // If 'value' prop is passed (controlled), use it.
  // Otherwise use internal state (uncontrolled).
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const displayValue = React.useMemo(() => {
    if (currentValue === "" || currentValue === undefined) return "";
    const selectedOption = options?.find((option) => {
      const val = typeof option === "string" ? option : option.value;
      return val === currentValue;
    });
    return typeof selectedOption === "string"
      ? selectedOption
      : selectedOption?.label || "";
  }, [currentValue, options]);

  return (
    <div className="grid gap-2 content-start z-10">
      {label && (
        <label className={cn(InputLabelStyles)}>
          {label}{" "}
          {required && <span className={cn(InputRequiredStyles)}>*</span>}
        </label>
      )}

      <Select
        value={currentValue}
        name={name}
        required={required}
        onValueChange={(newValue) => {
          // Ignore onValueChange if we're in deselect mode
          if (isDeselectingRef.current) {
            isDeselectingRef.current = false;
            return;
          }

          // If uncontrolled, update internal state
          if (!isControlled) {
            setInternalValue(newValue);
          }

          // Always trigger onChange
          onChange?.(newValue);
        }}
      >
        <SelectTrigger className={cn(InputConStyles)} disabled={readonly}>
          <input
            readOnly
            value={displayValue}
            placeholder={placeholder}
            className="bg-transparent outline-none w-full cursor-pointer placeholder:text-[#595D60]"
          />
        </SelectTrigger>

        <SelectContent className="bg-white border border-[#E9EAEB] rounded-md shadow:[0px_4px_6px_-2px_#0A0D1208,_0px_12px_16px_-4px_#0A0D1214] p-0">
          {options?.map((option, index) => {
            const optionValue =
              typeof option === "string" ? option : option.value;
            const optionLabel =
              typeof option === "string" ? option : option.label;
            return (
              <SelectItem
                key={index}
                value={optionValue}
                onPointerDown={(e) => {
                  // If clicking on already selected option, deselect it
                  if (optionValue === currentValue) {
                    e.preventDefault();
                    e.stopPropagation();
                    isDeselectingRef.current = true;

                    if (!isControlled) {
                      setInternalValue("");
                    }
                    onChange?.("");
                  }
                }}
              >
                {optionLabel}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
