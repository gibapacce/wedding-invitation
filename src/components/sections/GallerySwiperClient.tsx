"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import type { GalleryImage } from "@/types";

interface GallerySwiperClientProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GallerySwiperClient({
  images,
  onImageClick,
}: GallerySwiperClientProps) {
  return (
    <div className="gallery-swiper-wrapper relative -mx-6">
      <Swiper
        modules={[A11y, Pagination]}
        slidesPerView={1.15}
        spaceBetween={16}
        centeredSlides
        grabCursor
        loop={images.length > 2}
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        breakpoints={{
          375: { slidesPerView: 1.25, spaceBetween: 16 },
          430: { slidesPerView: 1.35, spaceBetween: 20 },
          768: { slidesPerView: 2.1, spaceBetween: 24 },
        }}
        className="!overflow-visible pb-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className="!overflow-hidden rounded-large">
            <motion.div
              className="group relative cursor-pointer"
              style={{ height: "400px" }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => onImageClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar foto: ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onImageClick(index);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 85vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-text/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm">
                  <ZoomIn
                    size={20}
                    strokeWidth={1.5}
                    className="text-background"
                  />
                </div>
              </div>

              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-text/70 to-transparent px-4 py-4 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0">
                  <p className="text-center font-body text-sm text-background">
                    {image.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
