import React from 'react';
import { SkillsHero } from '@/components/skills/SkillsHero';
import { SkillsContainer } from '@/components/skills/SkillsContainer';
import { Code2 } from 'lucide-react';

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden bg-[#05050A]">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top left subtle glow */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px] mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        
        {/* Top right large blurred circular glow */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[100px] mix-blend-screen transform translate-x-1/3 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Low-opacity orbital curves (SVG) */}
        <svg className="absolute top-0 right-0 w-full h-[800px] opacity-[0.03]" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMin slice">
          <circle cx="800" cy="200" r="400" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-500" />
          <circle cx="800" cy="200" r="600" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-500" />
          <circle cx="800" cy="200" r="800" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-violet-500" />
        </svg>
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <SkillsHero />
        <SkillsContainer />
      </div>
    </section>
  );
}
