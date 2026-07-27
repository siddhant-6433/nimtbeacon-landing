"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Sparkles, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    {
      name: "Programs",
      dropdown: [
        { name: "Day School", href: "/day-school" },
        { name: "Day Boarding", href: "/day-boarding" },
        { name: "Full Boarding", href: "/full-boarding" },
      ],
    },
     {
      name: "About Us",
      dropdown: [
        { name: "Our Story", href: "/our-story" },
        { name: "Leadership", href: "/leadership" },
        { name: "Vision & Mission", href: "/vision-mission" },
      ],
    },
    {
      name: "Campus",href: "/campus"
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        id="-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0041f5] border-b border-blue-400/30 ${
          isScrolled ? "shadow-xl py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
      <Link
  id="navbar-logo"
  href="/"
  className="group flex items-center"
>
  <img
    src="/nimt-beacon-logo.webp"
    alt="NIMT Beacon"
    className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
</Link>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.dropdown) {
                  return (
                    <div key={link.name} className="relative group/menu py-2">
                      <button
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-lg"
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 opacity-70 group-hover/menu:rotate-180 transition-transform duration-300" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 mt-1 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-800 p-2 opacity-0 scale-95 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:scale-100 group-hover/menu:pointer-events-auto transition-all duration-200">
                        <div className="grid grid-cols-1 gap-1">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-center px-4 py-2.5 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0041f5] transition-all ${
                                pathname === subItem.href
                                  ? "bg-slate-50 dark:bg-slate-800 text-[#0041f5] font-semibold"
                                  : "text-slate-600 dark:text-slate-300"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href || "/"}
                    className={`px-3 py-2 text-sm font-medium transition-all rounded-lg relative ${
                      isActive
                        ? "text-[#fffc4d] font-bold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#fffc4d]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions Right */}
 <div className="hidden sm:flex items-center gap-3">
  <Link
    id="cta-parent-login"
    href="https://uni.nimt.ac.in/students"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#fffc4d] text-slate-950 shadow-lg hover:bg-yellow-400 active:scale-95 transition-all duration-300"
  >
    Parent Login
  </Link>
</div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden bg-white dark:bg-slate-900 shadow-2xl border-b border-gray-100 dark:border-slate-800 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-5 pt-3 pb-8 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  {link.dropdown ? (
                    <>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {link.name}
                      </div>
                      <div className="pl-3 py-1 space-y-2 border-l border-slate-100 dark:border-slate-800">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-1.5 text-sm rounded ${
                              pathname === subItem.href
                                ? "text-[#0041f5] font-semibold"
                                : "text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href || "/"}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1.5 text-base font-semibold ${
                        pathname === link.href
                          ? "text-[#0041f5]"
                          : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <a
                  href="https://wa.me/919599931443"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
                >
                  WhatsApp Admissions
                </a>
                <Link
                  href="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0041f5] hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  Apply For 2026-27
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
