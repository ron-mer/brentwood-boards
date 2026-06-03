"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Artisan grazing table by Brentwood Boards"
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/90" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="mb-6">
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-cream">
              Brentwood
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.4em] uppercase text-gold mt-2">
              Boards
            </p>
            <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg sm:text-xl text-cream/80 font-light tracking-wide mt-6 max-w-2xl mx-auto"
        >
          Artisan grazing tables &amp; charcuterie boards crafted with love for
          every occasion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block border border-gold/60 text-gold tracking-[0.2em] uppercase text-sm px-10 py-4 hover:bg-gold hover:text-midnight transition-all duration-500"
          >
            Request a Custom Board
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-gold/50 hover:text-gold transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
