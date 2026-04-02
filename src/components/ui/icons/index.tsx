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
import CheckIcon from "./check";
import BagIcon from "./bag";
import BillingIcon from "./billing";
import SavingsIcon from "./savings";
import UserGroupIcon from "./user-group";
import DangerCircleIcon from "./danger-circle";
import CreditCardIcon from "./credit-card";
import StarRatingIcon from "./star-rating";
import PeopleIcon from "./people";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.Apple:
      return <AppleIcon {...props} />;

    case Icons.Bag:
      return <BagIcon {...props} />;

    case Icons.Billing:
      return <BillingIcon {...props} />;

    case Icons.Check:
      return <CheckIcon {...props} />;

    case Icons.Close:
      return <CloseIcon {...props} />;

    case Icons.CreditCard:
      return <CreditCardIcon {...props} />;

    case Icons.DangerCircle:
      return <DangerCircleIcon {...props} />;

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

    case Icons.People:
      return <PeopleIcon {...props} />;

    case Icons.Savings:
      return <SavingsIcon {...props} />;

    case Icons.Search:
      return <SearchIcon {...props} />;

    case Icons.Settings:
      return <SettingsIcon {...props} />;

    case Icons.StarRating:
      return <StarRatingIcon {...props} />;

    case Icons.Twitter:
      return <TwitterIcon {...props} />;

    case Icons.User:
      return <UserIcon {...props} />;

    case Icons.UserGroup:
      return <UserGroupIcon {...props} />;

    default:
      return null;
  }
}
