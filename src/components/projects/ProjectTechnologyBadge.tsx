import React from 'react';

interface ProjectTechnologyBadgeProps {
  technology: string;
}

export const ProjectTechnologyBadge: React.FC<ProjectTechnologyBadgeProps> = ({ technology }) => {
  return (
    <span className="px-3 py-1 text-[11px] font-medium text-gray-300 bg-[#1e1345]/50 border border-violet-500/20 rounded-full whitespace-nowrap">
      {technology}
    </span>
  );
};
