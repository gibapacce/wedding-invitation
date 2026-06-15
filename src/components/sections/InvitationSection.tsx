"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { formatDate } from "@/lib/utils";

interface InvitationSectionProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  message: string;
  heroImage?: string;
  dateLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export function InvitationSection({
  brideName,
  groomName,
  weddingDate,
  message,
  heroImage,
  dateLabel = "Save the Date",
  ctaLabel = "Conheça Nossa História",
  ctaHref = "#timeline",
}: InvitationSectionProps) {
  return (
    <section
      id="invitation"
      className="w-full bg-background py-20"
    >
      <Container size="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-12 text-center"
        >
          {heroImage ? (
            <motion.div
              variants={imageVariants}
              className="relative w-full max-w-md overflow-hidden rounded-large shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={heroImage}
                alt={`Foto de ${brideName} e ${groomName}`}
                width={960}
                height={1200}
                priority
                sizes="(max-width: 480px) 100vw, 480px"
                className="h-auto w-full object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              variants={imageVariants}
              aria-hidden="true"
              className="flex aspect-[4/5] w-full max-w-md items-center justify-center rounded-large border border-secondary/60 bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="font-serif text-2xl text-muted">
                {brideName[0]}
                {" & "}
                {groomName[0]}
              </span>
            </motion.div>
          )}

          <div className="space-y-8">
            <motion.p
              variants={fadeUpVariants}
              className="text-sm uppercase tracking-[0.35em] text-muted font-sans"
            >
              {dateLabel}
            </motion.p>

            <motion.h2
              variants={fadeUpVariants}
              className="font-serif text-4xl font-semibold leading-tight text-text sm:text-5xl"
            >
              {brideName}
              <span className="mx-3 text-primary">&</span>
              {groomName}
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="font-serif text-xl font-medium text-primary"
            >
              {formatDate(weddingDate)}
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="mx-auto max-w-prose text-lg leading-8 text-muted font-body"
            >
              {message}
            </motion.p>

            <motion.div variants={fadeUpVariants}>
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-text font-sans shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={ctaLabel}
              >
                {ctaLabel}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
