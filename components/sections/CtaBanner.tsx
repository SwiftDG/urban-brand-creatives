import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBanner() {
  return (
    <section className="bg-black py-section-gap text-white">
      <Container>
        <Reveal variant="headline">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-5xl sm:text-6xl">
              Ready to build a brand that travels?
            </h2>
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
