"use client";

import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { normalize } from "@/utils/format.utils";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { useTenantLabelSearch } from "@/hooks/labels/tenant-label-search.hook";
import { LabelTargets, TenantLabelSearch } from "@/@types/labels";

export interface SelectLabelInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  defaultValue?: TenantLabelSearch | null;
  target: LabelTargets;
  readonly?: boolean;
  onInput?: () => void;
  onChange?: (e: TenantLabelSearch) => void;
  showLoggedInUser?: boolean;
}

export function SelectLabelInput({
  label,
  placeholder,
  name,
  defaultValue,
  target,
  required,
  readonly,
  onChange,
  onInput,
}: SelectLabelInputProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<TenantLabelSearch | null>(
    defaultValue || null
  );

  const { tenantLabels, tenantLabelSearch, isFetching } =
    useTenantLabelSearch(target);

  const handleOnChange = (label: TenantLabelSearch) => {
    setValue(label);
    onChange?.(label);
    onInput?.();
    setOpen(false);
  };

  useEffect(() => {
    onInput?.();
  }, [value]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className={`label`}>
          {label} {required && "*"}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={readonly}>
          <div className="border border-[#DFDFDF] grid grid-cols-[auto_1fr_auto] gap-2 items-center rounded-sm py-3 px-3 cursor-pointer text-left">
            <span
              style={{ background: value?.colorCode || "#E9E9E9" }}
              className="w-5 h-5 rounded-sm block"
            />

            <div className="relative">
              {value && (
                <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm text-[#555555]">
                  {normalize(value?.name!)}
                </span>
              )}
              {!value && placeholder && (
                <span className="grid text-sm opacity-50 whitespace-nowrap w-full overflow-hidden text-ellipsis">
                  {placeholder}
                </span>
              )}
              <input
                type="text"
                name={name}
                value={value?.tenantLabelId || ""}
                readOnly
                className="absolute inset-0 opacity-0"
              />
            </div>
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <div className="bg-white rounded-sm grid grid-rows-[auto_1fr] overflow-hidden">
            {/* Search */}
            <div className=" grid grid-cols-[auto_1fr] gap-3 items-center py-2 px-3 border-b border-[#DEDEDE]">
              {isFetching ? (
                <span className="w-4 h-4 rounded-full block border-2 border-black border-b-transparent animate-spin opacity-40" />
              ) : (
                <Icon type={Icons.Search} size={16} color="#8C8C8C" />
              )}
              <input
                type="text"
                placeholder="Search Label"
                className="text-sm placeholder:text-[#8C8C8C] outline-none"
                onChange={(e) => tenantLabelSearch(e.target.value)}
                required={required}
              />
            </div>

            {!!tenantLabels?.length && (
              <div className="grid px-1 py-1">
                {tenantLabels.map((label) => (
                  <button
                    key={label?.tenantLabelId}
                    onClick={() => handleOnChange(label)}
                    className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                  >
                    <span
                      style={{ background: label?.colorCode }}
                      className="w-5 h-5 rounded-sm block"
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {normalize(label?.name!)}
                    </span>
                    <CheckIcon
                      size={16}
                      className={cn(
                        "transition-all",
                        value?.tenantLabelId === label?.tenantLabelId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}

            {tenantLabels && !tenantLabels.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Label found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
