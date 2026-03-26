"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const highlights = [
  {
    number: "01",
    title: "Curated Routes",
    description:
      "Handpicked European roads — alpine passes, coastal highways, hidden gems that only locals know. Every corner chosen for a reason.",
  },
  {
    number: "02",
    title: "Seamless Luxury",
    description:
      "Five-star hotels, Michelin-quality dining, support vehicles, professional photography. Every detail handled so you simply drive.",
  },
  {
    number: "03",
    title: "The Right Company",
    description:
      "Small, carefully curated groups of like-minded enthusiasts. The people you share the road with matter as much as the road itself.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Supercar on European road"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="text-gold/80 text-[10px] tracking-[0.4em] uppercase mb-8">
              Curated Driving Experiences
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[80px] font-normal text-cream leading-[1.05] tracking-tight"
          >
            The Drive Is Just
            <br />
            <em className="text-gold">the Beginning</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 text-cream/40 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Exceptional European routes. Luxury at every turn.
            <br className="hidden sm:block" />
            Moments that last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              href="/enquire"
              className="group px-10 py-4 bg-gold text-black text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
            >
              Enquire Now
            </Link>
            <Link
              href="/tours"
              className="px-10 py-4 border border-cream/15 text-cream/60 text-[11px] tracking-[0.25em] uppercase hover:border-gold/40 hover:text-gold transition-all duration-500"
            >
              View Experiences
            </Link>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-cream/20 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* Statement */}
      <section className="py-32 sm:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-12" />
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-cream/80 leading-[1.5] italic">
              We create experiences for those who understand that the finest
              moments in life are shared — and that the best roads deserve the
              best company.
            </p>
            <div className="w-8 h-px bg-gold/40 mx-auto mt-12" />
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {highlights.map((item, i) => (
              <FadeIn key={item.number} delay={i * 0.15}>
                <div className={`p-10 lg:p-14 border-t border-white/[0.04] ${i < 2 ? "md:border-r md:border-white/[0.04]" : ""}`}>
                  <span className="text-gold/30 text-[11px] tracking-[0.3em] font-mono">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-xl text-cream mt-4 mb-5">
                    {item.title}
                  </h3>
                  <p className="text-cream/30 text-sm leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour — Full Bleed Image */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.dolomites}
            alt="Italian Dolomites"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <FadeIn direction="left">
              <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                Featured Experience
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
                Italian Dolomites
              </h2>
              <p className="text-cream/40 text-sm max-w-md leading-[1.8] mb-4">
                Five days through the most breathtaking alpine passes in
                northern Italy. The Stelvio. The Sella Ronda. Tre Cime.
              </p>
              <p className="text-gold/40 text-xs tracking-wider mb-10">
                5 Days &middot; 900km &middot; Limited to 12 Cars
              </p>
              <Link
                href="/enquire"
                className="inline-block px-8 py-3.5 border border-gold/30 text-gold text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
              >
                Register Interest
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 sm:py-40 px-6 bg-charcoal/30">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <svg
              className="w-6 h-6 text-gold/20 mx-auto mb-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl sm:text-3xl text-cream/70 leading-[1.6] italic">
              It&apos;s not about the destination. It&apos;s about who you share
              the road with.
            </blockquote>
            <div className="mt-10 w-10 h-px bg-gold/20 mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold/50 text-[10px] tracking-[0.4em] uppercase mb-6">
              Begin
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
              Ready to Experience Coterie?
            </h2>
            <p className="text-cream/30 text-sm mb-12 max-w-lg mx-auto leading-[1.8]">
              Spaces are limited and allocated by application. Tell us about
              yourself and your car — we&apos;ll take care of the rest.
            </p>
            <Link
              href="/enquire"
              className="inline-block px-12 py-4 bg-gold text-black text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
            >
              Apply Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
