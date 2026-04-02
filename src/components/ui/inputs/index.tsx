"use client";

import { forwardRef } from "react";
import type { InputProps } from "./_types";
import { Inputs } from "./_types";
import { EmailInput } from "./email-input";
import type { EmailInputProps } from "./email-input/_types";
import { TextareaInput } from "./textarea-input";
import type { TextareaInputProps } from "./textarea-input/_types";
import SelectInput from "./select-input";
import type { SelectInputProps } from "./select-input/_types";
import { TextInput } from "./text-input";
import type { TextInputProps } from "./text-input/_types";

export const Input = forwardRef<HTMLInputElement, InputProps<Inputs>>(
  function Input(props, ref) {
    const { type } = props;

    switch (type) {
      case Inputs.Email:
        return <EmailInput {...(props as EmailInputProps)} ref={ref} />;

      case Inputs.Textarea:
        return <TextareaInput {...(props as TextareaInputProps)} />;

      case Inputs.Select:
        return <SelectInput {...(props as SelectInputProps)} />;

      case Inputs.Text:
        return <TextInput {...(props as TextInputProps)} />;

      default:
        return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
    }
  }
);
