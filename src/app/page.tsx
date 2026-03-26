"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Curated Routes",
    description:
      "Handpicked European roads — alpine passes, coastal highways, hidden gems only locals know.",
  },
  {
    title: "Seamless Logistics",
    description:
      "Hotels, dining, support vehicles, route planning — every detail handled so you just drive.",
  },
  {
    title: "Like-Minded Company",
    description:
      "Small, curated groups of enthusiasts who share a passion for exceptional experiences.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, #1a1a1a 0%, #0a0a0a 60%), linear-gradient(180deg, rgba(201,169,110,0.03) 0%, transparent 40%)",
          }}
        />

        {/* Subtle animated grain */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-cream leading-[1.1]">
              The Drive Is Just
              <br />
              <span className="text-gold">the Beginning</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 text-cream/50 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Curated European driving experiences for performance car enthusiasts.
            Exceptional routes. Luxury at every turn. Moments that last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/enquire"
              className="px-10 py-4 bg-gold text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Enquire Now
            </Link>
            <Link
              href="/tours"
              className="px-10 py-4 border border-cream/20 text-cream/70 text-sm tracking-[0.2em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              View Experiences
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Why Coterie
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-cream mb-20">
              More Than a Road Trip
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="border-t border-gold/20 pt-8">
                  <h3 className="text-cream text-lg font-light mb-4">
                    {item.title}
                  </h3>
                  <p className="text-cream/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 40%, rgba(201,169,110,0.05) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn>
            <div className="text-center px-6">
              <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-6">
                Next Departure
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-cream mb-6">
                Italian Dolomites
              </h2>
              <p className="text-cream/40 text-sm max-w-md mx-auto mb-10">
                Five days through the most breathtaking alpine passes in northern Italy.
                Limited to twelve cars.
              </p>
              <Link
                href="/enquire"
                className="px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
              >
                Register Interest
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <svg className="w-8 h-8 text-gold/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl sm:text-3xl font-light text-cream/80 leading-relaxed">
              It&apos;s not about the destination. It&apos;s about who you share the road with.
            </blockquote>
            <div className="mt-8 w-12 h-px bg-gold/30 mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-light text-cream mb-6">
              Ready to Experience Coterie?
            </h2>
            <p className="text-cream/40 text-sm mb-10 max-w-lg mx-auto">
              Spaces are limited and allocated by application.
              Tell us about yourself and your car.
            </p>
            <Link
              href="/enquire"
              className="inline-block px-10 py-4 bg-gold text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Apply Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
