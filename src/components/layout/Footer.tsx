'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/') {
      if (href === '/' || href === '/#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        return;
      }
      if (href.includes('#')) {
        const targetId = href.split('#')[1];
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      }
    }
  };

  // Extract Email and GitHub links dynamically from portfolioData
  const emailLink = portfolioData.socialLinks.find(
    (l) => l.label.toLowerCase() === 'email'
  );
  const githubLink = portfolioData.socialLinks.find(
    (l) => l.label.toLowerCase() === 'github'
  );

  return (
    <footer className="w-full relative overflow-hidden bg-[#070612]/95 border-t border-violet-500/20 text-white backdrop-blur-xl">
      {/* Top Accent Gradient Border Glow Line spanning full width */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent pointer-events-none" />

      {/* Soft Violet Ambient Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Lower-Left Decorative Dot Matrix Pattern */}
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-35 select-none">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern
              id="footer-dot-grid"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.5" fill="#a78bfa" />
            </pattern>
            <radialGradient id="footer-dot-mask" cx="0%" cy="100%" r="90%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="50%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="footer-dot-fade">
              <rect width="200" height="200" fill="url(#footer-dot-mask)" />
            </mask>
          </defs>
          <rect
            width="200"
            height="200"
            fill="url(#footer-dot-grid)"
            mask="url(#footer-dot-fade)"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          
          {/* LEFT COLUMN — Call to Action */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
              Let&apos;s Build Something<br />
              <span className="inline-flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Amazing
                </span>
                <span>Together</span>
                {/* Glowing 4-pointed Sparkle Star Icon */}
                <svg
                  className="w-5 h-5 text-violet-400 inline-block animate-pulse shrink-0 fill-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
              I&apos;m open to new opportunities and exciting projects. Let&apos;s create something impactful.
            </p>

            {/* Primary CTA Button: Let's Talk */}
            <Link
              href="/#contact"
              onClick={(e) => handleScrollLink(e, '/#contact')}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
              aria-label="Scroll to contact section"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Desktop Divider: Left / Center */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full min-h-[220px]">
            <div className="w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* CENTER COLUMN — Developer Visual & Social Shortcuts */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center lg:px-2">
            
            {/* Developer Orbital Graphic */}
            <div className="relative w-64 sm:w-72 h-36 flex items-center justify-center mb-5">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                viewBox="0 0 300 160"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbit-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#c084fc" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="orbit-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.15" />
                  </linearGradient>
                  <filter id="satellite-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Elliptical Orbits */}
                <ellipse
                  cx="150"
                  cy="80"
                  rx="128"
                  ry="44"
                  stroke="url(#orbit-gradient-1)"
                  strokeWidth="1.2"
                  transform="rotate(-7 150 80)"
                />
                <ellipse
                  cx="150"
                  cy="80"
                  rx="106"
                  ry="34"
                  stroke="url(#orbit-gradient-2)"
                  strokeWidth="1"
                  transform="rotate(9 150 80)"
                />
                <ellipse
                  cx="150"
                  cy="80"
                  rx="82"
                  ry="25"
                  stroke="url(#orbit-gradient-1)"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.55"
                  transform="rotate(-15 150 80)"
                />

                {/* Glowing Orbit Satellite Nodes */}
                <circle cx="34" cy="74" r="3.5" fill="#c084fc" filter="url(#satellite-glow-filter)" />
                <circle cx="264" cy="72" r="4" fill="#a855f7" filter="url(#satellite-glow-filter)" />
                <circle cx="218" cy="46" r="4.5" fill="#c084fc" filter="url(#satellite-glow-filter)" />
                <circle cx="96" cy="44" r="3" fill="#818cf8" filter="url(#satellite-glow-filter)" />
                <circle cx="232" cy="116" r="3" fill="#c084fc" filter="url(#satellite-glow-filter)" />
              </svg>

              {/* Central Code Badge */}
              <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-[#1b1138] to-[#0b071c] border border-violet-500/40 flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.35)] group hover:scale-105 transition-transform duration-300">
                <span className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white to-violet-300 group-hover:from-violet-200 group-hover:to-fuchsia-300 transition-colors tracking-tight">
                  &lt;/&gt;
                </span>
              </div>
            </div>

            {/* Social / Contact Shortcuts */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">
              {emailLink && (
                <a
                  href={emailLink.href}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#140e2a] border border-violet-500/20 text-violet-400 flex items-center justify-center group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    Email
                  </span>
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 transition-all duration-200"
                  aria-label="View GitHub Profile"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#140e2a] border border-violet-500/20 text-violet-400 flex items-center justify-center group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                    <GithubIcon />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    GitHub
                  </span>
                </a>
              )}
            </div>

            {/* Copyright Text */}
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; {currentYear} {portfolioData.name}. All rights reserved.
            </p>
          </div>

          {/* Desktop Divider: Center / Right */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full min-h-[220px]">
            <div className="w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* RIGHT COLUMN — Quick Links */}
          <div className="lg:col-span-1 flex flex-col items-start lg:pl-2">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-4">
              Quick Links
            </h3>

            <nav aria-label="Footer Quick Links" className="flex flex-col gap-2.5">
              {portfolioData.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className="group flex items-center gap-2.5 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70 group-hover:bg-violet-400 group-hover:shadow-[0_0_8px_rgba(167,139,250,0.9)] group-hover:scale-125 transition-all duration-200 shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
};
