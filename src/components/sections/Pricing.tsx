"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-espresso mb-8">
            Pricing
          </h2>

          <p className="font-serif text-muted leading-relaxed mb-4">
            At Brentwood Boards, each charcuterie creation is thoughtfully designed
            to suit your unique gathering. Because every event is different, we do
            not offer one-size-fits-all pricing.
          </p>

          <p className="font-serif text-muted leading-relaxed mb-4">
            Our prices vary based on number of guests, size and style of the board,
            and the complexity and customization.
          </p>

          <p className="font-serif text-muted leading-relaxed mb-8">
            Whether you&rsquo;re planning an intimate party or a large celebration,
            we&rsquo;ll work with you to create a board that fits your needs and budget.
          </p>

          <p className="font-serif text-soft text-sm italic">
            Please fill out the Contact Us form below with a few details about your
            event, and we&rsquo;ll get back to you promptly with more information.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 font-serif text-espresso underline underline-offset-4 hover:text-gold transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
