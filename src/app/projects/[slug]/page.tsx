import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectHeader } from '@/components/projects/ProjectHeader';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectTechStack } from '@/components/projects/ProjectTechStack';
import { ProjectFeatures } from '@/components/projects/ProjectFeatures';
import { ProjectLinks } from '@/components/projects/ProjectLinks';
import { ProjectCredentials } from '@/components/projects/ProjectCredentials';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#05050A]">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* Top Header: Section Label & Back Button */}
        <div className="flex flex-wrap items-center justify-between mb-12 gap-4">
          <div className="flex items-center gap-4 text-violet-500">
            <span className="text-sm font-bold tracking-widest uppercase">Project Details</span>
          </div>

          <Link 
            href="/#projects" 
            className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Project Info */}
          <div className="order-2 lg:order-1">
            <ProjectHeader project={project} />
          </div>

          {/* Right Column: Project Gallery */}
          <div className="order-1 lg:order-2">
            <ProjectGallery images={project.images} />
          </div>
        </div>

        {/* Details Section */}
        <ProjectTechStack technologies={project.technologies} />
        <ProjectFeatures features={project.features} learnings={project.learnings} />
        <ProjectCredentials credentials={project.credentials} />
        <ProjectLinks links={project.links} />

      </div>
    </main>
  );
}
