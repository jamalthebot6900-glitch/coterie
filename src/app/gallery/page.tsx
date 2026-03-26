"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const layouts = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export default function Gallery() {
  return (
    <div className="pt-28 pb-20">
      <section className="px-6 pb-16 max-w-[1400px] mx-auto lg:px-12">
        <FadeIn>
          <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-4">
            Gallery
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
            Moments from the Road
          </h1>
          <p className="text-cream/35 text-base max-w-2xl leading-[1.8]">
            A glimpse into what a Coterie experience looks and feels like. The
            roads, the cars, the people, the places.
          </p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 max-w-[1400px] mx-auto lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]">
          {images.gallery.map((item, i) => (
            <FadeIn key={i} delay={i * 0.04} className={layouts[i] || "col-span-1 row-span-1"}>
              <div className="w-full h-full relative group cursor-pointer overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-cream text-[11px] tracking-wider font-light">
                    {item.label}
                  </p>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 border border-white/[0.02] group-hover:border-gold/10 transition-colors duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-20 px-6 text-center">
        <FadeIn>
          <p className="text-cream/20 text-xs tracking-wider">
            Professional photography included on all tours. Full gallery
            available upon enquiry.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
