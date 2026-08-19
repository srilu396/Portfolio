import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className="flex items-center gap-5 p-5 lg:p-6 rounded-2xl bg-[#0c0c16] border border-white/5 hover:border-violet-500/30 transition-all duration-300 group">
      <div className="p-3 lg:p-4 rounded-full bg-violet-500/5 border border-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
      </div>
      <div className="flex flex-col">
        {value && (
          <div className={`${value.length > 3 ? 'text-lg lg:text-xl' : 'text-3xl lg:text-4xl'} font-bold text-violet-400 mb-0.5 group-hover:text-violet-300 transition-colors`}>
            {value}
          </div>
        )}
        <div className="text-xs lg:text-sm text-gray-300 leading-snug whitespace-pre-line">
          {label}
        </div>
      </div>
    </div>
  );
};
