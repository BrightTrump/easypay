import type { TextInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export function TextInput({
  label,
  name,
  value,
  readonly,
  required,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <div className="grid gap-2 content-start z-10">
      {label && (
        <label className={cn(InputLabelStyles)}>
          {label}{" "}
          {required && <span className={cn(InputRequiredStyles)}>*</span>}
        </label>
      )}

      <div className={cn(InputConStyles)}>
        <input
          type="text"
          name={name}
          className="w-full text-sm bg-transparent outline-none text-black placeholder:text-[##595D60]"
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
