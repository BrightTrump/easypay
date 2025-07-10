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
import { Milestone } from "@/@types/milestone.type";
import { useFetchMilestones } from "@/hooks/milestone/fetch-milestones.hook";

export interface SelectMilestoneInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  projectId: string;
  readonly?: boolean;
  required?: boolean;
  value?: Milestone;
  defaultValue?: Milestone;
  onInput?: () => void;
  onChange?: (e: Milestone) => void;
}

export function SelectMilestoneInput({
  label,
  placeholder,
  name,
  required,
  value,
  projectId,
  defaultValue,
  readonly,
  onInput,
  onChange,
}: SelectMilestoneInputProps) {
  const [selectedOption, setSelectedOption] = useState<Milestone | null>(
    value || defaultValue || null
  );

  const { milestones, isFetching } = useFetchMilestones(projectId);

  const getMilestone = (milestoneId?: string) => {
    if (!milestones || !milestoneId) return;
    return milestones.filter((item) => item?.milestoneId === milestoneId)[0];
  };

  const handleOnValueChange = (e: string) => {
    !value && setSelectedOption(getMilestone(e)!);
    onChange?.(getMilestone(e)!);
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
        value={selectedOption?.milestoneId}
        onValueChange={handleOnValueChange}
      >
        <SelectTrigger disabled={readonly}>
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <span
              style={{
                backgroundColor: selectedOption?.colorCode || "#E9E9E9",
              }}
              className={`w-2 h-2 rounded-full block`}
            ></span>
            <input
              type="text"
              className="w-full bg-transparent outline-none cursor-pointer text-[#555555] placeholder:text-[#8C8C8C]"
              value={selectedOption?.name}
              placeholder={placeholder}
              readOnly
            />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {milestones?.map((option, index) => (
              <SelectItem
                key={`${option}-${index}`}
                value={option?.milestoneId}
              >
                <span className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <span
                    style={{
                      backgroundColor: option?.colorCode,
                    }}
                    className={`w-2 h-2 rounded-full block`}
                  ></span>
                  {option?.name}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
