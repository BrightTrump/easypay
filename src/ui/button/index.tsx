import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
import PrimaryFilled from "./primary-filled";
import PrimaryOutlined from "./primary-outlined";
import DangerOutlined from "./danger-outlined";
import Default from "./default";
import DangerFilled from "./danger-filled";
import Neutral from "./neutral";
import BlackFilledRounded from "./black-filled";
import BlackOutlinedRounded from "./black-outlined";

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case ButtonVariants.BlackFilledRounded:
      return <BlackFilledRounded {...props} />;

    case ButtonVariants.BlackOutlinedRounded:
      return <BlackOutlinedRounded {...props} />;

    case ButtonVariants.DangerFilled:
      return <DangerFilled {...props} />;

    case ButtonVariants.DangerOutlined:
      return <DangerOutlined {...props} />;

    case ButtonVariants.Neutral:
      return <Neutral {...props} />;

    case ButtonVariants.PrimaryFilled:
      return <PrimaryFilled {...props} />;
    case ButtonVariants.PrimaryFilledRounded:
      return <PrimaryFilledRounded {...props} />;

    case ButtonVariants.PrimaryOutlined:
      return <PrimaryOutlined {...props} />;

    case ButtonVariants.PrimaryOutlinedRounded:
      return <PrimaryOutlinedRounded {...props} />;

    case ButtonVariants.WhiteFilledRounded:
      return <WhiteFilledRounded {...props} />;

    default:
      return <Default {...props} />;
  }
}
