import { GlowOrb } from "@/components/motion/GlowOrb";
import { HeroScene } from "@/components/motion/HeroScene";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-silver-black text-white">
      <ParallaxLayer className="-top-32 -left-24" speed={0.12} size={520}>
        <GlowOrb size={520} />
      </ParallaxLayer>
      <ParallaxLayer
        className="top-1/3 right-0 translate-x-1/3"
        speed={0.2}
        size={420}
      >
        <GlowOrb size={420} />
      </ParallaxLayer>
      <HeroScene className="inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2" />

      <Container className="relative py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="font-accent italic text-lg text-silver-light">
            Pan-African Brand Strategy
          </p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
            Building brands Africa believes in.
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg text-silver-light">
            Urban Brand Creatives partners with ambitious companies and
            leaders across the continent to build brand strategy, identity,
            and communications that earn trust and drive growth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/work" variant="ghost">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
