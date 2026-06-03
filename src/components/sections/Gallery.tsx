"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GALLERY_IMAGES } from "@/lib/constants";
import { XIcon } from "@/components/icons";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        if (next < 0) return GALLERY_IMAGES.length - 1;
        if (next >= GALLERY_IMAGES.length) return 0;
        return next;
      });
    },
    []
  );

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
      <section id="gallery" className="py-28 md:py-36 bg-midnight">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-cream">
                Our Creations
              </h2>
              <p className="text-cream/40 mt-4 tracking-wider text-sm uppercase">
                Every board tells a story
              </p>
            </div>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((image, i) => (
              <AnimatedSection key={image.src} delay={i * 0.08}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full break-inside-avoid group relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/20 transition-colors duration-500" />
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500" />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
