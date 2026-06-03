"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { MenuIcon, XIcon } from "@/components/icons";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-midnight/95 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <svg
                viewBox="0 0 40 40"
                className="w-9 h-9 text-gold/70 group-hover:text-gold transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="8" y="6" width="20" height="26" rx="2" />
                <line x1="18" y1="32" x2="18" y2="38" />
                <circle cx="18" cy="38" r="2" />
              </svg>
              <div className="hidden sm:block">
                <span className="font-serif text-lg tracking-[0.2em] text-cream uppercase">
                  Brentwood
                </span>
                <span className="font-serif text-xs tracking-[0.35em] text-gold block -mt-1 uppercase">
                  Boards
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm tracking-[0.15em] uppercase border border-gold/50 text-gold px-5 py-2 hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-cream/80 hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-midnight/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <XIcon className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-serif text-3xl tracking-[0.15em] text-cream/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-4 text-lg tracking-[0.2em] uppercase border border-gold/50 text-gold px-8 py-3 hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
