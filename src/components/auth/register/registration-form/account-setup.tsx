"use client";

import { useState } from "react";
import { ACCOUNT_TYPE_SCHEMA } from "@/constants.ts/account-type.constant";
import { Icon, Icons, Input, Inputs } from "@/ui";

export default function AccountSetup() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="grid gap-8 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="grid gap-4 place-items-center text-center">
        <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#555555]">
          <Icon type={Icons.User} size={32} color="#FFFFFF" />
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-3xl">Account Setup</h2>
          <p className="text-muted-foreground">
            Choose your account type and set up your transaction PIN
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid gap-6">
        <Input
          type={Inputs.Select}
          label="Account Type"
          name="account-type"
          required
          placeholder="Select an account type"
          value={selectedType ?? ""}
          onChange={(val) => setSelectedType(val)}
          customOptions={(setValue, selected) => (
            <div className="grid gap-4 overflow-hidden w-full">
              {ACCOUNT_TYPE_SCHEMA.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setValue(item.title);
                  }}
                  className={`overflow-x-scroll custom-scroll-bar grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 rounded-xl border shadow-sm cursor-pointer transition-all ${
                    selected === item.title
                      ? "border-[#285ab1] bg-[#E9F1FF]"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <span className="grid place-items-center bg-[#285ab1] rounded-full w-10 h-10">
                    <Icon type={item.icon} size={20} color="#FFFFFF" />
                  </span>

                  <div className="grid gap-1">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p className="text-sm text-[#555]">{item.description}</p>
                  </div>

                  {selected === item.title && (
                    <Icon type={Icons.Check} size={20} color="#285ab1" />
                  )}
                </div>
              ))}
            </div>
          )}
        />

        <Input
          type={Inputs.Text}
          label="Phone Number"
          id="phone-number"
          name="phone-number"
          placeholder="+1(234)-567-8901"
          required
        />

        <Input
          type={Inputs.SelectCountry}
          label="Country"
          name="country"
          required
          defaultValue="Nigeria"
          onChange={(val) => console.log("Selected Country:", val)}
        />
      </div>

      <hr className="border-t" />
    </div>
  );
}
