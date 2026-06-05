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
      <section id="gallery" className="py-32 md:py-48 bg-cream">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.3em] uppercase text-muted mb-16"
          >
            Selected Work
          </motion.p>

          {/* Two-column art gallery grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {GALLERY_IMAGES.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.15 }}
                className={i % 3 === 0 ? "md:col-span-2" : ""}
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full group relative overflow-hidden cursor-pointer"
                >
                  <div className={`relative ${i % 3 === 0 ? "aspect-[2.2/1]" : "aspect-[4/5]"} overflow-hidden`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes={i % 3 === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </div>
                </button>
              </motion.div>
            ))}
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
            className="fixed inset-0 z-[70] bg-warm/98 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-espresso/30 hover:text-espresso transition-colors z-10"
              aria-label="Close"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-6 md:left-12 text-espresso/20 hover:text-espresso transition-colors text-3xl z-10"
              aria-label="Previous"
            >
              &#8249;
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-6 md:right-12 text-espresso/20 hover:text-espresso transition-colors text-3xl z-10"
              aria-label="Next"
            >
              &#8250;
            </button>

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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-espresso/20 text-[11px] tracking-[0.3em]">
              {lightboxIndex + 1} &mdash; {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
