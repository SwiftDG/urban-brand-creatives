import type { Service } from "@/lib/data/services";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { DeliverableTags } from "@/components/sections/DeliverableTags";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-black" : "bg-silver-black";

  return (
    <section id={service.slug} className={`${bgClass} py-section-gap text-white`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <Reveal
            className={`md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <span className="font-display text-2xl text-orange-red">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              {service.name}
            </h2>
            <p className="mt-6 max-w-xl text-base text-silver-light">
              {service.description}
            </p>
          </Reveal>

          <div className={`md:col-span-5 ${isEven ? "md:order-2" : "md:order-1"}`}>
            <DeliverableTags deliverables={service.deliverables} />
          </div>
        </div>
      </Container>
    </section>
  );
}
