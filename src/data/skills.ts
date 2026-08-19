import { ElementType } from 'react';
import {
  Monitor,
  Server,
  Database,
  Code2,
  BrainCircuit,
  Wrench,
  Layers
} from 'lucide-react';

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive user interfaces',
    icon: Monitor,
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Redux', icon: 'redux' },
      { name: 'React Query', icon: 'react-query' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' }
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'APIs and logic',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'REST APIs', icon: 'rest-apis' },
      { name: 'Authentication & Authorization', icon: 'authentication' },
      { name: 'API Integration', icon: 'api-integration' }
    ],
  },
  {
    id: 'database',
    title: 'Database & Data',
    description: 'Data architecture',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'MySQL', icon: 'sql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Database Design', icon: 'database-design' },
      { name: 'Data Modeling', icon: 'data-modeling' }
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core programming languages',
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' }
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    description: 'Foundational knowledge of machine learning and generative AI',
    icon: BrainCircuit,
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Machine Learning', icon: 'machine-learning' },
      { name: 'Generative AI Fundamentals', icon: 'generative-ai' }
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Testing, design, deploy',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Render', icon: 'render' },
      { name: 'Supabase', icon: 'supabase' }
    ],
  },
  {
    id: 'practices',
    title: 'Development Practices',
    description: 'Principles for software',
    icon: Layers,
    skills: [
      { name: 'Clean Code', icon: 'clean-code' },
      { name: 'Responsive Design', icon: 'responsive-design' },
      { name: 'Component-Based Architecture', icon: 'component-architecture' },
      { name: 'DSA Fundamentals', icon: 'dsa' },
      { name: 'Problem Solving', icon: 'problem-solving' },
      { name: 'UI/UX', icon: 'ui-ux' }
    ],
  }
];
