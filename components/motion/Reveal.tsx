"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

type RevealVariant = "default" | "headline" | "media";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * Controls reveal weight so different element types don't all animate
   * identically: "headline" travels further and settles slower, "media"
   * pairs a rise with a soft scale-in, "default" is quick and understated.
   */
  variant?: RevealVariant;
}

const variantClass: Record<RevealVariant, string> = {
  default: "reveal",
  headline: "reveal-headline",
  media: "reveal-media",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
