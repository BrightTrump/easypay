"use client";

import { Icon, Icons, Input, Inputs } from "@/ui";

export default function ContactInfo() {
  return (
    <>
      <div className="grid gap-8">
        <div className="grid gap-4 place-items-center">
          <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#555555]">
            <Icon type={Icons.User} size={32} color="#FFFFFF" />
          </div>
          <div className="text-center ">
            <h2 className="font-bold text-3xl">Contact Information</h2>
            <p>
              We&apos;ll use these details to communicate with you about your
              account
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <Input
            type={Inputs.Email}
            label="Email Address"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
          <Input
            type={Inputs.Number}
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
