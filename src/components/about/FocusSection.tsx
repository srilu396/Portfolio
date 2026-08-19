import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

export const FocusSection = () => {
  return (
    <div className="mt-4 w-full p-8 lg:p-10 rounded-3xl bg-[#0c0c16] border border-white/5 shadow-2xl relative overflow-hidden group">
      {/* Subtle inner glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-violet-500/5 blur-[120px] pointer-events-none group-hover:bg-violet-500/10 transition-colors duration-700" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
        {/* Left Side: Intro */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            My Focus
          </h2>
          <p className="text-gray-400 leading-relaxed text-xs lg:text-sm mt-2">
            I focus on building reliable, maintainable, and user-friendly digital products. I care about clean architecture, performance, responsive experiences, and solving real-world problems while continuously improving my technical and design skills.
          </p>
        </div>

        {/* Right Side: Focus Items */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:pl-10 lg:border-l border-white/5 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Scalable & maintainable applications</span>
            </div>
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Clean architecture & code quality</span>
            </div>
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Responsive & accessible UI/UX</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Real-world problem solving</span>
            </div>
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Performance & user experience</span>
            </div>
            <div className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors">Continuous learning & improvement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
