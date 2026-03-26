"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const tours = [
  {
    id: "italian-alps",
    title: "Italian Dolomites",
    subtitle: "Northern Italy",
    duration: "5 Days / 4 Nights",
    distance: "~900 km",
    group: "Max 12 Cars",
    description:
      "Wind through the legendary Stelvio Pass, Tre Cime, and the Sella Ronda. Stay at boutique alpine hotels with Michelin-starred dining. The ultimate mountain driving experience.",
    highlights: [
      "Stelvio Pass & Sella Ronda",
      "Boutique alpine accommodation",
      "Michelin-starred dining experiences",
      "Professional photography throughout",
      "Support vehicle & route guidance",
    ],
    gradient: "from-[#1a2332] to-[#0a0a0a]",
  },
  {
    id: "french-riviera",
    title: "French Riviera",
    subtitle: "Côte d'Azur, France",
    duration: "4 Days / 3 Nights",
    distance: "~600 km",
    group: "Max 10 Cars",
    description:
      "The glamour of Monaco, the coastal curves of Corniche roads, and the lavender-scented hills of Provence. Luxury villas, harbour-side dining, and the Mediterranean at every turn.",
    highlights: [
      "Grande Corniche & Col de Turini",
      "Monaco harbour & casino access",
      "Private villa accommodation",
      "Harbour-side dining in Saint-Tropez",
      "Helicopter transfer option",
    ],
    gradient: "from-[#1a1a2e] to-[#0a0a0a]",
  },
  {
    id: "swiss-grand-tour",
    title: "Swiss Grand Tour",
    subtitle: "Switzerland",
    duration: "6 Days / 5 Nights",
    distance: "~1,200 km",
    group: "Max 8 Cars",
    description:
      "Switzerland's most iconic passes — Furka, Gotthard, Susten, Grimsel — in six days of pure driving perfection. Five-star lakeside hotels, alpine cuisine, and roads that redefine the meaning of a drive.",
    highlights: [
      "Furka, Gotthard, Susten & Grimsel passes",
      "Five-star lakeside hotels",
      "Alpine fine dining experiences",
      "James Bond Furka Pass experience",
      "Exclusive group of just 8 cars",
    ],
    gradient: "from-[#1a2320] to-[#0a0a0a]",
  },
];

export default function Tours() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Experiences
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-cream mb-6">
            Our Tours
          </h1>
          <p className="text-cream/40 text-base max-w-2xl leading-relaxed">
            Each tour is meticulously designed around the world&apos;s most iconic driving
            roads. Small groups, luxury accommodation, and every detail handled — so
            you can focus on the drive.
          </p>
        </FadeIn>
      </section>

      {/* Tours */}
      <section className="px-6 max-w-6xl mx-auto space-y-24">
        {tours.map((tour, i) => (
          <FadeIn key={tour.id} delay={i * 0.1}>
            <div
              className={`relative rounded-sm overflow-hidden bg-gradient-to-br ${tour.gradient} border border-white/5`}
            >
              <div className="p-8 sm:p-12 lg:p-16">
                {/* Badge */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] tracking-[0.2em] uppercase">
                    Limited Spaces
                  </span>
                  <span className="text-cream/30 text-xs">{tour.group}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left */}
                  <div>
                    <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">
                      {tour.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-light text-cream mb-6">
                      {tour.title}
                    </h2>
                    <p className="text-cream/40 text-sm leading-relaxed mb-8">
                      {tour.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-8">
                      <div>
                        <p className="text-cream/30 text-[10px] tracking-widest uppercase mb-1">
                          Duration
                        </p>
                        <p className="text-cream text-sm">{tour.duration}</p>
                      </div>
                      <div>
                        <p className="text-cream/30 text-[10px] tracking-widest uppercase mb-1">
                          Distance
                        </p>
                        <p className="text-cream text-sm">{tour.distance}</p>
                      </div>
                    </div>

                    <Link
                      href="/enquire"
                      className="inline-block px-8 py-3 bg-gold text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
                    >
                      Enquire About This Tour
                    </Link>
                  </div>

                  {/* Right — Highlights */}
                  <div className="lg:pl-8 lg:border-l lg:border-white/5">
                    <p className="text-cream/30 text-[10px] tracking-widest uppercase mb-6">
                      Included
                    </p>
                    <ul className="space-y-4">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                          <span className="text-cream/60 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="mt-32 px-6 text-center">
        <FadeIn>
          <p className="text-cream/30 text-sm mb-4">
            Don&apos;t see your ideal route?
          </p>
          <p className="text-cream/50 text-sm max-w-md mx-auto mb-8">
            We also design bespoke experiences. Tell us where you want to drive
            and we&apos;ll create something extraordinary.
          </p>
          <Link
            href="/enquire"
            className="inline-block px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Bespoke Enquiry
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
