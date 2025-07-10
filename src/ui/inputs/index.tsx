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
import { SelectInput, SelectInputProps } from "./select-input";
import { NumberInput } from "./number-input";
import OtpInput, { OtpInputProps } from "./otp-input";
import { TelInput } from "./tel-input";
import { DateInput, DateInputProps } from "./date-input";
import { TextAreaInput } from "./text-area-input";
import { SortInput, SortInputProps } from "./sort-input";
import { TimeInput } from "./time-input";
import {
  SelectContactInput,
  SelectContactInputProps,
} from "./select-contact-input";
import { SelectTeamInput, SelectTeamInputProps } from "./select-team-input";

import {
  SelectMilestoneInput,
  SelectMilestoneInputProps,
} from "./select-milestone-input";
import ColorInput, { ColorInputProps } from "./color-input";

import { ToggleInput, ToggleInputProps } from "./toggle-input/input";

import { SelectGroupInput, SelectGroupInputProps } from "./select-group-input";
import { TimeRangeInput } from "./time-range-input";
import {
  SelectStatusInput,
  SelectStatusInputProps,
} from "./select-status-input";
import { SelectLabelInput, SelectLabelInputProps } from "./select-label-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;
  const colorInputProps = props as ColorInputProps;
  const checkBoxInputProps = props as CheckBoxInputProps;
  const checkBoxRoundedInputProps = props as CheckBoxRoundedInputProps;
  const dateInputProps = props as DateInputProps;
  const otpInputProps = props as OtpInputProps;
  const passwordInputProps = props as PasswordInputProps;
  const selectContactInputProps = props as SelectContactInputProps;
  const selectGroupInputProps = props as SelectGroupInputProps;
  const searchInputProps = props as SearchInputProps;
  const selectLabelInputProps = props as SelectLabelInputProps;
  const selectMilestoneInputProps = props as SelectMilestoneInputProps;
  const selectInputProps = props as SelectInputProps;
  const selectStatusInputProps = props as SelectStatusInputProps;
  const selectTeamInputProps = props as SelectTeamInputProps;
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

    case Inputs.SelectContact:
      return <SelectContactInput {...selectContactInputProps} />;

    case Inputs.SelectGroup:
      return <SelectGroupInput {...selectGroupInputProps} />;

    case Inputs.Select:
      return <SelectInput {...selectInputProps} />;

    case Inputs.SelectLabel:
      return <SelectLabelInput {...selectLabelInputProps} />;

    case Inputs.SelectMilestone:
      return <SelectMilestoneInput {...selectMilestoneInputProps} />;

    case Inputs.SelectStatus:
      return <SelectStatusInput {...selectStatusInputProps} />;

    case Inputs.SelectTeam:
      return <SelectTeamInput {...selectTeamInputProps} />;

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
