"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

interface DeliverableTagsProps {
  deliverables: string[];
  baseDelay?: number;
  staggerStep?: number;
}

export function DeliverableTags({
  deliverables,
  baseDelay = 80,
  staggerStep = 90,
}: DeliverableTagsProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
      <p className="text-xs uppercase tracking-widest text-silver">
        Deliverables
      </p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {deliverables.map((deliverable, index) => (
          <li
            key={deliverable}
            className={`reveal rounded-button border border-white/20 px-4 py-2 text-sm text-silver-light ${
              isVisible ? "is-visible" : ""
            }`}
            style={{
              transitionDelay: isVisible
                ? `${baseDelay + index * staggerStep}ms`
                : "0ms",
            }}
          >
            {deliverable}
          </li>
        ))}
      </ul>
    </div>
  );
}
