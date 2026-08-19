import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(139,92,246,0.1)]">
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
      {children}
    </div>
  );
};
