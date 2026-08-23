'use client';

import React, { useState } from 'react';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsFilter } from '@/components/projects/ProjectsFilter';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects, ProjectCategory } from '@/data/projects';

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Full Stack',
  'Machine Learning',
  'Figma Design'
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All Projects') return true;
    return project.category === activeCategory;
  });

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#05050A]">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top left subtle glow */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px] mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        
        {/* Top right large blurred circular glow */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[100px] mix-blend-screen transform translate-x-1/3 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Low-opacity orbital curves (SVG) */}
        <svg className="absolute top-0 right-0 w-full h-[800px] opacity-[0.03]" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMin slice">
          <circle cx="800" cy="200" r="400" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-500" />
          <circle cx="800" cy="200" r="600" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-500" />
          <circle cx="800" cy="200" r="800" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-violet-500" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center pt-20">
        <ProjectsHero />
        <ProjectsFilter 
          categories={CATEGORIES} 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  );
}
