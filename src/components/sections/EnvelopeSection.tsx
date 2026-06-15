"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui";
import { weddingConfig } from "@/config/wedding";
import { messages } from "@/content/messages";
import { registerAnalyticsEvent } from "@/lib/utils";

interface EnvelopeSectionProps {
  onOpen?: () => void;
}

const flapVariants = {
  closed: {
    rotateX: 0,
    y: 0,
  },
  open: {
    rotateX: -150,
    y: -42,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function EnvelopeSection({ onOpen }: EnvelopeSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) {
      return;
    }

    setIsOpen(true);
    onOpen?.();
    registerAnalyticsEvent("envelope_opened");
  };

  return (
    <section
      id="envelope"
      className="w-full min-h-screen flex items-center justify-center bg-background py-20"
    >
      <div className="w-full px-4">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-muted font-sans">
              {messages.envelope.title}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-text">
              {weddingConfig.brideName} & {weddingConfig.groomName}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted font-body leading-8">
              {messages.invitation.greeting}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-2xl" style={{ perspective: 1400 }}>
            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={flapVariants}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className="absolute inset-x-0 top-0 h-[44%] rounded-[2.5rem] bg-surface border border-secondary shadow-2xl shadow-[#a78b6d30] origin-top-center"
            >
              {!isOpen && (
                <div className="absolute left-8 top-8 rounded-full border border-muted/40 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted shadow-sm">
                  selo
                </div>
              )}
              <div className="absolute inset-x-10 bottom-8 rounded-3xl border border-secondary/70 bg-background p-4">
                <div className="h-2 w-24 rounded-full bg-muted/20" />
                <div className="mt-4 h-3 w-32 rounded-full bg-muted/15" />
              </div>
            </motion.div>

            <div className="relative pt-[42%]">
              <div className="rounded-[2.25rem] border border-secondary bg-background p-8 shadow-[0_40px_90px_-40px_rgba(78,68,61,0.24)] min-h-[320px]">
                <div className="space-y-8">
                  <div className="rounded-[1.75rem] border border-dashed border-secondary/60 bg-surface p-8">
                    <div className="space-y-4">
                      <div className="h-10 w-2/5 rounded-full bg-muted/15" />
                      <div className="h-4 w-full rounded-full bg-muted/10" />
                      <div className="h-4 w-11/12 rounded-full bg-muted/10" />
                      <div className="h-4 w-4/5 rounded-full bg-muted/10" />
                    </div>
                  </div>

                  <motion.div
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    variants={contentVariants}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="space-y-6 rounded-[1.75rem] border border-secondary bg-surface p-8"
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-muted font-sans">
                      Convite Aberto
                    </p>
                    <h2 className="font-serif text-3xl font-semibold text-text">
                      Um dia para celebrar o nosso amor
                    </h2>
                    <p className="text-base text-muted font-body leading-7">
                      {messages.invitation.mainMessage}
                    </p>
                  </motion.div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
                  {!isOpen ? (
                    <Button
                      onClick={handleOpen}
                      size="lg"
                      variant="primary"
                      aria-label="Abrir convite"
                    >
                      {messages.envelope.cta}
                    </Button>
                  ) : (
                    <a
                      href="#invitation"
                      className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:opacity-90"
                    >
                      Conheça Nossa História
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
