import { boldString } from "./utils";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import WebIcon from '@mui/icons-material/Web';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import { purple } from '@mui/material/colors';

export const drawerWidth = 190;
export const sidebarLinkList = [
  {
    icon: (props) => <PersonIcon color="primary" {...props} />,
    text: "About",
    link: "#about"
  },
  {
    icon: (props) => <ShowChartIcon color="info" {...props} />,
    text: "Experience",
    link: "#experience"
  },
  {
    icon: (props) => <WebIcon color="warning" {...props} />,
    text: "Projects",
    link: "#projects"
  },
  {
    icon: (props) => <EqualizerIcon color="error" {...props} />,
    text: "Skills",
    link: "#skills"
  },
  {
    icon: (props) => <SchoolIcon color="success" {...props} />,
    text: "Education",
    link: "#education"
  },
  {
    icon: (props) => <MailIcon color="secondary" {...props} />,
    text: "Contact",
    link: "#contact"
  },
  {
    icon: (props) => <ArticleIcon {...props} />,
    text: "Resume",
    link: "/doc/Timothy_Shee_Resume_2022.pdf"
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