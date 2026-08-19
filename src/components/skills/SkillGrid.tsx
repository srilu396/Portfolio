import React from 'react';
import { SkillCategory } from '@/data/skills';
import { SkillCard } from './SkillCard';

export const SkillGrid = ({ categories }: { categories: SkillCategory[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
      {categories.map((category) => (
        <SkillCard key={category.id} category={category} />
      ))}
    </div>
  );
};
