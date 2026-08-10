"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  /** Fraction of page scroll speed this layer moves at. Small values (0.1-0.3) read as background depth. */
  speed?: number;
  /**
   * Must include absolute positioning offsets (e.g. "-top-32 -left-24").
   * Any Tailwind translate utilities here (translate-x, translate-y) are
   * preserved and composed with the scroll-driven offset, not overwritten.
   */
  className?: string;
  /**
   * Explicit box size in px, matching the child's size. Required whenever
   * className uses a percentage-based translate utility (translate-x-1/3,
   * etc.): the child (e.g. GlowOrb) is itself absolutely positioned, so it
   * doesn't contribute to this wrapper's size, and without an explicit size
   * the wrapper collapses to 0x0, making percentage translates resolve to 0.
   */
  size?: number;
}

export function ParallaxLayer({
  children,
  speed = 0.15,
  className = "",
  size,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let frameId = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const offset = window.scrollY * speed;
      // Chain the parallax offset as its own translateY() rather than
      // setting `transform` outright, so any Tailwind translate-x/y utility
      // already on this element (which also writes to `transform`) keeps
      // its effect instead of being overwritten.
      node.style.transform = `translate(var(--tw-translate-x, 0px), var(--tw-translate-y, 0px)) translateY(${offset}px)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frameId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`absolute ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      {children}
    </div>
  );
}
