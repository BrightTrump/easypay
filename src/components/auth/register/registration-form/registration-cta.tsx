"use client";

import { Button, ButtonVariants } from "@/ui";

export default function RegistrationCta() {
  return (
    <div className="grid gap-8">
      <Button
        type="submit"
        variant={ButtonVariants.BlackFilled}
        className="w-full"
      >
        Next
      </Button>
    </div>
  );
}
