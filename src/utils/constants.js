import { boldString } from "./utils";
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import WebIcon from '@mui/icons-material/Web';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';

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
    logoPath: "/img/ajY0zUdY_400x400.jpg",
    company: "Creaticles",
    product: "Trial project for Blockchain start up - NFT Crowd sourcing platform",
    position: "Contractor",
    summary: "Wrote full stack voting platform DApp",
    bullets: [
      "Developed and Deployed Solidity smart contract to Ropsten Ethereum Test Network",
      "Developed Next.js app with serverless functions for users to vote, see past transactions, and see the leaderboard",
      "Deployed to Vercel using environment variables for contract address and MONGODB_URI",
      "Validated content using MetaMask and test ether from Ethereum Faucet",
      "Saved voter information to MongoDB Atlas database"
    ],
    date: "Jan 2022",
    location: "Remote"
  },
  {
    logoPath: "/img/dell-technologies-vertical_logo.png",
    company: "Dell EMC",
    product: "CloudIQ - cloud platform for EMC storage products",
    position: "Software Engineer I",
    summary: "Responsible for testing automation and data engineering in Analytics Core team (Cloud 2)",
    bullets: [
      "Maintained integration tests in E2E framework using Java, Maven, Selenium",
      "Designed Selenium test automation system to detect environmental failures then re-start and re-configure all required data processors to resolve microservice dataprep failures",
      "Developed new E2E API Tests for APEX (as a Subscription Offering)",
      {
        title: "Migrated Time Series Similarity from R to Python for license compliance",
        bullets: [
          "Investigated legacy R microservice - documenting methods and related microservices",
          "Created Python common library and integrated into existing Python microservice and deprecated R microservice",
          "Developed performance test that validated Python common library results against common library results using Product data of 1000 systems. Validated features that use TSS: resources in contention, top contributors by match, and ",
          "Displayed aggregated data with pandas, Elasticsearch, and Kibana"
        ]
      },
      "Validated changes for Virtual Machine Performance Impacts feature by writing unit test, contract test, and running integration tests",
    ],
    date: "May 2021 - Present",
    location: "Hopkinton, MA"
  },
  {
    logoPath: "/img/RSA_Security_Logo.bd948c30.png",
    company: "RSA Security",
    product: "Netwitness - SIEM software",
    position: "Quality Engineering Intern",
    summary: "I setup CD for threat content with Jenkins pipeline list to auto test & auto deploy to production new and modified content.",
    bullets: [
      "Established CI/CD Jenkins Scripted Pipeline that automated testing and deployment of threat content (specifically lua parsers and esa rules).",
      "Each individual pipeline did one task (eg: run regression test, deploy content from inputted file) and were coordinated by the Scripted Pipeline.",
      "Created custom scripts to find all modified content, setup for regression tests, aggregate Python nosetest XML reports, and deploy to test production server. This foundation means when all content is added, QA and Release Engineering will have been completely automated for the threat content team.",
      "Automated Jira (and Zephyr) movement with integration into pipeline. Tickets automatically moved to Ready for Release or Ready for Review depending on test results.",
      "Updated threat_content JSON scenarios from last year's internship to help co-worker with new hardening requirements"
    ],
    date: "June 2020 - July 2020",
    location: "Bedford, MA"
  },
  {
    logoPath: "/img/RSA_Security_Logo.bd948c30.png",
    company: "RSA Security",
    product: "Netwitness - SIEM software",
    position: "Quality Engineering Intern",
    summary: "I wrote new Python regression tests for 31 manually tested ESA rules and added a pipeline for my test to the daily build.",
    bullets: [
      "Wrote new Python regression tests for 31 manually tested ESA Rules which use ContextHub data sources, a new feature of the 11.2 release. Created Jenkins pipelines for my regression tests in the daily build on the Bangalore server",
      "Added automatic import of ContextHub lists and enrichment sources functionality to UniTe framework (a homegrown Python testing framework).",
      "Created JSON threat content scenarios for dataconfig tool to automate hardening process: deploying pre-packaged threat content from Live and custom content from a local directory."
    ],
    date: "May 2019 - Aug 2019",
    location: "Bedford, MA"
  },
  {
    logoPath: "/img/avid_logo.png",
    company: "Avid Technology",
    product: "Media Composer - Video Editing software",
    position: "Software Engineer Intern",
    summary: "I setup CD to test the Installers of 3 Avid Services & manually tested the VCS migration from AccuRev to GitLab.",
    bullets: [
      "Implemented Powershell scripts to migrate source trees from AccuRev to GitLab. These scripts reduced source tree from 20 GB to 1.9 MB by moving binaries to an internal Nexus server and generating Gradle properties files to download at runtime.",
      "Tested the migration by hosting a private GitLab server with a CentOS 7 VM on VirtualBox and set up CI to test the build.",
      "Created Jenkins pipelines and executors to download nightly builds from internal server and run Windows Batch scripts automatically to test the installers."
    ],
    date: "Jul 2018 - Aug 2018",
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
    path: "/img/avid_logo.png"
  }
]