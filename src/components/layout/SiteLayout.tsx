import React from 'react';
import { Navbar } from './Navbar';

export const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#05050A] text-white flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
};
