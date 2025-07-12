"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

interface RegistrationStepsProps {
  step: number;
}
export default function RegistrationSteps({ step }: RegistrationStepsProps) {
  const progressiveValue = (step / 4) * 100;

  return (
    <>
      <div className="w-full grid gap-2 bg-[#a7a6a6] p-3 rounded-xl ">
        <div>
          <Progress value={progressiveValue} className="bg-white rounded-xl" />
        </div>
        <div className={`grid grid-flow-col justify-between text-white `}>
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 1 ? "text-[#285ab1]" : "text-white"
            }`}
          >
            Personal Info
          </p>
          <p
            className={`grid grid-flow-col justify-between  ${
              step >= 2 ? "text-[#285ab1]" : ""
            }`}
          >
            Contact Details
          </p>
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 3 ? "text-[#285ab1]" : "text-white"
            }`}
          >
            Account Setup
          </p>
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 4 ? "text-[#285ab1]" : "text-white"
            }`}
          >
            Security
          </p>
        </div>
      </div>
    </>
  );
}
