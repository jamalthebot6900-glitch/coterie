"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/tours", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/membership", label: "Membership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/[0.04] py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-cream font-serif text-2xl tracking-[0.15em]">
            Coterie
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-cream/50 text-[11px] tracking-[0.2em] uppercase hover:text-cream transition-colors duration-500 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="ml-4 px-7 py-2.5 border border-gold/40 text-gold text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
          >
            Enquire
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] w-6"
          aria-label="Menu"
        >
          <span className={`block h-[0.5px] bg-cream/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[2.75px]" : ""}`} />
          <span className={`block h-[0.5px] bg-cream/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[0.5px] bg-cream/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/[0.03] px-6 pb-10 pt-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-cream/50 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors border-b border-white/[0.03]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-6 px-7 py-3 border border-gold/40 text-gold text-[10px] tracking-[0.25em] uppercase"
          >
            Enquire
          </Link>
        </div>
      )}
    </nav>
  );
}
