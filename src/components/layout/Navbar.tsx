"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b border-stone/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Brentwood Boards"
                width={36}
                height={36}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="hidden sm:block font-serif text-sm tracking-[0.15em] text-espresso/70 group-hover:text-espresso transition-colors duration-500">
                Brentwood Boards
              </span>
            </a>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.2em] uppercase text-espresso/40 hover:text-espresso transition-colors duration-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-[11px] tracking-[0.2em] uppercase text-gold hover:text-espresso transition-colors duration-500"
              >
                Inquire
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-espresso/50 hover:text-espresso transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon className="w-5 h-5" />
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-espresso/40 hover:text-espresso transition-colors"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <Image
              src="/images/logo.png"
              alt="Brentwood Boards"
              width={60}
              height={60}
              className="opacity-60 mb-12"
            />

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="font-serif text-xl tracking-[0.15em] text-espresso/60 hover:text-espresso transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
