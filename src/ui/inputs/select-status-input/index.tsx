"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { WorkItemStatus } from "@/@types/work-item-status.type";
import { useFetchWorkItemStatuses } from "@/hooks/work-item-status/fetch-work-item-statuses.hook";

export interface SelectStatusInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  readonly?: boolean;
  required?: boolean;
  value?: WorkItemStatus;
  defaultValue?: WorkItemStatus;
  onInput?: () => void;
  onChange?: (e: string) => void;
}

export function SelectStatusInput({
  label,
  placeholder,
  name,
  required,
  value,
  defaultValue,
  readonly,
  onInput,
  onChange,
}: SelectStatusInputProps) {
  const [selectedOption, setSelectedOption] = useState<WorkItemStatus | null>(
    value || defaultValue || null
  );

  const { workItemStatuses } = useFetchWorkItemStatuses();

  const getStatus = (statusId?: string) => {
    if (!workItemStatuses || !statusId) return;
    return workItemStatuses.filter(
      (item) => item?.workItemStatusId === statusId
    )[0];
  };

  const handleOnValueChange = (e: string) => {
    !value && setSelectedOption(getStatus(e)!);
    onChange?.(e);
    onInput?.();
  };

  useEffect(() => {
    if (
      value !== undefined &&
      value?.workItemStatusId !== selectedOption?.workItemStatusId
    ) {
      setSelectedOption(value);
    }
    if (
      defaultValue !== undefined &&
      defaultValue?.workItemStatusId !== selectedOption?.workItemStatusId
    ) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue, value, workItemStatuses]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className="label">
          {label} {required && "*"}
        </label>
      )}

      <Select
        name={name}
        value={selectedOption?.workItemStatusId}
        onValueChange={handleOnValueChange}
      >
        <SelectTrigger disabled={readonly}>
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <span
              style={{
                backgroundColor: selectedOption?.colorCode,
              }}
              className={`w-2 h-2 rounded-full block`}
            ></span>
            <input
              type="text"
              className="w-full bg-transparent outline-none cursor-pointer text-[#555555] placeholder:text-[#8C8C8C]"
              value={selectedOption?.name || ""}
              placeholder={placeholder}
              readOnly
            />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {workItemStatuses?.map((option) => (
              <SelectItem
                key={option?.workItemStatusId}
                value={option?.workItemStatusId}
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
