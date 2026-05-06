import {
  RiGithubLine,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  SiCloudflare,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export const services = [
  {
    title: "Frontend Development",
    price: "Starts at $999",
    description:
      "I build modern, responsive, and high-performance frontend applications using React, Next.js, Tailwind CSS, and TypeScript.",
    features: [
      "Responsive web applications",
      "React + Next.js development",
      "Tailwind CSS styling",
      "API integration",
      "Reusable component architecture",
      "Performance optimization",
    ],
  },
  {
    title: "Landing Page Development",
    price: "Starts at $799",
    description:
      "Fast, clean, and conversion-focused landing pages built from existing designs, references, or wireframes.",
    features: [
      "Pixel-perfect implementation",
      "Mobile responsive layout",
      "Smooth animations & interactions",
      "SEO-friendly structure",
      "Fast loading performance",
      "Deployment support",
    ],
  },
  {
    title: "Web App Development",
    price: "Starts at $1,999",
    description:
      "Frontend-heavy web applications with authentication, dashboards, APIs, and scalable architecture.",
    features: [
      "Dashboard interfaces",
      "Authentication flows",
      "REST API integration",
      "State management",
      "Modern UI implementation",
      "Basic backend integration",
    ],
  },
  {
    title: "Basic Mobile Apps",
    price: "Starts at $1,499",
    description:
      "Cross-platform mobile applications with clean UI and essential backend functionality.",
    features: [
      "React Native development",
      "Android + iOS support",
      "API integration",
      "Authentication",
      "Responsive mobile UI",
      "App deployment assistance",
    ],
  },
];

export const stackItems = [
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "React Native", icon: RiReactjsLine },
  { name: "Expo", icon: SiExpo },
  { name: "Tailwind CSS", icon: RiTailwindCssLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Figma", icon: SiFigma },
  { name: "Node.js", icon: RiNodejsLine },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Prisma", icon: SiPrisma },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "GitHub", icon: RiGithubLine },
  { name: "Git", icon: SiGit },
];
