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
      <div className="w-full grid gap-2 bg-[#555555] p-3 rounded-xl shadow-sm">
        <div>
          <Progress value={progressiveValue} className="bg-white rounded-xl" />
        </div>
        <div
          className={`grid grid-flow-col justify-between [&>p]:text-white ${
            step >= 1 ? "[&>p]:text-[#285ab1]" : ""
          }`}
        >
          <p
            className={`grid grid-flow-col justify-between [&>p]:text-white ${
              step >= 1 ? "[&>p]:text-[#285ab1]" : ""
            }`}
          >
            Personal Info
          </p>
          <p
            className={`grid grid-flow-col justify-between [&>p]:text-white ${
              step >= 2 ? "[&>p]:text-[#285ab1]" : ""
            }`}
          >
            Contact Details
          </p>
          <p
            className={`grid grid-flow-col justify-between [&>p]:text-white ${
              step >= 3 ? "[&>p]:text-[#285ab1]" : ""
            }`}
          >
            Account Setup
          </p>
          <p
            className={`grid grid-flow-col justify-between [&>p]:text-white ${
              step >= 4 ? "[&>p]:text-[#285ab1]" : ""
            }`}
          >
            Security
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
