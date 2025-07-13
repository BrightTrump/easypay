"use client";

import { ACCOUNT_TYPE_SCHEMA } from "@/constants.ts/account-type.constant";
import { Icon, Icons, Input, Inputs } from "@/ui";

export default function AccountSetup() {
  return (
    <>
      <div className="grid gap-8">
        <div className="grid gap-4 place-items-center">
          <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#555555]">
            <Icon type={Icons.User} size={32} color="#FFFFFF" />
          </div>
          <div className="text-center ">
            <h2 className="font-bold text-3xl">Account Setup</h2>
            <p>Choose your account type and set up your transaction PIN</p>
          </div>
        </div>
        <div className="grid gap-4">
          <Input
            type={Inputs.Select}
            label="Phone Number"
            name="phone-number"
            options={
              <div className="grid gap-2 items-center [&>div]:bg-[#E9E9E9] [&>div]:border [&>div]:border-[#285ab1] [&>div]:shadow-sm [&>div]:p-4 [&>div]:h-full [&>div]:rounded-xl [&>div]:flex [&>div]:gap-3 [&_h2]:font-bold [&_h2]:text-lg [&_span]:grid [&_span]:place-items-center [&_span]:bg-[#FFFFFF] [&_span]:rounded-full [&_span]:w-8 [&_span]:h-8 [&_span]:p">
                {ACCOUNT_TYPE_SCHEMA.map((items, index) => (
                  <div key={index}>
                    <span>
                      <Icon type={items.icon} size={20} color="#285ab1" />
                    </span>

                    <div>
                      <h2>{items.title}</h2>
                      <p>{items.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            }
            placeholder="+1(234)-567-8901"
            required
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
            onChange={(val) => console.log("Selected:", val)}
          />
        </div>
        <hr />
      </div>
    </>
  );
}
