"use client";

import { useEffect, useRef } from "react";
import { registerAnalyticsEvent } from "@/lib/utils";

export function useAnalyticsOnView<T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  threshold = 0.3
) {
  const ref = useRef<T>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasFired.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          registerAnalyticsEvent(eventName);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [eventName, threshold]);

  return ref;
}
