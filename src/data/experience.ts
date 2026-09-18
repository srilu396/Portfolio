export interface ExperienceDocument {
  title: string;
  type?: 'certificate' | 'offer-letter' | 'document';
  image?: string;
  pdfUrl?: string;
  caption?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: string;
  compensationBadge?: string;
  statusBadge?: string;
  continuationBadge?: string;
  field: string;
  dateRange: string;
  duration: string;
  location?: string;
  mode?: string;
  isCurrent?: boolean;
  logo?: string;
  description: string;
  roleResponsibilities?: string[];
  certificate?: ExperienceDocument;
  document?: ExperienceDocument;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'devarya-paid',
    title: 'Software Engineering Intern',
    organization: 'Devarya Solutions Private Limited',
    type: 'Paid Internship',
    statusBadge: 'Current',
    compensationBadge: 'Paid · Current',
    continuationBadge: 'Continued Internship',
    field: 'Software Engineering & Full Stack Development',
    dateRange: 'May 2026 – Present',
    duration: '6-month internship',
    location: 'India',
    mode: 'Flexible / As Assigned',
    isCurrent: true,
    logo: '/images/experience/devarya-solutions/devarya-solutions-logo.png',
    description: `Currently working as a Software Engineering Intern at Devarya Solutions Private Limited for a six (6) month period commencing May 1, 2026. Actively contributing to software development, feature implementation, code testing, and practical engineering workflows.`,
    roleResponsibilities: [
      'Developing and maintaining full-stack software modules, user interfaces, and backend integrations.',
      'Implementing features, performing code testing, and resolving application bugs in development cycles.',
      'Building internal developer tools and contributing to technical proof-of-concept projects.',
      'Working with version control workflows and participating actively in engineering team routines.'
    ],
    document: {
      title: 'Internship Offer Letter',
      type: 'offer-letter',
      image: '/images/experience/devarya-solutions/paid/offer-letter-preview.png',
      pdfUrl: '/images/experience/devarya-solutions/paid/offer-letter.pdf',
      caption: 'Official offer letter for Software Engineering Intern (Paid · 6 Months, commencing May 1, 2026).'
    },
    skills: [
      'Software Development',
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Testing',
      'Feature Development',
      'Problem Solving',
      'Team Collaboration',
      'Git & Version Control'
    ]
  },
  {
    id: 'devarya-unpaid',
    title: 'Software Engineering Intern',
    organization: 'Devarya Solutions Private Limited',
    type: 'Internship',
    compensationBadge: 'Unpaid Internship',
    field: 'Software Engineering',
    dateRange: 'Dec 2025 – Apr 2026',
    duration: '4.5 months',
    location: 'India',
    mode: 'Flexible / As Assigned',
    isCurrent: false,
    logo: '/images/experience/devarya-solutions/devarya-solutions-logo.png',
    description: `Worked as a Software Engineering Intern at Devarya Solutions Private Limited for four and a half (4.5) months commencing December 1, 2025. Focused on practical software development, testing, internal tools, and proof-of-concept engineering under mentorship.`,
    roleResponsibilities: [
      'Contributed to practical software development, internal tooling, and feature enhancements.',
      'Conducted software testing, debugging, and quality verification across development tasks.',
      'Assisted in building proof-of-concept projects to validate software solutions.',
      'Collaborated with development team members and adhered to software engineering best practices.'
    ],
    document: {
      title: 'Internship Offer Letter',
      type: 'offer-letter',
      image: '/images/experience/devarya-solutions/unpaid/offer-letter-preview.png',
      pdfUrl: '/images/experience/devarya-solutions/unpaid/offer-letter.pdf',
      caption: 'Official offer letter for Software Engineering Intern (Unpaid · 4.5 Months, commencing Dec 1, 2025).'
    },
    skills: [
      'Software Development',
      'Software Testing',
      'Internal Tools & Features',
      'Proof-of-Concept Development',
      'Team Collaboration',
      'Practical Software Engineering',
      'Debugging & Problem Solving'
    ]
  },
  {
    id: 'apssdc-future-skills',
    title: 'AI & ML Future Skills Intern',
    organization: 'APSSDC – Edunet Foundation',
    type: 'Internship',
    field: 'Artificial Intelligence & Machine Learning',
    dateRange: 'May 2024 – Jun 2024',
    duration: '6 weeks (2 mos)',
    location: 'Andhra Pradesh, India',
    mode: 'On-site',
    isCurrent: false,
    logo: '/images/experience/apssdc-logo.png',
    description: `Successfully completed a 6-week internship in Artificial Intelligence and Machine Learning leveraging the IBM SkillsBuild platform. Conducted in collaboration with Andhra Pradesh State Skill Development Corporation (APSSDC) and implemented by Edunet Foundation from 15th May 2024 to 25th June 2024.`,
    roleResponsibilities: [
      'Completed a 6-week intensive program in Artificial Intelligence and Machine Learning on IBM SkillsBuild.',
      'Gained practical exposure in Python programming, data preprocessing pipelines, and model evaluation.',
      'Applied machine learning techniques to structured datasets and problem-solving assignments.',
      'Awarded official Certificate of Completion jointly by APSSDC and Edunet Foundation leadership.'
    ],
    certificate: {
      title: 'Certificate of Completion',
      type: 'certificate',
      image: '/images/experience/apssdc-certificate.png',
      caption: '6-Week Internship in AI & ML leveraging IBM SkillsBuild, APSSDC & Edunet Foundation (May 15 – Jun 25, 2024).'
    },
    skills: [
      'Python Programming',
      'Machine Learning',
      'Deep Learning',
      'IBM SkillsBuild',
      'Data Analysis',
      'AI Model Development',
      'Data Visualization',
      'Problem Solving'
    ]
  },
  {
    id: 'swecha-summer-of-ai',
    title: 'Summer of AI Intern',
    organization: 'Swecha Telangana',
    type: 'Internship',
    field: 'Artificial Intelligence & Open Source',
    dateRange: 'May 2024 – Jun 2024',
    duration: '2 mos',
    location: 'Andhra Pradesh, India',
    mode: 'On-site',
    isCurrent: false,
    logo: '/images/experience/swecha-logo.png',
    description: `Participated in the Summer of AI Internship Program at Swecha from May 14, 2024 to June 21, 2024. Contributed to open-source artificial intelligence initiatives dedicated to advancing AI for cultural and language preservation.`,
    roleResponsibilities: [
      'Participated in the Summer of AI Internship intensive organized by Swecha from May 14 to June 21, 2024.',
      'Contributed to open-source AI projects focused on language advancement and cultural heritage preservation.',
      'Collaborated with developer teams on dataset curation, data processing, and open AI tooling.',
      'Awarded official Certificate of Participation signed by Swecha President Dr. L. Pratap Reddy.'
    ],
    certificate: {
      title: 'Certificate of Participation',
      type: 'certificate',
      image: '/images/experience/swecha-certificate.png',
      caption: 'Summer Of AI Internship Program at Swecha for Culture & Language Preservation (May 14 – Jun 21, 2024).'
    },
    skills: [
      'Python Programming',
      'Artificial Intelligence',
      'Data Processing',
      'Open Source AI',
      'Language Modeling',
      'Teamwork',
      'Culture & Language AI'
    ]
  }
];

export const getExperienceStats = (data: Experience[] = experiences) => {
  const totalCount = data.length;
  // Unique organizations: Devarya Solutions counted once (APSSDC, Swecha, Devarya = 3)
  const uniqueOrgs = new Set(data.map((item) => item.organization.trim())).size;

  return {
    experiences: `${totalCount}`,
    duration: '9+',
    organizations: `${uniqueOrgs}`
  };
};
