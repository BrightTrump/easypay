"use client";

import { Button, ButtonVariants, Icon, Icons, Input, Inputs } from "@/ui";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function LoginForm() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { login, isLogining } = useLogin();
  // const { handleSetAuthResponse } = useSetAuth();

  const handleToggleIsRemeberMe = () => {
    setIsRememberMe(!isRememberMe);
  };

  const handleFormInputChange = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    // Get Input Values
    const email = Boolean(formData.get("email"));
    const password = Boolean(formData.get("password"));

    // Validate Input Fields
    setIsFormComplete(email && password);
  };

  // Function Triggers on Form onSubmit Event
  // const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   login({
  //     requestBody: {
  //       email,
  //       password,
  //       rememberMe: isRememberMe,
  //     },
  //     onSuccess(response) {
  //       if (response) {
  //         handleSetAuthResponse(
  //           response,
  //           !response?.profile.emailConfirmed
  //             ? `${AuthRedirectUrl.VERIFY_EMAIL}?email=${email}`
  //             : !response?.company
  //             ? AuthRedirectUrl.COMPANY_DETAILS
  //             : !response?.subscription
  //             ? AuthRedirectUrl.DASHBOARD
  //             : AuthRedirectUrl.DASHBOARD
  //         );
  //       }
  //       setIsLoggedIn(true);
  //     },
  //   });
  // };

  return (
    <form
      // onSubmit={handleFormSubmission}
      onInput={handleFormInputChange}
      className="grid gap-5"
    >
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
        required
      />

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleToggleIsRemeberMe}
          className="grid grid-flow-col items-center gap-3 text-right text-sm font-semibold text-black"
        >
          <span
            className={`w-[18px] h-[18px] grid place-content-center rounded-sm border-2 transition-all ${
              isRememberMe
                ? "bg-primary border-primary"
                : "bg-white border-gray-500"
            }`}
          >
            <Icon type={Icons.Check} size={16} color="#FFFFFF" />
          </span>
          Remember Me
        </button>
        <Link href={"/forgot-password"} className="text-primary text-sm">
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        // disabled={!isFormComplete || isLogining || isLoggedIn}
        // isLoading={isLogining}
        variant={ButtonVariants.BlackFilled}
        className="w-ful mt-5"
      >
        Login
      </Button>

      <p className="font-medium text-center">
        New to EasyPay?{" "}
        <Link
          href={"/registration"}
          className="text-primary font-semibold underline"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}
