import { boldString } from "./utils";
import InboxIcon from '@mui/icons-material/MoveToInbox';

export const drawerWidth = 190;
export const sidebarLinkList = [
  {
    icon: () => <InboxIcon />,
    text: "About",
    link: "#about"
  },
  {
    icon: () => <InboxIcon />,
    text: "Experience",
    link: "#experience"
  },
  {
    icon: () => <InboxIcon />,
    text: "Projects",
    link: "#projects"
  },
  {
    icon: () => <InboxIcon />,
    text: "Skills",
    link: "#skills"
  },
  {
    icon: () => <InboxIcon />,
    text: "Education",
    link: "#education"
  },
  {
    icon: () => <InboxIcon />,
    text: "Contact",
    link: "#contact"
  },
  {
    icon: () => <InboxIcon />,
    text: "Resume",
    link: "#resume"
  }
]

export const experienceList = [
  {
    company: "RSA Security",
    position: "QE Intern",
    logoPath: "/image.jpg",
    about: "Competitive program to develop",
    summary: [
      ""
    ],
    date: "Feb 2022 - 2022",
    location: "Boston, MA"
  }
]

export const projectList = [
  {
    title: "",
    about: "",
    tech: [
      `${boldString("Ruby on Rails")} backend`,
      `${boldString("Material UI")} frontend`,
    ],
    github: "link",
    demo: "link"
  }
]

export const skillsList = [
  {
    name: "GitHub",
    path: "/image.jpg"
  }
]