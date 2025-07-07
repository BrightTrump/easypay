import React from "react";
import StayInFlow from "./stay-in-flow";
import StreamlineYourWork from "./streamline-your-work";
import BuiltForBusiness from "./built-for-business";

export default function FeatureSection() {
  return (
    <section className="py-10 sm:py-20 layout-spacing grid gap-10 sm:gap-20">
      <div className="container mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-5">
        <StayInFlow />
        <StreamlineYourWork />
        <BuiltForBusiness />
      </div>
    </section>
  );
}
