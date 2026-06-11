"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Grazing Tables",
    tagline: "Designed to appeal to the masses",
    description:
      "Our comprehensive grazing tables are the perfect feature for your large event.",
    image: "/images/gallery/board-05.jpg",
  },
  {
    title: "Charcuterie Boards",
    tagline: "Carefully curated to meet your needs",
    description:
      "Our charcuterie boards are crafted to make a statement at any intimate gathering.",
    image: "/images/gallery/board-04.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-espresso mb-2">
                {service.title}
              </h3>
              <p className="font-serif text-muted italic mb-3">
                {service.tagline}
              </p>
              <p className="font-serif text-soft text-sm leading-relaxed max-w-sm mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
