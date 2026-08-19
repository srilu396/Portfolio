import React from 'react';

export const SkillsHero = () => {
  return (
    <div className="pt-32 pb-12 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-start relative z-10">
      {/* Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
         MY SKILLS
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Skills</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
        Technologies and tools I use to build modern, scalable, and efficient web applications.
      </p>
    </div>
  );
};
