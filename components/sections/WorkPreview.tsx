import Link from "next/link";
import { caseStudies } from "@/lib/data/caseStudies";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function WorkPreview() {
  const [featured, ...rest] = caseStudies;

  return (
    <section className="py-section-gap bg-off-white">
      <Container>
        <Reveal variant="headline">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
                Selected Work
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Case studies from across the continent.
              </h2>
            </div>
            <Button href="/work" variant="secondary">
              View All Work
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featured && (
            <Reveal variant="media" className="lg:col-span-7">
              <Link href={`/work/${featured.slug}`} className="group block">
                <div className="aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden bg-purple-wash">
                  <div className="h-full w-full bg-purple-wash transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-silver">
                  {featured.projectType} &middot; {featured.year}
                </p>
                <h3 className="mt-2 font-display text-3xl group-hover:text-orange-red transition-colors">
                  {featured.client}
                </h3>
                <p className="mt-2 max-w-md text-sm text-black/70">
                  {featured.summary}
                </p>
              </Link>
            </Reveal>
          )}

          <div className="lg:col-span-5 flex flex-col gap-8">
            {rest.map((study, index) => (
              <Reveal variant="media" key={study.slug} delay={index * 80}>
                <Link href={`/work/${study.slug}`} className="group flex gap-5">
                  <div className="aspect-square w-28 shrink-0 overflow-hidden bg-purple-wash sm:w-36">
                    <div className="h-full w-full bg-purple-wash transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-silver">
                      {study.projectType} &middot; {study.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl group-hover:text-orange-red transition-colors">
                      {study.client}
                    </h3>
                    <p className="mt-2 text-sm text-black/70">{study.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
