"use client";

import FadeIn from "@/components/FadeIn";

const galleryItems = [
  { aspect: "col-span-2 row-span-2", gradient: "from-[#2a1f14] via-[#1a1510] to-[#0a0a0a]", label: "Stelvio Pass, Italy" },
  { aspect: "col-span-1 row-span-1", gradient: "from-[#14202a] via-[#101a1a] to-[#0a0a0a]", label: "Monaco Harbour" },
  { aspect: "col-span-1 row-span-1", gradient: "from-[#1a2a1a] via-[#101a10] to-[#0a0a0a]", label: "Swiss Alps" },
  { aspect: "col-span-1 row-span-2", gradient: "from-[#2a1a2a] via-[#1a101a] to-[#0a0a0a]", label: "Côte d'Azur" },
  { aspect: "col-span-1 row-span-1", gradient: "from-[#2a2a14] via-[#1a1a10] to-[#0a0a0a]", label: "Alpine Hotel" },
  { aspect: "col-span-2 row-span-1", gradient: "from-[#14142a] via-[#10101a] to-[#0a0a0a]", label: "Furka Pass Sunset" },
  { aspect: "col-span-1 row-span-1", gradient: "from-[#1a1414] via-[#1a0a0a] to-[#0a0a0a]", label: "Group Dinner" },
  { aspect: "col-span-1 row-span-1", gradient: "from-[#142a14] via-[#0a1a0a] to-[#0a0a0a]", label: "Dolomites Dawn" },
  { aspect: "col-span-2 row-span-1", gradient: "from-[#2a1a14] via-[#1a100a] to-[#0a0a0a]", label: "Convoy Through Tuscany" },
];

export default function Gallery() {
  return (
    <div className="pt-28 pb-20">
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-cream mb-6">
            Moments from the Road
          </h1>
          <p className="text-cream/40 text-base max-w-2xl">
            A glimpse into what a Coterie experience feels like. The roads, the
            cars, the people, the places.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} className={item.aspect}>
              <div
                className={`w-full h-full bg-gradient-to-br ${item.gradient} rounded-sm relative group cursor-pointer overflow-hidden`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream text-xs tracking-wider">{item.label}</p>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 border border-white/[0.03] rounded-sm group-hover:border-gold/10 transition-colors duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-20 px-6 text-center">
        <FadeIn>
          <p className="text-cream/30 text-sm">
            Full gallery available upon enquiry. Professional photography included on all tours.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
