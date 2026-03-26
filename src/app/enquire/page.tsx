"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const tourOptions = [
  "Italian Dolomites",
  "French Riviera",
  "Swiss Grand Tour",
  "Bespoke / Custom Tour",
];

export default function Enquire() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with CRM / email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center px-6">
        <FadeIn>
          <div className="text-center max-w-md">
            <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-light text-cream mb-4">
              Thank You
            </h2>
            <p className="text-cream/40 text-sm leading-relaxed">
              We&apos;ve received your enquiry and will be in touch within 48 hours to
              discuss your experience.
            </p>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Enquire
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-cream mb-6">
            Start Your Journey
          </h1>
          <p className="text-cream/40 text-base mb-16 max-w-lg">
            Tell us about yourself and what you&apos;re looking for. All tours are
            allocated by application — we&apos;ll be in touch to discuss the details.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                placeholder="+44 7XXX XXX XXX"
              />
            </div>

            {/* Car */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Your Car
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                placeholder="Make & model (e.g. Porsche 911 GT3)"
              />
            </div>

            {/* Tour Preference */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Preferred Tour
              </label>
              <select
                required
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-charcoal text-cream/40">
                  Select a tour
                </option>
                {tourOptions.map((t) => (
                  <option key={t} value={t} className="bg-charcoal text-cream">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-cream/50 text-xs tracking-widest uppercase mb-3">
                Tell Us About Your Ideal Experience
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/10 text-cream py-3 text-sm focus:border-gold/50 focus:outline-none transition-colors resize-none placeholder:text-cream/20"
                placeholder="What are you looking for from a Coterie experience?"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-gold text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
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
