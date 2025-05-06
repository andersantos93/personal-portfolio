import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  triad,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  first,
  comicify_ai,
  greentrust,
  mjv,
  devfolio,
  pba,
  ethindia,
  jhe,
  engesoftware,
  ssalogo
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiPhp,
  SiNodedotjs,
  SiTypescript,
  SiLaravel,
  SiCakephp,
  SiExpress,
  SiVuedotjs,
  SiAngular,
  SiSass,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiSonarqube,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiSequelize,
  SiSqlite
} from "react-icons/si";

import {
  FaHardHat,
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1CqYFobW-8E-QV4YbIVHq1S3NmA4BGMmz/view?usp=sharing";
export const repoLink = "https://github.com/andersantos93/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/anderson-costa-dos-santos";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology",
    duration: "December 2020 - May 2024",
    content1: "Major: Electronics and Communication Engineering",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Polkadot Blockchain Academy",
    degree: "",
    duration: "May 2024 - June 2024",
    content1: "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethindia,
    event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "True Network's Winner, Polkadot's 1st Runner Up",
    content2: "Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article: "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube: "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-7",
        icon: SiTypescript,
        name: "Typescript",
      }, 
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiLaravel,
        name: "Laravel",
      },
      {
        id: "f-3",
        icon: SiCakephp,
        name: "CakePHP",
      },
      {
        id: "f-4",
        icon: SiExpress,
        name: "Express",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-6",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-7",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-8",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-9",
        icon: SiSass,
        name: "Sass",
      },
      {
        id: "f-10",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiGooglecloud,
        name: "Google Cloud",
      },
      {
        id: "t-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-4",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "t-5",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "t-6",
        icon: SiSonarqube,
        name: "SonarQube",
      },
      {
        id: "t-7",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-8",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-9",
        icon: SiMicrosoftsqlserver,
        name: "Microsoft SQL Server",
      },
      {
        id: "t-10",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-11",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-12",
        icon: SiOracle,
        name: "OracleDB",
      },
      {
        id: "t-13",
        icon: SiSequelize,
        name: "Sequelize",
      },
      {
        id: "t-14",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "t-15",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-16",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-17",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-18",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-19",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-20",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-21",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "F1rst Digital Services",
    logo: first,
    link: "https://www.f1rst.com.br/first/#/",
    positions: [
      {
        title: "Front End Engineer",
        duration: "October 2021 - October 2024",
        content: [
          {
            text: " Developed a new banking web application focused on investment using the concept of Angular micro-frontends, reducing complexity and enabling the application to be broken into smaller, more manageable pieces for improved implementation and maintenance.",
            link: "",
          },
          {
            text: "Developed and maintained unit tests using Jasmine and Karma in an Angular application to ensure code reliability, improve test coverage, and support test-driven development (TDD).",
            link: ""
          },
          {
            text: "Managed and reviewed merge requests, ensuring code quality, compliance with development standards, and seamless integration into the main codebase.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "MJV Technology & Innovation",
    logo: mjv,
    link: "https://www.mjvinnovation.com/",
    positions: [
      {
        title: "Front End Engineer",
        duration: "April 2021 - October 2021",
        content: [
          {
            text: "Developed a dynamic registration system using Angular, incorporating reusable components and intuitive user interfaces to capture potential investor client data, ensuring compliance with new regulations and keeping the company aligned with updated policies.",
            link: ""
          },
          {
            text: "Implemented Google Analytics tagging across web applications to track user interactions and key performance metrics, enabling data-driven decisions and enhancing user experience through actionable insights.",
            link: ""
          },
          {
            text: "Collaborated in agile development workflows, leveraging Git for version control, participating in code reviews, and contributing to CI/CD deployment pipelines using Jenkins.",
            link: ""
          },
          {
            text: "Collaborated with the Design System team to fix bugs and develop new interface functionalities.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Triad Systems",
    logo: triad,
    link: "https://triadintegration.com.br/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "February 2020 - April 2021",
        content: [
          {
            text: "Developed and maintained a telecommunications web application using AngularJS on the frontend and PHP and Node.js on the backend; built RESTful APIs to support frontend features, ensuring secure data transmission and improving system performance and efficiency.",
            link: "",
          },
          {
            text: "Worked with relational databases such as MySQL and SQL Server to design, optimize, and manage schemas; implemented efficient queries and ensured data integrity for web applications.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "JHE Engenharia",
    logo: jhe,
    link: "https://www.jhe.com.br/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "October 2017 - February 2020",
        content: [
          {
            text: "Developed and managed external web applications for the public sector, focusing on housing and urban development, as well as basic sanitation in São Paulo.",
            link: "",
          },
          {
            text: "Developed and managed a non-native app for collecting data on university infrastructure buildings, including pictures and reports, to facilitate improvement planning.",
            link: "",
          },
          {
            text: "Led the verification of requirements analysis and gathering to collaboratively plan the best practices and technologies with the team.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Engesoftware Tecnologia S.A",
    logo: engesoftware,
    link: "https://www.linkedin.com/company/engesoftware/about/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "August 2016 - August 2017",
        content: [
          {
            text: "Developed and maintained legacy web applications using the Yii PHP Framework.",
            link: "",
          },
          {
            text: "Resolved numerous complex bugs by adhering to coding best practices, including principles such as Clean Code and Design Patterns.",
            link: "",
          },
          {
            text: "Developed a new web system for collecting public servant data, designed to be updated annually.",
            link: "",
          },
          {
            text: " Managed relational databases in MySQL and Oracle, responsible for creating complex queries to optimize query performance.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Prefeitura de Salvador",
    logo: ssalogo,
    link: "https://www.linkedin.com/company/engesoftware/about/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "December 2015 - August 2016",
        content: [
          {
            text: "Worked as a Web Developer, managing a legacy project focused on registering new demands for the City Hall and enhancing email alert notifications upon demand creation.",
            link: "",
          },
          {
            text: "Contributed to the development of a contract management system for the Salvador City Hall in Brazil, leveraging the Laravel framework.",
            link: "",
          },
          {
            text: "Collaborated with a team of 8 software engineers on both legacy and new projects, focusing on feature creation and bug fixes.",
            link: "",
          },
        ],
      }
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Non-Teaching Recruitment Portal, NITK",
    github: "",
    link: "http://recruitment.nitk.ac.in/",
    image: recruitment,
    content:
      "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
  {
    id: "project-6",
    title: "Career Development Centre, NITK Website",
    github: "",
    link: "http://cdc.nitk.ac.in/",
    image: cdc,
    content:
      "The official website of CDC, NITK with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-7",
    title: "Huntly",
    github: "",
    link: "https://devfolio.co/projects/huntly-b5a9",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit"
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-8",
    title: "Cluboard",
    github: "https://github.com/mittal-parth/Cluboard",
    link: "",
    image: cluboard,
    content:
      "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Minimiser",
    github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
    link: "https://minimise-cash-flow.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/anderson-costa-dos-santos/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/andersantos93",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:andersantos.ca@gmail.com",
  }
];

// Your professional summary
export const aboutMe = {
    name: "Anderson Santos",
    githubUsername: 'andersantos93',
    tagLine: "Software Developer | React | Vue.js | Angular | Typescript | JavaScript | PHP",
    intro: "Software Developer with a strong track record of designing and developing web applications."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
