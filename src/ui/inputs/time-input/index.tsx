"use client";

import React, { useRef, useState } from "react";
import { InputBaseProps } from "../types";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function TimeInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
  readonly,
}: InputBaseProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(
    defaultValue || "01 : 00 AM"
  );
  const [meridiem, setMeridiem] = useState<"AM" | "PM">("AM");

  const handleFormSubmit = () => {
    const formData = new FormData(formRef.current || undefined);
    const hours = formData.get("time-input-hours") as string;
    const minutes = formData.get("time-input-minutes") as string;
    setInputValue(
      `${hours.length < 2 ? `0${hours || 1}` : hours} : ${
        minutes.length < 2 ? `0${minutes || 0}` : minutes
      } ${meridiem}`
    );
    onChange?.(
      `${hours.length < 2 ? `0${hours || 1}` : hours} : ${
        minutes.length < 2 ? `0${minutes || 0}` : minutes
      } ${meridiem}`
    );
    setIsOpen(false);
  };

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label htmlFor={id} className={`label`}>
          {label} {required && "*"}
        </label>
      )}

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger disabled={readonly}>
          <div
            className={`grid grid-cols-[auto_1fr_auto] items-center gap-2.5 p-2.5 border border-[#DFDFDF] rounded-sm relative cursor-pointer`}
          >
            <Icon type={Icons.TimeCircle} size={17} color="#555555" />

            <input
              id={id}
              type={"text"}
              placeholder={placeholder}
              value={inputValue}
              name={name}
              readOnly
              required={required}
              className="bg-transparent text-sm text-[#555555] outline-none cursor-pointer w-full"
            />
            <Icon type={Icons.ChevronDown} size={20} color="#555555" />
          </div>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-[--radix-popover-trigger-width] p-0"
        >
          <div className="rounded-sm overflow-hidden bg-white">
            {/* Meridiem */}
            <div
              className={cn(
                "grid grid-cols-2 [&_button]:py-2 [&_button]:transition-all text-xs"
              )}
            >
              <button
                type="button"
                onClick={() => setMeridiem("AM")}
                className={cn(
                  meridiem === "AM"
                    ? "bg-black text-white"
                    : "bg-[#E6E6E6] text-[#555555]"
                )}
              >
                AM
              </button>
              <button
                type="button"
                onClick={() => setMeridiem("PM")}
                className={cn(
                  meridiem === "PM"
                    ? "bg-black text-white"
                    : "bg-[#E6E6E6] text-[#555555]"
                )}
              >
                PM
              </button>
            </div>

            <form
              ref={formRef}
              className="grid gap-3 px-3 py-3 [&_input]:border [&_input]:rounded-sm [&_input]:w-full [&_input]:outline-none [&_input]:text-sm [&_input]:py-0.5 [&_input]:px-1"
            >
              {/* Hours */}
              <div className="grid gap-1">
                <label
                  htmlFor="time-input-hours"
                  className="text-xs text-blackgray"
                >
                  Hour(s)
                </label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  defaultValue={inputValue.substring(0, 2)}
                  id="time-input-hours"
                  name="time-input-hours"
                />
              </div>

              {/* Minutes */}
              <div className="grid gap-1">
                <label
                  htmlFor="time-input-minutes"
                  className="text-xs text-blackgray"
                >
                  Minute(s)
                </label>
                <input
                  type="number"
                  max={59}
                  defaultValue={inputValue.substring(5, 7)}
                  id="time-input-minutes"
                  name="time-input-minutes"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-[#555555] bg-[#E9E9E9] py-1 rounded-sm text-sm mt-3 transition-all"
                  )}
                >
                  Cancel
                </button>
                <button
                  type={"button"}
                  onClick={handleFormSubmit}
                  className={cn(
                    "text-white bg-black py-1 rounded-sm text-sm mt-3 transition-all"
                  )}
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
