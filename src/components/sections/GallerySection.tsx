"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Container, SectionTitle } from "@/components/ui";
import { useAnalyticsOnView } from "@/hooks/useAnalyticsOnView";
import type { GalleryImage } from "@/types";

const GallerySwiper = dynamic(() => import("./GallerySwiperClient"), {
  ssr: false,
  loading: () => <GallerySkeleton />,
});

function GallerySkeleton() {
  return (
    <div className="relative w-full overflow-hidden rounded-large">
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="min-w-[280px] h-[380px] rounded-large bg-surface animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-text/90 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Foto ${currentIndex + 1} de ${images.length}: ${current.alt}`}
      >
        <button
          onClick={onClose}
          aria-label="Fechar galeria"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Foto anterior"
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Próxima foto"
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative mx-6 max-h-[80vh] max-w-[90vw] overflow-hidden rounded-large shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={900}
            height={600}
            className="max-h-[80vh] w-auto object-contain"
            priority
            sizes="90vw"
          />

          {current.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-text/60 px-6 py-3 backdrop-blur-sm">
              <p className="text-center font-body text-base text-background">
                {current.caption}
              </p>
            </div>
          )}
        </motion.div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-background/40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

interface GallerySectionProps {
  images: GalleryImage[];
  title: string;
  subtitle?: string;
}

export function GallerySection({
  images,
  title,
  subtitle,
}: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const viewRef = useAnalyticsOnView("gallery_viewed");

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );
  }, [images.length]);

  return (
    <>
      <section id="gallery" className="w-full py-20">
        <Container size="md">
          <div ref={viewRef}>
            <SectionTitle level="h2" subtitle={subtitle}>
              {title}
            </SectionTitle>
          </div>

          <div className="mt-12">
            <GallerySwiper images={images} onImageClick={openLightbox} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-center font-sans text-sm text-muted"
          >
            Deslize para ver mais fotos · Toque para ampliar
          </motion.p>
        </Container>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
}
