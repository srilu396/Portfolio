import React from 'react';
import Image from 'next/image';
import { skillIcons } from '../skills/skillIcons';

interface ProjectTechnologyBadgeProps {
  technology: {
    name: string;
    icon?: string;
  };
}

export const ProjectTechnologyBadge: React.FC<ProjectTechnologyBadgeProps> = ({ technology }) => {
  const iconPath = technology.icon;
  const techName = technology.name;

  if (iconPath) {
    return (
      <div 
        className="group/badge relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1345]/50 border border-violet-500/20 hover:border-violet-400/50 transition-colors"
      >
        <Image 
          src={iconPath} 
          alt={techName} 
          width={18} 
          height={18} 
          className="object-contain"
        />
        {/* Tooltip on hover */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a103c] border border-violet-500/50 shadow-[0_4px_12px_rgba(139,92,246,0.2)] text-gray-200 text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover/badge:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 transform translate-y-2 group-hover/badge:translate-y-0">
          {techName}
          {/* Tooltip arrow */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a103c] border-b border-r border-violet-500/50 rotate-45"></span>
        </span>
      </div>
    );
  }

  // Fallback if no icon found (shows first letter)
  return (
    <div className="group/badge relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1345]/50 border border-violet-500/20 hover:border-violet-400/50 transition-colors">
      <span className="text-violet-300 text-xs font-bold font-mono">
        {techName.charAt(0).toUpperCase()}
      </span>
      {/* Tooltip on hover */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a103c] border border-violet-500/50 shadow-[0_4px_12px_rgba(139,92,246,0.2)] text-gray-200 text-[11px] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover/badge:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 transform translate-y-2 group-hover/badge:translate-y-0">
        {techName}
        {/* Tooltip arrow */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a103c] border-b border-r border-violet-500/50 rotate-45"></span>
      </span>
    </div>
  );
};
