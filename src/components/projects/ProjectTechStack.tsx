import React from 'react';
import Image from 'next/image';
import { skillIcons } from '../skills/skillIcons';

interface ProjectTechStackProps {
  technologies: {
    name: string;
    icon?: string;
  }[];
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24">
      <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div 
            key={tech.name} 
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0c081c] border border-white/5 hover:border-violet-500/30 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            {tech.icon ? (
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                width={20} 
                height={20} 
                className="object-contain"
              />
            ) : (
              <span className="flex items-center justify-center w-5 h-5 rounded bg-[#1e1345] text-violet-300 text-[10px] font-bold font-mono">
                {tech.name.charAt(0).toUpperCase()}
              </span>
            )}
            <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
