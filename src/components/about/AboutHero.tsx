import React from 'react';
import { Badge } from '@/components/ui/Badge';

export const AboutHero = () => {
  return (
    <div className="flex flex-col items-start gap-4 max-w-xl">
      <Badge>About Me</Badge>
      
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
        I build full-stack web<br/>applications that are<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          fast, scalable, and user-friendly.
        </span>
      </h2>
      
      <p className="text-base text-gray-400 leading-relaxed max-w-lg mt-1">
        I'm a Full-Stack Developer focused on building clean, responsive, and performant web applications. I enjoy solving real-world problems, learning modern technologies, and turning ideas into practical digital products. Alongside full-stack development, I have experience with AI/ML concepts and Figma-based UI/UX design, allowing me to approach products from both technical and user-experience perspectives.
      </p>

      <div className="w-16 h-1 rounded-full bg-violet-500/50 mt-2" />
    </div>
  );
};
