"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { messages } from "@/content/messages";
import { formatDate, registerAnalyticsEvent } from "@/lib/utils";

interface EnvelopeSectionProps {
  onOpen?: () => void;
}

const clipTopFlap = "polygon(0 0, 100% 0, 50% 72%)";
const clipBottomFlap = "polygon(0 100%, 100% 100%, 50% 30%)";
const clipLeftFlap = "polygon(0 0, 0 100%, 50% 50%)";
const clipRightFlap = "polygon(100% 0, 100% 100%, 50% 50%)";

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
      className="w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 py-20"
    >
      <div className="mx-auto w-full max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-2"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-muted font-sans">
            {messages.envelope.title}
          </p>
          <h1 className="font-serif text-4xl font-semibold text-text sm:text-5xl">
            {weddingConfig.brideName} & {weddingConfig.groomName}
          </h1>
        </motion.div>

        <div
          className="relative mx-auto mt-12 w-full"
          style={{ perspective: 1400 }}
        >
          <div className="relative mx-auto aspect-[7/5] w-full drop-shadow-[0_18px_40px_rgba(78,68,61,0.18)]">
            {/* Carta */}
            <motion.div
              initial={false}
              animate={
                isOpen
                  ? { y: "-62%", opacity: 1 }
                  : { y: "0%", opacity: 1 }
              }
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: isOpen ? 0.4 : 0,
              }}
              style={{ zIndex: isOpen ? 40 : 1 }}
              className="absolute inset-x-[10%] top-[6%] rounded-small border border-secondary/50 bg-background px-5 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            >
              <div className="space-y-3 text-center">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted font-sans">
                  {messages.invitation.dateLabel}
                </p>
                <p className="font-serif text-xl font-semibold text-text">
                  {weddingConfig.brideName}
                  <span className="mx-2 text-primary">&</span>
                  {weddingConfig.groomName}
                </p>
                <p className="font-serif text-sm font-medium text-primary">
                  {formatDate(weddingConfig.weddingDate)}
                </p>
              </div>
            </motion.div>

            {/* Corpo do envelope */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-medium bg-primary"
            />

            {/* Abas laterais */}
            <div
              aria-hidden="true"
              style={{ clipPath: clipLeftFlap, zIndex: 20 }}
              className="absolute inset-0 rounded-l-medium bg-accent"
            />
            <div
              aria-hidden="true"
              style={{ clipPath: clipRightFlap, zIndex: 20 }}
              className="absolute inset-0 rounded-r-medium bg-accent"
            />

            {/* Aba inferior (bolso frontal) */}
            <div
              aria-hidden="true"
              style={{ clipPath: clipBottomFlap, zIndex: 25 }}
              className="absolute inset-0 rounded-b-medium bg-[#cbb39d]"
            />

            {/* Aba superior (abre) */}
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={{ rotateX: isOpen ? -180 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{
                clipPath: clipTopFlap,
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: isOpen ? 5 : 30,
              }}
              className="absolute inset-0 rounded-t-medium bg-[#d0b8a2]"
            />

            {/* Selo */}
            <AnimatePresence>
              {!isOpen && (
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  aria-label={messages.envelope.cta}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  style={{ zIndex: 35 }}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Image
                    src="/images/selo_carta.png"
                    alt="Selo do convite"
                    width={80}
                    height={80}
                    priority
                    className="h-16 w-16 object-contain"
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex min-h-[64px] items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-muted font-body"
              >
                Toque no selo para abrir o convite
              </motion.p>
            ) : (
              <motion.a
                key="cta"
                href="#invitation"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-text font-sans shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {messages.invitation.cta}
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
