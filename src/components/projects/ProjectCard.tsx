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
    <div className="h-full group relative flex flex-col bg-[#120b29]/40 backdrop-blur-md border border-violet-500/15 hover:border-violet-500/40 rounded-2xl transition-all duration-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] hover:-translate-y-1">
      
      {/* Top Inner Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] bg-[#0c081c] overflow-hidden rounded-t-2xl border-b border-violet-500/10">
        {(project.thumbnail || (project.images && project.images.length > 0)) ? (
          <img
            src={project.thumbnail || project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1a103c]">
            <span className="text-violet-500/50 font-medium">Project Image</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow line-clamp-4">
          {project.description}
        </p>

        {/* Technologies - ensure high z-index so tooltips hover over other elements */}
        <div className="flex flex-wrap gap-2.5 mb-8 relative z-20">
          {project.technologies.map((tech) => (
            <ProjectTechnologyBadge key={tech.name} technology={tech} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-violet-500/20">
          <Link 
            href={`/projects/${project.slug}`}
            className="group/link flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
          >
            View Details 
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
