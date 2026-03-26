"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 border border-gold/20 text-gold text-[10px] tracking-[0.3em] uppercase mb-8">
            Coming Soon
          </div>

          <h1 className="text-4xl sm:text-5xl font-light text-cream mb-6">
            Coterie Membership
          </h1>

          <p className="text-cream/40 text-base leading-relaxed max-w-lg mx-auto mb-4">
            We&apos;re developing an exclusive membership programme for those who want
            ongoing access to Coterie experiences, priority booking, and a
            community of like-minded enthusiasts.
          </p>

          <p className="text-cream/30 text-sm mb-16">
            Register your interest below to be the first to know.
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="py-12">
              <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-cream text-lg font-light mb-2">You&apos;re on the list</p>
              <p className="text-cream/40 text-sm">
                We&apos;ll be in touch when membership launches.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="text"
                required
                placeholder="Your name"
                className="flex-1 bg-transparent border border-white/10 text-cream px-5 py-3.5 text-sm focus:border-gold/40 focus:outline-none transition-colors placeholder:text-cream/20 rounded-none"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-white/10 text-cream px-5 py-3.5 text-sm focus:border-gold/40 focus:outline-none transition-colors placeholder:text-cream/20 rounded-none"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300 shrink-0"
              >
                Notify Me
              </button>
            </form>
          </FadeIn>
        )}

        {/* Future benefits preview */}
        <FadeIn delay={0.3}>
          <div className="mt-24 pt-16 border-t border-white/5">
            <p className="text-cream/30 text-xs tracking-[0.2em] uppercase mb-12">
              What to Expect
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Priority Access",
                  text: "First-look booking for all new tours before public release.",
                },
                {
                  title: "Members-Only Events",
                  text: "Exclusive gatherings, track days, and social experiences.",
                },
                {
                  title: "Community",
                  text: "A private network of enthusiasts who share your passion.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-gold/10 pt-6">
                  <h3 className="text-cream text-sm font-medium mb-2">{item.title}</h3>
                  <p className="text-cream/30 text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
