export type ProjectCategory = 'All Projects' | 'Full Stack' | 'Machine Learning' | 'Figma Design';

export interface ProjectCredential {
  role: string;
  email: string;
  password?: string;
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
  figmaUrl?: string;
  prototypeUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: ProjectCategory;
  thumbnail?: string;
  images: string[];
  credentials?: ProjectCredential[];

  technologies: {
    name: string;
    icon?: string;
  }[];

  // Optional metadata
  role?: string;
  duration?: string;
  teamSize?: string;
  status?: string;
  projectType?: string;

  // Optional detailed content
  features?: string[];
  learnings?: string[];

  // Optional links
  links?: ProjectLinks;

  featured?: boolean;
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // FULL STACK PROJECTS
  // ─────────────────────────────────────────────
  {
    id: '1',
    slug: 'srilu-fashionhub',
    title: 'SRILU FashionHub',
    description: 'A luxury full-stack fashion e-commerce platform built with the MERN stack, featuring customer shopping, authentication, product discovery, cart and wishlist functionality, secure checkout, order management, administrative store management, and real-time communication capabilities.',
    detailedDescription: 'SRILU FashionHub is a full-stack luxury fashion e-commerce platform designed to provide a complete online shopping experience for customers while giving administrators centralized control over products, orders, users, inventory, and store operations.\n\nThe application follows a separated frontend-backend architecture, with a React-based frontend deployed on Vercel, an Express.js and WebSocket backend deployed on Render, and MongoDB Atlas as the cloud database.\n\nThe platform includes customer-facing shopping functionality as well as an administrative management system. Authentication and authorization are implemented using JWT, while passwords are securely hashed using bcryptjs.\n\nReal-time WebSocket communication is used for features such as order tracking, customer messaging, live activity updates, and administrative monitoring.',
    category: 'Full Stack',
    projectType: 'Solo Project',
    role: 'Web Developer',
    teamSize: '1 Developer',
    images: [
      '/images/projects/web/srilu-fashionhub/image1.png',
      '/images/projects/web/srilu-fashionhub/image2.png',
      '/images/projects/web/srilu-fashionhub/image3.png',
      '/images/projects/web/srilu-fashionhub/image4.png',
      '/images/projects/web/srilu-fashionhub/image5.png',
      '/images/projects/web/srilu-fashionhub/image6.png',
      '/images/projects/web/srilu-fashionhub/image7.png'
    ],
    technologies: [
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'Redux Toolkit', icon: '/icons/skills/redux.svg' },
      { name: 'React Router', icon: '/icons/skills/react-router.svg' },
      { name: 'Node.js', icon: '/icons/skills/nodejs.svg' },
      { name: 'Express.js', icon: '/icons/skills/express.jpg' },
      { name: 'MongoDB', icon: '/icons/skills/mongodb.svg' },
      { name: 'WebSockets', icon: '/icons/skills/websockets.jpg' }
    ],
    features: [
      'User authentication and authorization',
      'Product browsing and discovery',
      'Product filtering and search',
      'Shopping cart functionality',
      'Wishlist functionality',
      'Secure checkout workflow',
      'Order management and tracking',
      'Administrative store management',
      'Customer management',
      'Real-time order/activity capabilities',
      'Customer messaging capabilities',
      'Responsive user interface',
      'API-based frontend/backend architecture',
      'Secure JWT-based authorization'
    ],
    learnings: [
      'Building a complete full-stack e-commerce application from scratch',
      'Designing REST APIs with Express.js',
      'Connecting React frontend applications with backend services',
      'Managing application state using Redux Toolkit',
      'Implementing JWT authentication and authorization',
      'Working with MongoDB Atlas and Mongoose',
      'Implementing real-time communication using WebSockets',
      'Deploying frontend and backend services independently',
      'Handling production CORS and environment configuration',
      'Structuring reusable frontend and backend components'
    ],
    links: {
      liveUrl: 'https://srilu-fashionhub-frontend.vercel.app/',
      githubUrl: 'https://github.com/srilu396/srilu-fashionhub-frontend'
    },
    credentials: [
      {
        role: 'Admin',
        email: 'admin@srilufashionhub.com',
        password: 'SriluF@sh1on@2024!'
      },
      {
        role: 'User',
        email: 'srilunagulapalli396@gmail.com',
        password: 'Satya396@'
      }
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'tasknova',
    title: 'TaskNova',
    description: 'A production-style collaborative task management platform designed for modern teams to manage projects, assign tasks, track progress, communicate through comments and notifications, and monitor team performance from a unified workspace.',
    detailedDescription: 'TaskNova is a full-stack project management platform designed for teams to organize projects, assign tasks, monitor progress, and collaborate through a unified workspace.\n\nThe application provides separate experiences for administrators and team members. Administrators can create projects, manage team members, assign tasks, monitor activity, and access organization-wide analytics, while members can focus on their assigned projects and tasks.\n\nThe application combines REST APIs, Socket.io real-time communication, TanStack React Query for server-state management, optimistic updates, and a Kanban-based task workflow to create a responsive project management experience.',
    category: 'Full Stack',
    projectType: 'Solo Project',
    role: 'Web Developer',
    teamSize: '1 Developer',
    images: [
      '/images/projects/web/tasknova/image1.png',
      '/images/projects/web/tasknova/image2.png',
      '/images/projects/web/tasknova/image3.png',
      '/images/projects/web/tasknova/image4.png',
      '/images/projects/web/tasknova/image5.png',
      '/images/projects/web/tasknova/image6.png',
      '/images/projects/web/tasknova/image7.png',
      '/images/projects/web/tasknova/image8.png'
    ],
    technologies: [
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'Vite', icon: '/icons/skills/vite.png' },
      { name: 'Tailwind CSS', icon: '/icons/skills/tailwindcss.jpg' },
      { name: 'TanStack Query', icon: '/icons/skills/react-query.svg' },
      { name: 'Node.js', icon: '/icons/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/icons/skills/mongodb.svg' },
      { name: 'Socket.io', icon: '/icons/skills/socket-io.webp' }
    ],
    features: [
      'JWT-based authentication',
      'Role-based access control',
      'Admin and member workflows',
      'Project creation and management',
      'Team member management',
      'Task creation and assignment',
      'Kanban board workflow',
      'Custom task statuses',
      'Task priority management',
      'Due date tracking',
      'Task comments',
      'Real-time notifications',
      'Interactive dashboard analytics',
      'Project progress visualization',
      'Team activity monitoring',
      'Drag-and-drop task management',
      'Responsive mobile-first UI',
      'Optimistic UI updates',
      'API response caching',
      'Background data synchronization',
      'Debounced search and filtering',
      'Skeleton loading states'
    ],
    learnings: [
      'Building a collaborative full-stack SaaS-style application',
      'Implementing server-state management with TanStack React Query',
      'Working with caching and cache invalidation',
      'Implementing optimistic UI updates',
      'Building real-time functionality with Socket.io',
      'Designing role-based access control',
      'Building interactive Kanban workflows',
      'Implementing analytics dashboards',
      'Designing reusable React components',
      'Managing complex frontend/backend application state',
      'Optimizing API requests and user experience',
      'Building responsive interfaces for different screen sizes'
    ],
    links: {
      liveUrl: 'https://team-task-manager-frontend-azure.vercel.app/',
      githubUrl: 'https://github.com/srilu396/Team-Task-Manager-frontend'
    },
    credentials: [
      {
        role: 'Admin',
        email: 'admin1@tasknova.com',
        password: 'Admin1@1234'
      },
      {
        role: 'Team Member',
        email: 'john@tasknova.com',
        password: 'Member@1234'
      }
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'enterprise-learning-management-system',
    title: 'Enterprise Learning Management System',
    description: 'A professional Learning Management System platform designed to centralize educational administration and provide structured management of students, users, institutions, courses, modules, lessons, assignments, quizzes, enrollments, and related learning operations.',
    detailedDescription: 'The Enterprise Learning Management System is a full-stack educational platform designed to centralize learning and administrative operations for educational institutions.\n\nThe system consists of a modern Next.js 15 administrative frontend integrated with a Node.js and Express.js backend. PostgreSQL is used as the relational database, with Sequelize providing ORM-based data management.\n\nThe platform supports core LMS entities including students, users, institutions, courses, modules, lessons, assignments, quizzes, enrollments, and tutors.\n\nThe administrative dashboard provides tools for managing student records, administrative users, institutions, and educational data through authenticated and responsive interfaces.',
    category: 'Full Stack',
    projectType: 'Team Project',
    role: 'Web Developer',
    teamSize: '2 Developers',
    images: [
      '/images/projects/web/enterprise-lms/image1.png',
      '/images/projects/web/enterprise-lms/image2.png',
      '/images/projects/web/enterprise-lms/image3.png',
      '/images/projects/web/enterprise-lms/image4.png',
      '/images/projects/web/enterprise-lms/image5.png',
      '/images/projects/web/enterprise-lms/image6.png',
      '/images/projects/web/enterprise-lms/image7.png',
      '/images/projects/web/enterprise-lms/image8.png'
    ],
    technologies: [
      { name: 'Next.js', icon: '/icons/skills/nextjs.jpg' },
      { name: 'TypeScript', icon: '/icons/skills/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/skills/tailwindcss.jpg' },
      { name: 'TanStack Query', icon: '/icons/skills/react-query.svg' },
      { name: 'Node.js', icon: '/icons/skills/nodejs.svg' },
      { name: 'PostgreSQL', icon: '/icons/skills/postgresql.webp' },
      { name: 'Sequelize', icon: '/icons/skills/sequelize.svg' }
    ],
    features: [
      'Administrative dashboard',
      'Student management',
      'Paginated student listing',
      'Student search and filtering',
      'Student creation, editing, and deletion',
      'Bulk student upload using CSV',
      'User management',
      'Administrative user creation',
      'Role-based user management',
      'Institution management',
      'Secure authentication',
      'Bearer-token authorization',
      'Protected administrative routes',
      'Backend REST API integration',
      'API proxy routes using Next.js',
      'Server-state management with TanStack Query',
      'Automatic caching & Background data updates',
      'Form validation',
      'Responsive administrative UI'
    ],
    learnings: [
      'Working on a real team-based full-stack application',
      'Developing both frontend and backend features',
      'Building administrative interfaces with Next.js',
      'Working with the Next.js App Router',
      'Building RESTful APIs using Express.js',
      'Working with PostgreSQL',
      'Using Sequelize ORM',
      'Implementing JWT authentication',
      'Implementing protected routes',
      'Using TanStack Query for server-state management',
      'Designing reusable TypeScript components',
      'Handling CRUD workflows',
      'Implementing pagination, search and filtering',
      'Working with database migrations and seeders',
      'Collaborating on a larger application architecture'
    ],
    links: {
      liveUrl: 'https://platform-course.vercel.app/',
      githubUrl: 'https://github.com/Anil-transetu/platform_course'
    },
    credentials: [
      {
        role: 'Super Admin',
        email: 'superadmin@lms.com',
        password: 'SuperLmsPassword@2026'
      },
      {
        role: 'Institution Representative',
        email: 'srilurepresentative@gmail.com',
        password: 'P@55word'
      }
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'campus-meal-card-management-system',
    title: 'Campus Meal Card Management System',
    description: 'A digital campus meal card management platform that modernizes university cafeteria transactions by allowing students to manage meal cards and balances while providing dedicated workflows for cashiers, managers, and administrators.',
    detailedDescription: 'The Campus Meal Card Management System is a full-stack digital solution designed to replace traditional cash-based campus cafeteria transactions with a centralized meal card platform.\n\nStudents can manage their digital meal cards, monitor balances, request recharges, view transaction history, and make QR-based payments. Cashiers receive a dedicated point-of-sale workflow for processing purchases, while managers and administrators have access to operational dashboards, approvals, user management, and analytics.\n\nThe system uses role-based access control to provide different interfaces and permissions for administrators, managers, cashiers, and students.\n\nThe application also incorporates transaction validation, recharge approval workflows, reporting, analytics, responsive interfaces, and security mechanisms such as JWT authentication, bcrypt password hashing, rate limiting, Helmet, CORS, and input validation.',
    category: 'Full Stack',
    projectType: 'Solo Project',
    role: 'Web Developer',
    teamSize: '1 Developer',
    images: [
      '/images/projects/web/campus-meal-card/image1.png',
      '/images/projects/web/campus-meal-card/image2.png',
      '/images/projects/web/campus-meal-card/image3.png',
      '/images/projects/web/campus-meal-card/image4.png',
      '/images/projects/web/campus-meal-card/image5.png',
      '/images/projects/web/campus-meal-card/image6.png',
      '/images/projects/web/campus-meal-card/image7.png'
    ],
    technologies: [
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'TypeScript', icon: '/icons/skills/typescript.svg' },
      { name: 'Vite', icon: '/icons/skills/vite.png' },
      { name: 'Node.js', icon: '/icons/skills/nodejs.svg' },
      { name: 'Express.js', icon: '/icons/skills/express.jpg' }
    ],
    features: [
      'Digital meal card & Balance management',
      'Transaction history & QR code payments',
      'Recharge requests workflow',
      'Spending analytics',
      'Cashier point-of-sale workflow',
      'Meal selection & Menu management',
      'Balance validation & Duplicate transaction prevention',
      'Daily statistics & Inventory visibility',
      'Manager recharge approval/rejection',
      'System-wide statistics & User management',
      'Role-based access control',
      'Responsive design & Mobile-first interface',
      'JWT authentication & Password hashing',
      'API validation & Rate limiting'
    ],
    learnings: [
      'Designing a role-based full-stack application',
      'Building different dashboards for different user roles',
      'Designing transaction-oriented workflows',
      'Implementing authentication and authorization',
      'Working with relational database concepts',
      'Designing data models for users, cards, transactions and meals',
      'Implementing validation and security middleware',
      'Building QR-based transaction workflows',
      'Creating analytics dashboards',
      'Designing responsive mobile-first interfaces',
      'Handling business rules around financial transactions',
      'Preventing duplicate transactions and inconsistent balances'
    ],
    links: {
      demoVideoUrl: 'https://lnkd.in/p/gDC8rqU5',
      githubUrl: 'https://github.com/srilu396/Campus_Meal_Card_Management_System'
    },
    featured: true,
  },

