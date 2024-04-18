import React from "react";
import { MdOutlineHealthAndSafety, MdOutlineWorkOutline  } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Solution Developer",
    company: "Andreani Logistics Group",
    description:
      "Created and maintained custom solutions on Microsoft's Dynamics 365 platform and portal. I worked with C#, Javascript, jQuery, React and .NET Framework.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "2019- 2020",
  },
  {
    title: "Full-Stack Developer",
    company: "Andreani Logistics Group",
    description:
      "Worked on the migration from CRM architecture to propietary web applications utilizing technologies such as React, TypeScript, Material-UI, C#, .NET Core, SQL Server and Docker.",
    icon: React.createElement(BsEnvelope),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    company: "ÜMA Health",
    description:
      "Worked as a full-stack javascript developer on a startup project. I worked with TypeScript, React, Node.js, Nest.js, SCSS, Storybook, NoSQL and GCP (Firestore, Firebase, API Gateway, Cloud Functions).",
    icon: React.createElement(MdOutlineHealthAndSafety),
    date: "2022 - 2023",
  },
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
    url: "https://owlyoracle.vercel.app/",
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