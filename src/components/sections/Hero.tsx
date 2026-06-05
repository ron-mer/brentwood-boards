"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cream">
      {/* Wordmark area */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <Image
            src="/images/logo.png"
            alt="Brentwood Boards logo"
            width={64}
            height={64}
            className="mx-auto mb-8 opacity-60"
          />

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso tracking-wide">
            Brentwood Boards
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[11px] tracking-[0.3em] uppercase text-gold-muted mt-6"
          >
            Made with love in Los Angeles
          </motion.p>
        </motion.div>
      </div>

      {/* Full-bleed hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative aspect-[3/2] md:aspect-[2.4/1] overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="MILZCHELLA themed artisan grazing table by Brentwood Boards"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
