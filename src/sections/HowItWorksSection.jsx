import { GlassGrid, GlassPanel, SectionHeading, Container } from "../components/GlassLayout";
import { workflowSteps } from "../content/marketing";

export function HowItWorksSection() {
  return (
    <Container>
      <SectionHeading eyebrow="How it works" title="Built like a premium growth system.">
        Strategy, implementation, and optimization are combined into one high-touch chatbot
        deployment process.
      </SectionHeading>
      <GlassGrid className="mt-12">
        {workflowSteps.map((item, index) => (
          <GlassPanel key={item.title} className="p-6" hover>
            <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] font-display text-lg font-bold text-electric-amber backdrop-blur-xl">
              0{index + 1}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-[-0.055em] text-white">
              {item.title}
            </h3>
            <p className="mt-4 leading-7 text-graphite-200/72">{item.copy}</p>
          </GlassPanel>
        ))}
      </GlassGrid>
    </Container>
  );
}
