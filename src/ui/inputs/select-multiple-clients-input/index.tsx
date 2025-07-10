"use client";

import React, { useEffect, useRef, useState } from "react";
import ProfileInitials from "@/components/web-app/_shared/profile-initials";
import { useAuthUser } from "@/hooks/auth/auth-user.hook";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { useClientSearch } from "@/hooks/client/client-search.hook";
import { Client } from "@/@types/client.type";

export interface SelectMultipleClientsInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  defaultValue?: Client[] | null;
  readonly?: boolean;
  onInput?: () => void;
  onChange?: (e: string) => void;
}

export function SelectMultipleClientsInput({
  label,
  placeholder,
  name,
  defaultValue,
  required,
  readonly,
  onChange,
}: SelectMultipleClientsInputProps) {
  const { profile } = useAuthUser();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Client[]>(defaultValue || []);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { clients, clientSearch, isFetching } = useClientSearch();

  const handleOnChange = (client: Client) => {
    value.map((val) => val.clientId).includes(client?.clientId)
      ? setValue((prev) =>
          prev.filter((item) => item?.clientId !== client?.clientId)
        )
      : setValue((prev) => [...prev, client]);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  useEffect(() => {
    onChange?.(value.map((item) => item?.clientId).join(";"));
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
                  placeholder={`${readonly ? "Selected" : "Search"} Clients`}
                  className="text-sm placeholder:text-[#8C8C8C] outline-none bg-transparent"
                  onChange={(e) => clientSearch(e.target.value)}
                />
                <input
                  type="text"
                  name={name}
                  value={value.map((item) => item?.clientId).join(";")}
                  className="absolute inset-0 opacity-0"
                  required={required}
                  readOnly
                />
              </div>
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </PopoverTrigger>

          {/* Selected Clients */}
          <div className="flex flex-wrap gap-1.5">
            {value?.map((client) => (
              <div
                key={client?.clientId}
                className="w-max flex gap-4 items-center bg-[#EBEBEB] px-2.5 py-2 rounded-full"
              >
                <div className="flex items-center gap-1">
                  <ProfileInitials
                    size={24}
                    firstLetter={client?.name[0]}
                    secondLetter={client?.name[1]}
                    color={""}
                  />
                  <span className="text-xs">{client?.name}</span>
                </div>
                <button onClick={() => handleOnChange(client)}>
                  <Icon type={Icons.Close} size={16} color="#252525" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <div className="bg-white rounded-sm grid overflow-hidden">
            {!!clients?.length && (
              <div className="grid px-1 py-1">
                {clients?.map((client) => (
                  <button
                    key={client?.clientId}
                    onClick={() => handleOnChange(client)}
                    className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                  >
                    <ProfileInitials
                      size={24}
                      firstLetter={client?.name[0]}
                      secondLetter={client?.name[1]}
                      color={""}
                    />
                    <span>{client?.name}</span>
                    <CheckIcon
                      size={16}
                      className={cn(
                        "transition-all",
                        value?.includes(client) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}

            {clients && !clients.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Client found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
