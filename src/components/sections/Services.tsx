"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Grazing Tables",
    subtitle: "Designed to appeal to the masses",
    description:
      "Our comprehensive grazing tables are the perfect feature for your large event. Make our custom-designed creations the centerpiece of your celebration.",
    image: "/images/gallery/board-03.jpg",
    features: [
      "Corporate events & launches",
      "Weddings & engagement parties",
      "Festival-themed celebrations",
      "Holiday gatherings",
    ],
  },
  {
    title: "Charcuterie Boards",
    subtitle: "Carefully curated to meet your needs",
    description:
      "Our charcuterie boards are crafted to make a statement at any intimate gathering. Each board is thoughtfully arranged with premium cheeses, cured meats, fresh fruits, and artisan accompaniments.",
    image: "/images/gallery/board-06.jpg",
    features: [
      "Intimate dinner parties",
      "Birthday celebrations",
      "Date nights & anniversaries",
      "Themed occasions",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:direction-rtl"}`}>
      {/* Image side */}
      <motion.div
        style={{ y: imageY }}
        className={`relative ${isEven ? "" : "lg:order-2"}`}
      >
        <motion.div
          initial={{ clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>

      {/* Text side */}
      <div className={isEven ? "" : "lg:order-1"}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl tracking-wider text-cream mb-2">
            {service.title}
          </h3>
          <p className="text-gold/50 text-sm tracking-[0.15em] uppercase mb-6">
            {service.subtitle}
          </p>
          <p className="text-cream/50 leading-relaxed mb-8">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="text-cream/40 text-sm flex items-center gap-3"
              >
                <span className="w-6 h-px bg-gold/40" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block text-gold/70 text-sm tracking-[0.2em] uppercase hover:text-gold transition-colors group"
            >
              Inquire
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="w-12 h-px bg-gold/40 mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream">
            Our Offerings
          </h2>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
