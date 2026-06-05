"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-serif font-light">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[0.08em] text-espresso leading-none">
              Brentwood
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[0.08em] text-espresso leading-none mt-1">
              Boards
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-muted mt-8 max-w-sm"
          >
            Artisan grazing tables &amp; charcuterie boards, crafted with love in Los Angeles
          </motion.p>
        </motion.div>

        {/* Hero image — treated as artwork */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden"
        >
          <Image
            src="/images/gallery/board-04.jpg"
            alt="Vibrant artisan charcuterie spread with fresh fruits, cheeses, and handmade accompaniments"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
