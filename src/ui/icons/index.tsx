import AddSquare from "./add-square";
import AlertCircle from "./alert-circle";
import AngleRight from "./angle-right";
import ArrowLeft from "./arrow-left";
import ArrowRight from "./arrow-right";
import Attachment from "./attachment";
import Bin from "./bin";
import Call from "./call";
import Calling from "./calling";
import CallMissed from "./call-missed";
import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronLeft from "./chevron-left";
import ChevronUp from "./chevron-up";
import Calendar from "./calendar";
import Close from "./close";
import Chat from "./chat";
import Clock from "./clock";
import DangerCircle from "./danger-circle";
import DangerTriangle from "./danger-triangle";
import DocumentALignRight from "./document-align-right";
import DocumentUpload from "./document-upload";
import Dot from "./dot";
import Email from "./email";
import ExpandFill from "./expand-fill";
import EyeClose from "./eye-close";
import EyeOpen from "./eye-open";
import Facebook from "./facebook";
import Hamburger from "./hamburger";
import Home from "./home";
import Img from "./img";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Location from "./location";
import Medium from "./medium";
import Message from "./message";
import Telephone from "./telephone";
import Twitter from "./twitter";
import { IconProps, Icons } from "./types";
import User from "./user";
import Tag from "./tag";
import TickSquare from "./tick-square";
import InfoSquare from "./info-square";
import HiIcon from "./hi-icon";
import Notification from "./notification";
import Setting from "./setting";
import EditSquare from "./edit-square";
import Search from "./search";
import Filter from "./filter";
import Whatsapp from "./whatsapp";
import WhatsappGreen from "./whatsapp-green";
import ProfileCircle from "./profile-circle";
import TimeCircle from "./time-circle";
import PdfFile from "./pdf-file";
import DocFile from "./doc-file";
import MicMute from "./mic-mute";
import FaqCircle from "./faq-circle";
import LogOut from "./log-out";
import Ellipse from "./ellipse";
import Cancel from "./cancel";
import Play from "./play";
import TableBin from "./table-bin";
import GmailColored from "./gmail-colored";
import GroupMinus from "./group-minus";
import GroupPlus from "./group-plus";
import More from "./more";
import Download from "./download";
import Settings from "./settings";
import Milestone from "./milestone";
import TimeProgress from "./time-progress";
import ChevronRight from "./chevron-right";
import DocumentSolid from "./document-solid";
import Img2 from "./img2";
import LighteningLine from "./lightening-line";
import Import from "./import";
import Export from "./export";
import JpgFile from "./jpg-file";
import WordFile from "./word-file";
import ExcelFile from "./excel-file";
import CheckIn from "./Check-in";
import RoundCalender from "./round-calender";
import Send from "./send";
import SearchLens from "./search-lens";
import Board from "./board";
import Timeline from "./timeline";
import List from "./list";
import Plus from "./plus";
import AlignCenter from "./align-center";
import AlignJustify from "./align-justify";
import AlignLeft from "./align-left";
import AlignRight from "./align-right";
import Attach from "./attach";
import Bold from "./bold";
import BulletList from "./bullet-list";
import CodeRounded from "./code-rounded";
import FormatQuote from "./format-quote";
import HeadingOne from "./heading-one";
import HeadingTwo from "./heading-two";
import Italic from "./italic";
import NumberList from "./number-list";
import Underline from "./underline";
import SidebarCollapse from "./sidebar-collapse";
import Bag from "./bag";
import Dashboard from "./dashboard";
import People from "./people";
import Projects from "./projects";
import Support from "./support";
import DocumentOutline from "./document-outline";
import AI from "./ai";
import Option from "./option";
import Copy from "./copy";
import Microsoft from "./microsoft";
import Slack from "./slack";
import SettingsTwo from "./settings-two";
import ProjectSymlink from "./project-symlink";
import Status from "./status";
import Flag from "./flag";
import Billing from "./billing";
import IntegRouting from "./integ-routing";
import Group from "./group";
import Inbox from "./inbox";
import Mail from "./mail";
import Mention from "./mention";
import Monitor from "./monitor";
import Null from "./null";
import Pin from "./pin";
import Reminder from "./reminder";
import Note from "./note";
import AwayStatus from "./away-status";
import Channels from "./channels";
import Routing from "./routing";
import RouterEngine from "./router-engine";
import AgentStatuses from "./agent-statuses";
import AgentSetup from "./agent-setup";
import Info from "./info";
import Link from "./link";
import Privacy from "./privacy";
import LoginAccess from "./login-access";
import DataPrivacy from "./data-privacy";
import Cloud from "./cloud";
import MinusCircle from "./minus-circle";
import AddCircle from "./add-circle";
import OfficeBuilding from "./office-building";
import UserGroup from "./user-group";
import Configuration from "./configuration";
import Rule from "./rule";
import Important from "./important";
import SwitchOn from "./switch-on";
import SwitchOff from "./switch-off";
import Module from "./module";
import Analytics from "./analytics";
import Minus from "./minus";
import Key from "./key";
import Workspace from "./workspace";
import Save from "./save";
import Shrink from "./shrink";
import Expand from "./expand";
import CreditCard from "./credit-card";
import Savings from "./savings";

interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.AddCircle:
      return <AddCircle {...props} />;

    case Icons.AddSquare:
      return <AddSquare {...props} />;

    case Icons.AgentSetup:
      return <AgentSetup {...props} />;

    case Icons.AgentStatuses:
      return <AgentStatuses {...props} />;

    case Icons.AI:
      return <AI {...props} />;

    case Icons.AlertCircle:
      return <AlertCircle {...props} />;

    case Icons.AlignCenter:
      return <AlignCenter {...props} />;

    case Icons.AlignJustify:
      return <AlignJustify {...props} />;

    case Icons.AlignLeft:
      return <AlignLeft {...props} />;

    case Icons.AlignRight:
      return <AlignRight {...props} />;

    case Icons.Analytics:
      return <Analytics {...props} />;

    case Icons.AngleRight:
      return <AngleRight {...props} />;

    case Icons.ArrowLeft:
      return <ArrowLeft {...props} />;

    case Icons.Attachment:
      return <Attachment {...props} />;

    case Icons.ArrowRight:
      return <ArrowRight {...props} />;

    case Icons.Attach:
      return <Attach {...props} />;

    case Icons.AwayStatus:
      return <AwayStatus {...props} />;

    case Icons.Bag:
      return <Bag {...props} />;

    case Icons.Billing:
      return <Billing {...props} />;

    case Icons.Bin:
      return <Bin {...props} />;

    case Icons.Board:
      return <Board {...props} />;

    case Icons.Bold:
      return <Bold {...props} />;

    case Icons.BulletList:
      return <BulletList {...props} />;

    case Icons.Calendar:
      return <Calendar {...props} />;

    case Icons.Call:
      return <Call {...props} />;

    case Icons.Calling:
      return <Calling {...props} />;

    case Icons.CallMissed:
      return <CallMissed {...props} />;

    case Icons.Cancel:
      return <Cancel {...props} />;

    case Icons.Channels:
      return <Channels {...props} />;

    case Icons.Chat:
      return <Chat {...props} />;

    case Icons.Check:
      return <Check {...props} />;

    case Icons.Calendar:
      return <Calendar {...props} />;

    case Icons.ChevronDown:
      return <ChevronDown {...props} />;

    case Icons.CheckIn:
      return <CheckIn {...props} />;

    case Icons.ChevronLeft:
      return <ChevronLeft {...props} />;

    case Icons.ChevronRight:
      return <ChevronRight {...props} />;

    case Icons.ChevronUp:
      return <ChevronUp {...props} />;

    case Icons.Clock:
      return <Clock {...props} />;

    case Icons.Close:
      return <Close {...props} />;

    case Icons.Cloud:
      return <Cloud {...props} />;

    case Icons.CodeRounded:
      return <CodeRounded {...props} />;

    case Icons.Configuration:
      return <Configuration {...props} />;

    case Icons.Copy:
      return <Copy {...props} />;

    case Icons.CreditCard:
      return <CreditCard {...props} />;

    case Icons.DangerCircle:
      return <DangerCircle {...props} />;

    case Icons.DangerTriangle:
      return <DangerTriangle {...props} />;

    case Icons.Dashboard:
      return <Dashboard {...props} />;

    case Icons.DataPrivacy:
      return <DataPrivacy {...props} />;

    case Icons.DocFile:
      return <DocFile {...props} />;

    case Icons.DocumentAlignRight:
      return <DocumentALignRight {...props} />;

    case Icons.DocumentOutline:
      return <DocumentOutline {...props} />;

    case Icons.DocumentSolid:
      return <DocumentSolid {...props} />;

    case Icons.DocumentUpload:
      return <DocumentUpload {...props} />;

    case Icons.Dot:
      return <Dot {...props} />;

    case Icons.Download:
      return <Download {...props} />;

    case Icons.EditSquare:
      return <EditSquare {...props} />;

    case Icons.Ellipse:
      return <Ellipse {...props} />;

    case Icons.Email:
      return <Email {...props} />;

    case Icons.ExcelFile:
      return <ExcelFile {...props} />;

    case Icons.Expand:
      return <Expand {...props} />;

    case Icons.ExpandFill:
      return <ExpandFill {...props} />;

    case Icons.Export:
      return <Export {...props} />;

    case Icons.EyeClose:
      return <EyeClose {...props} />;
    case Icons.EditSquare:
      return <EditSquare {...props} />;

    case Icons.EyeOpen:
      return <EyeOpen {...props} />;

    case Icons.Facebook:
      return <Facebook {...props} />;

    case Icons.FaqCircle:
      return <FaqCircle {...props} />;

    case Icons.Filter:
      return <Filter {...props} />;

    case Icons.Flag:
      return <Flag {...props} />;

    case Icons.FormatQuote:
      return <FormatQuote {...props} />;

    case Icons.GmailColored:
      return <GmailColored {...props} />;

    case Icons.Group:
      return <Group {...props} />;

    case Icons.GroupMinus:
      return <GroupMinus {...props} />;

    case Icons.GroupPlus:
      return <GroupPlus {...props} />;

    case Icons.Hamburger:
      return <Hamburger {...props} />;

    case Icons.HeadingOne:
      return <HeadingOne {...props} />;

    case Icons.HeadingTwo:
      return <HeadingTwo {...props} />;

    case Icons.HiIcon:
      return <HiIcon {...props} />;

    case Icons.Home:
      return <Home {...props} />;

    case Icons.Info:
      return <Info {...props} />;

    case Icons.InfoSquare:
      return <InfoSquare {...props} />;

    case Icons.Instagram:
      return <Instagram {...props} />;

    case Icons.IntegRouting:
      return <IntegRouting {...props} />;

    case Icons.Italic:
      return <Italic {...props} />;

    case Icons.LighteningLine:
      return <LighteningLine {...props} />;

    case Icons.Link:
      return <Link {...props} />;

    case Icons.Img:
      return <Img {...props} />;

    case Icons.Img2:
      return <Img2 {...props} />;

    case Icons.Import:
      return <Import {...props} />;

    case Icons.Important:
      return <Important {...props} />;

    case Icons.Inbox:
      return <Inbox {...props} />;

    case Icons.JpgFile:
      return <JpgFile {...props} />;

    case Icons.Key:
      return <Key {...props} />;

    case Icons.Linkedin:
      return <Linkedin {...props} />;

    case Icons.List:
      return <List {...props} />;

    case Icons.Location:
      return <Location {...props} />;

    case Icons.LoginAccess:
      return <LoginAccess {...props} />;

    case Icons.LogOut:
      return <LogOut {...props} />;

    case Icons.Mail:
      return <Mail {...props} />;

    case Icons.Medium:
      return <Medium {...props} />;

    case Icons.Mention:
      return <Mention {...props} />;

    case Icons.Message:
      return <Message {...props} />;

    case Icons.MicMute:
      return <MicMute {...props} />;

    case Icons.Microsoft:
      return <Microsoft {...props} />;

    case Icons.Milestone:
      return <Milestone {...props} />;

    case Icons.Minus:
      return <Minus {...props} />;

    case Icons.Monitor:
      return <Monitor {...props} />;

    case Icons.Minus:
      return <Minus {...props} />;

    case Icons.MinusCircle:
      return <MinusCircle {...props} />;

    case Icons.Module:
      return <Module {...props} />;

    case Icons.More:
      return <More {...props} />;

    case Icons.Note:
      return <Note {...props} />;

    case Icons.Notification:
      return <Notification {...props} />;

    case Icons.Null:
      return <Null {...props} />;

    case Icons.NumberList:
      return <NumberList {...props} />;

    case Icons.OfficeBuilding:
      return <OfficeBuilding {...props} />;

    case Icons.Option:
      return <Option {...props} />;

    case Icons.PdfFile:
      return <PdfFile {...props} />;

    case Icons.People:
      return <People {...props} />;

    case Icons.Pin:
      return <Pin {...props} />;

    case Icons.Play:
      return <Play {...props} />;

    case Icons.Plus:
      return <Plus {...props} />;

    case Icons.Privacy:
      return <Privacy {...props} />;

    case Icons.ProfileCircle:
      return <ProfileCircle {...props} />;

    case Icons.ProjectSymlink:
      return <ProjectSymlink {...props} />;

    case Icons.Projects:
      return <Projects {...props} />;

    case Icons.Reminder:
      return <Reminder {...props} />;

    case Icons.RoundCalender:
      return <RoundCalender {...props} />;

    case Icons.RouterEngine:
      return <RouterEngine {...props} />;

    case Icons.Routing:
      return <Routing {...props} />;

    case Icons.Rule:
      return <Rule {...props} />;

    case Icons.Save:
      return <Save {...props} />;

    case Icons.Savings:
      return <Savings {...props} />;

    case Icons.Search:
      return <Search {...props} />;

    case Icons.SearchLens:
      return <SearchLens {...props} />;

    case Icons.Send:
      return <Send {...props} />;

    case Icons.Setting:
      return <Setting {...props} />;

    case Icons.Settings:
      return <Settings {...props} />;

    case Icons.SettingsTwo:
      return <SettingsTwo {...props} />;

    case Icons.Shrink:
      return <Shrink {...props} />;

    case Icons.SidebarCollapse:
      return <SidebarCollapse {...props} />;

    case Icons.Slack:
      return <Slack {...props} />;

    case Icons.Status:
      return <Status {...props} />;

    case Icons.Support:
      return <Support {...props} />;

    case Icons.SwitchOff:
      return <SwitchOff {...props} />;

    case Icons.SwitchOn:
      return <SwitchOn {...props} />;

    case Icons.Tag:
      return <Tag {...props} />;

    case Icons.TableBin:
      return <TableBin {...props} />;

    case Icons.Telephone:
      return <Telephone {...props} />;

    case Icons.TickSquare:
      return <TickSquare {...props} />;

    case Icons.TimeCircle:
      return <TimeCircle {...props} />;

    case Icons.TimeProgress:
      return <TimeProgress {...props} />;

    case Icons.Timeline:
      return <Timeline {...props} />;

    case Icons.Twitter:
      return <Twitter {...props} />;

    case Icons.Underline:
      return <Underline {...props} />;

    case Icons.User:
      return <User {...props} />;

    case Icons.UserGroup:
      return <UserGroup {...props} />;

    case Icons.Whatsapp:
      return <Whatsapp {...props} />;

    case Icons.WhatsappGreen:
      return <WhatsappGreen {...props} />;

    case Icons.WordFile:
      return <WordFile {...props} />;

    case Icons.Workspace:
      return <Workspace {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
