import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FocusItemProps {
  item: {
    icon: LucideIcon;
    title: string;
    skills: string[];
  };
}

export const FocusItem = ({ item }: FocusItemProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
        <item.icon className="w-4 h-4 text-gray-400" />
        <h3 className="text-xs lg:text-sm font-semibold text-white tracking-wide">
          {item.title}
        </h3>
      </div>
      <ul className="flex flex-col gap-2">
        {item.skills.map((skill, idx) => (
          <li key={idx} className="flex items-start gap-2 group">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50 mt-1 group-hover:bg-violet-400 transition-colors" />
            <span className="text-[11px] lg:text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
