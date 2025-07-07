export interface ButtonProps {
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export enum ButtonVariants {
  BlackFilledRounded = "black-filled-rounded",
  BlackOutlinedRounded = "black-outlined-rounded",
  DangerFilled = "danger-filled",
  DangerOutlined = "danger-outlined",
  Default = "default",
  Neutral = "neutral",
  PrimaryFilled = "primary-filled",
  PrimaryFilledRounded = "primary-filled-rounded",
  PrimaryOutlined = "primary-outlined",
  WhiteFilledRounded = "white-filled-rounded",
  WhiteOutlinedRounded = "white-outlined-rounded",
  PrimaryOutlinedRounded = "pimary-outlined-rounded",
}
