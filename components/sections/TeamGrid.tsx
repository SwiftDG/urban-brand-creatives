import { teamMembers } from "@/lib/data/teamMembers";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function TeamGrid() {
  return (
    <section className="py-section-gap">
      <Container>
        <Reveal variant="headline">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
              The Team
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              The people behind the work.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal variant="media" key={member.slug} delay={index * 60}>
              <div className="aspect-[4/5] w-full bg-purple-wash" />
              <h3 className="mt-5 font-display text-xl">{member.name}</h3>
              <p className="mt-1 text-sm text-orange-red">{member.title}</p>
              <p className="mt-3 text-sm text-black/70">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
