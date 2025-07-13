"use client";

import { useState } from "react";
import { ACCOUNT_TYPE_SCHEMA } from "@/constants.ts/account-type.constant";
import { Icon, Icons, Input, Inputs } from "@/ui";

export default function AccountSetup() {
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div className="grid gap-8">
      {/* Header */}
      <div className="grid gap-4 place-items-center">
        <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#555555]">
          <Icon type={Icons.User} size={32} color="#FFFFFF" />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl">Account Setup</h2>
          <p>Choose your account type and set up your transaction PIN</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid gap-4">
        <Input
          type={Inputs.Select}
          label="Account Type"
          name="account-type"
          required
          placeholder="Select an account type"
          value={selectedType}
          onChange={(val) => setSelectedType(val)}
          customOptions={(setValue, selected) => (
            <div className="grid gap-2 items-center">
              {ACCOUNT_TYPE_SCHEMA.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setValue(item.title)}
                  className={`cursor-pointer flex items-center justify-between gap-3 p-4 rounded-xl border border-[#285ab1] shadow-sm ${
                    selected === item.title ? "bg-[#D6E5FF]" : "bg-[#E9E9E9]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center bg-white rounded-full w-10 h-10">
                      <Icon type={item.icon} size={20} color="#285ab1" />
                    </span>
                    <div>
                      <h2 className="font-bold text-lg">{item.title}</h2>
                      <p className="text-sm text-[#555]">{item.description}</p>
                    </div>
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
          onChange={(val) => console.log("Selected country:", val)}
        />
      </div>

      <hr />
    </div>
  );
}
