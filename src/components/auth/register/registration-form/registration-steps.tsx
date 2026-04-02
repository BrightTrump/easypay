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
      <div className="w-full grid gap-2 p-3 rounded-xl ">
        <div>
          <Progress
            value={progressiveValue}
            className="bg-white rounded-xl border-2 border-gray-400"
          />
        </div>
        <div
          className={`grid grid-flow-col justify-between text-[#000000] [&_p]:text-sm md:[&_p]:text-sm [&_span]:hidden [&_span]:md:block `}
        >
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 1 ? "text-[#285ab1]" : "text-[#000000]"
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
              step >= 3 ? "text-[#285ab1]" : "text-[#000000]"
            }`}
          >
            Account <span> Setup</span>
          </p>
          <p
            className={`grid grid-flow-col justify-between ${
              step >= 4 ? "text-[#285ab1]" : "text-[#000000]"
            }`}
          >
            Security
          </p>
        </div>
      </div>
    </>
  );
}
