export interface IconProps {
  className?: string;
}

export const Icons = {
  Apple: "apple",
  Bag: "bag",
  Billing: "billing",
  Check: "check",
  Close: "close",
  CreditCard: "credit-card",
  DangerCircle: "Danger-circle",
  Facebook: "facebook",
  GooglePlay: "google-play",
  Hamburger: "hamburger",
  Home: "home",
  Instagram: "instagram",
  Linkedin: "linkedin",
  Savings: "savings",
  Search: "search",
  Settings: "settings",
  Twitter: "twitter",
  User: "user",
  UserGroup: "user-group",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
