import React from "react";
import PersonalInfo from "./personal-info";
import RegistrationCta from "./registration-cta";

export default function RegistrationForm() {
  return (
    <div className="h-full">
      <PersonalInfo />
      <RegistrationCta />
    </div>
  );
}
