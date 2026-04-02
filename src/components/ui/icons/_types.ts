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
  People: "People",
  Savings: "savings",
  Search: "search",
  Settings: "settings",
  StarRating: "star-rating",
  Twitter: "twitter",
  User: "user",
  UserGroup: "user-group",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
