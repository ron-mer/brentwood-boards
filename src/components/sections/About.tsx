"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight mb-8">
            Grazing Tables &amp;<br />
            Charcuterie Boards<br />
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-muted italic font-light">
              for every occasion
            </span>
          </h2>

          <p className="font-serif text-base md:text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
            Here at Brentwood Boards we bring people together over an exceptional,
            interactive party centerpiece. Each board is made with love and care and
            can be customized for any event, occasion, or theme.
          </p>

          <p className="font-serif text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Make our custom-designed charcuterie boards and grazing tables the
            centerpiece of your event. Whether celebrating your engagement, welcoming
            a new member of the family, or throwing a music festival themed birthday
            party, our personalized creations are designed to bring your guests together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
