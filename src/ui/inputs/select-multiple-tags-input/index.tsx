"use client";

import React, { useEffect, useRef, useState } from "react";
import ProfileInitials from "@/components/web-app/_shared/profile-initials";
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
import { TagTargets, TenantTagSearch } from "@/@types/tags";
import { useTenantTagSearch } from "@/hooks/tags/tenant-tag-search.hook";

export interface SelectMultipleTagsInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  readonly?: boolean;
  target: TagTargets;
  defaultValue?: TenantTagSearch[] | null;
  omit?: string[];
  onInput?: () => void;
  onChange?: (e: string) => void;
}

export function SelectMultipleTagsInput({
  label,
  name,
  defaultValue,
  required,
  readonly,
  target,
  omit,
  onChange,
}: SelectMultipleTagsInputProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<TenantTagSearch[]>(defaultValue || []);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { tenantTags, tenantTagSearch, isFetching } =
    useTenantTagSearch(target);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const handleOnChange = (tag: TenantTagSearch) => {
    value.map((val) => val.tenantTagId).includes(tag?.tenantTagId)
      ? setValue((prev) =>
          prev.filter((item) => item?.tenantTagId !== tag?.tenantTagId)
        )
      : setValue((prev) => [...prev, tag]);
    setOpen(false);
  };

  useEffect(() => {
    onChange?.(value.map((item) => item?.tenantTagId).join(";"));
  }, [value]);

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className="label">
          {label} {required && "*"}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <div className="grid gap-3">
          <PopoverTrigger disabled={readonly}>
            <div
              className={cn(
                "grid gap-3 items-center py-2 px-3 border border-[#DEDEDE] rounded-sm cursor-text text-left",
                readonly ? "grid-cols-[1fr_auto]" : "grid-cols-[auto_1fr_auto]"
              )}
            >
              {!readonly &&
                (isFetching ? (
                  <span className="w-4 h-4 rounded-full block border-2 border-black border-b-transparent animate-spin opacity-40" />
                ) : (
                  <Icon type={Icons.Search} size={16} color="#8C8C8C" />
                ))}
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={`${readonly ? "Selected" : "Search"} Tag`}
                  className="text-sm placeholder:text-[#8C8C8C] outline-none bg-transparent"
                  onChange={(e) => tenantTagSearch(e.target.value)}
                />
                <input
                  type="text"
                  name={name}
                  value={value.map((item) => item?.tenantTagId).join(";")}
                  className="absolute inset-0 opacity-0"
                  required={required}
                  readOnly
                />
              </div>
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </PopoverTrigger>

          {/* Selected Tags */}
          <div className="flex flex-wrap gap-1.5">
            {value?.map((tag) => (
              <div
                key={tag?.tenantTagId}
                className="w-max flex gap-4 items-center bg-[#EBEBEB] px-2.5 py-2 rounded-sm"
              >
                <div className="flex items-center gap-1">
                  <span
                    style={{ background: tag?.colorCode }}
                    className="w-5 h-5 block rounded-sm"
                  />
                  <span className="text-xs">{normalize(tag?.name!)}</span>
                </div>
                <button onClick={() => handleOnChange(tag)}>
                  <Icon type={Icons.Close} size={16} color="#252525" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <div className="bg-white rounded-sm grid overflow-hidden">
            {!!tenantTags?.length && (
              <div className="grid px-1 py-1">
                {tenantTags
                  .filter((item) => !omit?.includes(item?.name!))
                  ?.map((tag) => (
                    <button
                      key={tag?.tenantTagId}
                      onClick={() => handleOnChange(tag)}
                      className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                    >
                      <span
                        style={{ background: tag?.colorCode }}
                        className="w-5 h-5 block rounded-sm"
                      />
                      <span className="text-xs">{normalize(tag?.name!)}</span>
                      <CheckIcon
                        size={16}
                        className={cn(
                          "transition-all",
                          value?.includes(tag) ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </button>
                  ))}
              </div>
            )}

            {tenantTags && !tenantTags.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Tag found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
