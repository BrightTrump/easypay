"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { normalize } from "@/utils/format.utils";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { TeamGroupSearch } from "@/@types/team-group";
import { useTeamGroupSearch } from "@/hooks/team-group/team-group-search.hook";

export interface SelectGroupInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  defaultValue?: TeamGroupSearch | null;
  onInput?: () => void;
  onChange?: (e: TeamGroupSearch) => void;
}

export function SelectGroupInput({
  label,
  placeholder,
  name,
  defaultValue,
  required,
}: SelectGroupInputProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<TeamGroupSearch | null>(
    defaultValue || null
  );

  const { teamGroups, teamGroupSearch, isFetching } = useTeamGroupSearch();

  const handleOnChange = (team: TeamGroupSearch) => {
    setValue(team);
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
        <PopoverTrigger asChild>
          <div className="border border-[#DFDFDF] grid grid-cols-[1fr_auto] gap-3 items-center rounded-sm py-2 px-3 cursor-pointer">
            <div className="relative">
              {value && <span>{normalize(value?.name)}</span>}
              {!value && placeholder && (
                <span className="text-sm opacity-50">{placeholder}</span>
              )}
              <input
                type="text"
                name={name}
                value={value?.teamGroupId || ""}
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
                placeholder="Search Group"
                className="text-sm placeholder:text-[#8C8C8C] outline-none"
                onChange={(e) => teamGroupSearch(e.target.value)}
                required={required}
              />
            </div>

            {!!teamGroups?.length && (
              <div className="grid px-1 py-1">
                {teamGroups.map((teamGroup) => (
                  <button
                    key={teamGroup?.teamGroupId}
                    onClick={() => handleOnChange(teamGroup)}
                    className="text-left grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm px-2 py-2.5 rounded-sm hover:bg-accent"
                  >
                    <span>{normalize(teamGroup?.name)}</span>
                    <CheckIcon
                      size={16}
                      className={cn(
                        "transition-all",
                        value?.teamGroupId === teamGroup?.teamGroupId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}
            {teamGroups && !teamGroups.length && (
              <p className="grid place-content-center py-5 text-[#555555] text-sm">
                No Group found!
              </p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
