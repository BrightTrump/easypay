import type { EmailInputProps } from "./email-input/_types";
import type { TextareaInputProps } from "./textarea-input/_types";
import type { SelectInputProps } from "./select-input/_types";
import type { TextInputProps } from "./text-input/_types";

export type InputProps<T> = {
  type: T;
} & (T extends typeof Inputs.Email
  ? EmailInputProps
  : T extends typeof Inputs.Select
  ? SelectInputProps
  : T extends typeof Inputs.Textarea
  ? TextareaInputProps
  : T extends typeof Inputs.Text
  ? TextInputProps
  : InputBaseProps);

export type InputBaseProps = {
  required?: boolean;
  label?: string;
  description?: string;
  placeholder?: string;
  name: string;
  className?: string;
  value?: string;
  readonly?: boolean;
};

export interface RequiredFieldProps {
  label: string;
}

export const Inputs = {
  Email: "Email",
  FileUpload: "FileUpload",
  Number: "Number",
  Password: "Password",
  Search: "Search",
  Phone: "Phone",
  Select: "Select",
  Textarea: "Textarea",
  Text: "Text",
} as const;

export type Inputs = (typeof Inputs)[keyof typeof Inputs];
