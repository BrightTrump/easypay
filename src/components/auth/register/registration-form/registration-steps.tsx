"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function RegistrationSteps() {
  const [step, setStep] = useState(1);

  const progressiveValue = (step / 4) * 100;

  const goToNextStep = () => {
    if (step <= 4) setStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="w-full grid gap-2 bg-[#555555] p-3 rounded-xl shadow-sm">
        <div>
          <Progress value={progressiveValue} className="bg-white rounded-xl" />
        </div>
        <div
          className={`grid grid-flow-col justify-between [&>p]:text-white ${
            step >= 1 ? "[&>p]:text-[#285ab1]" : ""
          }`}
        >
          <p>Personal Info</p>
          <p>Contact Details</p>
          <p>Account Setup</p>
          <p>Security</p>
        </div>
      </div>
      <hr />
    </>
  );
}
