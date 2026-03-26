"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const values = [
  {
    number: "01",
    title: "Curation",
    text: "Every route, hotel, and experience is handpicked. Nothing is left to chance. We obsess over the details so the experience feels effortless.",
  },
  {
    number: "02",
    title: "Community",
    text: "Small groups of like-minded individuals who share a passion for exceptional driving and exceptional company. The right people make all the difference.",
  },
  {
    number: "03",
    title: "Seamlessness",
    text: "From the moment you arrive to the moment you leave, every detail is handled. Logistics, accommodation, dining, support — all invisible, all perfect.",
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero with image */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden mb-24">
        <Image
          src={images.about}
          alt="Supercar on mountain road"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 w-full">
            <FadeIn>
              <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
                About
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream">
                Who We Are
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main copy */}
      <section className="px-6 pb-28 max-w-3xl mx-auto">
        <div className="space-y-8 text-cream/40 text-base sm:text-lg font-light leading-[1.9]">
          <FadeIn delay={0.1}>
            <p className="text-cream/60 text-lg sm:text-xl">
              At Coterie, we create curated driving experiences for those who
              want more than just a journey.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p>
              At the heart of what we do is a passion for performance cars,
              exceptional routes, and unforgettable moments. We design bespoke
              European tours that bring together some of the world&apos;s most
              iconic roads, from alpine passes to coastal highways, paired with
              carefully selected hotels, dining, and experiences along the way.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Our focus is simple: to deliver seamless, high-end driving
              experiences where every detail is taken care of. From route
              planning and logistics to on-the-ground support, everything is
              handled so you can focus on what matters most — the drive.
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-white/[0.04]" />
      </div>

      {/* Values */}
      <section className="py-28 px-6 max-w-[1400px] mx-auto lg:px-12">
        <FadeIn>
          <p className="text-gold/50 text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Principles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-20">
            What Sets Us Apart
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {values.map((v, i) => (
            <FadeIn key={v.number} delay={i * 0.15}>
              <div className={`p-10 lg:p-12 border-t border-white/[0.04] ${i < 2 ? "md:border-r md:border-white/[0.04]" : ""}`}>
                <span className="text-gold/25 text-[11px] tracking-[0.3em] font-mono">
                  {v.number}
                </span>
                <h3 className="font-serif text-xl text-cream mt-4 mb-5">
                  {v.title}
                </h3>
                <p className="text-cream/30 text-sm leading-[1.8]">
                  {v.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-white/[0.04]">
        <FadeIn>
          <h2 className="font-serif text-2xl sm:text-3xl text-cream mb-8">
            Join Us on the Road
          </h2>
          <Link
            href="/enquire"
            className="inline-block px-12 py-4 bg-gold text-black text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
          >
            Enquire Now
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
