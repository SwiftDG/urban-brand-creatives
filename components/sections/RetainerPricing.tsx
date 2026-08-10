import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const included = [
  "A dedicated strategy and creative team",
  "Monthly deliverables scoped to your goals",
  "Priority turnaround on requests",
  "Quarterly strategy reviews to keep direction sharp",
];

export function RetainerPricing() {
  return (
    <section className="py-section-gap">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="headline" className="md:col-span-6">
            <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
              How We Price
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Retainer-based partnerships, scoped to you.
            </h2>
            <p className="mt-6 max-w-lg text-base text-black/70">
              Most clients work with us on a monthly retainer. It gives
              continuous access to strategy, creative, and execution instead
              of one-off project delivery. Every scope is built around your
              specific goals, so pricing flexes with the disciplines and
              intensity of work you need.
            </p>
          </Reveal>

          <Reveal className="md:col-span-6" delay={100}>
            <div className="rounded-card border border-silver-light bg-white p-10">
              <p className="text-xs uppercase tracking-widest text-silver">
                Starting At
              </p>
              <p className="mt-3 font-display text-5xl">
                $1,500
                <span className="text-lg font-sans text-black/60"> /month+</span>
              </p>
              <p className="mt-2 text-sm text-black/60">
                Custom-scoped based on disciplines and monthly capacity.
              </p>

              <ul className="mt-8 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-red" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary" className="mt-10 w-full">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
