'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Home');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 250) {
        setActiveSection('Home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].label);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/') {
      if (href === '/' || href === '/#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('Home');
        window.history.pushState(null, '', '/');
        setIsMobileMenuOpen(false);
        return;
      }
      if (href.includes('#')) {
        const targetId = href.split('#')[1];
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${targetId}`);
          setIsMobileMenuOpen(false);
        }
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05050A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
              }
            }}
            className="flex items-center gap-2 group"
          >
            <Code2 className="w-8 h-8 text-violet-500 group-hover:text-violet-400 transition-colors" />
            <span className="text-xl font-bold text-white tracking-tight">
              {portfolioData.name.split(' ')[0]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {portfolioData.navLinks.map((link) => {
              const isProjectsRoute = link.label === 'Projects' && pathname.startsWith('/projects');
              const isHomeSinglePage = pathname === '/';
              const isActive = isProjectsRoute || (isHomeSinglePage ? activeSection === link.label : link.href === pathname);
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative group py-1 ${
                    isActive ? 'text-violet-400 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active/Hover Indicator Line */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all duration-300 ease-out rounded-full ${
                      isActive ? 'w-full shadow-[0_0_8px_rgba(139,92,246,0.8)]' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Resume CTA Button */}
          <div className="hidden md:flex">
            <a
              href={portfolioData.resumeUrl || '/Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="py-2.5 px-5 text-sm gap-2 cursor-pointer">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#05050A] border-b border-white/5 px-6 pt-2 pb-6 space-y-4">
          {portfolioData.navLinks.map((link) => {
            const isProjectsRoute = link.label === 'Projects' && pathname.startsWith('/projects');
            const isHomeSinglePage = pathname === '/';
            const isActive = isProjectsRoute || (isHomeSinglePage ? activeSection === link.label : link.href === pathname);
            
            return (
            <Link
              key={link.label}
              href={link.href}
              className={`block text-lg font-medium transition-colors ${
                isActive ? 'text-violet-400 font-semibold' : 'text-gray-300'
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
            );
          })}
          <div className="pt-4">
            <a
              href={portfolioData.resumeUrl || '/Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="primary" className="w-full gap-2 justify-center">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
