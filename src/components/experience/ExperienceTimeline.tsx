import React from 'react';
import { Experience } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceTimelineProps {
  experiences: Experience[];
  selectedId: string;
  onSelect: (experience: Experience) => void;
}

export const ExperienceTimeline = ({
  experiences,
  selectedId,
  onSelect
}: ExperienceTimelineProps) => {
  return (
    <div className="relative flex flex-col gap-4 w-full">
      {/* Vertical Timeline Track Line */}
      <div className="hidden sm:block absolute left-[-22px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-500/60 via-violet-500/30 to-violet-500/10 pointer-events-none" />

      {experiences.map((exp) => {
        const isSelected = exp.id === selectedId;

        return (
          <div key={exp.id} className="relative flex items-center">
            {/* Timeline Node Dot */}
            <div
              className={`hidden sm:flex absolute -left-[28px] w-3.5 h-3.5 rounded-full items-center justify-center transition-all duration-300 ${
                isSelected
                  ? 'bg-violet-400 ring-4 ring-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.9)] scale-110'
                  : 'bg-[#0e0c20] border-2 border-violet-500/40'
              }`}
            >
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </div>

            {/* Experience Card */}
            <ExperienceCard
              experience={exp}
              isSelected={isSelected}
              onSelect={() => onSelect(exp)}
            />
          </div>
        );
      })}
    </div>
  );
};
