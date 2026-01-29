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
  {
    title: "Flask Server CI/CD Pipeline",
    description:
      "This project demonstrates deploying a Flask API using Docker, Terraform, and GitHub Actions. The Flask app is packaged as a Docker image, pushed to GitHub Container Registry (GHCR), and deployed to AWS EC2 via Terraform.",
    tags: ["Flask", "Docker", "Terraform", "GitHub CI/CD", "AWS EC2"],
    github: "https://github.com/aacict/",
    web: "",
    color: "from-blue-500 to-cyan-500",
    year: "2024",
  },
];

export const clientProjects = [
  {
    title: "Blinqed (OrderXL)",
    company: "PROSHORE 🚀 ready-to-code dev teams",
    description:
      "Comprehensive ERP solution handling inventory, sales, and customer management for 10,000+ users",
    tags: [
      "Node.js",
      "Python",
      "pug.js",
      "Vue.js",
      "Docker",
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
];