  // ─────────────────────────────────────────────
  // MACHINE LEARNING PROJECTS
  // ─────────────────────────────────────────────
  {
    id: '5',
    slug: 'omnigenai',
    title: 'OmniGenAI',
    description: 'An AI-powered multi-functional platform that brings text, image, audio, and video generation tools together in a single web application.',
    detailedDescription: 'OmniGenAI is a multi-functional AI-powered web application that combines machine learning models, Hugging Face services, and the Gemini API to provide AI-assisted tools for content creation, transformation, and automation — all accessible through a single, intuitive interface.\n\nThe platform provides categorized AI tools spanning text (story generation, Q&A, grammar correction, code generation), image (text-to-image, image transformation, OCR, background removal), and video (AI-assisted video generation, YouTube-to-text, video background removal).\n\nMy contribution focused on machine learning model integration, AI feature implementation, and backend/frontend development. The team integrated existing Hugging Face and Gemini models into the platform rather than training models from scratch.',
    category: 'Machine Learning',
    projectType: 'Group Project',
    role: 'ML & Web Developer',
    teamSize: '3 Members',
    images: [
      '/images/projects/ml/omnigenai/image1.png',
      '/images/projects/ml/omnigenai/image2.png',
      '/images/projects/ml/omnigenai/image3.png',
      '/images/projects/ml/omnigenai/image4.png',
      '/images/projects/ml/omnigenai/image5.png',
      '/images/projects/ml/omnigenai/image6.png',
      '/images/projects/ml/omnigenai/image7.png',
      '/images/projects/ml/omnigenai/image8.png',
      '/images/projects/ml/omnigenai/image9.png',
      '/images/projects/ml/omnigenai/image10.png',
      '/images/projects/ml/omnigenai/image11.png'
    ],
    technologies: [
      { name: 'Python', icon: '/icons/skills/python.png' },
      { name: 'Machine Learning', icon: '/icons/skills/machine-learning.png' },
      { name: 'Hugging Face',icon:'/icons/skills/huggingface.svg' },
      { name: 'Gemini API',icon:'/icons/skills/gemini.webp' },
      { name: 'HTML', icon: '/icons/skills/html5.jpg' },
      { name: 'CSS', icon: '/icons/skills/css3.svg' },
      { name: 'JavaScript', icon: '/icons/skills/javascript.jpg' },
    ],
    features: [
      'AI story and script generation',
      'Document-based question answering',
      'Grammar correction and text enhancement',
      'Code generation',
      'Text-to-image generation',
      'Image-to-image transformation',
      'Image-to-text / OCR',
      'Background removal from images',
      'AI-assisted video generation',
      'YouTube URL to text conversion',
      'Image-to-video generation',
      'Video background removal',
      'Categorized AI tools interface',
      'Integration with Hugging Face models',
      'Gemini API integration',
    ],
    learnings: [
      'Integrating AI models into web applications',
      'Working with multiple AI-powered workflows',
      'Connecting frontend interfaces with AI services',
      'Building practical AI utilities for real-world use',
      'Handling different types of AI-generated content',
      'Designing user-friendly AI application workflows',
    ],
    links: {
      demoVideoUrl: 'https://lnkd.in/p/gaQeEUfc',
      githubUrl: 'https://github.com/srilu396/OmniGenAI_TSP_4.0_Applied_AI'
    },
    featured: true,
  },
  {
    id: '6',
    slug: 'inverse-ai',
    title: 'Inverse AI',
    description: 'An AI-powered stock analysis platform that combines real-time market data, machine learning predictions, sentiment analysis, and interactive financial visualization.',
    detailedDescription: 'Inverse AI is a personal AI-powered financial analysis and stock prediction platform designed for beginners who want a single place to learn about stocks, explore market data, compare companies, and experiment with predictive analysis.\n\nCore modules include Stock Lookup (search by ticker, company info, 52-week data), Live Market Tracking (real-time charts), Stock Analyzer (compare up to three tickers), Stock Vision (ML-based price forecasting), Sentiment View (news sentiment classification), and Talk Stocks (AI-powered stock discussion).\n\nStock predictions are model-generated forecasts and estimated trends — they do not constitute financial advice or guarantee investment returns.',
    category: 'Machine Learning',
    projectType: 'Personal Project',
    role: 'ML & Web Developer',
    teamSize: '1 Developer',
    images: [
      '/images/projects/ml/inverse-ai/image1.png',
      '/images/projects/ml/inverse-ai/image2.png',
      '/images/projects/ml/inverse-ai/image3.png',
      '/images/projects/ml/inverse-ai/image4.png',
      '/images/projects/ml/inverse-ai/image5.png',
      '/images/projects/ml/inverse-ai/image6.png',
      '/images/projects/ml/inverse-ai/image7.png',
      '/images/projects/ml/inverse-ai/image8.png',
      '/images/projects/ml/inverse-ai/image9.png',
      '/images/projects/ml/inverse-ai/image10.png',
      '/images/projects/ml/inverse-ai/image11.png',
      '/images/projects/ml/inverse-ai/image12.png',
      '/images/projects/ml/inverse-ai/image13.png'
    ],
    technologies: [
      { name: 'Python', icon: '/icons/skills/python.png' },
      { name: 'Machine Learning', icon: '/icons/skills/machine-learning.png' },
      { name: 'Yahoo Finance API',icon:'/icons/skills/yfinance.webp' },
      { name: 'Flask',icon:'/icons/skills/flask.webp' },
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'MongoDB', icon: '/icons/skills/mongodb.svg' },
    ],
    features: [
      'Stock market learning resources for beginners',
      'Stock lookup by ticker with company and market info',
      '52-week high/low and historical price data',
      'Real-time stock data with live market charts',
      'Compare up to three stocks with selectable duration',
      'ML-based stock price forecasting (Stock Vision)',
      'Historical and predicted price visualization',
      'News sentiment analysis — positive / negative / neutral',
      'AI-powered stock discussion interface (Talk Stocks)',
      'Interactive financial dashboards',
    ],
    learnings: [
      'Working with financial time-series data',
      'Building ML prediction and forecasting workflows',
      'Integrating external financial APIs',
      'Connecting machine learning models to web applications',
      'Building interactive financial dashboards',
      'Working with prediction uncertainty and market data',
    ],
    links: {
      demoVideoUrl: 'https://lnkd.in/p/ghNB27r6',
      githubUrl: 'https://github.com/srilu396/Invest-AI'
    },
    featured: true,
  },
  {
    id: '7',
    slug: 'blood-donation',
    title: 'Blood Donation Prediction System',
    description: 'A machine learning-powered web application that predicts blood donation eligibility from health-related input data using trained classification models.',
    detailedDescription: 'The Blood Donation Prediction System applies a complete end-to-end machine learning workflow — data preprocessing, feature selection, model training (Logistic Regression and Random Forest), model evaluation, hyperparameter tuning — and serves predictions through a Flask-based REST API.\n\nAs Backend Lead, my contribution covered the backend architecture, ML model development, data preprocessing, model training and evaluation, Flask API development, and frontend/backend integration.\n\nThis system is designed as a decision-support prototype and does not replace professional medical screening.',
    category: 'Machine Learning',
    projectType: 'Group Project',
    role: 'Backend Lead & Machine Learning Developer',
    teamSize: '4 Members',
    images: [
      '/images/projects/ml/blood-donation/image1.png',
      '/images/projects/ml/blood-donation/image2.png',
      '/images/projects/ml/blood-donation/image3.png',
      '/images/projects/ml/blood-donation/image4.png',
      '/images/projects/ml/blood-donation/image5.png',
      '/images/projects/ml/blood-donation/image6.png',
      '/images/projects/ml/blood-donation/image7.png'
      
    ],
    technologies: [
      { name: 'Python', icon: '/icons/skills/python.png' },
      { name: 'Pandas',icon:'/icons/skills/pandas.webp' },
      { name: 'Scikit-learn',icon:'/icons/skills/scikit-learn.webp' },
      { name: 'Flask',icon:'/icons/skills/flask.webp' },
      { name: 'HTML', icon: '/icons/skills/html5.jpg' },
      { name: 'CSS', icon: '/icons/skills/css3.svg' },
      { name: 'GitHub', icon: '/icons/skills/github.webp' },
    ],
    features: [
      'Health-data input form',
      'Data preprocessing and feature transformation',
      'Logistic Regression classification model',
      'Random Forest classification model',
      'Model evaluation and comparison',
      'Hyperparameter tuning',
      'Flask-based prediction API',
      'Frontend to backend ML prediction workflow',
      'Decision-support prototype (not a medical screening tool)',
    ],
    learnings: [
      'End-to-end machine learning workflows',
      'Data preprocessing and feature selection',
      'Training and evaluating classification algorithms',
      'Hyperparameter tuning for improved model performance',
      'Serving ML models through REST APIs with Flask',
      'Integrating machine learning models with a web frontend',
      'Collaborative development on a shared ML project',
    ],
    links: {
      demoVideoUrl: 'https://lnkd.in/p/ggZzhiib',
      githubUrl: 'https://github.com/srilu396/Blood_donation-'
    },
    featured: true,
  },
  {
    id: '8',
    slug: 'vocalize',
    title: 'Vocalize',
    description: 'A speech-processing web application that converts recorded or uploaded audio into text and generates relevant questions from the transcribed content.',
    detailedDescription: 'Users can upload an audio file or record directly in the browser. The application processes the speech using Google Speech Recognition, generates a transcription, and creates relevant questions from the content — useful for reviewing lectures, interviews, or any spoken material.\n\nThe app includes JWT-based authentication so users can save and revisit past transcriptions. The backend uses FastAPI with SQLite/SQLAlchemy, while the frontend is built with React, Vite, and Tailwind CSS.\n\nMy contribution covered backend development, speech-processing integration, UI screen design, frontend/backend integration, and testing across a five-person team.',
    category: 'Machine Learning',
    projectType: 'Group Project',
    role: 'Backend & ML Developer',
    teamSize: '5 Members',
    images: [
      '/images/projects/ml/vocalize/image1.png',
      '/images/projects/ml/vocalize/image2.png',
      '/images/projects/ml/vocalize/image3.png',
      '/images/projects/ml/vocalize/image4.png',
      '/images/projects/ml/vocalize/image5.png',
      '/images/projects/ml/vocalize/image6.png',
      '/images/projects/ml/vocalize/image7.png',
      '/images/projects/ml/vocalize/image8.png',
      '/images/projects/ml/vocalize/image9.png'
    ],
    technologies: [
      { name: 'Python', icon: '/icons/skills/python.png' },
      { name: 'FastAPI',icon:'/icons/skills/fastapi.svg' },
      { name: 'SQLite',icon:'/icons/skills/sqlite.webp' },
      { name: 'SQLAlchemy',icon:'/icons/skills/sqlalchemy.jpg' },
      { name: 'SpeechRecognition',icon:'/icons/skills/speechrecognition.png' },
      { name: 'React', icon: '/icons/skills/react.svg' },
      { name: 'Vite', icon: '/icons/skills/vite.png' },
      { name: 'Tailwind CSS', icon: '/icons/skills/tailwindcss.jpg' },
    ],
    features: [
      'Upload audio files or record directly in the browser',
      'Speech-to-text conversion using Google Speech Recognition',
      'Transcription display with clean formatting',
      'Question generation from transcribed content',
      'User registration and secure login',
      'JWT-based authentication',
      'User-specific transcription history',
      'Save and view previous transcriptions',
      'Responsive and modern UI',
    ],
    learnings: [
      'Building speech-processing workflows',
      'Integrating audio-to-text capabilities into a web application',
      'Python backend development with FastAPI',
      'Building REST APIs with authentication',
      'Implementing JWT-based user authentication',
      'Connecting AI/ML functionality with React frontends',
      'Collaborative software development across a five-person team',
    ],
    links: {
      githubUrl: 'https://github.com/srilu396/Speech_to_text_4_2_project'
    },
    featured: true,
  },

  // ─────────────────────────────────────────────
  // FIGMA DESIGN PROJECTS
  // ─────────────────────────────────────────────
  {
    id: '9',
    slug: 'lms-platform-design',
    title: 'LMS Platform — UI/UX Design',
    description: 'UI/UX design for a modern Learning Management System platform focused on creating a clear, efficient, and scalable experience for managing students, users, institutions, courses, and educational operations.',
    detailedDescription: 'This project represents the Figma UI/UX design foundation for the Enterprise Learning Management System platform featured in my portfolio. The goal of this design project was to create an intuitive, structured, and scalable interface system for complex educational administrative operations.\n\nThe design encompasses comprehensive workflows for managing students, users, institutions, courses, modules, lessons, assignments, quizzes, and enrollments. Particular focus was given to information hierarchy, consistent component architecture, responsive dashboard layouts, and simplifying data-heavy screens for administrators and educators.',
    category: 'Figma Design',
    projectType: 'UI/UX Design',
    role: 'UI/UX Designer',
    teamSize: '2',
    images: [
      '/images/projects/figma/lms-platform-design/image1.png',
      '/images/projects/figma/lms-platform-design/image2.png',
      '/images/projects/figma/lms-platform-design/image3.png',
      '/images/projects/figma/lms-platform-design/image4.png',
      '/images/projects/figma/lms-platform-design/image5.png',
      '/images/projects/figma/lms-platform-design/image6.png',
      '/images/projects/figma/lms-platform-design/image7.png'
      
    ],
    technologies: [
      { name: 'Figma', icon: '/icons/skills/figma.svg' },
      { name: 'UI/UX Design', icon: '/icons/skills/ui-ux.png' },
      { name: 'Wireframing' ,icon:'/icons/skills/wireframing.jpg'},
      { name: 'Prototyping' ,icon:'/icons/skills/prototyping.png'},
      { name: 'Responsive Design', icon: '/icons/skills/responsive-design.webp' },
      { name: 'Design Systems',icon:'/icons/skills/design-systems.webp'},
    ],
    features: [
      'Admin dashboard design',
      'Student management interfaces',
      'User management screens',
      'Institution management screens',
      'Authentication and login flows',
      'Course and educational management interfaces',
      'Search, filtering, and data-management experiences',
      'Responsive dashboard layouts',
      'Reusable UI patterns and components',
      'Clear information hierarchy',
      'Modern navigation and sidebar structure',
      'Form and modal experiences',
      'Data tables and management workflows',
    ],
    learnings: [
      'Designing intuitive administrative workflows',
      'Creating consistent layouts and reusable UI patterns',
      'Establishing clear visual hierarchy',
      'Designing responsive interfaces',
      'Improving usability of data-heavy screens',
      'Maintaining consistency between different dashboard sections',
    ],
    links: {
      figmaUrl: 'https://www.figma.com/design/3BbfMj4XHzJ3mNXEKsP7j0/LMS-Platform_course?node-id=113-9578&t=RhNOFyhPIzWMKeFO-1',
    },
    featured: true,
  },
  {
    id: '10',
    slug: 'travel-website-design',
    title: 'Travel Website — UI/UX Design',
    description: 'A travel website interface designed in Figma with a focus on visual storytelling, intuitive navigation, destination discovery, and a smooth browsing experience for travelers.',
    detailedDescription: 'A modern, visually immersive travel website concept crafted in Figma to inspire and guide travelers. The design emphasizes visual storytelling with bold imagery, seamless destination exploration, intuitive navigation, and interactive prototype flows.\n\nThe project explores responsive design patterns, accessible typography, consistent spacing, and structured call-to-action sections to deliver an engaging and frictionless browsing experience.',
    category: 'Figma Design',
    projectType: 'Personal Design Project',
    role: 'UI/UX Designer',
    teamSize: '1',
    images: [
      '/images/projects/figma/travel-website-design/image1.png',
      '/images/projects/figma/travel-website-design/image2.png',
      '/images/projects/figma/travel-website-design/image3.png',
      '/images/projects/figma/travel-website-design/image4.png',
      '/images/projects/figma/travel-website-design/image5.png',
      '/images/projects/figma/travel-website-design/image6.png'
    ],
    technologies: [
      { name: 'Figma', icon: '/icons/skills/figma.svg' },
      { name: 'UI/UX Design', icon: '/icons/skills/ui-ux.png' },
      { name: 'Wireframing' ,icon:'/icons/skills/wireframing.jpg'},
      { name: 'Prototyping' ,icon:'/icons/skills/prototyping.png'},
      { name: 'Responsive Design', icon: '/icons/skills/responsive-design.webp' },
    ],
    features: [
      'Travel-focused landing page',
      'Destination discovery interface',
      'Navigation design',
      'Travel content presentation',
      'Destination cards',
      'Call-to-action sections',
      'Responsive layout concepts',
      'Visual hierarchy',
      'Modern travel-focused UI',
      'Consistent spacing and typography',
      'Interactive prototype flows',
    ],
    learnings: [
      'Creating an engaging travel experience',
      'Designing intuitive navigation',
      'Presenting destinations clearly',
      'Building visually balanced layouts',
      'Creating reusable UI patterns',
      'Maintaining consistency across screens',
      'Designing a responsive web experience',
    ],
    links: {
      figmaUrl: 'https://www.figma.com/design/rc0YwSsv7i5VgkkdFgFLvY/TravelWebsite?node-id=0-1&t=anbRQZwmjpPytiZg-1',
    },
    featured: true,
  },
];

