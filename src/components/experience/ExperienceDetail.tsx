'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Tag,
  Briefcase,
  ExternalLink,
  Check,
  ArrowLeft,
  X,
  Sparkles,
  FileText,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { Experience } from '@/data/experience';

interface ExperienceDetailProps {
  experience: Experience;
  onBack?: () => void;
}

export const ExperienceDetail = ({
  experience,
  onBack
}: ExperienceDetailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const credential = experience.certificate || experience.document;
  const isCertificate = credential?.type === 'certificate';
  const isOfferLetter = credential?.type === 'offer-letter';

  return (
    <>
      <div className="w-full bg-[#0c0c16]/95 border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-6 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                {experience.type}
              </span>

              {experience.compensationBadge && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
                  {experience.compensationBadge}
                </span>
              )}

              {experience.continuationBadge && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  {experience.continuationBadge}
                </span>
              )}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mt-1">
              {experience.title}
            </h3>

            <p className="text-base lg:text-lg font-semibold text-violet-400">
              {experience.organization}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 shrink-0">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Experience
              </button>
            )}

            {/* Top Right Logo / Icon */}
            {experience.logo ? (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md border border-white/15 overflow-hidden">
                <Image
                  src={experience.logo}
                  alt={experience.organization}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain scale-105"
                />
              </div>
            ) : (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-md">
                <Briefcase className="w-7 h-7" />
              </div>
            )}
          </div>
        </div>

        {/* Metadata Pills */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs lg:text-sm text-gray-300 relative z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121124] border border-white/5">
            <Calendar className="w-4 h-4 text-violet-400 shrink-0" />
            <span>
              {experience.dateRange} • {experience.duration}
            </span>
          </div>

          {(experience.location || experience.mode) && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121124] border border-white/5">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <span>
                {experience.location ? `${experience.location}` : ''}
                {experience.location && experience.mode ? ' • ' : ''}
                {experience.mode || ''}
              </span>
            </div>
          )}

          {experience.field && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121124] border border-white/5">
              <Tag className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span>{experience.field}</span>
            </div>
          )}
        </div>

        {/* Middle Section: About the Role & (Optional) Certificate / Offer Letter */}
        <div
          className={`grid gap-6 relative z-10 ${
            credential ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'
          }`}
        >
          {/* About the Role */}
          <div
            className={`flex flex-col gap-3 ${
              credential ? 'lg:col-span-7' : 'w-full'
            }`}
          >
            <h4 className="text-base lg:text-lg font-bold text-white flex items-center gap-2">
              About the Role
            </h4>

            <p className="text-gray-300 text-sm lg:text-base leading-relaxed whitespace-pre-line">
              {experience.description}
            </p>

            {experience.roleResponsibilities && experience.roleResponsibilities.length > 0 && (
              <div className="mt-2 flex flex-col gap-2">
                {experience.roleResponsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Credential Card (Certificate / Offer Letter) */}
          {credential && (
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h4 className="text-base lg:text-lg font-bold text-white flex items-center justify-between">
                <span>{isCertificate ? 'Certificate' : 'Offer Letter'}</span>
                {isOfferLetter && (
                  <span className="text-[11px] font-semibold text-violet-400 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </h4>

              {/* Visual Thumbnail */}
              {credential.image && (
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 bg-[#080811] cursor-pointer shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5 flex items-center justify-center">
                    <Image
                      src={credential.image}
                      alt={credential.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3 py-1.5 rounded-xl bg-black/70 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5" />
                        Preview
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Links & Captions */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  {credential.image && (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
                    >
                      {credential.title}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {credential.pdfUrl && (
                    <a
                      href={credential.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600/80 hover:bg-violet-600 text-xs font-semibold text-white transition-all shadow-md"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Open PDF Document
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {credential.caption && (
                  <p className="text-xs text-gray-400 italic leading-relaxed">
                    {credential.caption}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section: What I Learned */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/5 relative z-10">
          <h4 className="text-base lg:text-lg font-bold text-white">
            What I Learned
          </h4>

          <div className="flex flex-wrap gap-2.5">
            {experience.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131126] border border-white/10 hover:border-violet-500/40 text-xs lg:text-sm font-medium text-gray-200 hover:text-white transition-all duration-200 group"
              >
                <div className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate / Document */}
      {isModalOpen && credential?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0c0c16] border border-white/10 rounded-3xl p-4 lg:p-6 shadow-2xl overflow-hidden flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">
                  {credential.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {experience.title} — {experience.organization}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {credential.pdfUrl && (
                  <a
                    href={credential.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-semibold text-white transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Open PDF
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative w-full max-h-[75vh] aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-white flex items-center justify-center">
              <Image
                src={credential.image}
                alt={credential.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
