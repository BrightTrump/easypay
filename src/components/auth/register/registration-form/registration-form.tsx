"use client";
import React, { useState } from "react";
import PersonalInfo from "./personal-info";
import RegistrationCta from "./registration-cta";
import RegistrationSteps from "./registration-steps";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="grid gap-5 h-full">
      <div>
        <RegistrationSteps step={step} />
      </div>
      <div>
        <PersonalInfo />
        <RegistrationCta step={step} setStep={setStep} />
      </div>
    </div>
  );
}
