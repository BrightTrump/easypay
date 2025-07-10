"use client";

import React, { useState } from "react";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { useContactSearch } from "@/hooks/contact/contact-search.hook";
import { PublicContact } from "@/@types/contact.type";
import ProfileInitials from "@/components/web-app/_shared/profile-initials";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { normalize } from "@/utils/format.utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectContactInputProps {
  clientId?: string;
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  defaultValue?: PublicContact;
  readonly?: boolean;
  onInput?: () => void;
  onChange?: (e: PublicContact) => void;
}

export function SelectContactInput({
  clientId,
  label,
  placeholder,
  name,
  required,
  defaultValue,
  readonly,
  onInput,
  onChange,
}: SelectContactInputProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<PublicContact | null>(
    defaultValue || null
  );

  const { contacts, contactSearch, isFetching } = useContactSearch(clientId);

  const handleOnChange = (contact: PublicContact) => {
    setValue(contact);
    onChange?.(contact);
    onInput?.();
    setOpen(false);
  };

  return (
    <div className="grid gap-2 content-start">
      {label && (
        <label className={`label`}>
          {label} {required && "*"}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={readonly}>
          <div className="border border-[#DFDFDF] grid grid-cols-[auto_1fr_auto] gap-2 items-center rounded-sm py-2 px-3 cursor-pointer text-left">
            <ProfileInitials
              size={24}
              firstLetter={value?.firstName[0]}
              secondLetter={value?.lastName[0]}
              color={value?.colorCode}
            />
            <div className="relative">
              {value && (
                <span>
                  {normalize(value?.firstName)} {normalize(value?.lastName)}
                </span>
              )}
              {!value && placeholder && (
                <span className="text-sm opacity-50">{placeholder}</span>
              )}
              <input
                type="text"
                name={name}
                value={value?.contactId || ""}
                readOnly
                className="absolute inset-0 opacity-0"
              />
            </div>
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <div className="bg-white rounded-sm grid grid-rows-[auto_1fr] overflow-hidden max-h-64">
            {/* Search */}
            <div className=" grid grid-cols-[auto_1fr] gap-3 items-center py-2 px-3 border-b border-[#DEDEDE]">
              {isFetching ? (
                <span className="w-4 h-4 rounded-full block border-2 border-black border-b-transparent animate-spin opacity-40" />
              ) : (
                <Icon type={Icons.Search} size={16} color="#8C8C8C" />
              )}
              <input
                type="text"
                placeholder="Search Contact"
                className="text-sm placeholder:text-[#8C8C8C] outline-none"
                onChange={(e) => contactSearch(e.target.value)}
                required={required}
              />
            </div>

            {!!contacts?.length && (
              <div className="grid px-1 py-1 overflow-y-auto custom-scroll-bar">
                {contacts?.map((contact) => (
                  <button
                    key={contact?.userId}
                    onClick={() => handleOnChange(contact)}
                    className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                  >
                    <ProfileInitials
                      size={24}
                      firstLetter={contact?.firstName[0]}
                      secondLetter={contact?.lastName[0]}
                      color={contact?.colorCode}
                    />
                    <span>
                      {normalize(contact?.firstName)}{" "}
                      {normalize(contact?.lastName)}
                    </span>
                    <CheckIcon
                      size={16}
                      className={cn(
                        "transition-all",
                        value?.contactId === contact?.contactId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}
            {contacts && !contacts.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Contact found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
