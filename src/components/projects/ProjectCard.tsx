import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import { ProjectTechnologyBadge } from './ProjectTechnologyBadge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col bg-[#120b29]/40 backdrop-blur-sm border border-violet-500/10 hover:border-violet-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#0c081c] overflow-hidden">
        {/* Placeholder styling instead of real image if missing */}
        {project.image ? (
          <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
            {/* We will use a standard img or div with bg for placeholder. Using div for robustness if image is missing */}
             <div 
               className="w-full h-full bg-cover bg-center"
               style={{ backgroundImage: `url(${project.image})` }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#120b29] to-transparent opacity-60" />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1a103c]">
            <span className="text-violet-500/50 font-medium">Project Image</span>
          </div>
        )}

        {/* Live URL Icon (Top Right) */}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-[#120b29]/80 hover:bg-violet-600 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors border border-violet-500/20"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <ProjectTechnologyBadge key={tech} technology={tech} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-violet-500/10">
          <Link 
            href={`/projects/${project.slug}`}
            className="group/link flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            View Details 
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <Link 
            href={`/projects/${project.slug}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600/20 text-violet-400 hover:bg-violet-600 hover:text-white transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
