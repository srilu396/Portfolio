export type ProjectCategory = 'All Projects' | 'Full-Stack Web' | 'AI / ML' | 'UI/UX Design';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'e-commerce-web-app',
    title: 'E-Commerce Web App',
    description: 'A full-stack e-commerce platform with user authentication, product filtering, cart and secure payments.',
    category: 'Full-Stack Web',
    image: '/images/projects/e-commerce.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    slug: 'task-management-tool',
    title: 'Task Management Tool',
    description: 'Collaborative task management application with real-time updates, team boards and progress tracking.',
    category: 'Full-Stack Web',
    image: '/images/projects/task-management.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    description: 'ML model that predicts the likelihood of heart disease using patient health data with high accuracy.',
    category: 'AI / ML',
    image: '/images/projects/heart-disease.png',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    slug: 'finance-dashboard-ui',
    title: 'Finance Dashboard UI',
    description: 'Modern and clean finance dashboard design with analytics, charts and transaction overview.',
    category: 'UI/UX Design',
    image: '/images/projects/finance-dashboard.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://figma.com',
  },
  {
    id: '5',
    slug: 'travel-website-ui',
    title: 'Travel Website UI',
    description: 'A beautifully crafted travel website design with immersive visuals and smooth user experience.',
    category: 'UI/UX Design',
    image: '/images/projects/travel-website.png',
    technologies: ['Figma', 'Web Design', 'Interaction'],
    liveUrl: 'https://figma.com',
  }
];
