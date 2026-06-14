import { Container, GlassPanel, SectionHeading } from "../components/GlassLayout";
import { features } from "../content/marketing";

export function FeatureGridSection() {
  return (
    <Container>
      <SectionHeading eyebrow="Core intelligence" title="Your chatbot should feel trained, not templated.">
        BizBot uses your real business context to deliver accurate replies, qualified leads, and
        bilingual customer support.
      </SectionHeading>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {features.map((feature, index) => (
          <GlassPanel
            key={feature.title}
            className="group min-h-[29rem] p-6 sm:p-7"
            hover
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full border border-electric-orange/25 bg-electric-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-electric-amber">
                  {feature.eyebrow}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] font-display text-lg font-bold text-white/80 backdrop-blur-xl transition group-hover:border-electric-orange/40 group-hover:text-electric-amber">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold tracking-[-0.06em] text-white">
                {feature.title}
              </h3>
              <p className="mt-5 leading-7 text-graphite-200/74">{feature.description}</p>

              <ul className="mt-auto space-y-3 pt-8">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm text-white/72">
                    <span className="h-2 w-2 rounded-full bg-electric-orange shadow-[0_0_18px_rgba(255,106,0,0.8)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Container>
  );
}
