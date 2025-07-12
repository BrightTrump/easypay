"use client";

import { Icon, Icons, Input, Inputs } from "@/ui";

export default function PersonalInfo() {
  return (
    <>
      <div className="grid gap-8">
        <div className="grid gap-4 place-items-center">
          <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#555555]">
            <Icon type={Icons.User} size={32} color="#FFFFFF" />
          </div>
          <div className="text-center ">
            <h2 className="font-bold text-3xl">Personal Information</h2>
            <p>
              Please provide your legal name as it appears on official documents
            </p>
          </div>
        </div>
        <form className="grid grid-cols-2 gap-4">
          <Input
            type={Inputs.Text}
            label="First Name"
            id="first-name"
            name="first-name"
            required
          />
          <Input
            type={Inputs.Text}
            label="Middle Name"
            id="middle-name"
            name="middle-name"
            placeholder="Optional"
            required
          />
          <Input
            type={Inputs.Text}
            label="Last Name"
            id="last-name"
            name="last-name"
            required
          />
          <Input
            type={Inputs.Text}
            label="Username"
            id="username"
            name="username"
            required
          />
          {/* <Input
            type={Inputs.Email}
            label="Email Address"
            id="email"
            name="email"
            required
          /> */}
        </form>
        <hr />
      </div>
    </>
  );
}
