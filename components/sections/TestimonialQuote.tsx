import { GlowOrb } from "@/components/motion/GlowOrb";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function TestimonialQuote() {
  return (
    <section className="relative overflow-hidden bg-purple-wash py-section-gap">
      <GlowOrb className="top-0 left-1/2 -translate-x-1/2 opacity-30" size={600} />

      <Container className="relative">
        <Reveal variant="headline">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-accent italic text-3xl sm:text-4xl leading-relaxed text-purple-dark">
              &ldquo;Urban Brand Creatives didn&apos;t just redesign our
              identity. They helped us understand who we are as a company,
              and gave us the language to say it.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-purple-deep">
              Placeholder Client Name, Chief Executive Officer
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
