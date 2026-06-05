"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@/components/icons";

function AnimatedLetters({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative min-h-screen flex overflow-hidden">
      {/* Left: Text */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-32 bg-midnight"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-px bg-gold mb-10"
        />

        <h1 className="font-serif uppercase">
          <AnimatedLetters
            text="Brentwood"
            className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[0.15em] text-cream"
            delay={0.3}
          />
          <AnimatedLetters
            text="Boards"
            className="block text-2xl sm:text-3xl lg:text-4xl tracking-[0.4em] text-gold mt-2"
            delay={0.8}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-cream/60 text-lg sm:text-xl font-light tracking-wide mt-8 max-w-md leading-relaxed"
        >
          Artisan grazing tables &amp; charcuterie boards crafted with love for
          every occasion in Los Angeles
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block border border-gold/60 text-gold tracking-[0.2em] uppercase text-sm px-10 py-4 hover:bg-gold hover:text-midnight transition-all duration-500"
          >
            Request a Custom Board
          </a>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="h-px bg-gold/30 mt-12"
        />
      </motion.div>

      {/* Right: Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.jpg"
            alt="Artisan grazing table by Brentwood Boards"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="50vw"
          />
        </motion.div>

        {/* Subtle gradient blending into the dark left side */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-midnight to-transparent" />
      </div>

      {/* Mobile: show image below text as a banner */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden h-48 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Artisan grazing table by Brentwood Boards"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-8 sm:left-12 lg:left-20 z-20"
      >
        <a href="#about" className="text-gold/40 hover:text-gold transition-colors flex items-center gap-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
