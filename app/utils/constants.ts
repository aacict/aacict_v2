import {
  faJs,
  faPython,
  faReact,
  faNodeJs,
  faGit,
  faDocker,
  faGitlab,
  faBitbucket,
  faAws,
  faMicrosoft,
  faJira,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faServer,
  faCube,
  faCubes,
  faFeatherAlt,
  faMugHot,
  faPaperPlane,
  faChartPie,
  faNetworkWired,
  faLeaf,
  faSmile,
  faBolt,
  faChartColumn,
  faHSquare,
  faDatabase,
  faProjectDiagram,
  faCloud,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

export const FirstName = "Ashish";
export const LastName = "Thapa";
export const PersonalStatement =
  "Passionate Software Engineer | Computer Engineering Graduate 🎓 | Graduate Certificate in Artificial Intelligence 🎓 | Graduate Certificate in Big Data Analytics 🎓 | Years of Experience in Crafting Scalable Solutions 💻 | Committed to Continuous Learning and Innovation 🌟 | Let's connect and explore the limitless possibilities at the intersection of code and creativity! 👨‍💻 #Web applications #Data Science #Machine Learning & AI Solutions";
export const Designation = "Software Developer";

export const ExpertiseContent = {
  "Languages & Frameworks": [
    { name: "JavaScript", icon: faJs },
    { name: "TypeScript", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "SQL", icon: faDatabase },
    { name: "Node.js", icon: faNodeJs },
    { name: "NestJS", icon: faFeatherAlt },
    { name: "Express.js", icon: faServer },
    { name: "React", icon: faReact },
    { name: "Mocha", icon: faMugHot },
    { name: "Chai", icon: faMugHot },
  ],
  Databases: [
    { name: "MySQL", icon: faDatabase },
    { name: "Postgres", icon: faDatabase },
    { name: "MongoDB", icon: faLeaf }, // Not in FA, may need custom
    { name: "Redis", icon: faServer },
  ],
  "Cloud Platforms": [
    { name: "AWS", icon: faAws },
    { name: "Azure", icon: faMicrosoft },
    { name: "Heroku", icon: faHSquare },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: faGit },
    { name: "Docker", icon: faDocker },
    { name: "Postman", icon: faPaperPlane },
    { name: "Swagger", icon: faCode },
    { name: "Jira", icon: faJira },
    { name: "Bitbucket", icon: faBitbucket },
    { name: "GitLab", icon: faGitlab },
    { name: "PowerBI", icon: faChartColumn },
    { name: "Tableau", icon: faChartPie },
  ],
  "Data Science": [
    { name: "Hugging Face", icon: faSmile }, // closest match
    { name: "TensorFlow", icon: faNetworkWired },
    { name: "Scikit-learn", icon: faComputer },
    { name: "Spark", icon: faBolt },
  ],
  Core: [
    { name: "OOP", icon: faCubes },
    { name: "Data Structures & Algorithms", icon: faProjectDiagram },
    { name: "Cloud Computing", icon: faCloud },
    { name: "AI Infrastructure & Architecture", icon: faCube },
  ],
};

export const SocialLinks = [
  {
    href: "https://www.facebook.com/aacict",
    icon: faFacebook,
    style: { color: "#74C0FC" },
  },
  { href: "https://github.com/aacict/", icon: faGithub },
  {
    href: "https://www.linkedin.com/in/aacict/",
    icon: faLinkedin,
    style: { color: "#74C0FC" },
  },
];
