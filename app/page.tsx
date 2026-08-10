import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServicesPreview />
      <WorkPreview />
      <TestimonialQuote />
      <CtaBanner />
    </>
  );
}
