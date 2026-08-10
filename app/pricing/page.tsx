import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { RetainerPricing } from "@/components/sections/RetainerPricing";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Retainer-based brand strategy partnerships from Urban Brand Creatives, starting at $1,500/month.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Partnership, not project work."
        description="We work primarily on monthly retainers, scoped to the disciplines and intensity your brand needs right now, and built to flex as those needs change."
      />
      <RetainerPricing />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
