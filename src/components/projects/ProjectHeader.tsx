import React from 'react';
import { Project } from '@/data/projects';
import { User, Clock, Users, Activity, Briefcase } from 'lucide-react';

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          {project.category}
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        {project.title}
      </h1>

      <div className="text-gray-400 text-lg leading-relaxed mb-10 space-y-4">
        <p>{project.description}</p>
        {project.detailedDescription && (
          project.detailedDescription.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.role && (
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-violet-400 mt-0.5" />
            <div>
              <span className="block text-sm text-gray-500 font-medium">Role</span>
              <span className="text-gray-300">{project.role}</span>
            </div>
          </div>
        )}
        {project.duration && (
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-violet-400 mt-0.5" />
            <div>
              <span className="block text-sm text-gray-500 font-medium">Duration</span>
              <span className="text-gray-300">{project.duration}</span>
            </div>
          </div>
        )}
        {project.teamSize && (
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-violet-400 mt-0.5" />
            <div>
              <span className="block text-sm text-gray-500 font-medium">Team Size</span>
              <span className="text-gray-300">{project.teamSize}</span>
            </div>
          </div>
        )}
        {project.status && (
          <div className="flex items-start gap-3">
            <Activity className="w-5 h-5 text-violet-400 mt-0.5" />
            <div>
              <span className="block text-sm text-gray-500 font-medium">Status</span>
              <span className="text-gray-300">{project.status}</span>
            </div>
          </div>
        )}
        {project.projectType && (
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-violet-400 mt-0.5" />
            <div>
              <span className="block text-sm text-gray-500 font-medium">Project Type</span>
              <span className="text-gray-300">{project.projectType}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
