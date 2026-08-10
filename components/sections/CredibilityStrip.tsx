import { CountUpStat } from "@/components/motion/CountUpStat";
import { Container } from "@/components/layout/Container";

const stats = [
  { value: 6, suffix: "+", label: "Years" },
  { value: 25, suffix: "+", label: "Projects" },
  { value: 3, suffix: "", label: "African Markets" },
];

export function CredibilityStrip() {
  return (
    <section className="bg-silver-black py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <CountUpStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
