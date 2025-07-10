import React from "react";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export type CheckBoxRoundedInputProps = {
  value?: boolean;
  onChangeCheckBoxInputValue: (e: boolean) => void;
};

export function CheckBoxRoundedInput({
  value,
  onChangeCheckBoxInputValue,
}: CheckBoxRoundedInputProps) {
  const handleCheckBoxOnChange = () => {
    onChangeCheckBoxInputValue?.(!value);
  };

  return (
    <button
      className={`w-4 h-4 rounded-full grid relative border place-content-center transition-all ${
        value ? "bg-black border-black" : "bg-white border-[#555555]"
      }`}
      onClick={handleCheckBoxOnChange}
      type="button"
    >
      <Icon type={Icons.Check} size={16} color={"white"} />
    </button>
  );
}
