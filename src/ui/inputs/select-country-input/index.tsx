"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Globe } from "lucide-react"; // or use your custom Icon component

export interface SelectCountryInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  readonly?: boolean;
  className?: string;
  onInput?: () => void;
  onChange?: (value: string) => void;
}

export const countryList: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Ter",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Canary Islands",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Channel Islands",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos Island",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D'Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Ter",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Great Britain",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Hawaii",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malaysia",
  "Malawi",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Midway Islands",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherland Antilles",
  "Netherlands (Holland, Europe)",
  "Nevis",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau Island",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Island",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of Montenegro",
  "Republic of Serbia",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "St Barthelemy",
  "St Eustatius",
  "St Helena",
  "St Kitts-Nevis",
  "St Lucia",
  "St Maarten",
  "St Pierre & Miquelon",
  "St Vincent & Grenadines",
  "Saipan",
  "Samoa",
  "Samoa American",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tahiti",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos Is",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City State",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (Brit)",
  "Virgin Islands (USA)",
  "Wake Island",
  "Wallis & Futana Is",
  "Yemen",
  "Zaire",

  "Zambia",
  "Zimbabwe",
];

export default function SelectCountryInput({
  label,
  placeholder = "Select your country",
  name,
  value,
  defaultValue,
  required,
  readonly,
  className,
  onChange,
  onInput,
}: SelectCountryInputProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value || defaultValue || ""
  );

  const handleOnValueChange = (val: string) => {
    if (!value) setSelectedOption(val);
    onChange?.(val);
    onInput?.();
  };

  useEffect(() => {
    if (value !== undefined) setSelectedOption(value);
    else if (defaultValue !== undefined) setSelectedOption(defaultValue);
  }, [value, defaultValue]);

  return (
    <div className={`grid gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#141414]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Globe className="w-4 h-4 text-gray-400" />
        </div>

        <Select
          name={name}
          value={selectedOption}
          onValueChange={handleOnValueChange}
        >
          <SelectTrigger
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285ab1] focus:border-[#285ab1] text-sm text-[#555555]"
            disabled={readonly}
          >
            {selectedOption || placeholder}
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {countryList.map((country, i) => (
                <SelectItem key={i} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <i data-lucide="chevron-down" className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
