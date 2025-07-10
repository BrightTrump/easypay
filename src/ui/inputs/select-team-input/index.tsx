"use client";

import React, { useState } from "react";
import { PublicUser } from "@/@types/_index";
import { useTeamSearch } from "@/hooks/team/team-search.hook";
import ProfileInitials from "@/components/web-app/_shared/profile-initials";
import { useAuthUser } from "@/hooks/auth/auth-user.hook";
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

export interface SelectTeamInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  defaultValue?: PublicUser | null;
  readonly?: boolean;
  onInput?: () => void;
  onChange?: (e: PublicUser) => void;
  showLoggedInUser?: boolean;
}

export function SelectTeamInput({
  label,
  placeholder,
  name,
  defaultValue,
  required,
  readonly,
  showLoggedInUser,
  onChange,
  onInput,
}: SelectTeamInputProps) {
  const { profile } = useAuthUser();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<PublicUser | null>(defaultValue || null);

  const { teams, teamSearch, isFetching } = useTeamSearch();

  const handleOnChange = (team: PublicUser) => {
    setValue(team);
    onChange?.(team);
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
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {normalize(value?.firstName)} {normalize(value?.lastName)}
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
                value={value?.userId || ""}
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
                placeholder="Search Team Member"
                className="text-sm placeholder:text-[#8C8C8C] outline-none"
                onChange={(e) => teamSearch(e.target.value)}
                required={required}
              />
            </div>

            {!!teams?.length && (
              <div className="grid px-1 py-1">
                {(showLoggedInUser
                  ? teams
                  : teams.filter((item) => item.userId !== profile?.userId)
                )?.map((team) => (
                  <button
                    key={team?.userId}
                    onClick={() => handleOnChange(team)}
                    className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                  >
                    <ProfileInitials
                      size={24}
                      firstLetter={team?.firstName[0]}
                      secondLetter={team?.lastName[0]}
                      color={team?.colorCode}
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {normalize(team?.firstName)} {normalize(team?.lastName)}
                    </span>
                    <CheckIcon
                      size={16}
                      className={cn(
                        "transition-all",
                        value?.userId === team?.userId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}
            {teams && !teams.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Team Member found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
