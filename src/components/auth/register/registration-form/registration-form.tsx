"use client";

import React, { useState } from "react";
import PersonalInfo from "./personal-info";
import ContactInfo from "./contact-info";
import AccountSetup from "./account-setup";
import Security from "./security";
import RegistrationSteps from "./registration-steps";
import RegistrationCta from "./registration-cta";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ContactInfo />;
      case 3:
        return <AccountSetup />;
      case 4:
        return <Security />;
      default:
        return <PersonalInfo />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default browser form submission

    if (step === 4) {
      // Only submit when on the last step AND user clicks Submit
      alert("Form submitted!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
      <RegistrationSteps step={step} />

      <div className="bg-white p-5 rounded-xl shadow-md grid gap-5">
        {renderStepComponent()}
        <RegistrationCta step={step} setStep={setStep} />
      </div>
    </form>
  );
}
