import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven disciplines, from brand strategy and research to executive branding, experiential, identity, PR, and content, all from Urban Brand Creatives.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Seven disciplines. One brand vision."
        description="From strategic foundation to on-the-ground execution, we cover every discipline a growing brand needs under one roof, built for African markets and global ambition."
      />
      {services.map((service, index) => (
        <ServiceSection key={service.slug} service={service} index={index} />
      ))}
      <CtaBanner />
    </>
  );
}
