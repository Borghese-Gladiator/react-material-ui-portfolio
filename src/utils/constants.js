import { boldString as b } from "./utils";
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
    link: "about"
  },
  {
    icon: (props) => <ShowChartIcon color="info" {...props} />,
    text: "Experience",
    link: "experience"
  },
  {
    icon: (props) => <WebIcon color="warning" {...props} />,
    text: "Projects",
    link: "projects"
  },
  {
    icon: (props) => <EqualizerIcon color="error" {...props} />,
    text: "Skills",
    link: "skills"
  },
  {
    icon: (props) => <SchoolIcon color="success" {...props} />,
    text: "Education",
    link: "education"
  },
  {
    icon: (props) => <MailIcon color="secondary" {...props} />,
    text: "Contact",
    link: "contact"
  },
  {
    isExternalLink: true,
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
    location: "Burlington, MA"
  }
]

export const projectList = [
  {
    imgPath: "/img/Discord-Logo.png",
    title: "Word Wolf Game",
    about: "Discord bot to play word wolf with friends online in a server",
    tech: [
      <li>Implemented Word Wolf - mafia-like party game where all players except one are assigned the same word and they guess the odd one out.</li>,
      <li>Used {b("Python")} and {b("discord.py")} to write bot commands and game logic</li>,
      <li>Deployed bot to {b("Heroku")} using CLI</li>,
      <li>Loaded Discord API secrets with {b("python-dotenv")}</li>,
    ],
    githubLink: "https://github.com/Borghese-Gladiator/discord-word-wolf-bot",
    demoLink: "https://discord-word-wolf-bot.herokuapp.com/"
  },
  {
    imgPath: "/img/Google-Cloud-Platform-GCP-Logo.png",
    title: "Sentiment Analysis in GCP",
    about: "Deployed containerized Flask app to Google Cloud Platform using Google Kubernetes Engine (GKE)",
    tech: [
      <li>Wrote Naive Bayes Sentiment analysis classifier with {b("NLTK")}</li>,
      <li>Loaded model from PKL file and exposed calls with {b("Flask")} REST API</li>,
      <li>Created {b("GKE")} cluster and managed auto scaling</li>,
      <li>Uploaded {b("Docker")} image to {b("Google Artifact Registry")}</li>,
      <li>Deployed app to cluster and exposed to internet</li>,
    ],
    githubLink: "https://github.com/Borghese-Gladiator/first-docker-gcp",
  },
  {
    imgPath: "/img/person_walking_acceloremeter_signal.png",
    title: "Gait Gender Classification",
    about: "Classified gender by gait (manner of walking) using features from phone accelerometer data",
    tech: [
      <li>Collected accelerometer from 3 subjects and filtered signal using {b("scipy")}</li>,
      <li>Preprocssed data with {b("numpy")} and {b("pandas")}</li>,
      <li>Extracted signal features - Mean, Variance, Entropy, Peak Count, Dominant Frequency</li>,
      <li>Trained {b("sklearn")} Decision Tree, GradientBoost, RandomForest classifiers</li>
    ],
    githubLink: "https://github.com/Borghese-Gladiator/classify-gender-by-walking",
  },
  {
    imgPath: "/img/valorant_logo.png",
    title: "Valorant Lineups",
    about: "Used Next.js and Chakra UI to Sort gallery using map, agent, site and attack/defense",
    tech: [
      <li>Injected file paths object at buildtime into {b("Next.js")} using getStaticProps</li>,
      <li>Used {b("React Context")} to hold user selections</li>,
      <li>Used Chakra UI components for Radio buttons</li>,
      <li>Deployed app to {b("Vercel")} JAMStack platform</li>
    ],
    githubLink: "https://github.com/Borghese-Gladiator/valorant-lineups",
    demoLink: "https://valorant-lineups-six.vercel.app/"
  },
  {
    imgPath: "/img/chrome_extension_image.jpeg",
    title: "Novel Auto Scroller",
    about: "Chrome extension to automatically scroll down web page on novel site",
    tech: [
      <li>Used manifest.js to ensure extension only runs on reading novels website</li>,
      <li>Wrote {b("Vanilla JS")} to remove ads and scroll every 10 seconds</li>,
      <li>Used Chrome Developer Mode to add extension (store requires money for Google Developer License)</li>,
    ],
    githubLink: "https://github.com/Borghese-Gladiator/auto-scroller-chrome-extension",
  },
  {
    imgPath: "/img/post-netlifycms-1200x630.jpg",
    title: "Gatsby.js Blog with Netlify CMS",
    about: "Used Gatsby.js to write a blog site and Netlify CMS to manage blog content",
    tech: [
      <li>Admins manage content using Headless CMS from Netlify</li>,
      <li>Hosted Markdown content on {b("Netlify")} JAMStack</li>,
      <li>Developed blog site with {b("Gatsby.js")} (React library)</li>,
    ],
    githubLink: "https://github.com/Borghese-Gladiator/netlify-cms-gatsby-1",
    demoLink: "https://first-gatsby-headless-cms.netlify.app/"
  },
  {
    imgPath: "/img/pwa_app.png",
    title: "PusherCoins Crypto Pricing",
    about: "React realtime PWA (Progressive Webapp) using PusherCoins API to track cryptocurrency prices",
    tech: [
      <li>React and Bootstrap 4 to display prices</li>,
      <li>Lighthouse audit and Webpack source-map-explorer to analyze bundle</li>,
      <li>Deployed CRA app to Heroku with Pusher API keys in ENV variables</li>,
    ],
    githubLink: "https://github.com/Borghese-Gladiator/pushercoins",
    demoLink: "https://tutorial-pushercoins.herokuapp.com/"
  },
  {
    imgPath: "/img/community-hero.ba9f6ee2.png",
    title: "HackUMass 2019",
    about: "Android app for Community Event Collaboration",
    tech: [
      <li>Users create and join events in their area and are given a "Social Welfare Score"</li>,
      <li>Wrote app in Android Studio and demonstrated to judges with AVD</li>,
      <li>Transposit API Winner by using API for sentiment analysis to filter negative event requests</li>
    ],
    demoLink: "https://dashboard.hackumass.com/projects/63"
  },
  {
    imgPath: "/img/leap-motion.d2adc0d1.png",
    title: "HackUMass 2018",
    about: "Motion activated music controller using Leap Motion",
    tech: [
      <li>Achieved top 3 finalist of 121 teams and 1000 hackers.</li>,
      <li>Python + Leap Motion SDK to detect gestures using Cartesian coordinates of finger digits</li>,
      <li>Forwarded current gesture to HTML/CSS/JS frontend using SocketIO</li>,
    ],
    githubLink: "https://github.com/crystalrhee/hackumassvi",
    demoLink: "https://dashboard.hackumass.com/projects/45"
  }
]

