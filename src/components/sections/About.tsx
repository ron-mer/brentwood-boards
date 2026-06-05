"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
};

export default function About() {
  return (
    <section id="about" className="bg-cream overflow-hidden">
      {/* Chapter: The Craft */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left: text on cream */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-24 lg:py-32">
          <motion.div {...fade}>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-muted mb-6">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-tight tracking-wide mb-8">
              The Art of Gathering
            </h2>
            <p className="text-muted leading-relaxed text-base max-w-md mb-6">
              We bring people together over an exceptional, interactive
              centerpiece. Each board is crafted with love, customized for any
              event, occasion, or theme.
            </p>
            <p className="text-soft leading-relaxed text-sm max-w-md">
              From intimate dinner parties to festival-themed celebrations,
              our creations bring your guests together.
            </p>
          </motion.div>
        </div>

        {/* Right: full-bleed image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[400px] lg:min-h-0"
        >
          <Image
            src="/images/gallery/board-02.jpg"
            alt="Custom branded 4A Arts charcuterie display with eucalyptus"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Pull quote — full-width dark band */}
      <div className="bg-chocolate py-20 md:py-28 px-8 lg:px-16">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory/70 italic leading-relaxed">
            &ldquo;A grazing table is more than food &mdash; it&rsquo;s an
            invitation to slow down, share, and savor the moment together.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
