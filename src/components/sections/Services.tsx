"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Grazing Tables",
    description: "The perfect feature for your large event. Designed to appeal to the masses and create a shared experience.",
    image: "/images/gallery/board-05.jpg",
  },
  {
    title: "Charcuterie Boards",
    description: "Crafted to make a statement at any intimate gathering. Carefully curated to meet your needs.",
    image: "/images/gallery/board-08.jpg",
  },
];

export default function Services() {
  return (
    <section id="services">
      {services.map((service, i) => (
        <div
          key={service.title}
          className={`grid lg:grid-cols-2 min-h-[70vh] ${
            i % 2 === 0 ? "" : "lg:direction-rtl"
          }`}
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`relative min-h-[350px] lg:min-h-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text side */}
          <div className={`flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-32 bg-chocolate ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-ivory mb-6">
                {service.title}
              </h3>
              <p className="text-ivory/50 leading-relaxed text-base max-w-md mb-8">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-[11px] tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors duration-500"
              >
                Inquire &rarr;
              </a>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
