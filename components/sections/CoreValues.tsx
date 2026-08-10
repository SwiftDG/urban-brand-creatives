import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const values = [
  {
    letter: "G",
    title: "Grounded in Culture",
    description:
      "Every strategy starts with the specific people and markets a brand serves, not a borrowed template.",
  },
  {
    letter: "R",
    title: "Rigorous by Default",
    description:
      "Research and evidence sit underneath every creative decision, so the work holds up under scrutiny.",
  },
  {
    letter: "O",
    title: "Original Thinking",
    description:
      "We push past the obvious positioning to find the angle that's true and ownable, not just available.",
  },
  {
    letter: "W",
    title: "Work That Travels",
    description:
      "Built to hold up from a single market launch to a pan-African, and eventually global, footprint.",
  },
  {
    letter: "+",
    title: "Partnership Over Vendorship",
    description:
      "We operate as an embedded extension of a client's team, not an outside agency delivering decks and disappearing.",
  },
];

export function CoreValues() {
  return (
    <section className="bg-black py-section-gap text-white">
      <Container>
        <Reveal variant="headline">
          <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
            Our Values
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            The GROW framework.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 60}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 items-baseline">
                <span className="letter-glow sm:col-span-1 font-display text-4xl text-orange-red">
                  {value.letter}
                </span>
                <h3 className="sm:col-span-4 font-display text-2xl">
                  {value.title}
                </h3>
                <p className="sm:col-span-7 text-sm text-silver-light">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