export const skillsList = [
  {
    rootText: "Frontend",
    skillGroupList: [
      {
        groupText: "Core",
        skillList: [
          {
            text: "HTML",
            path: "/img/html_logo.png"
          },
          {
            text: "CSS",
            path: "/img/CSS3_logo_and_wordmark.svg.png"
          },
          {
            text: "JavaScript",
            path: "/img/1200px-Javascript-shield.svg.png"
          }
        ]
      },
      {
        groupText: "React.js",
        skillList: [
          {
            text: "Next.js",
            path: "/img/800px-Nextjs-logo.svg.png"
          },
          {
            text: "Redux",
            path: "/img/redux_logo.png"
          },
          {
            text: "Context",
            path: "/img/1_izrTlpNwGggFhbpP0MgOAQ.png"
          },
          {
            text: "Hooks",
            path: "/img/react_hooks.png"
          },
        ]
      },
      {
        groupText: "Cross Platform",
        skillList: [
          {
            text: "PWA",
            path: "/img/pwa_logo.png"
          },
          {
            text: "React Native",
            path: "/img/react-native-workshop.jpg"
          },
          {
            text: "Flutter",
            path: "/img/flutter5786.jpg"
          },
        ]
      },
      {
        groupText: "Testing",
        skillList: [
          {
            text: "Jest",
            path: "/img/jest-logo-F9901EBBF7-seeklogo.com.png"
          },
          {
            text: "Cypress",
            path: "/img/cypress_logo.webp"
          },
          {
            text: "Lighthouse",
            path: "/img/Google-Chrome-Lighthouse-Logo.webp"
          },
        ]
      },
    ]
  },
  {
    rootText: "DevOps",
    skillGroupList: [
      {
        groupText: "Scripting",
        skillList: [
          {
            text: "Powershell",
            path: "/img/powershell_logo.jpg"
          },
          {
            text: "Bash",
            path: "/img/bash_logo.png"
          },
          {
            text: "Batch",
            path: "/img/kisspng-batch-file-cmd-exe-batch-processing-dos-5af299150eba22.8627303815258483410603.jpg"
          },
        ]
      },
      {
        groupText: "CI/CD",
        skillList: [
          {
            text: "Jenkins",
            path: "/img/1200px-Jenkins_logo.svg.png"
          },
          {
            text: "GitLab",
            path: "/img/gitlab_logo.jpg"
          },
        ]
      },
      {
        groupText: "Containerization",
        skillList: [
          {
            text: "Docker",
            path: "/img/docker_logo.png"
          },
          {
            text: "Kuberntes",
            path: "/img/kubernetes_logo.png"
          },
        ]
      },
    ]
  },
  
  {
    rootText: "Backend",
    skillGroupList: [
      {
        groupText: "Database",
        skillList: [
          {
            text: "MongoDB",
            path: "/img/MongoDB-Emblem.jpg"
          },
          {
            text: "SQLite",
            path: "/img/Sqlite-square-icon.svg.png"
          },
          {
            text: "Postgres",
            path: "/img/Postgresql_elephant.svg.png"
          },
        ]
      },
      {
        groupText: "Build",
        skillList: [
          {
            text: "pip",
            path: "/img/pypi_400x400.webp"
          },
          {
            text: "Maven",
            path: "/img/maven-logo-black-on-white.webp"
          },
          {
            text: "Gradle",
            path: "/img/gradle_logo.png"
          },
          {
            text: "npm",
            path: "/img/540px-Npm-logo.svg.png"
          },
        ]
      },
      {
        groupText: "REST API",
        skillList: [
          {
            text: "Flask",
            path: "/img/flask_logo.png"
          },
          {
            text: "Express",
            path: "/img/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
          },
          {
            text: "Spring",
            path: "/img/spring_logo.png"
          },
        ]
      },
      {
        groupText: "Testing",
        skillList: [
          {
            text: "pytest",
            path: "/img/pytest_logo.webp"
          },
          {
            text: "unittest",
            path: "/img/unittest_logo.png"
          },
          {
            text: "jUnit",
            path: "/img/junit_logo.png"
          },
          {
            text: "Mocha",
            path: "/img/mocha-2-logo-png-transparent.png"
          },
        ]
      },
    ]
  },
  
  {
    rootText: "Cloud",
    skillGroupList: [
      {
        groupText: "Platform",
        skillList: [
          {
            text: "PCF",
            path: "/img/303-3033779_pivotal-cloud-foundry-logo-hd-png-download.png"
          },
          {
            text: "Heroku",
            path: "/img/heroku_logo.png"
          },
          {
            text: "GCP",
            path: "/img/google-cloud-platform-logo-freelogovectors.net_.png"
          },
        ]
      },
      {
        groupText: "Jamstack",
        skillList: [
          {
            text: "Netlify",
            path: "/img/netlify_logomark.png"
          },
          {
            text: "Vercel",
            path: "/img/vercel_logo.webp"
          },
        ]
      },
    ]
  },
]

export const languageList = [
  {
    name: "English",
    proficiencyText: "Native",
    value: 100
  },
  {
    name: "Chinese",
    proficiencyText: "Professional working proficiency",
    value: 80
  },
  {
    name: "Japanese",
    proficiencyText: "Proficient",
    value: 60
  },
  {
    name: "Spanish",
    proficiencyText: "Elementary proficiency",
    value: 30
  },
]