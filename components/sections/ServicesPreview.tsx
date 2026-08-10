import Link from "next/link";
import { services } from "@/lib/data/services";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesPreview() {
  return (
    <section className="py-section-gap">
      <Container>
        <Reveal variant="headline">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-orange-red font-medium">
              What We Do
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Seven disciplines. One brand vision.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <Reveal
                key={service.slug}
                delay={index * 60}
                className={isFeatured ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <Link
                  href="/services"
                  className={`group block h-full rounded-card border border-silver-light bg-white transition-colors hover:border-orange-red ${
                    isFeatured ? "p-10" : "p-8"
                  }`}
                >
                  <span className="text-xs font-medium text-silver">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-4 font-display ${
                      isFeatured ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`mt-3 text-black/70 ${
                      isFeatured ? "text-base max-w-md" : "text-sm"
                    }`}
                  >
                    {service.description}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-orange-red opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
