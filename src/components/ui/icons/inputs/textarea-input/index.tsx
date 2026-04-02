import type { TextareaInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export function TextareaInput({
  label,
  name,
  value,
  readonly,
  required,
  placeholder,
  rows = 4,
  onChange,
}: TextareaInputProps) {
  return (
    <div className="grid gap-2 content-start z-10 w-full">
      {label && (
        <label className={cn(InputLabelStyles)}>
          {label}{" "}
          {required && <span className={cn(InputRequiredStyles)}>*</span>}
        </label>
      )}

      <div className={cn(InputConStyles, "h-auto py-2")}>
        <textarea
          name={name}
          rows={rows}
          className="w-full bg-transparent outline-none text-black placeholder:text-[#BBBBBB] resize-none"
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
