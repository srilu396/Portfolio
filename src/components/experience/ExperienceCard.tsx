import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  isSelected: boolean;
  onSelect: () => void;
}

export const ExperienceCard = ({
  experience,
  isSelected,
  onSelect
}: ExperienceCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left p-4 lg:p-5 rounded-2xl transition-all duration-300 relative flex items-center justify-between gap-4 group cursor-pointer ${
        isSelected
          ? 'bg-[#120e26] border-2 border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.18)]'
          : 'bg-[#0c0c16]/90 border border-white/5 hover:border-violet-500/40 hover:bg-[#121226]'
      }`}
    >
      {/* Content Left */}
      <div className="flex items-start gap-4 min-w-0">
        {/* Logo / Placeholder */}
        <div className="shrink-0">
          {experience.logo ? (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg overflow-hidden border border-white/20 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={experience.logo}
                alt={experience.organization}
                width={64}
                height={64}
                className="w-full h-full object-contain scale-105"
              />
            </div>
          ) : (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 group-hover:bg-violet-500/20 transition-all duration-300 shadow-md">
              <Briefcase className="w-7 h-7" />
            </div>
          )}
        </div>

        {/* Text Details */}
        <div className="flex flex-col min-w-0 gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
              {experience.title}
            </h3>
            {experience.continuationBadge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                {experience.continuationBadge}
              </span>
            )}
          </div>

          <p className="text-sm font-semibold text-violet-400 truncate">
            {experience.organization}
          </p>

          <div className="flex flex-col gap-0.5 mt-0.5 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-violet-400/80 shrink-0" />
              <span>
                {experience.dateRange} • {experience.duration}
              </span>
            </div>

            {(experience.location || experience.mode) && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-400/80 shrink-0" />
                <span className="truncate">
                  {experience.location ? `${experience.location}` : ''}
                  {experience.location && experience.mode ? ' • ' : ''}
                  {experience.mode || ''}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Arrow */}
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isSelected
            ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.6)]'
            : 'bg-white/5 text-gray-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 group-hover:translate-x-0.5'
        }`}
      >
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
};
