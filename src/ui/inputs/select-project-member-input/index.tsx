"use client";

import React, { useCallback, useEffect, useState } from "react";
import RequiredField from "../_shared/required-field";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import { encodeData } from "@/utils/codec.util";
import ProfileInitials from "@/components/web-app/_shared/profile-initials";
import { ProjectMemberSearch } from "@/@types/project-member";
import { useProjectMemberSearch } from "@/hooks/project-member/project-member-search.hook";

export interface SelectProjectMemberInputProps {
  projectId?: string;
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  isLoading?: boolean;
  defaultValue?: ProjectMemberSearch | null;
  onInput?: () => void;
  dropDownPos?: "top" | "bottom";
  onChange?: (e: ProjectMemberSearch) => void;
}

export function SelectProjectMemberInput({
  projectId,
  label,
  placeholder,
  name,
  required,
  isLoading,
  defaultValue,
  onInput,
  dropDownPos,
  onChange,
}: SelectProjectMemberInputProps) {
  console.log(projectId);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<ProjectMemberSearch | null>();
  const [onInValid, setOnInvalid] = useState(false);

  const { projectMembers, projectMemberSearch, isFetching } =
    useProjectMemberSearch(projectId!);

  const handleShowOptions = () => {
    setOnInvalid(false);
    setShowOptions(!showOptions);
  };

  const handleSelectOption = useCallback(
    (option: ProjectMemberSearch | null) => {
      if (
        selectedOption?.contactId !== option?.contactId &&
        selectedOption?.userId !== option?.userId
      ) {
        setSelectedOption(option);
        onChange?.(option!);
      }
      setShowOptions(false);
    },
    [selectedOption, onChange]
  );

  const handleOnInvalid = (e: any) => {
    setOnInvalid(true);
  };

  useEffect(() => {
    defaultValue && setSelectedOption(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    onInput?.();
  }, [selectedOption, onInput]);

  useEffect(() => {
    !projectId && handleSelectOption(null);
  }, [projectId, handleSelectOption]);

  return (
    <div className="grid gap-2 content-start">
      <label onClick={handleShowOptions} className={`label`}>
        {label} {required && "*"}
      </label>

      {/* Options */}
      {showOptions && (
        <span
          onClick={handleShowOptions}
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.2)] z-10"
        ></span>
      )}

      <div className={`relative ${showOptions && "z-50"}`}>
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 bg-white rounded-md p-3 border border-gray-300`}
        >
          {!showOptions ? (
            <>
              {isLoading ? (
                <span className="border border-[#8C8C8C] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
              ) : (
                <ProfileInitials
                  size={24}
                  firstLetter={selectedOption?.firstName?.[0] || ""}
                  secondLetter={selectedOption?.lastName?.[0] || ""}
                />
              )}
            </>
          ) : (
            <>
              {isFetching ? (
                <span className="border border-[#8C8C8C] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
              ) : (
                <Icon type={Icons.Search} size={16} color="#a3a3a3" />
              )}
            </>
          )}

          <div className="grid">
            <input
              type="text"
              name={name}
              value={selectedOption ? encodeData(selectedOption) : ""}
              onInvalid={handleOnInvalid}
              required={required}
              className="col-[-1/1] row-[-1/1] w-full outline-none"
              onChange={() => {}}
            />

            <input
              readOnly
              type={"text"}
              value={
                selectedOption
                  ? `${selectedOption?.firstName} ${selectedOption?.lastName}`
                  : ""
              }
              className="col-[-1/1] row-[-1/1] cursor-pointer w-full outline-none"
              placeholder={placeholder}
              onClick={handleShowOptions}
            />

            {showOptions && (
              <input
                type={"text"}
                placeholder={"Type to search..."}
                onChange={(e) => projectMemberSearch(e.target.value)}
                className="col-[-1/1] row-[-1/1] outline-none w-full"
                autoFocus
              />
            )}
          </div>

          <button type="button" onClick={handleShowOptions} className="suffix">
            <Icon
              type={showOptions ? Icons.ChevronUp : Icons.ChevronDown}
              size={20}
              color="#a3a3a3"
            />
          </button>
        </div>

        <ul
          className={`w-full absolute rounded-[4px] grid max-h-0 overflow-y-auto input-scroll-bar bg-white z-50 transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            dropDownPos === "top" ? "bottom-full" : "top-full"
          } ${
            showOptions && projectMembers?.length
              ? `${dropDownPos === "top" ? "mb-2" : "mt-2"} max-h-44 border`
              : ""
          }`}
        >
          <li
            className={`py-3 px-4 cursor-pointer grid grid-cols-[auto_1fr] items-center gap-2 transition-all text-xs text-gray-600 font-medium hover:bg-[#E7EFFE] border-t border-[#DFDFDF]`}
            onClick={() => handleSelectOption(null)}
          >
            <ProfileInitials size={20} />
            None
          </li>
          {projectMembers?.map((option, i) => (
            <li
              key={i}
              className={`py-3 px-4 cursor-pointer grid grid-cols-[auto_1fr] items-center gap-2 transition-all text-xs text-gray-600 font-medium hover:bg-[#E7EFFE] border-t border-[#DFDFDF]`}
              onClick={() => handleSelectOption(option)}
            >
              <ProfileInitials
                firstLetter={option?.firstName[0]}
                secondLetter={option?.lastName[0]}
                size={20}
              />
              {`${option?.firstName} ${option?.lastName}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
