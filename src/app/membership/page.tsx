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
    <div className="pt-28 pb-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="inline-block px-5 py-2 border border-gold/15 text-gold/70 text-[9px] tracking-[0.35em] uppercase mb-12">
            Coming Soon
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-8">
            Coterie Membership
          </h1>

          <p className="text-cream/35 text-base leading-[1.8] max-w-lg mx-auto mb-4">
            An exclusive membership programme for those who want ongoing access
            to Coterie experiences, priority booking, and a community of
            like-minded enthusiasts.
          </p>

          <p className="text-cream/20 text-sm mb-16">
            Register your interest to be the first to know.
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="py-12">
              <div className="w-20 h-20 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-cream mb-3">
                You&apos;re on the list
              </p>
              <p className="text-cream/30 text-sm">
                We&apos;ll be in touch when membership launches.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="text"
                required
                placeholder="Your name"
                className="flex-1 bg-transparent border border-white/[0.06] text-cream px-5 py-4 text-sm focus:border-gold/30 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-white/[0.06] text-cream px-5 py-4 text-sm focus:border-gold/30 focus:outline-none transition-all duration-500 placeholder:text-cream/15"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold text-black text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500 shrink-0"
              >
                Notify Me
              </button>
            </form>
          </FadeIn>
        )}

        {/* Benefits preview */}
        <FadeIn delay={0.3}>
          <div className="mt-28 pt-20 border-t border-white/[0.04]">
            <p className="text-cream/15 text-[9px] tracking-[0.35em] uppercase mb-16">
              What Members Can Expect
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {[
                {
                  number: "01",
                  title: "Priority Access",
                  text: "First-look booking for all tours before public release.",
                },
                {
                  number: "02",
                  title: "Exclusive Events",
                  text: "Members-only gatherings, track days, and social experiences.",
                },
                {
                  number: "03",
                  title: "The Network",
                  text: "A private community of enthusiasts who share your passion.",
                },
              ].map((item, i) => (
                <div
                  key={item.number}
                  className={`p-8 lg:p-10 border-t border-white/[0.04] text-left ${i < 2 ? "sm:border-r sm:border-white/[0.04]" : ""}`}
                >
                  <span className="text-gold/20 text-[11px] tracking-[0.3em] font-mono">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-lg text-cream mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/25 text-xs leading-[1.8]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
