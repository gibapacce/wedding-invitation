"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { TimelineCard } from "@/components/sections/TimelineCard";
import { useAnalyticsOnView } from "@/hooks/useAnalyticsOnView";
import type { TimelineEvent } from "@/types";

interface TimelineSectionProps {
  events: TimelineEvent[];
  title: string;
  subtitle?: string;
}

export function TimelineSection({
  events,
  title,
  subtitle,
}: TimelineSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewRef = useAnalyticsOnView("timeline_viewed");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="w-full bg-surface py-20"
    >
      <Container size="md">
        <div ref={viewRef}>
          <SectionTitle level="h2" subtitle={subtitle}>
            {title}
          </SectionTitle>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-2 top-0 h-full w-px bg-secondary/40 md:left-3" />
          <motion.div
            style={{ scaleY: progress }}
            aria-hidden="true"
            className="absolute left-2 top-0 h-full w-px origin-top bg-primary md:left-3"
          />

          <div className="space-y-12">
            {events.map((event) => (
              <TimelineCard
                key={`${event.year}-${event.title}`}
                event={event}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
