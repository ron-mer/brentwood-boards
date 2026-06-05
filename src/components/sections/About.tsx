"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="py-28 md:py-36 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image with parallax + reveal */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/gallery/board-04.jpg"
                alt="Vibrant charcuterie board with fresh fruits and artisan cheeses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Decorative gold frame offset */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10"
            />
          </motion.div>

          {/* Right: Text with parallax */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-px bg-gold/40 mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream mb-8"
            >
              The Art of Gathering
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream/60 leading-relaxed text-lg mb-6"
            >
              Here at Brentwood Boards, we bring people together over an
              exceptional, interactive party centerpiece. Each board is made with
              love and care and can be customized for any event, occasion, or
              theme.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-cream/50 leading-relaxed mb-10"
            >
              Whether celebrating your engagement, welcoming a new member of the
              family, or throwing a music festival themed birthday party, our
              personalized creations are designed to bring your guests together.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-l-2 border-gold/30 pl-6"
            >
              <p className="font-serif text-lg md:text-xl text-gold/70 italic leading-relaxed">
                &ldquo;A grazing table is more than food &mdash; it&rsquo;s an
                invitation to slow down, share, and savor the moment
                together&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
