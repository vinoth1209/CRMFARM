import {
  BellOutlined,
  ContactsOutlined,
  HomeOutlined,
  MobileOutlined,
  NotificationOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { BiSolidDashboard } from "react-icons/bi";
import {
  BsEnvelopeAtFill,
  BsPersonFillCheck,
  BsPersonFillSlash,
} from "react-icons/bs";
import { FaHandsHelping, FaIdeal, FaPiedPiperPp } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { PiTabsFill } from "react-icons/pi";
import { SiGoogleadsense } from "react-icons/si";
import { TfiStatsUp } from "react-icons/tfi";

export const navLinks = [
  {
    title: "Home",
    path: `home`,
    icon: <HomeOutlined />,
  },
  {
    title: "Notification",
    path: `Notifications`,
    icon: <BellOutlined />,
  },
  {
    title: "Marketing",
    icon: <NotificationOutlined />,
    children: [
      {
        title: "Contact Management",
        icon: <ContactsOutlined />,
        children: [
          {
            title: "Contacts",
            icon: <MobileOutlined />,
            path: `contacts`,
          },
          {
            title: "Calls",
            icon: <PhoneOutlined />,
            path: `call-centre`,
          },
        ],
      },
      {
        title: "Lead Management",
        icon: (
          <SiGoogleadsense
            className="sideBarIcon"
            style={{ fontSize: 13, color: "#666565" }}
          />
        ),
        children: [
          {
            title: "Dashboard",
            icon: (
              <BiSolidDashboard
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `leads`,
          },
          {
            title: "Qualified Leads",
            icon: (
              <BsPersonFillCheck
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `leads/qualifiedLeads`,
          },
          {
            title: "Unqualified Leads",
            icon: (
              <BsPersonFillSlash
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `leads/unqualifiedLeads`,
          },
          {
            title: "UnAsigned Leads",
            icon: (
              <BsPersonFillSlash
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `leads/unAsignedLeads`,
          },
          { title: "Lead Questions", path: `Lead-Questions` },
          {
            title: "Lead Generation",
            icon: (
              <PiTabsFill
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `leads/leadgeneration`,
          },
        ],
      },
      {
        title: "Deal Management",
        icon: <FaHandsHelping fontSize={14} color="#666565" />,
        children: [
          {
            title: "Dashboard",
            icon: (
              <BiSolidDashboard
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `deals-dashboard`,
          },
          {
            title: "Deals",
            icon: (
              <FaIdeal
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `deals`,
          },
          {
            title: "Pipeline deals",
            icon: (
              <FaPiedPiperPp
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `deals-pipeline`,
          },
        ],
      },
      {
        title: "Campaign",
        icon: (
          <MdCampaign className="sideBarIcon" fontSize={18} color="#666565" />
        ),
        children: [
          {
            title: "Dashboard",
            icon: (
              <BiSolidDashboard
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `campaign-dashboard`,
          },
          {
            title: "Email",
            icon: (
              <BsEnvelopeAtFill
                className="sideBarIcon"
                style={{ fontSize: 13, color: "#666565" }}
              />
            ),
            path: `campaign-email`,
          },
          {
            title: "Social Media Campaign",
            icon: (
              <BsEnvelopeAtFill
                className="sideBarIcon"
                style={{ fontSize: 13, color: "#666565" }}
              />
            ),
            path: `SocialCampaign`,
          },
          // { title: "Templates", path: "/campaign-email-template` },
          {
            title: "Statistics",
            icon: (
              <TfiStatsUp
                className="sideBarIcon"
                style={{ fontSize: 14, color: "#666565" }}
              />
            ),
            path: `campaign-statistics`,
          },
        ],
      },
    ],
  },
];
