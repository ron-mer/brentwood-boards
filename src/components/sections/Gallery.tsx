"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { XIcon } from "@/components/icons";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
      <section id="gallery" className="bg-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-gold-muted mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wide"
          >
            Our Creations
          </motion.h2>
        </div>

        {/* Staggered editorial grid */}
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((image, i) => {
              // Alternate between wide and narrow placements
              const patterns = [
                "col-span-12 md:col-span-7",        // wide left
                "col-span-12 md:col-span-5",         // narrow right
                "col-span-12 md:col-span-5",         // narrow left
                "col-span-12 md:col-span-7",         // wide right
                "col-span-12 md:col-span-8",         // extra wide left
                "col-span-12 md:col-span-4",         // small right
                "col-span-12 md:col-span-6",         // half
                "col-span-12 md:col-span-6",         // half
              ];

              return (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
                  className={patterns[i % patterns.length]}
                >
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="block w-full group relative overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/10 transition-colors duration-500" />
                    </div>
                  </button>
                </motion.div>
              );
            })}
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-chocolate/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-ivory/30 hover:text-gold transition-colors z-10" aria-label="Close">
              <XIcon className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-6 md:left-12 text-ivory/20 hover:text-gold transition-colors text-3xl z-10" aria-label="Previous">&#8249;</button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-6 md:right-12 text-ivory/20 hover:text-gold transition-colors text-3xl z-10" aria-label="Next">&#8250;</button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl max-h-[85vh] mx-8"
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/20 text-[11px] tracking-[0.3em]">
              {lightboxIndex + 1} &mdash; {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
