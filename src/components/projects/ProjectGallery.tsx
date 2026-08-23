'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-[#0c081c] rounded-2xl flex items-center justify-center border border-violet-500/20">
        <span className="text-violet-500/50">No images available</span>
      </div>
    );
  }

  const activeImage = images[activeIndex];
  const hasMultiple = images.length > 1;

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-2">
      {/* Main Image — no fixed height, renders at natural size */}
      <div className="w-full rounded-2xl bg-[#0c081c] border border-violet-500/20 overflow-hidden shadow-[0_8px_32px_rgba(139,92,246,0.1)]">
        <img
          src={activeImage}
          alt={`Project screenshot ${activeIndex + 1}`}
          className="w-full h-auto block"
        />
      </div>

      {/* Thumbnail strip — sits tight right below image */}
      {hasMultiple && (
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0c081c]/70 border border-violet-500/15">
          <button
            onClick={prevImage}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-violet-600 hover:border-violet-500 transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 flex gap-2 overflow-x-auto scrollbar-none items-center">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all focus:outline-none ${
                  activeIndex === idx
                    ? 'border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                    : 'border-white/10 opacity-50 hover:opacity-90 hover:border-violet-500/40'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-violet-600 hover:border-violet-500 transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
