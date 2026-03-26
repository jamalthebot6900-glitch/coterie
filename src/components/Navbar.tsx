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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-cream text-xl tracking-[0.3em] font-light uppercase">
          Coterie
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-cream/70 text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="ml-4 px-6 py-2.5 border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-7"
          aria-label="Menu"
        >
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 pb-8 pt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-cream/70 text-sm tracking-widest uppercase hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-4 px-6 py-2.5 border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
