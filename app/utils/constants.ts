import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  Code,
  Database,
  Cloud,
  Brain,
  Cpu,
  Server,
  Zap,
  GitBranch,
  Box,
  Layers,
} from "lucide-react";

export const FirstName = "Ashish";
export const LastName = "Thapa";
export const PersonalStatement =
  "Passionate Software Engineer | Computer Engineering Graduate 🎓 | Graduate Certificate in Artificial Intelligence 🎓 | Graduate Certificate in Big Data Analytics 🎓 | Years of Experience in Crafting Scalable Solutions 💻 | Committed to Continuous Learning and Innovation 🌟 | Let's connect and explore the limitless possibilities at the intersection of code and creativity! 👨‍💻 #Web applications #Data Science #Machine Learning & AI Solutions";
export const Designation = "Software Developer";

export const skills = [
  { name: "JavaScript", icon: Code, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", icon: Code, color: "from-blue-400 to-blue-600" },
  { name: "Python", icon: Code, color: "from-green-400 to-emerald-600" },
  { name: "SQL", icon: Database, color: "from-orange-400 to-red-500" },
  { name: "Node.js", icon: Server, color: "from-green-500 to-green-700" },
  { name: "NestJS", icon: Server, color: "from-red-500 to-pink-600" },
  { name: "Express.js", icon: Server, color: "from-gray-400 to-gray-600" },
  { name: "React", icon: Zap, color: "from-cyan-400 to-blue-500" },
  { name: "NextJS", icon: Zap, color: "from-slate-700 to-black" },
  { name: "Tailwind CSS", icon: Layers, color: "from-cyan-400 to-teal-500" },
  { name: "MySQL", icon: Database, color: "from-blue-500 to-indigo-600" },
  { name: "Postgres", icon: Database, color: "from-blue-600 to-indigo-700" },
  { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
  { name: "Redis", icon: Database, color: "from-red-500 to-rose-600" },
  { name: "AWS", icon: Cloud, color: "from-orange-500 to-amber-600" },
  { name: "Azure", icon: Cloud, color: "from-blue-500 to-blue-700" },
  { name: "Docker", icon: Box, color: "from-blue-400 to-blue-600" },
  { name: "Kubernetes", icon: Box, color: "from-blue-500 to-indigo-600" },
  { name: "Git", icon: GitBranch, color: "from-orange-500 to-red-600" },
  { name: "TensorFlow", icon: Brain, color: "from-orange-400 to-orange-600" },
  { name: "PyTorch", icon: Brain, color: "from-red-500 to-orange-600" },
  { name: "Scikit-learn", icon: Brain, color: "from-blue-500 to-cyan-600" },
  { name: "Spark", icon: Zap, color: "from-orange-500 to-red-600" },
  { name: "PowerBI", icon: Cpu, color: "from-yellow-500 to-amber-600" },
  { name: "Tableau", icon: Cpu, color: "from-blue-500 to-indigo-600" },
  { name: "Kafka", icon: Server, color: "from-gray-700 to-black" },
  { name: "CI/CD", icon: GitBranch, color: "from-purple-500 to-pink-600" },
  { name: "Heroku", icon: Cloud, color: "from-purple-500 to-purple-700" },
  { name: "Hugging Face", icon: Brain, color: "from-yellow-400 to-amber-500" },
];

export const SocialLinks = [
  {
    href: "mailto:aacict@gmail.com",
    icon: faEnvelope,
    style: { color: "#F87171" },
  },
  { href: "https://github.com/aacict/", icon: faGithub },
  {
    href: "https://www.linkedin.com/in/aacict/",
    icon: faLinkedin,
    style: { color: "#74C0FC" },
  },
];

export const personalProjects = [
  // {
  //   title: "AI powered Job Application Tracker",
  //   description:
  //     "AI-powered assistant trained on my professional resume and portfolio. Built with LLM technology to answer questions about my experience, skills, projects, and career background in real-time through natural conversation.",
  //   tags: [],
  //   github: "",
  //   web: "h",
  //   color: "from-blue-500 to-cyan-500",
  //   year: "concept draft",
  // },
  {
    title: "Ask Ashish",
    description:
      "AI-powered assistant trained on my professional resume and portfolio. Built with LLM technology to answer questions about my experience, skills, projects, and career background in real-time through natural conversation.",
    tags: [],
    github: "https://github.com/aacict/ask-ashish",
    web: "https://thapaashish.com.np/ask-ashish",
    color: "from-blue-500 to-cyan-500",
    year: "2026 - ongoing",
  },
  {
    title: "AI Content Creator",
    description:
      "Automated social media content generator that creates and posts AI-generated images with captions to Facebook using AWS Lambda, Hugging Face APIs, and Terraform. Serverless architecture with scheduled daily posts via EventBridge.",
    tags: [
      "AWS Lambda",
      "Hugging Face",
      "Terraform",
      "Python",
      "Facebook API",
      "Serverless",
    ],
    github: "https://github.com/aacict/ai-content-creator",
    web: "https://www.facebook.com/aicontentcreatorbot",
    color: "from-blue-500 to-cyan-500",
    year: "2026",
  },
  {
    title: "Personal Portfolio v2",
    description:
      "My personal portfolio website built with Next.js, TypeScript, Tailwind CSS and hosted on Vercel.",
    tags: ["Next.js", "Git", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/aacict/aacict_v2",
    web: "https://thapaashish.com.np/",
    color: "from-blue-500 to-cyan-500",
    year: "2026",
  },
  {
    title: "Flask Server CI/CD Pipeline",
    description:
      "This project demonstrates deploying a Flask API using Docker, Terraform, and GitHub Actions. The Flask app is packaged as a Docker image, pushed to GitHub Container Registry (GHCR), and deployed to AWS EC2 via Terraform.",
    tags: ["Flask", "Docker", "Terraform", "GitHub CI/CD", "AWS EC2"],
    github: "https://github.com/aacict/Flask-Server-CI-CD-Pipeline",
    web: "",
    color: "from-blue-500 to-cyan-500",
    year: "2025",
  },
  {
    title: "Crime Statistics",
    description:
      "Analyzes crime statistics in Canada to identify trends, patterns, and insights across different provinces and territories over time. It includes data cleaning, exploratory data analysis, and visualization.",
    tags: [
      "Python",
      "PowerBI",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
    github: "https://github.com/swekriti12/Crime-Statistics",
    web: "",
    color: "from-blue-500 to-cyan-500",
    year: "2024-2025",
  },
  {
    title: "AI & ML Projects",
    description:
      "Collection of academic and personal projects covering reinforcement learning, NLP, classification, regression, computer vision, and other data science tasks.",
    tags: [
      "Python",
      "Spark",
      "TensorFlow",
      "OpenCV",
      "Jetson Nano",
      "Machine Learning",
      "Data Science",
      "AI",
    ],
    github: "https://github.com/aacict/AI-Machine-Learning",
    web: "",
    color: "from-blue-500 to-cyan-500",
    year: "2023-2024",
  },
  {
    title: "Personal Portfolio v1",
    description:
      "My personal portfolio website built with React,React Query, TypeScript, Tailwind CSS.",
    tags: ["React", "React Query", "Git", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/aacict/aacict",
    web: "",
    color: "from-blue-500 to-cyan-500",
    year: "2026",
  },
];

export const clientProjects = [
  {
    title: "Al Ghawali",
    company: "Al Ghawali Manpower Supply",
    description:
      "Architected and developed scalable web applications, including multi-company websites and internal workflow systems. All-in-one admin panel to manage visa processes, worker tracking, and internal accounting workflows, reducing manual processing time.",
    tags: [
      "Node.js",
      "Next.js",
      "React",
      "React Query",
      "MongoDB",
      "Docker",
      "GitHub CI/CD",
      "Hostinger VPS",
    ],
    web: "https://www.alghawalimanpower.com/",
    color: "from-indigo-500 to-purple-500",
    year: "2025 - Ongoing",
  },
  {
    title: "Surebird",
    company: "PROSHORE 🚀 ready-to-code dev teams",
    description:
      "Contributed to building a digital platform that consolidates insurance policies in one place and proactively monitors life changes to optimize coverage and cost. My role included full-stack development, collaborating with cross-functional teams to deliver the MVP under tight deadlines.",
    tags: [
      "Nest.js",
      "React",
      "React Query",
      "PostgreSQL",
      "Redis",
      "Heroku",
      "Auth0 integration",
      "Salesforce integration",
      "Hubspot integration",
      "RISK insurance integration",
      "Jira Board",
    ],
    web: "https://www.surebird.nl/",
    color: "from-indigo-500 to-purple-500",
    year: "2022-2023",
  },
  {
    title: "Blinqed (OrderXL)",
    company: "PROSHORE 🚀 ready-to-code dev teams",
    description:
      "Contributed to ecommerce platform where hospitality businesses can discover and connect with all their suppliers and products in one centralized app. The solution streamlines ordering, product discovery, and supplier management; empowering suppliers to easily showcase offerings and deliver more value to their customers.",
    tags: [
      "Node.js",
      "Python",
      "pug.js",
      "Vue.js",
      "Docker",
      "Bitbucket CI/CD",
      "AWS Lambda",
      "AWS Aurora",
      "AWS Elasticbeanstalk",
      "AWS ElastiEc2",
      "AWS Batch",
      "Jira Board",
    ],
    web: "https://info.orderxl.com/",
    color: "from-indigo-500 to-purple-500",
    year: "2021-2022",
  },
  {
    title: "Orange Games",
    company: "Freelance (Anka Ek Technology)",
    description:
      "Built scalable backend services for a multiplayer gaming platform featuring traditional and modern games (Ludo, Carrom, Apple & Oranges, Baagchal). Designed RESTful APIs for gameplay mechanics, user management, leaderboards, and real-time game state synchronization.",
    tags: ["Express.js", "Rest API", "MongoDB", "AWS", "Jira Board"],
    web: "https://ankaek.com/our-games",
    color: "from-indigo-500 to-purple-500",
    year: "2020-2022",
  },
  {
    title: "Workerpros",
    company: "E - Signature Pvt. Ltd.",
    description:
      "(Project Halted) A social site to connect with different people as well as allows to share thoughts and get engagements. This platform allows to search job, real-time communication with employers, and tracks your job application status.",
    tags: ["Node.js", "React", "MongoDB", "AWS Ec2", "AWS S3"],
    web: "https://sdoky.com/",
    color: "from-indigo-500 to-purple-500",
    year: "2020-2021",
  },
  {
    title: "Sdoky",
    company: "E - Signature Pvt. Ltd.",
    description:
      "Platform to manage your day to day knowledge about anything, just snap and transform it to a learning material.",
    tags: [
      "Node.js",
      "REST API",
      "Express.js",
      "OCR",
      "EJS",
      "MySQL",
      "AWS Ec2",
      "AWS S3",
    ],
    web: "https://sdoky.com/",
    color: "from-indigo-500 to-purple-500",
    year: "2020-2021",
  },
  {
    title: "Naradmuni",
    company: "E - Signature Pvt. Ltd.",
    description:
      "(Project Halted) Civic engagement platform that runs opinion polls on the parliament bills and key social issues.",
    tags: ["Node.js", "MongoDB", "REST API", "Express.js"],
    web: "https://www.facebook.com/NaradMuniApp",
    color: "from-indigo-500 to-purple-500",
    year: "2019-2020",
  },
];
