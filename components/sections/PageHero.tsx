import type { ReactNode } from "react";
import { GlowOrb } from "@/components/motion/GlowOrb";
import { HeroScene } from "@/components/motion/HeroScene";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-silver-black text-white">
      <ParallaxLayer className="-top-24 -left-24" speed={0.12} size={420}>
        <GlowOrb size={420} />
      </ParallaxLayer>
      <ParallaxLayer
        className="bottom-0 right-0 translate-x-1/3 translate-y-1/3"
        speed={0.2}
        size={360}
      >
        <GlowOrb size={360} />
      </ParallaxLayer>
      <HeroScene className="inset-y-0 right-0 w-full md:w-1/2" />

      <Container className="relative py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-accent italic text-lg text-silver-light">{eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08]">
            {title}
          </h1>
          {description && (
            <p className="mt-8 max-w-xl text-base sm:text-lg text-silver-light">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
