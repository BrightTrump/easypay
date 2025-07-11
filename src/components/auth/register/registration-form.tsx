"use client";

import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import Link from "next/link";
import React, { useState } from "react";

export default function RegistrationForm() {
  // const { register, handleFormInputChange, isFormComplete, isLoading } =
  //   useRegister();
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);

  return (
    <form
      // onSubmit={register}
      // onInput={handleFormInputChange}
      className="grid gap-5"
    >
      <Input
        type={Inputs.Text}
        label="First Name"
        id="first-name"
        name="first-name"
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

      <Input
        type={Inputs.Password}
        label="Password"
        id="password"
        name="password"
        isCheckPassword={setIsPasswordVerified}
        required
      />

      <p className="text-sm font-medium">
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
      </p>

      <Button
        type="submit"
        // isLoading={isLoading}
        // disabled={isLoading || !isFormComplete || !isPasswordVerified}
        variant={ButtonVariants.PrimaryFilled}
        className="w-full"
      >
        Create Account
      </Button>

      <p className="font-medium text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="text-primary font-semibold underline">
          Login
        </Link>
      </p>
    </form>
  );
}
