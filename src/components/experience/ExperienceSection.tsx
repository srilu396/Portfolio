'use client';

import React, { useState } from 'react';
import { experiences, Experience } from '@/data/experience';
import { ExperienceHero } from './ExperienceHero';
import { ExperienceStats } from './ExperienceStats';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ExperienceDetail } from './ExperienceDetail';

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  const handleSelectExperience = (exp: Experience) => {
    setSelectedExperience(exp);
    // On small screens, smoothly scroll toward the detail view if needed
    if (window.innerWidth < 1024) {
      const detailEl = document.getElementById('experience-detail-view');
      if (detailEl) {
        detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <section
      id="experience"
      className="min-h-screen relative overflow-hidden bg-[#05050A] py-20 lg:py-28"
    >
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top left subtle glow */}
        <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-violet-900/10 rounded-full blur-[140px] mix-blend-screen transform -translate-x-1/2 pointer-events-none" />

        {/* Bottom right glow */}
        <div
          className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[130px] mix-blend-screen transform translate-x-1/3 pointer-events-none"
          style={{ animationDelay: '2s' }}
        />

        {/* Low-opacity orbital curves (SVG) matching portfolio design */}
        <svg
          className="absolute top-0 right-0 w-full h-[800px] opacity-[0.025]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMaxYMin slice"
        >
          <circle
            cx="800"
            cy="300"
            r="400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-violet-500"
          />
          <circle
            cx="800"
            cy="300"
            r="600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-violet-500"
          />
          <circle
            cx="800"
            cy="300"
            r="800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="text-violet-500"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10 lg:gap-12">
        {/* Top: Section Header & Dynamic Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <ExperienceHero />
          <ExperienceStats experiences={experiences} />
        </div>

        {/* Two-Column Grid: Timeline List (Left) & Detail View (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Vertical Timeline List */}
          <div className="lg:col-span-5 w-full">
            <div className="sm:pl-6">
              <ExperienceTimeline
                experiences={experiences}
                selectedId={selectedExperience.id}
                onSelect={handleSelectExperience}
              />
            </div>
          </div>

          {/* Right Column: Selected Experience Details */}
          <div
            id="experience-detail-view"
            className="lg:col-span-7 w-full sticky top-24"
          >
            <ExperienceDetail
              experience={selectedExperience}
              onBack={() => setSelectedExperience(experiences[0])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
