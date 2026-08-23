import React from 'react';
import { Badge } from '@/components/ui/Badge';

export const AboutHero = () => {
  return (
    <div className="flex flex-col items-start gap-4 max-w-xl">
      <Badge>About Me</Badge>
      
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
        I build modern web<br/>applications that are<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          fast, scalable, and user-friendly.
        </span>
      </h2>
      
      <p className="text-base text-gray-400 leading-relaxed max-w-lg mt-1">
        Web Developer and AI/ML enthusiast focused on building modern, responsive web applications and intuitive digital experiences. I work with React, Next.js, JavaScript, TypeScript, Python, and modern web technologies, while exploring Machine Learning and AI-powered applications. I also use Figma to design user-focused interfaces and translate ideas into polished digital experiences.
      </p>

      <div className="w-16 h-1 rounded-full bg-violet-500/50 mt-2" />
    </div>
  );
};
