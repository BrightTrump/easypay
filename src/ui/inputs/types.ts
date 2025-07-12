import { CheckBoxInputProps } from "./check-box-input";
import { ColorInputProps } from "./color-input";
import { SearchInputProps } from "./search-input";
import { OtpInputProps } from "./otp-input";
import { PasswordInputProps } from "./password-input";
import { SortInputProps } from "./sort-input";
import { DateInputProps } from "./date-input";
import { TextAreaInputProps } from "./text-area-input";
import { ToggleInputProps } from "./toggle-input/input";
import { CheckBoxRoundedInputProps } from "./check-box-rounded-input";
import { SelectCountryInputProps } from "./select-country-input";
import { SelectInputProps } from "./select-input";

export type InputProps<T> = {
  type: T;
} & (T extends Inputs.CheckBox
  ? CheckBoxInputProps
  : T extends Inputs.CheckBoxRounded
  ? CheckBoxRoundedInputProps
  : T extends Inputs.Color
  ? ColorInputProps
  : T extends Inputs.Date
  ? DateInputProps
  : T extends Inputs.Otp
  ? OtpInputProps
  : T extends Inputs.Password
  ? PasswordInputProps
  : T extends Inputs.Search
  ? SearchInputProps
  : T extends Inputs.SelectCountry
  ? SelectCountryInputProps
  : T extends Inputs.Select
  ? SelectInputProps
  : T extends Inputs.Sort
  ? SortInputProps
  : T extends Inputs.TextArea
  ? TextAreaInputProps
  : T extends Inputs.Toggle
  ? ToggleInputProps
  : InputBaseProps);

export type InputBaseProps = {
  required?: boolean;
  label?: string;
  description?: string;
  id: string;
  placeholder?: string;
  name: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: any) => void;
  readonly?: boolean;
};

export interface RequiredFieldProps {
  label: string;
}

export enum Inputs {
  CheckBox = "CheckBox",
  CheckBoxRounded = "CheckBoxRounded",
  Color = "Color",
  Date = "Date",
  Email = "Email",
  FileUpload = "FileUpload",
  Password = "Password",
  Number = "Number",
  Otp = "Otp",
  Search = "Search",
  SelectCountry = "SelectCountry",
  Select = "Select",
  Sort = "Sort",
  Tel = "Tel",
  TextArea = "TextArea",
  Text = "Text",
  Time = "Time",
  TimeRange = "TimeRange",
  Toggle = "Toggle",
}
