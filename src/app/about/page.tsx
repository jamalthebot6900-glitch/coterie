"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const values = [
  {
    title: "Curation",
    text: "Every route, hotel, and experience is handpicked. Nothing is left to chance.",
  },
  {
    title: "Community",
    text: "Small groups of like-minded individuals who share a passion for the drive.",
  },
  {
    title: "Seamlessness",
    text: "From the moment you arrive to the moment you leave, every detail is handled.",
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-cream mb-12">
            Who We Are
          </h1>
        </FadeIn>

        {/* Main copy from brief */}
        <div className="space-y-8 text-cream/50 text-base sm:text-lg font-light leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              At Coterie, we create curated driving experiences for those who want
              more than just a journey.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p>
              At the heart of what we do is a passion for performance cars,
              exceptional routes, and unforgettable moments. We design bespoke
              European tours that bring together some of the world&apos;s most iconic
              roads, from alpine passes to coastal highways, paired with carefully
              selected hotels, dining, and experiences along the way.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Our focus is simple: to deliver seamless, high-end driving
              experiences where every detail is taken care of. From route planning
              and logistics to on-the-ground support, everything is handled so you
              can focus on what matters most — the drive.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p>
              Whether joining us for a single tour or becoming part of a wider
              community, each experience is designed to go beyond the expected —
              combining great driving with the kind of moments that make the
              journey truly memorable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/5" />
      </div>

      {/* Values */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Our Principles
          </p>
          <h2 className="text-3xl font-light text-cream mb-16">
            What Sets Us Apart
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.15}>
              <div className="border-t border-gold/20 pt-8">
                <h3 className="text-cream text-lg font-light mb-4">
                  {v.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-white/5">
        <FadeIn>
          <h2 className="text-2xl font-light text-cream mb-6">
            Join Us on the Road
          </h2>
          <Link
            href="/enquire"
            className="inline-block px-10 py-4 bg-gold text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Enquire Now
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
