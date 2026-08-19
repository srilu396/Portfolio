"use client";
import React, { useState } from 'react';
import { Skill } from '@/data/skills';
import { skillIcons } from './skillIcons';

export const SkillBadge = ({ skill }: { skill: Skill }) => {
  const [imageError, setImageError] = useState(false);
  const iconSrc = skillIcons[skill.icon];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12121A] border border-white/10 text-gray-300 text-xs font-medium hover:text-white hover:border-violet-500/30 transition-colors">
      {iconSrc && !imageError ? (
        <img
          src={iconSrc}
          alt={skill.name}
          className="w-5 h-5 object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="w-5 h-5 rounded bg-gray-800/50 flex items-center justify-center border border-gray-700/50"
          aria-hidden="true"
        >
          <span className="text-[10px] text-gray-500" aria-label="Icon placeholder" />
        </div>
      )}
      <span>{skill.name}</span>
    </div>
  );
};
