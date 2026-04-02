"use client";

import { Button } from "@/components/ui";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function RegistrationCta({ step, setStep }: Props) {
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-3 font-semibold">
      <Button
        type="button"
        onClick={handlePrev}
        variant="primary"
        className="w-full rounded-sm"
      >
        Prev
      </Button>
      <Button
        type={step === 4 ? "submit" : "button"}
        onClick={step === 4 ? undefined : handleNext}
        variant="primary"
        className="w-full rounded-sm"
      >
        {step === 4 ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
