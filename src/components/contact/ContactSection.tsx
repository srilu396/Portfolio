'use client';

import React, { useState } from 'react';
import { Mail, User, Send, CheckCircle2, AlertCircle, Edit3, Loader2, Tag } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Contact items derived from portfolioData
  const emailItem = portfolioData.socialLinks.find((l) => l.label.toLowerCase() === 'email');
  const linkedinItem = portfolioData.socialLinks.find((l) => l.label.toLowerCase() === 'linkedin');
  const githubItem = portfolioData.socialLinks.find((l) => l.label.toLowerCase() === 'github');

  const emailValue = emailItem?.href ? emailItem.href.replace(/^mailto:/, '') : 'srilunagulapalli396@gmail.com';
  const linkedinUrl = linkedinItem?.href || 'https://www.linkedin.com/in/sri-vijaya-lakshmi-nagulapalli-15a63a288/';
  const githubUrl = githubItem?.href || 'https://github.com/srilu396';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const msg = {
          type: 'success' as const,
          text: "Message sent successfully. I'll get back to you as soon as possible.",
        };
        setStatusMessage(msg);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Auto-dismiss the success message after 6 seconds
        setTimeout(() => {
          setStatusMessage((prev) => (prev === msg ? null : prev));
        }, 6000);
      } else {
        setStatusMessage({
          type: 'error',
          text:
            data.error ||
            'Unable to send your message right now. Please try again later.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatusMessage({
        type: 'error',
        text: 'Unable to send your message right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden bg-[#05050A] pt-10 pb-20 lg:pt-14 lg:pb-28 flex items-center"
    >
      {/* Background Image: contact.png — positioned right side, clearly visible */}
      <div
        className="absolute top-0 right-0 w-full lg:w-[70%] h-full bg-cover bg-right-top bg-no-repeat pointer-events-none opacity-90"
        style={{ backgroundImage: 'url("/images/contact.png")' }}
      >
        {/* Minimal edge fades — just enough for readability, letting the image shine */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#05050A] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-[#05050A] to-transparent" />
      </div>

      {/* Background Ambience & Decorative Curves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft violet ambient glow top-left */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-violet-900/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Ambient glow right */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Elegant mesh wave lines behind form and content */}
        <svg
          className="absolute -right-10 top-1/4 w-[750px] lg:w-[950px] h-[750px] opacity-20 pointer-events-none select-none"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 700 C 300 650, 450 350, 750 150 C 850 80, 950 100, 1000 120"
            stroke="url(#violet-gradient-1)"
            strokeWidth="1.5"
          />
          <path
            d="M 120 720 C 320 670, 470 370, 770 170 C 870 100, 960 115, 1020 135"
            stroke="url(#violet-gradient-1)"
            strokeWidth="1.2"
          />
          <path
            d="M 140 740 C 340 690, 490 390, 790 190 C 890 120, 970 130, 1040 150"
            stroke="url(#violet-gradient-1)"
            strokeWidth="1"
          />
          <path
            d="M 160 760 C 360 710, 510 410, 810 210 C 910 140, 980 145, 1060 165"
            stroke="url(#violet-gradient-1)"
            strokeWidth="0.8"
          />
          <path
            d="M 180 780 C 380 730, 530 430, 830 230 C 930 160, 990 160, 1080 180"
            stroke="url(#violet-gradient-1)"
            strokeWidth="0.8"
          />
          <path
            d="M 200 800 C 400 750, 550 450, 850 250 C 950 180, 1000 175, 1100 195"
            stroke="url(#violet-gradient-1)"
            strokeWidth="0.6"
          />
          <defs>
            <linearGradient id="violet-gradient-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          {/* Left Column: Intro + Contact Information + Availability */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Pill Section Header - Matching Experience & Skills style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              CONTACT
            </div>

            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Touch
              </span>
            </h2>

            {/* Accent Underline */}
            <div className="w-8 h-1 rounded-full bg-violet-500 mb-6" />

            {/* Introductory Text */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              I&apos;m open to opportunities, collaborations, and interesting projects.
              Let&apos;s connect and build something meaningful together.
            </p>

            {/* Contact Information Cards (3 items: Email, LinkedIn, GitHub) */}
            <div className="w-full flex flex-col gap-4 mb-8">
              {/* Email Card */}
              <a
                href={`mailto:${emailValue}`}
                className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#0c0c16]/70 border border-white/5 hover:border-violet-500/30 hover:bg-[#120e24]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#130d2a] border border-violet-500/20 text-violet-400 group-hover:text-violet-300 group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 truncate group-hover:text-violet-300 transition-colors">
                    {emailValue}
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#0c0c16]/70 border border-white/5 hover:border-violet-500/30 hover:bg-[#120e24]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#130d2a] border border-violet-500/20 text-violet-400 group-hover:text-violet-300 group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                  <LinkedinIcon />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    LinkedIn
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 truncate group-hover:text-violet-300 transition-colors">
                    linkedin.com/in/sri-vijaya-lakshmi-nagulapalli-15a63a288
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#0c0c16]/70 border border-white/5 hover:border-violet-500/30 hover:bg-[#120e24]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#130d2a] border border-violet-500/20 text-violet-400 group-hover:text-violet-300 group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                  <GithubIcon />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    GitHub
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 truncate group-hover:text-violet-300 transition-colors">
                    github.com/srilu396
                  </span>
                </div>
              </a>
            </div>

            {/* Availability Card */}
            <div className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#0c0c16]/70 border border-violet-500/15 backdrop-blur-md">
              <div className="relative flex h-3.5 w-3.5 items-center justify-center shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-snug">
                I&apos;m currently <span className="text-violet-400 font-medium">available</span> for new opportunities.
                Let&apos;s build something amazing together!
              </p>
            </div>
          </div>

          {/* Right Column: Glassmorphism Contact Form aligned at bottom line */}
          <div className="lg:col-span-7 w-full lg:pt-8">
            <div className="relative rounded-3xl bg-[#0c0b17]/80 backdrop-blur-xl border border-violet-500/20 p-6 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Subtle inner top glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 pointer-events-none text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your Name"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#07060e]/90 text-white placeholder-gray-500 text-sm md:text-base border transition-all duration-200 outline-none ${
                        errors.name
                          ? 'border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 pointer-events-none text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="Your Email"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#07060e]/90 text-white placeholder-gray-500 text-sm md:text-base border transition-all duration-200 outline-none ${
                        errors.email
                          ? 'border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 pointer-events-none text-gray-400">
                      <Tag className="w-5 h-5" />
                    </div>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="Subject"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#07060e]/90 text-white placeholder-gray-500 text-sm md:text-base border transition-all duration-200 outline-none ${
                        errors.subject
                          ? 'border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                      }`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="sr-only">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 pointer-events-none text-gray-400">
                      <Edit3 className="w-5 h-5" />
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Your Message"
                      className={`w-full pl-12 pr-4 pt-3.5 pb-3.5 rounded-xl bg-[#07060e]/90 text-white placeholder-gray-500 text-sm md:text-base border transition-all duration-200 outline-none resize-none leading-relaxed ${
                        errors.message
                          ? 'border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-violet-500 focus:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submission Status Alerts */}
                {statusMessage && (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border text-sm transition-all ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                        : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <p className="leading-snug">{statusMessage.text}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 active:scale-[0.99] transition-all duration-200 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 -rotate-12 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
