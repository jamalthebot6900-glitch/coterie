"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const tours = [
  {
    id: "italian-dolomites",
    title: "Italian Dolomites",
    subtitle: "Northern Italy",
    duration: "5 Days · 4 Nights",
    distance: "~900 km",
    group: "12 Cars Max",
    image: images.dolomites,
    description:
      "The Stelvio Pass, Tre Cime, the Sella Ronda — five days through the most legendary alpine roads in northern Italy. Boutique mountain hotels, Michelin dining, and scenery that stops you mid-corner.",
    highlights: [
      "Stelvio Pass & Sella Ronda",
      "Boutique alpine accommodation",
      "Michelin-starred dining",
      "Professional photography",
      "Support vehicle & route guidance",
      "Welcome dinner & farewell evening",
    ],
  },
  {
    id: "french-riviera",
    title: "Côte d'Azur",
    subtitle: "French Riviera",
    duration: "4 Days · 3 Nights",
    distance: "~600 km",
    group: "10 Cars Max",
    image: images.riviera,
    description:
      "Monaco, the Grande Corniche, Col de Turini, and the lavender hills of Provence. Harbour-side dining in Saint-Tropez, private villa accommodation, and the Mediterranean as your constant companion.",
    highlights: [
      "Grande Corniche & Col de Turini",
      "Monaco harbour & casino access",
      "Private villa accommodation",
      "Harbour-side dining",
      "Optional helicopter transfer",
      "Sunset coastal convoy",
    ],
  },
  {
    id: "swiss-grand-tour",
    title: "Swiss Grand Tour",
    subtitle: "Switzerland",
    duration: "6 Days · 5 Nights",
    distance: "~1,200 km",
    group: "8 Cars Max",
    image: images.swiss,
    description:
      "Furka, Gotthard, Susten, Grimsel — Switzerland's most iconic passes in six days of pure driving perfection. Five-star lakeside hotels, alpine cuisine, and roads that redefine what a drive can be.",
    highlights: [
      "Furka, Gotthard, Susten & Grimsel",
      "Five-star lakeside hotels",
      "Alpine fine dining",
      "James Bond Furka experience",
      "Intimate group of just 8 cars",
      "Dedicated concierge throughout",
    ],
  },
];

export default function Tours() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 pb-24 max-w-[1400px] mx-auto lg:px-12">
        <FadeIn>
          <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
            Experiences
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-8">
            Our Tours
          </h1>
          <p className="text-cream/35 text-base max-w-2xl leading-[1.8]">
            Each experience is meticulously designed around the world&apos;s most
            exceptional driving roads. Small groups, luxury at every touchpoint,
            and every detail handled.
          </p>
        </FadeIn>
      </section>

      {/* Tours */}
      <section className="space-y-0">
        {tours.map((tour, i) => (
          <FadeIn key={tour.id}>
            <div className={`relative ${i % 2 === 0 ? "" : ""}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
                {/* Image */}
                <div className={`relative h-[50vh] lg:h-auto ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-gold/20 text-gold text-[9px] tracking-[0.3em] uppercase">
                      Limited Spaces
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex items-center bg-charcoal/20 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="px-8 py-16 sm:px-12 lg:px-20 lg:py-20 max-w-xl">
                    <p className="text-gold/50 text-[10px] tracking-[0.4em] uppercase mb-3">
                      {tour.subtitle}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
                      {tour.title}
                    </h2>

                    {/* Stats */}
                    <div className="flex gap-8 mb-8 pb-8 border-b border-white/[0.04]">
                      <div>
                        <p className="text-cream/20 text-[9px] tracking-[0.2em] uppercase mb-1">Duration</p>
                        <p className="text-cream/60 text-sm">{tour.duration}</p>
                      </div>
                      <div>
                        <p className="text-cream/20 text-[9px] tracking-[0.2em] uppercase mb-1">Distance</p>
                        <p className="text-cream/60 text-sm">{tour.distance}</p>
                      </div>
                      <div>
                        <p className="text-cream/20 text-[9px] tracking-[0.2em] uppercase mb-1">Group</p>
                        <p className="text-cream/60 text-sm">{tour.group}</p>
                      </div>
                    </div>

                    <p className="text-cream/35 text-sm leading-[1.8] mb-10">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-10">
                      <p className="text-cream/20 text-[9px] tracking-[0.2em] uppercase mb-4">Included</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tour.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-gold/40 mt-[7px] shrink-0" />
                            <span className="text-cream/40 text-xs leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/enquire"
                      className="inline-block px-8 py-3.5 bg-gold text-black text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-500"
                    >
                      Enquire About This Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Bespoke CTA */}
      <section className="py-28 px-6 text-center border-t border-white/[0.04]">
        <FadeIn>
          <p className="text-cream/20 text-sm mb-2">
            Don&apos;t see your ideal route?
          </p>
          <p className="text-cream/40 text-sm max-w-md mx-auto mb-10 leading-[1.8]">
            We also design bespoke, private experiences. Tell us where you want
            to drive and we&apos;ll build something extraordinary.
          </p>
          <Link
            href="/enquire"
            className="inline-block px-8 py-3.5 border border-gold/30 text-gold text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
          >
            Bespoke Enquiry
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
