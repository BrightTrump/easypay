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
        <div
          className={`grid grid-flow-col justify-between text-white [&_span]:hidden [&_span]:md:block `}
        >
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 1 ? "text-[#285ab1]" : "text-white"
            }`}
          >
            Personal<span> Info</span>
          </p>
          <p
            className={`grid grid-flow-col justify-between  ${
              step >= 2 ? "text-[#285ab1]" : ""
            }`}
          >
            Contact <span> Details</span>
          </p>
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 3 ? "text-[#285ab1]" : "text-white"
            }`}
          >
            Account <span> Setup</span>
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
