import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function OurStory() {
  return (
    <section className="py-section-gap">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="media" className="md:col-span-5">
            <div className="aspect-[4/5] w-full bg-purple-wash" />
          </Reveal>

          <Reveal variant="headline" className="md:col-span-7" delay={80}>
            <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Started on the continent. Built for the world.
            </h2>
            <div className="mt-8 space-y-5 text-base text-black/70">
              <p>
                Urban Brand Creatives was founded on a simple conviction.
                African brands deserve strategy and craft equal to any global
                standard, without losing the cultural fluency that makes them
                resonate at home.
              </p>
              <p>
                Since then, the agency has grown into a multidisciplinary
                team working across markets, sectors, and platforms. Every
                engagement is guided by the same question: what does this
                brand mean to the people it serves?
              </p>
            </div>
            <p className="mt-8 font-accent italic text-2xl text-purple-deep">
              &ldquo;We don&apos;t import strategy. We build it here.&rdquo;
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
