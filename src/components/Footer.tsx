import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-cream text-lg tracking-[0.3em] font-light uppercase mb-4">
              Coterie
            </h3>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Curated driving experiences for those who want more than just a journey.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/tours", label: "Experiences" },
                { href: "/about", label: "About" },
                { href: "/gallery", label: "Gallery" },
                { href: "/enquire", label: "Enquire" },
                { href: "/membership", label: "Membership" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-cream/40 text-sm">
              <a href="mailto:hello@coterie.com" className="hover:text-gold transition-colors">
                hello@coterie.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-cream/20 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Coterie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
