"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Pricing() {
  return (
    <section className="py-28 md:py-36 bg-charcoal">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream mb-8">
              Pricing
            </h2>
            <p className="text-cream/60 leading-relaxed text-lg mb-6">
              At Brentwood Boards, each charcuterie creation is thoughtfully
              designed to suit your unique gathering. Because every event is
              different, we do not offer one-size-fits-all pricing.
            </p>
            <p className="text-cream/50 leading-relaxed mb-6">
              Our prices vary based on number of guests, size and style of the
              board, and the complexity and customization.
            </p>
            <p className="text-cream/50 leading-relaxed mb-10">
              Whether you&rsquo;re planning an intimate party or a large
              celebration, we&rsquo;ll work with you to create a board that fits
              your needs and budget.
            </p>

            <a
              href="#contact"
              className="inline-block border border-gold/50 text-gold tracking-[0.2em] uppercase text-sm px-10 py-4 hover:bg-gold hover:text-midnight transition-all duration-500"
            >
              Tell Us About Your Event
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
