"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types";

interface TimelineCardProps {
  event: TimelineEvent;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
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

export function TimelineCard({ event }: TimelineCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-12 md:pl-16"
    >
      <span
        aria-hidden="true"
        className="absolute left-2 top-2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-background shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:left-3"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
      </span>

      <div className="overflow-hidden rounded-medium border border-secondary/50 bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        {event.image && (
          <div className="relative aspect-[16/10] w-full bg-accent/30">
            <Image
              src={event.image}
              alt={`${event.title} — ${event.year}`}
              fill
              loading="lazy"
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-3 p-6">
          <p className="font-serif text-xl font-medium text-primary">
            {event.year}
          </p>
          <h3 className="font-serif text-2xl font-semibold leading-tight text-text">
            {event.title}
          </h3>
          <p className="text-lg leading-7 text-muted font-body">
            {event.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
