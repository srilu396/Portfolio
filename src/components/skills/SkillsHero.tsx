import React from 'react';
import { Code2 } from 'lucide-react';

export const SkillsHero = () => {
  return (
    <div className="pt-32 pb-12 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between relative z-10 gap-10">
      {/* Left side: Text Content */}
      <div className="flex flex-col items-start max-w-2xl">
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

      {/* Right side: Decorative Element */}
      <div className="hidden md:flex relative mt-4 md:mt-0 w-[400px] h-[200px] items-center justify-center">
        {/* Soft Background Glows (Instead of hard circles) */}
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-fuchsia-600/5 rounded-full blur-[60px] pointer-events-none" />

        {/* Elegant Dotted Orbital Curve removed for a cleaner look */}

        {/* Planets/Orbs placed along the SVG curve */}
        {/* Medium Orb (left) */}
        <div className="absolute left-[-20px] top-[75px] w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-violet-800 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-0" />
        {/* Small Glowing Dot (bottom right) */}
        <div className="absolute right-[10px] bottom-[-5px] w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.8)] animate-pulse z-0" />

        {/* Main Card */}
        <div className="relative flex items-center gap-5 bg-[#120b29]/70 backdrop-blur-xl border border-violet-500/20 px-8 py-6 rounded-2xl shadow-[0_8px_32px_rgba(139,92,246,0.2)] z-10">
          {/* Icon Container */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1e1345]/80 border border-violet-500/30 shadow-[inset_0_0_20px_rgba(139,92,246,0.3)]">
            <Code2 className="w-7 h-7 text-violet-300" />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col">
            <span className="text-gray-200 text-base font-medium tracking-wide mb-0.5">
              Always Learning,
            </span>
            <span className="text-violet-400 text-2xl font-bold tracking-wide">
              Always Building
            </span>
            <div className="mt-2.5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
