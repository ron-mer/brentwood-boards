"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 bg-cream">
      {/* Centered wordmark + logo */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <Image
            src="/images/logo.png"
            alt="Brentwood Boards logo"
            width={70}
            height={70}
            className="mx-auto mb-8 opacity-70"
          />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.1em] text-espresso">
            Brentwood Boards
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-muted mt-6"
          >
            Made with love in Los Angeles
          </motion.p>
        </motion.div>
      </div>

      {/* Hero image — natural aspect ratio, edge to edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="MILZCHELLA themed artisan grazing table by Brentwood Boards"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
