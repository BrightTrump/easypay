"use client";

import React, { JSX } from "react";
import "./index.css";
import { TextInput } from "./text-input";
import { InputBaseProps, InputProps, Inputs } from "./types";
import { CheckBoxInput, CheckBoxInputProps } from "./check-box-input";
import {
  CheckBoxRoundedInput,
  CheckBoxRoundedInputProps,
} from "./check-box-rounded-input";
import { EmailInput } from "./email-input";
import { PasswordInput, PasswordInputProps } from "./password-input";
import { SearchInput, SearchInputProps } from "./search-input";
import { NumberInput } from "./number-input";
import OtpInput, { OtpInputProps } from "./otp-input";
import { TelInput } from "./tel-input";
import { DateInput, DateInputProps } from "./date-input";
import { TextAreaInput } from "./text-area-input";
import { SortInput, SortInputProps } from "./sort-input";
import { TimeInput } from "./time-input";
import { ToggleInput, ToggleInputProps } from "./toggle-input/input";
import { TimeRangeInput } from "./time-range-input";

import ColorInput, { ColorInputProps } from "./color-input";
import SelectCountryInput, {
  SelectCountryInputProps,
} from "./select-country-input";
import { SelectInput, SelectInputProps } from "./select-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;
  const checkBoxInputProps = props as CheckBoxInputProps;
  const checkBoxRoundedInputProps = props as CheckBoxRoundedInputProps;
  const colorInputProps = props as ColorInputProps;
  const dateInputProps = props as DateInputProps;
  const otpInputProps = props as OtpInputProps;
  const passwordInputProps = props as PasswordInputProps;
  const searchInputProps = props as SearchInputProps;
  const selectInputProps = props as SelectInputProps;
  const selectCountryInputProps = props as SelectCountryInputProps;
  const sortInputProps = props as SortInputProps;
  const toggleInputProps = props as ToggleInputProps;

  switch (type) {
    case Inputs.CheckBox:
      return <CheckBoxInput {...checkBoxInputProps} />;

    case Inputs.CheckBoxRounded:
      return <CheckBoxRoundedInput {...checkBoxRoundedInputProps} />;

    case Inputs.Color:
      return <ColorInput {...colorInputProps} />;

    case Inputs.Date:
      return <DateInput {...dateInputProps} />;

    case Inputs.Email:
      return <EmailInput {...inputBaseProps} />;

    case Inputs.Number:
      return <NumberInput {...inputBaseProps} />;

    case Inputs.Otp:
      return <OtpInput {...otpInputProps} />;

    case Inputs.Password:
      return <PasswordInput {...passwordInputProps} />;

    case Inputs.Search:
      return <SearchInput {...searchInputProps} />;

    case Inputs.SelectCountry:
      return <SelectCountryInput {...selectCountryInputProps} />;

    case Inputs.Select:
      return <SelectInput {...selectInputProps} />;

    case Inputs.Sort:
      return <SortInput {...sortInputProps} />;

    case Inputs.Tel:
      return <TelInput {...inputBaseProps} />;

    case Inputs.TextArea:
      return <TextAreaInput {...inputBaseProps} />;

    case Inputs.Text:
      return <TextInput {...inputBaseProps} />;

    case Inputs.Time:
      return <TimeInput {...inputBaseProps} />;

    case Inputs.TimeRange:
      return <TimeRangeInput {...inputBaseProps} />;

    case Inputs.Toggle:
      return <ToggleInput {...toggleInputProps} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
