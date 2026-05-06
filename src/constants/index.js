import {
  RiBootstrapFill,
  RiGithubFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAstro,
  SiBun,
  SiCloudflare,
  SiCss,
  SiDaisyui,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNpm,
  SiPortainer,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiShadcnui,
  SiSupabase,
  SiTypescript,
  SiVite,
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
  // Frameworks and languages
  { name: "JavaScript", icon: RiJavascriptFill, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "React", icon: RiReactjsFill, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-black" },
  { name: "Astro.js", icon: SiAstro, color: "text-[#FF5D01]" },

  // UI libraries
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-[#06B6D4]" },
  { name: "Bootstrap", icon: RiBootstrapFill, color: "text-[#7952B3]" },
  { name: "DaisyUI", icon: SiDaisyui, color: "text-[#5A0EF8]" },
  { name: "ShadcnUI", icon: SiShadcnui, color: "text-black" },

  // Mobile development
  { name: "React Native", icon: RiReactjsFill, color: "text-[#61DAFB]" },
  { name: "Expo", icon: SiExpo, color: "text-black" },

  // Design tools
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },

  // Build tools
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  { name: "Bun", icon: SiBun, color: "" },
  { name: "NPM", icon: SiNpm, color: "text-[#CB3837]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },

  // Backend
  { name: "Node.js", icon: RiNodejsFill, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-black" },
  { name: "Fast API", icon: SiFastapi, color: "text-[#009688]" },

  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },

  // ORM
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
  { name: "Drizzle ORM", icon: SiDrizzle, color: "text-[#C5F74F]" },
  { name: "Mongoose", icon: SiMongoose, color: "text-[#880000]" },

  // Cloud / DevOps
  { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
  { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F38020]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Portainer", icon: SiPortainer, color: "text-[#13BEF9]" },

  // Version control
  { name: "GitHub", icon: RiGithubFill, color: "text-black" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
];

export const experience = [
  {
    company: "Depth Nepal Pvt. Ltd.",
    role: "Front-End Developer",
    duration: "2025 - Present",
    detail:
      "Contributing to the frontend development of restaurant and property management SaaS platforms using React, TypeScript, and Next.js.",
  },
  {
    company: "Broadway Infosys",
    role: "Web Design Trainee",
    duration: "2022 - 2023",
    detail:
      "Completed professional web design and frontend development training focused on responsive design, and modern web development skills.",
  },

  {
    company: "Janjyoti Multiple Campus, Affiliated by Tribhuvan University",
    role: "Bachelor in Computer Application",
    duration: "2019 - 2023",
    detail:
      "Completed a Bachelor in Computer Application degree with a strong focus on web development, frontend technologies, and practical software development skills.",
  },
];
