export interface IconProps {
  className?: string;
}

export const Icons = {
  Apple: "apple",
  Close: "close",
  GooglePlay: "google-play",
  Home: "home",
  Search: "search",
  Settings: "settings",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
