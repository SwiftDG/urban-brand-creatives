import { GlowOrb } from "@/components/motion/GlowOrb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CommunityCta() {
  return (
    <section className="relative overflow-hidden bg-silver-black py-section-gap text-white">
      <GlowOrb className="top-0 left-1/2 -translate-x-1/2 opacity-40" size={560} />

      <Container className="relative">
        <Reveal variant="headline">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-accent italic text-lg text-silver-light">
              Join the Movement
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Become part of the Pan-African brand community.
            </h2>
            <p className="mt-6 text-base text-silver-light">
              A growing network of founders, marketers, and creatives
              building brands across the continent. Get insight, invites,
              and early access to our thinking.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="primary">
                Get Involved
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
