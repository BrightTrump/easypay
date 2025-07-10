import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import React from "react";

export type CheckBoxInputProps = {
  value: boolean;
  onChangeCheckBoxInputValue: (e: boolean) => void;
};

export function CheckBoxInput({
  onChangeCheckBoxInputValue,
  value,
}: CheckBoxInputProps) {
  const handleCheckBoxOnChange = () => {
    onChangeCheckBoxInputValue?.(!value);
  };

  return (
    <button
      className={`w-4 h-4 rounded-sm grid relative border place-content-center transition-all ${
        value ? "bg-black border-black" : "bg-white border-[#555555]"
      }`}
      onClick={handleCheckBoxOnChange}
      type="button"
    >
      <Icon type={Icons.Check} size={16} color={"white"} />
    </button>
  );
}
