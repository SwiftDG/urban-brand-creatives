"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function CountUpStat({
  value,
  suffix = "",
  label,
  duration = 1400,
}: CountUpStatProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId: number;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
      <p className="font-display text-5xl sm:text-6xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-widest text-silver-light">
        {label}
      </p>
    </div>
  );
}
