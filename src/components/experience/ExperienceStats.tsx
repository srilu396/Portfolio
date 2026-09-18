import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { Experience, getExperienceStats } from '@/data/experience';

interface ExperienceStatsProps {
  experiences: Experience[];
}

export const ExperienceStats = ({ experiences }: ExperienceStatsProps) => {
  const stats = getExperienceStats(experiences);

  const statItems = [
    {
      icon: Briefcase,
      value: stats.experiences,
      label: 'Experiences'
    },
    {
      icon: Calendar,
      value: stats.duration,
      label: 'Months'
    },
    {
      icon: Award,
      value: stats.organizations,
      label: 'Organizations'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-xl">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-3.5 lg:p-4 rounded-2xl bg-[#0c0c16]/90 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:scale-105 group-hover:bg-violet-500/20 transition-all duration-300 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors">
                {item.value}
              </span>
              <span className="text-xs text-gray-400 truncate font-medium">
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
