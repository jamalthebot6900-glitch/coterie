import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl text-cream tracking-[0.15em] mb-6">
              Coterie
            </h3>
            <p className="text-cream/30 text-sm leading-[1.8] max-w-sm">
              Curated driving experiences across Europe for those who appreciate
              the art of the journey as much as the destination.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-cream/20 text-[10px] tracking-[0.3em] uppercase mb-6">
              Explore
            </p>
            <div className="flex flex-col gap-4">
              {[
                { href: "/tours", label: "Experiences" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/enquire", label: "Enquire" },
                { href: "/membership", label: "Membership" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-cream/30 text-sm hover:text-gold transition-colors duration-500"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-cream/20 text-[10px] tracking-[0.3em] uppercase mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@coterie.co"
                className="text-cream/30 text-sm hover:text-gold transition-colors duration-500"
              >
                hello@coterie.co
              </a>
              <div className="flex gap-6 mt-2">
                {["Instagram", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-cream/20 text-xs tracking-wider hover:text-gold transition-colors duration-500"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/15 text-[10px] tracking-[0.15em]">
            &copy; {new Date().getFullYear()} Coterie. All rights reserved.
          </p>
          <p className="text-cream/10 text-[10px] tracking-wider">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
