import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { asset } from "../lib/asset";

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111827] text-gray-400 py-16 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-gray-800">

          {/* Column 1 - Brand */}
          <div className="lg:col-span-4 flex flex-col text-left">

            {/* School Logo */}
            <div className="flex items-center">
              <img
                src={asset("/nimt-beacon-logo.webp")}
                alt="NIMT Beacon School"
                width="240"
                height="96"
                loading="lazy"
                decoding="async"
                className="h-20 md:h-24 w-auto object-contain rounded-2xl"
              />
            </div>

            <p className="mt-4 text-base font-semibold text-gray-400 leading-relaxed max-w-sm">
              Building a Safe, Disciplined & Future-Ready Boarding Environment
              Where Students Learn, Grow & Succeed With Confidence.
            </p>

          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2 flex flex-col text-left">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-base font-semibold">
              {["Why Boarding", "Why NIMT", "Facilities", "Results"].map(
                (label) => {
                  const id = `#${label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;

                  return (
                    <li key={label}>
                      <button
                        onClick={() => handleScroll(id)}
                        className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left focus:outline-none"
                      >
                        {label}
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="lg:col-span-3 flex flex-col text-left">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-base font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>
                  Ansal, Avantika Ext Rd, Avantika Colony, Shastri Nagar,
                  Ghaziabad, Uttar Pradesh 201002
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <a
                  href="tel:+919599931443"
                  className="hover:text-white transition-colors"
                >
                  +91 95999 31443
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <a
                  href="mailto:nsae@nimt.ac.in"
                  className="hover:text-white transition-colors"
                >
                  nsae@nimt.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="lg:col-span-3 flex flex-col text-left">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h4>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/nimtschoolgzb"
                 target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#1344e6] hover:text-white transition-colors shadow-sm"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/nimtschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#1344e6] hover:text-white transition-colors shadow-sm"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@nimtschool"
                 target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#1344e6] hover:text-white transition-colors shadow-sm"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm font-semibold text-gray-500">

          <span>
            © 2026 NIMT Beacon School. All rights reserved.
          </span>

          <span className="text-gray-400 font-display text-sm">
            Building Excellence in Education
          </span>

        </div>

      </div>
    </footer>
  );
}