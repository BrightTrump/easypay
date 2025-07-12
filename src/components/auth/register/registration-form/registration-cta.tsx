"use client";

import { Button, ButtonVariants } from "@/ui";

export default function RegistrationCta() {
  return (
    <div className="grid grid-cols-2 gap-3 font-semibold">
      <Button
        type="button"
        onClick={() => {}}
        variant={ButtonVariants.Neutral}
        className="w-full rounded-sm"
      >
        Prev
      </Button>
      <Button
        type="submit"
        variant={ButtonVariants.BlackFilled}
        className="w-full rounded-sm"
      >
        Next
      </Button>
    </div>
  );
}
