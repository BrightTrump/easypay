import React from "react";
import PersonalInfo from "./personal-info";
import RegistrationCta from "./registration-cta";
import RegistrationSteps from "./registration-steps";

export default function RegistrationForm() {
  return (
    <div className="grid gap-5 h-full">
      <div>
        <RegistrationSteps />
      </div>
      <div>
        <PersonalInfo />
        <RegistrationCta />
      </div>
    </div>
  );
}
