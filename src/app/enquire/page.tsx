"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const tourOptions = [
  "Italian Dolomites",
  "Côte d'Azur — French Riviera",
  "Swiss Grand Tour",
  "Bespoke / Custom Experience",
];

export default function Enquire() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center px-6">
        <FadeIn>
          <div className="text-center max-w-md">
            <div className="w-20 h-20 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-10">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl text-cream mb-4">Thank You</h2>
            <p className="text-cream/35 text-sm leading-[1.8]">
              We&apos;ve received your enquiry and will be in touch within 48
              hours to discuss your experience in detail.
            </p>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-[600px] mx-auto px-6">
        <FadeIn>
          <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
            Enquire
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-6">
            Start Your Journey
          </h1>
          <p className="text-cream/35 text-sm leading-[1.8] mb-16 max-w-md">
            All experiences are allocated by application. Tell us about yourself
            and what you&apos;re looking for — we&apos;ll handle the rest.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
                placeholder="+44 7XXX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                Your Car
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
                placeholder="Make & model (e.g. Porsche 911 GT3)"
              />
            </div>

            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                Preferred Experience
              </label>
              <select
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#1a1a1a] text-cream/30">
                  Select a tour
                </option>
                {tourOptions.map((t) => (
                  <option key={t} value={t} className="bg-[#1a1a1a] text-cream">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-cream/30 text-[9px] tracking-[0.25em] uppercase mb-4">
                What are you looking for from a Coterie experience?
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/[0.08] text-cream py-3 text-sm focus:border-gold/40 focus:outline-none transition-all duration-500 resize-none placeholder:text-cream/15"
                placeholder="Tell us a bit about yourself and what excites you about a driving tour..."
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-14 py-4 bg-gold text-black text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
