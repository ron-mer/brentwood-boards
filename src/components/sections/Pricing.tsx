"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-32 md:py-48 bg-cream">
      <div className="max-w-2xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-10">
            Pricing
          </p>

          <h2 className="font-serif font-light text-3xl md:text-4xl text-espresso leading-snug tracking-wide mb-8">
            Every creation is unique.
          </h2>

          <p className="text-muted leading-relaxed mb-4">
            Our prices vary based on guest count, board size, and
            customization. We&rsquo;ll work with you to create something that
            fits your vision and budget.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 text-[11px] tracking-[0.25em] uppercase text-espresso/60 hover:text-espresso transition-colors duration-500 border-b border-espresso/20 hover:border-espresso/40 pb-1"
          >
            Tell us about your event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
