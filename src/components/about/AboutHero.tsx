import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/about';

export const AboutHero = () => {
  return (
    <div className="flex flex-col items-start gap-4 max-w-2xl">
      <Badge>About Me</Badge>
      
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
        I build modern web<br/>applications that are<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          fast, scalable, and user-friendly.
        </span>
      </h2>
      
      <p className="text-base text-gray-400 leading-relaxed max-w-xl mt-1">
        Full Stack Developer and AI/ML enthusiast focused on building modern, responsive web applications and intuitive digital experiences. I work with React, Next.js, JavaScript, TypeScript, Python, and modern web technologies, while exploring Machine Learning and AI-powered applications. I also use Figma to design user-focused interfaces and translate ideas into polished digital experiences.
      </p>

      {/* Education Info Card */}
      <div className="w-full mt-2 p-4 sm:p-5 rounded-2xl bg-[#0c0c16] border border-white/5 hover:border-violet-500/30 transition-all duration-300 flex items-start sm:items-center gap-4 group">
        <div className="p-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
              {education.degree}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              CGPA: {education.cgpa}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            {education.institution}, {education.location} &bull; {education.period}
          </p>
        </div>
      </div>

      <div className="w-16 h-1 rounded-full bg-violet-500/50 mt-2" />
    </div>
  );
};
