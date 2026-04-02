import AppleIcon from "./apple";
import CloseIcon from "./close";
import SearchIcon from "./search";
import SettingsIcon from "./settings";
import { type IconProps, Icons } from "./_types";
import GooglePlayIcon from "./google-play";
import HomeIcon from "./home";
import UserIcon from "./user";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.Apple:
      return <AppleIcon {...props} />;

    case Icons.Close:
      return <CloseIcon {...props} />;

    case Icons.GooglePlay:
      return <GooglePlayIcon {...props} />;

    case Icons.Home:
      return <HomeIcon {...props} />;

    case Icons.Search:
      return <SearchIcon {...props} />;

    case Icons.Settings:
      return <SettingsIcon {...props} />;

    case Icons.User:
      return <UserIcon {...props} />;

    default:
      return null;
  }
}
