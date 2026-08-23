'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05050A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Code2 className="w-8 h-8 text-violet-500 group-hover:text-violet-400 transition-colors" />
            <span className="text-xl font-bold text-white tracking-tight">
              {portfolioData.name.split(' ')[0]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {portfolioData.navLinks.map((link) => {
              // Special handling to keep "Projects" active on /projects/[slug] routes
              const isProjectsLink = link.label === 'Projects' && pathname.startsWith('/projects');
              const isActive = isProjectsLink || link.href === pathname;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-violet-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active/Hover Indicator */}
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-violet-400 transition-all duration-300 ease-out rounded-full ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="primary" className="py-2.5 px-5 text-sm">
              Let&apos;s Connect &rarr;
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#05050A] border-b border-white/5 px-6 pt-2 pb-6 space-y-4">
          {portfolioData.navLinks.map((link) => {
            const isProjectsLink = link.label === 'Projects' && pathname.startsWith('/projects');
            const isActive = isProjectsLink || link.href === pathname;
            
            return (
            <Link
              key={link.label}
              href={link.href}
              className={`block text-lg font-medium ${
                isActive ? 'text-violet-400' : 'text-gray-300'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
            );
          })}
          <div className="pt-4">
            <Button variant="primary" className="w-full">
              Let&apos;s Connect &rarr;
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
