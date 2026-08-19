import { Hero } from "@/components/home/Hero";
import { AboutHero } from '@/components/about/AboutHero';
import { AboutStats } from '@/components/about/AboutStats';
import { FocusSection } from '@/components/about/FocusSection';
import { SkillsSection } from '@/components/skills/SkillsSection';

import { ProjectsSection } from '@/components/projects/ProjectsSection';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section 
        id="about" 
        className="relative w-full min-h-[100dvh] py-16 flex flex-col items-center justify-center bg-[#08080C] overflow-hidden"
      >
        {/* Top-Right Background Image */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[60%] h-[60%] lg:h-[70%] bg-cover bg-right-top bg-no-repeat pointer-events-none"
          style={{ backgroundImage: 'url("/images/about.png")' }}
        >
          {/* Sharp fade on edges only, keeping the image fully visible and clear */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#08080C] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#08080C] to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10 lg:gap-14">
          
          {/* Top Section: About Hero Content */}
          <div className="w-full flex justify-start">
            <AboutHero />
          </div>

          {/* Stats Section */}
          <div className="w-full flex justify-start">
            <AboutStats />
          </div>

          {/* Focus Section */}
          <div className="w-full mt-4">
            <FocusSection />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
