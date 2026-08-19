import React from 'react';
import { skillsData } from '@/data/skills';
import { SkillGrid } from './SkillGrid';

export const SkillsContainer = () => {
  return (
    <div className="w-full relative z-10 flex flex-col items-start pb-20 mt-8">
      <div className="w-full px-6 lg:px-8 max-w-7xl mx-auto">
        <SkillGrid categories={skillsData} />
      </div>
    </div>
  );
};
