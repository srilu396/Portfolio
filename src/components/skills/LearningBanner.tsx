import React from 'react';
import { Rocket } from 'lucide-react';

export const LearningBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-32 relative z-10">
      <div className="glass-card rounded-full py-4 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left border border-violet-500/20">
        <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
          <Rocket className="w-5 h-5 text-violet-400 animate-float" />
        </div>
        <p className="text-gray-300 text-sm md:text-base">
          Continuously exploring new technologies and best practices to build{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            impactful digital products
          </span>.
        </p>
      </div>
    </div>
  );
};
