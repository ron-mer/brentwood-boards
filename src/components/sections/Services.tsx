"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
    image: "/images/gallery/board-04.jpg",
    features: [
      "Intimate dinner parties",
      "Birthday celebrations",
      "Date nights & anniversaries",
      "Themed occasions",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream">
              Our Offerings
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.2}>
              <div className="group">
                <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl tracking-wider text-cream mb-2">
                  {service.title}
                </h3>
                <p className="text-gold/70 text-sm tracking-[0.2em] uppercase mb-4">
                  {service.subtitle}
                </p>
                <p className="text-cream/50 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-cream/40 text-sm flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-gold/50 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
