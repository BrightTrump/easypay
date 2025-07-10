"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { convertEnumToArray } from "@/utils/convert.utils";
import { ProjectStatuses } from "@/@types/projects.type";
import { getProjectStatusColor } from "@/utils/project.util";
import { spaceWords } from "@/utils/text.util";

export interface SelectProjectStatusInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  readonly?: boolean;
  required?: boolean;
  value?: ProjectStatuses;
  defaultValue?: ProjectStatuses;
  onInput?: () => void;
  onChange?: (e: ProjectStatuses) => void;
}

export function SelectProjectStatusInput({
  label,
  placeholder,
  name,
  required,
  value,
  defaultValue,
  readonly,
  onInput,
  onChange,
}: SelectProjectStatusInputProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || defaultValue || ""
  );

  const [onInValid, setOnInvalid] = useState(false);

  const handleOnValueChange = (e: ProjectStatuses) => {
    !value && setSelectedOption(e);
    onChange?.(e);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined && value !== selectedOption) {
      setSelectedOption(value);
    }
    if (defaultValue !== undefined && defaultValue !== selectedOption) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue, value]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className="label">
          {label} {required && "*"}
        </label>
      )}

      <Select
        name={name}
        value={selectedOption}
        onValueChange={handleOnValueChange}
      >
        <SelectTrigger disabled={readonly}>
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <span
              style={{
                backgroundColor: getProjectStatusColor(
                  selectedOption as ProjectStatuses
                ),
              }}
              className={`w-2 h-2 rounded-full block`}
            ></span>
            <input
              type="text"
              className="w-full bg-transparent outline-none cursor-pointer text-[#555555] placeholder:text-[#8C8C8C]"
              value={spaceWords(selectedOption)}
              placeholder={placeholder}
              readOnly
            />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {convertEnumToArray(ProjectStatuses)?.map((option, index) => (
              <SelectItem key={`${option}-${index}`} value={option}>
                <span className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <span
                    style={{
                      backgroundColor: getProjectStatusColor(
                        option as ProjectStatuses
                      ),
                    }}
                    className={`w-2 h-2 rounded-full block`}
                  ></span>
                  {spaceWords(option)}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
