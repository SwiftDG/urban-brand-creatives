import type { CaseStudy } from "@/lib/data/caseStudies";
import { services } from "@/lib/data/services";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

interface CaseStudyBodyProps {
  study: CaseStudy;
}

/**
 * Splits off the first sentence as a pull-quote-style hook. Case studies
 * with a single-sentence challenge (no internal sentence break) end up with
 * just the hook and no separate body line, which is fine: it keeps each
 * case study's pacing driven by its own content rather than forcing every
 * one into an identical two-part shape.
 */
function splitHook(text: string): { hook: string; rest: string } {
  const match = text.match(/^(.*?[.!?])\s+([\s\S]*)$/);
  if (!match) return { hook: text, rest: "" };
  return { hook: match[1], rest: match[2] };
}

export function CaseStudyBody({ study }: CaseStudyBodyProps) {
  const relatedServices = services.filter((service) =>
    study.services.includes(service.slug)
  );
  const { hook, rest } = splitHook(study.challenge);

  return (
    <>
      <section className="py-section-gap">
        <Container>
          <Reveal variant="media">
            <div className="aspect-[16/9] w-full bg-purple-wash" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-silver">
                Client
              </p>
              <p className="mt-2 font-display text-xl">{study.client}</p>

              <p className="mt-8 text-xs uppercase tracking-widest text-silver">
                Project Type
              </p>
              <p className="mt-2 text-base">{study.projectType}</p>

              <p className="mt-8 text-xs uppercase tracking-widest text-silver">
                Year
              </p>
              <p className="mt-2 text-base">{study.year}</p>

              {relatedServices.length > 0 && (
                <>
                  <p className="mt-8 text-xs uppercase tracking-widest text-silver">
                    Services
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {relatedServices.map((service) => (
                      <li
                        key={service.slug}
                        className="rounded-button border border-silver-light px-3 py-1.5 text-xs text-black/70"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="md:col-span-8 space-y-14">
              {/* The Challenge: opens with an italic hook line, the way the
                  problem would actually be framed in conversation, then the
                  supporting detail (when there is any) in standard body copy. */}
              <Reveal variant="headline">
                <h2 className="font-display text-2xl sm:text-3xl">
                  The Challenge
                </h2>
                <p className="mt-4 font-accent italic text-2xl leading-snug text-purple-deep">
                  {hook}
                </p>
                {rest && (
                  <p className="mt-4 max-w-xl text-base text-black/70">
                    {rest}
                  </p>
                )}
              </Reveal>

              {/* Our Approach: the methodical middle, standard body weight. */}
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl">
                  Our Approach
                </h2>
                <p className="mt-4 max-w-xl text-base text-black/70">
                  {study.approach}
                </p>
              </Reveal>

              {/* The Outcome: leads with the number, since that's the part
                  that actually lands, then the paragraph fills in the rest. */}
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl">
                  The Outcome
                </h2>
                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="shrink-0 sm:w-40">
                    <p className="font-display text-5xl text-orange-red">
                      {study.keyResult.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-silver">
                      {study.keyResult.label}
                    </p>
                  </div>
                  <p className="max-w-xl text-base text-black/70">
                    {study.outcome}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {study.gallery.length > 0 && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {study.gallery.map((image, index) => (
                <Reveal variant="media" key={image.src} delay={index * 80}>
                  <div className="aspect-[4/3] w-full bg-purple-wash" />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-black py-section-gap text-white">
        <Container>
          <Reveal variant="headline">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-display text-4xl sm:text-5xl">
                Ready to build a brand that travels?
              </h2>
              <div className="flex gap-4">
                <Button href="/work" variant="ghost">
                  Back to Work
                </Button>
                <Button href="/contact" variant="primary">
                  Start a Project
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
