export interface IconProps {
  className?: string;
}

export const Icons = {
  Apple: "apple",
  Close: "close",
  Facebook: "facebook",
  GooglePlay: "google-play",
  Hamburger: "hamburger",
  Home: "home",
  Instagram: "instagram",
  Linkedin: "linkedin",
  Search: "search",
  Settings: "settings",
  Twitter: "twitter",
  User: "user",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
