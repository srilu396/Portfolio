import React from 'react';
import { Mouse } from 'lucide-react';

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1 relative">
        <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
      </div>
      <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
    </div>
  );
};
