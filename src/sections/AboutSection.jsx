import { Container, GlassPanel, SectionHeading } from "../components/GlassLayout";

const stats = [
  { value: "24/7", label: "customer response coverage" },
  { value: "2", label: "Arabic and English language tracks" },
  { value: "100%", label: "business-specific training approach" },
];

export function AboutSection() {
  return (
    <Container>
      <SectionHeading eyebrow="About" title="Designed for high-trust digital conversations.">
        BizBot helps UAE companies present a refined AI experience while improving speed,
        qualification, and operational consistency.
      </SectionHeading>

      <GlassPanel className="mt-12 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <h3 className="font-display text-3xl font-bold tracking-[-0.06em] text-white">
            We build AI concierges that understand the way your business sells.
          </h3>
          <p className="mt-5 leading-8 text-graphite-200/76">
            The BizBot migration brings strategy, chatbot UX, business data training, and
            automation handoff design into a single premium website experience for UAE operators.
          </p>
        </div>
        <div className="grid gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
            >
              <p className="font-display text-4xl font-bold tracking-[-0.07em] text-electric-amber">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </Container>
  );
}
