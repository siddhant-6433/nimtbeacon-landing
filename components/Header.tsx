import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Why Boarding", href: "#why-boarding" },
    { label: "Why NIMT", href: "#why-nimt" },
    { label: "Facilities", href: "#facilities" },
    { label: "Results", href: "#results" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1344e6] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
         <div className="flex items-center">
  <img
    src="/nimt-beacon-logo.webp"
    alt="NIMT Beacon School"
    className="h-14 w-auto object-contain"
  />
</div>
            <div className="h-10 w-[1px] bg-white/20 hidden sm:block"></div>
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-sm font-semibold text-white/95 uppercase tracking-wide">Delhi NCR</span>
              <span className="text-xs text-[#93c5fd] font-medium mt-0.5">Co-Ed Boarding School</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base font-semibold tracking-wide text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Button Elements */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91-95999 31443
</span>
            </a>
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1344e6] hover:bg-blue-50 transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1344e6] hover:bg-blue-50 transition-all duration-200"
            >
              Apply
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 hover:bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1344e6] border-t border-white/10 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block rounded-lg px-3 py-2 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="flex items-center justify-center gap-2 rounded-lg border border-white/30 py-3 text-base font-bold text-white hover:bg-white/10"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call +91-95999 31443
</span>
            </a>
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="block text-center rounded-lg bg-white py-3 text-base font-bold text-[#1344e6] hover:bg-blue-50"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
