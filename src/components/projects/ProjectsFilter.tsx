import React from 'react';
import { ProjectCategory } from '@/data/projects';

interface ProjectsFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

export const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mb-10 z-10 relative">
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-violet-500'
                  : 'bg-[#120b29]/50 text-gray-400 hover:text-white border border-violet-500/10 hover:border-violet-500/30'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
