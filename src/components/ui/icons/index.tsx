import AppleIcon from "./apple";
import CloseIcon from "./close";
import SearchIcon from "./search";
import SettingsIcon from "./settings";
import { type IconProps, Icons } from "./_types";
import GooglePlayIcon from "./google-play";
import HomeIcon from "./home";
import UserIcon from "./user";
import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";
import LinkedinIcon from "./linkedin";
import TwitterIcon from "./twitter";
import HamburgerIcon from "./hamburger";

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

    case Icons.Facebook:
      return <FacebookIcon {...props} />;

    case Icons.GooglePlay:
      return <GooglePlayIcon {...props} />;

    case Icons.Hamburger:
      return <HamburgerIcon {...props} />;

    case Icons.Home:
      return <HomeIcon {...props} />;

    case Icons.Instagram:
      return <InstagramIcon {...props} />;

    case Icons.Linkedin:
      return <LinkedinIcon {...props} />;

    case Icons.Search:
      return <SearchIcon {...props} />;

    case Icons.Settings:
      return <SettingsIcon {...props} />;

    case Icons.Twitter:
      return <TwitterIcon {...props} />;

    case Icons.User:
      return <UserIcon {...props} />;

    default:
      return null;
  }
}
