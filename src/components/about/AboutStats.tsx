import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { aboutStats } from '@/data/about';

export const AboutStats = () => {
  return (
    <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-3 lg:gap-4 mt-4 max-w-[90%] xl:max-w-[85%]">
      {aboutStats.map((stat, index) => (
        <StatCard 
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};
