import { forwardRef } from "react";
import type { EmailInputProps } from "./_types";
import {
  InputConStyles,
  InputLabelStyles,
  InputRequiredStyles,
} from "../styles";
import { cn } from "@/lib/utils";

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  function EmailInput(
    { label, name, value, readonly, required, placeholder, onChange },
    ref
  ) {
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
            ref={ref}
            type="email"
            name={name}
            className="w-full text-[#ffffff] placeholder:text-white border border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600"
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
);
