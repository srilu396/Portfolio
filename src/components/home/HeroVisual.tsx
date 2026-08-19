import React from 'react';
import Image from 'next/image';
import { Database, Code2 } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[800px] flex items-center justify-center">
      
      {/* Main Composite Image */}
      <div className="relative w-full max-w-[900px] animate-float">
        <Image
          src="/images/laptop.png" /* Assuming the user will save their provided image here */
          alt="Premium laptop displaying code editor with technology stack"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(124,58,237,0.3)] mix-blend-screen"
          priority
        />
      </div>
    </div>
  );
};
