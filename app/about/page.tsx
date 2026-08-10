import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { OurStory } from "@/components/sections/OurStory";
import { CoreValues } from "@/components/sections/CoreValues";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CommunityCta } from "@/components/sections/CommunityCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Urban Brand Creatives is a Pan-African brand strategy agency built on culture, rigor, and original thinking.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="The people behind the strategy."
        description="A small, Lagos-based team working with founders and executives across the continent who need their brand to hold up without us in the room."
      />
      <OurStory />
      <CoreValues />
      <TeamGrid />
      <CommunityCta />
    </>
  );
}
