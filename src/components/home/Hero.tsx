'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { SocialLinks } from './SocialLinks';
import { ScrollIndicator } from './ScrollIndicator';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-center bg-cover bg-no-repeat bg-[center_right] lg:bg-[right_center]"
      style={{ backgroundImage: 'url("/images/laptop.png")' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Text & CTAs */}
        <div className="flex flex-col items-start max-w-2xl">
          <p className="text-violet-400 font-medium text-lg lg:text-xl tracking-wide mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            Hi, I&apos;m
          </p>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2 leading-[1.1] opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            Full Stack
          </h1>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500 mb-6 leading-[1.1] opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Developer
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            {portfolioData.description}
          </p>
          
          <div className="flex flex-col items-start gap-8 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/#projects"
                onClick={(e) => {
                  const el = document.getElementById('projects');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#projects');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium text-base text-white bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-violet-500/50 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => {
                  const el = document.getElementById('contact');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#contact');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium text-base text-white bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="w-full sm:w-auto flex justify-center sm:justify-start sm:pl-2">
              <SocialLinks />
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Required Keyframes for Entrance Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
};
