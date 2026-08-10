import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { Container } from "@/components/layout/Container";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Urban Brand Creatives in brand strategy, identity, and campaigns for clients across the continent.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Case studies from across the continent."
        description="A look at the strategy, identity, and campaign work we've built with clients across markets and sectors."
      />
      <section className="py-section-gap">
        <Container>
          <WorkGrid caseStudies={caseStudies} />
        </Container>
      </section>
    </>
  );
}
