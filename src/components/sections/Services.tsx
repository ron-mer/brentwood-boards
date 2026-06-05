"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Grazing Tables",
    description: "The perfect feature for your large event. Designed to appeal to the masses.",
    image: "/images/gallery/board-03.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Charcuterie Boards",
    description: "Crafted to make a statement at any intimate gathering. Carefully curated to meet your needs.",
    image: "/images/gallery/board-06.jpg",
    aspect: "aspect-[4/3]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-warm">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted mb-16"
        >
          Services
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className={`relative ${service.aspect} overflow-hidden mb-8`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="font-serif font-light text-2xl md:text-3xl tracking-wide text-espresso mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
