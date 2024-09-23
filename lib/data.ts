import React from "react";
import { MdOutlineHandyman, MdOutlineHealthAndSafety, MdOutlineWorkOutline  } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaNetworkWired, FaRegBuilding } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    "title": "Solution Developer",
    "company": "Andreani Logistics Group",
    "description": 
      "Configured and deployed custom solutions within Microsoft's Dynamics 365 CRM platform, focusing on improving business processes. Played a key role in customizing the Dynamics 365 portal, working primarily with C#, JavaScript, and the .NET Framework. Collaborated with teams using agile methodologies and Git for version control in Github.",
    "icon": React.createElement(FaNetworkWired),
    "date": "2019-2020"
  },
  {
    "title": "Full-Stack Developer",
    "company": "Andreani Logistics Group",
    "description": 
      "Worked in the migration from legacy CRM to proprietary web applications. Developed key features using React, TypeScript, and Material-UI on the frontend, while handling backend integration with .NET Core and SQL Server. Docker was used for containerization, ensuring smooth deployment across environments. All work was done following Scrum methodologies, with code managed through Git.",
    "icon": React.createElement(BsEnvelope),
    "date": "2020-2022"
  },
  {
    "title": "Full-Stack Developer",
    "company": "ÜMA Health",
    "description": 
      "Contributed to a health startup by developing full-stack solutions with a focus on scalability and performance. Implemented frontend interfaces using React and TypeScript, and backend services with Node.js and Nest.js. Leveraged GCP services such as Firestore, Firebase, and Cloud Functions for cloud infrastructure. Storybook was used for UI development and testing.",
    "icon": React.createElement(MdOutlineHealthAndSafety),
    "date": "2022-2023"
  },
  {
    "title": "Freelance Full-Stack Developer",
    "company": "Freelance",
    "description": 
      "Developed custom web solutions for both local and international clients. Built responsive and high-performance websites using React, TypeScript, and Next.js, with styling managed through Tailwind. Integrated various backends with Prisma and Drizzle ORM, working with databases like Postgres and MongoDB. Used GraphQL for efficient API design. Managed projects with Agile and GitHub as the main version control system.",
    "icon": React.createElement(MdOutlineHandyman),
    "date": "2023-2024"
  },
  {
    "title": "Full-Stack Developer",
    "company": "Globalbitz",
    "description": 
      "Collaborating remotely as a freelance developer for a US-based company, driving digital transformation initiatives. Focused on building web applications with React and Next.js, while using TypeScript for type safety and Tailwind for modern UI design. Backend interactions are handled with Prisma and GraphQL. Utilized Agile methodologies with regular sprint reviews.",
    "icon": React.createElement(FaRegBuilding),
    "date": "2024 - Present"
  },
  {
    "title": "Full-Stack Developer",
    "company": "Quantia",
    "description": 
      "Working as a freelance developer for a Spanish technology consultancy. Building scalable web platforms using React and Next.js on the frontend, and Node.js, Express, Prisma, and GraphQL on the backend. Integrated Snowflake for data management and collaborated with teams through Azure DevOps, adhering to Scrum practices.",
    "icon": React.createElement(MdOutlineWorkOutline),
    "date": "2024 - Present"
  }
] as const;

export const projectsData = [
  {
    title: "Kanbanized",
    url: "https://kanbanized.vercel.app/",
    repoUrl: "https://github.com/fersayago/kanbanize",
    description:
      "application designed to seamlessly integrate the Kanban framework into your personal project management workflow.",
    tags: ["React", "Typescript", "Next.js", "Server Actions", "Tailwind", "Prisma", "Shadcn UI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CBoard",
    url: "https://c-board.vercel.app/",
    repoUrl: "https://github.com/fersayago/cboard",
    description:
      "Application designed to foster collaboration by providing a dynamic digital whiteboard platform.",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Liveblocks", "Clerk"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Owly Oracle",
    url: "https://ooracle.vercel.app/",
    repoUrl: "https://github.com/fersayago/owlyoracle",
    description:
      "Free, fun, and bite-sized language lessons, available anytime, anywhere. Master new languages on-the-go with ease.",
    tags: ["React", "Typescript", "Next.js", "Tailwind", "Bun", "Drizzle"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "Git",
  "Tailwind",
  ".NET",
  "SQL",
  "MongoDB",
  "Redux",
  "React-Query",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Framer Motion",
] as const;