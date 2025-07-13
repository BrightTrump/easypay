"use client";

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
          <div className="grid grid-flow-col gap-2.5 items-center [&>div]:bg-[#E9E9E9] [&>div]:shadow-sm [&>div]:p-4 [&>div]:h-full [&>div]:rounded-xl [&>div]:flex [&>div]:gap-2 [&_h2]:font-bold [&_h2]:text-lg [&_span]:grid [&_spa]:place-items-center [&_span]:bg-[#FFFFFF] [&_span]:rounded-full [&_span]:w-10 [&_span]:h-10 [&_span]:p-">
            <div>
              <span>
                <Icon type={Icons.AI} size={25} color="#555555" />
              </span>
              <div>
                <h2>Checkings Account</h2>
                <p>Perfect for daily transactions and bill payment</p>
              </div>
            </div>
            <div>
              <span>
                <Icon type={Icons.AI} size={25} color="#555555" />
              </span>
              <div>
                <h2>Savings Account</h2>
                <p>Earn Interest on your deposit</p>
              </div>
            </div>
          </div>
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
