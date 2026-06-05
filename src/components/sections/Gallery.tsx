"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { XIcon } from "@/components/icons";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Drive horizontal scroll from vertical scroll position
  const x = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "-60%"]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const navigate = useCallback((dir: 1 | -1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return GALLERY_IMAGES.length - 1;
      if (next >= GALLERY_IMAGES.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, navigate]);

  return (
    <>
      <section id="gallery" ref={containerRef} className="relative bg-midnight py-20">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-gold/40 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream">
              Our Creations
            </h2>
            <p className="text-cream/40 mt-3 tracking-wider text-sm uppercase">
              Drag or scroll to explore
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll strip */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-6 pl-6 lg:pl-20 pr-[30vw] cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            dragElastic={0.1}
          >
            {GALLERY_IMAGES.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex-shrink-0 group relative"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative overflow-hidden cursor-pointer"
                  style={{
                    width: image.width > image.height ? "min(550px, 70vw)" : "min(380px, 60vw)",
                    height: "min(500px, 65vh)",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="550px"
                  />
                  {/* Hover overlay with gold border */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/10 transition-colors duration-500" />

                  {/* Image number */}
                  <div className="absolute bottom-4 right-4 text-cream/0 group-hover:text-cream/40 transition-colors duration-500 text-xs tracking-[0.3em] font-light">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-6 lg:w-20 bg-gradient-to-r from-midnight to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-midnight to-transparent pointer-events-none z-10" />
        </div>

        {/* Progress line */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
          <div className="relative h-px bg-cream/10 max-w-xs">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-y-0 left-0 right-0 bg-gold/50 origin-left"
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-midnight/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/50 hover:text-gold transition-colors z-10"
              aria-label="Close lightbox"
            >
              <XIcon className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-cream/40 hover:text-gold transition-colors text-4xl z-10"
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-cream/40 hover:text-gold transition-colors text-4xl z-10"
              aria-label="Next image"
            >
              &#8250;
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                width={GALLERY_IMAGES[lightboxIndex].width}
                height={GALLERY_IMAGES[lightboxIndex].height}
                className="max-h-[85vh] w-auto h-auto object-contain mx-auto"
                sizes="90vw"
                quality={95}
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/30 text-sm tracking-widest">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
