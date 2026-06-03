"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-midnight">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream mb-8">
              The Art of Gathering
            </h2>
            <p className="text-cream/60 leading-relaxed text-lg mb-8">
              Here at Brentwood Boards, we bring people together over an
              exceptional, interactive party centerpiece. Each board is made with
              love and care and can be customized for any event, occasion, or
              theme.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Whether celebrating your engagement, welcoming a new member of the
              family, or throwing a music festival themed birthday party, our
              personalized creations are designed to bring your guests together.
            </p>
            <div className="w-12 h-px bg-gold/40 mx-auto mt-12" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <blockquote className="text-center mt-16 max-w-2xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-gold/80 italic leading-relaxed">
              &ldquo;A grazing table is more than food &mdash; it&rsquo;s an
              invitation to slow down, share, and savor the moment
              together&rdquo;
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
