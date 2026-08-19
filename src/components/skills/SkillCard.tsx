import React from 'react';
import { SkillCategory } from '@/data/skills';
import { SkillBadge } from './SkillBadge';

export const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <div className="bg-[#0B0C10] border border-white/5 rounded-2xl p-5 flex flex-col h-full hover:border-violet-500/30 transition-colors group">
      <div className="flex items-start gap-3 mb-5 border-b border-white/5 pb-4">
        <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors shrink-0">
          <Icon className="w-5 h-5 text-violet-400" />
        </div>
        <div className="flex flex-col pt-0.5">
          <h3 className="text-[15px] font-semibold text-white tracking-tight">{category.title}</h3>
          <p className="text-[13px] text-gray-400 mt-1 leading-snug">{category.description}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};
