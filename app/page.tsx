import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WorkPreview />
      <TestimonialQuote />
      <CtaBanner />
    </>
  );
}
