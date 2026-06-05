"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

const HERO_SLIDES = [
  {
    image: "/images/hero.jpg",
    label: "Brentwood Boards",
    subtitle: "Made with love in Los Angeles",
    width: 1599,
    height: 1066,
  },
  {
    image: GALLERY_IMAGES[0].src,
    label: "Custom Creations",
    subtitle: "Designed for your occasion",
    width: GALLERY_IMAGES[0].width,
    height: GALLERY_IMAGES[0].height,
  },
  {
    image: GALLERY_IMAGES[2].src,
    label: "Every Detail",
    subtitle: "Crafted with care",
    width: GALLERY_IMAGES[2].width,
    height: GALLERY_IMAGES[2].height,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-chocolate">
      {/* Full-bleed background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority={current === 0}
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Diagonal overlay: dark chocolate on the left, transparent on the right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(105deg, #1E120B 0%, #1E120B 35%, rgba(30,18,11,0.85) 45%, rgba(30,18,11,0.4) 60%, rgba(30,18,11,0.15) 75%, transparent 90%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-8 lg:px-16 pt-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-auto pt-8"
        >
          <Image
            src="/images/logo.png"
            alt="Brentwood Boards"
            width={48}
            height={48}
            className="invert brightness-200 opacity-60"
          />
        </motion.div>

        {/* Text overlapping the diagonal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-none tracking-wide">
              {slide.label}
            </h1>
            <p className="text-[12px] tracking-[0.25em] uppercase text-gold mt-4 md:mt-6">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar: nav arrows + slide indicator */}
        <div className="flex items-center justify-between mt-12 md:mt-16">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-colors duration-300"
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8L10 13" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold transition-colors duration-300"
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3L11 8L6 13" />
              </svg>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-500 ${
                  i === current ? "w-8 bg-gold" : "w-4 bg-ivory/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <a
            href="#contact"
            className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 hover:text-gold transition-colors duration-500 hidden sm:block"
          >
            Inquire &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
