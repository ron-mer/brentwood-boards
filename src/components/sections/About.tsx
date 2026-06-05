"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
};

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-warm">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div {...fade}>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-10">
            About
          </p>
        </motion.div>

        <motion.h2
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-espresso leading-snug tracking-wide mb-12"
        >
          We bring people together over an exceptional, interactive centerpiece.
        </motion.h2>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="text-muted leading-relaxed text-base md:text-lg max-w-xl"
        >
          Each board is made with love and care, customized for any event,
          occasion, or theme. From intimate dinner parties to festival-themed
          celebrations, our creations are designed to bring your guests together.
        </motion.p>
      </div>

      {/* Pull quote — massive whitespace */}
      <div className="max-w-4xl mx-auto px-8 lg:px-12 mt-32 md:mt-44">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <p className="font-serif font-light text-2xl md:text-3xl lg:text-4xl text-espresso/60 leading-relaxed italic">
            &ldquo;A grazing table is more than food &mdash; it&rsquo;s an
            invitation to slow down, share, and savor the moment together.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
