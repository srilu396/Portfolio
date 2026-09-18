import { Calendar, Code2, Layers, Target, Server, Database, Smartphone } from 'lucide-react';

export const education = {
  degree: "B.Tech in CSE (Artificial Intelligence & Data Science)",
  institution: "Kakinada Institute of Engineering and Technology for Women",
  location: "Korangi,",
  cgpa: "8.39",
  period: "2022 – 2026",
};

export const aboutStats = [
  {
    icon: Calendar,
    value: "9+",
    label: "Months of\nInternship Experience",
  },
  {
    icon: Code2,
    value: "5+",
    label: "Projects\nBuilt",
  },
  {
    icon: Layers,
    value: "10+",
    label: "Technologies\nUsed",
  },
  {
    icon: Target,
    value: "Currently",
    label: "Open to\nOpportunities",
  }
];

export const focusItems = [
  {
    icon: Smartphone,
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Redux & Redux Toolkit",
      "React Query / TanStack Query",
      "Tailwind CSS",
      "Responsive UI/UX",
      "Component-Based Architecture"
    ]
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "RESTful APIs",
      "Authentication & Authorization",
      "Server-Side Application Logic",
      "API Integration"
    ]
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: [
      "MongoDB",
      "SQL / Relational Databases",
      "Prisma ORM",
      "Database Design",
      "Data Modeling",
      "Query Optimization"
    ]
  },
  {
    icon: Target,
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Clean Code & Best Practices",
      "Deployment — Vercel & Render"
    ]
  }
];
