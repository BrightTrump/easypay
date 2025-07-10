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
import { useContactSearch } from "@/hooks/contact/contact-search.hook";
import { Contact } from "@/@types/contact.type";

export interface SelectMultipleContactsInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  readonly?: boolean;
  defaultValue?: Contact[] | null;
  onInput?: () => void;
  onChange?: (e: string) => void;
}

export function SelectMultipleContactsInput({
  label,
  name,
  defaultValue,
  required,
  readonly,
  onChange,
}: SelectMultipleContactsInputProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Contact[]>(defaultValue || []);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { contacts, contactSearch, isFetching } = useContactSearch();

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const handleOnChange = (contact: Contact) => {
    value.map((val) => val.contactId).includes(contact?.contactId)
      ? setValue((prev) =>
          prev.filter((item) => item?.contactId !== contact?.contactId)
        )
      : setValue((prev) => [...prev, contact]);
    setOpen(false);
  };

  useEffect(() => {
    onChange?.(value.map((item) => item?.contactId).join(";"));
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
                  placeholder={`${readonly ? "Selected" : "Search"} Contact`}
                  className="text-sm placeholder:text-[#8C8C8C] outline-none bg-transparent"
                  onChange={(e) => contactSearch(e.target.value)}
                />
                <input
                  type="text"
                  name={name}
                  value={value.map((item) => item?.userId).join(";")}
                  className="absolute inset-0 opacity-0"
                  required={required}
                  readOnly
                />
              </div>
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </PopoverTrigger>

          {/* Selected Users */}
          <div className="flex flex-wrap gap-1.5">
            {value?.map((user) => (
              <div
                key={user?.userId}
                className="w-max flex gap-4 items-center bg-[#EBEBEB] px-2.5 py-2 rounded-full"
              >
                <div className="flex items-center gap-1">
                  <ProfileInitials
                    size={24}
                    firstLetter={user?.firstName[0]}
                    secondLetter={user?.lastName[0]}
                    color={user?.colorCode}
                  />
                  <span className="text-xs">
                    {normalize(user?.firstName)} {normalize(user?.lastName)}
                  </span>
                </div>
                <button onClick={() => handleOnChange(user)}>
                  <Icon type={Icons.Close} size={16} color="#252525" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <div className="bg-white rounded-sm grid overflow-hidden">
            {!!contacts?.length && (
              <div className="grid px-1 py-1">
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
                        value?.includes(contact) ? "opacity-100" : "opacity-0"
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
