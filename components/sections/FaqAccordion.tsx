"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    question: "What's the minimum contract length?",
    answer:
      "Retainer partnerships start with a minimum three-month commitment. This gives us enough runway to deliver meaningful strategic work instead of surface-level output.",
  },
  {
    question: "Can we change tiers mid-contract?",
    answer:
      "Yes. As your needs shift, we can scope up or down at the start of any monthly cycle. We'll walk through what changes and what stays the same before anything is adjusted.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer:
      "Yes. We're headquartered in Lagos, but we work with clients across the continent and internationally. Remote collaboration is built into how every engagement runs.",
  },
  {
    question: "Can we start with a single project before committing to a retainer?",
    answer:
      "Yes. Many clients start with a scoped project, whether that's a rebrand, a launch campaign, or a research sprint, before moving into an ongoing retainer relationship.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-off-white py-section-gap">
      <Container>
        <Reveal variant="headline">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
              Questions
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Frequently asked questions.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-silver-light border-t border-b border-silver-light">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl sm:text-2xl transition-colors group-hover:text-orange-red">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-2xl text-orange-red transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 max-w-2xl text-base text-black/70">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
