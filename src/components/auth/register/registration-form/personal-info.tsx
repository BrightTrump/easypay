"use client";

import { Icon, Icons, Input, Inputs } from "@/ui";

export default function PersonalInfo() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-4 place-items-center">
        <div className="grid place-items-center w-16 h-16 rounded-full p-4 bg-[#285ab1]">
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
          type={Inputs.Email}
          label="Email Address"
          id="email"
          name="email"
          required
        />

        {/* <p className="text-sm font-medium">
          By clicking on continue you agree to the{" "}
          <Link
            href={"/terms-of-services"}
            className="text-primary transition-all underline font-semibold"
          >
            Terms
          </Link>{" "}
          and acknowledge{" "}
          <Link
            href={"/privacy-policy"}
            className="text-primary underline font-semibold"
          >
            Privacy Policy
          </Link>
        </p> */}

        {/* <p className="font-medium text-center">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-primary font-semibold underline"
          >
            Login
          </Link>
        </p> */}
      </form>
    </div>
  );
}
