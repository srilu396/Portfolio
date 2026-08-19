import React from 'react';
import { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pb-20">
      {projects.length > 0 ? (
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          {projects.map((project) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-[#120b29]/20 rounded-2xl border border-violet-500/10 backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-[#1a103c] flex items-center justify-center mb-4">
            <span className="text-violet-500 text-2xl">?</span>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
          <p className="text-gray-400">Try selecting a different category to see more projects.</p>
        </div>
      )}
    </div>
  );
};
