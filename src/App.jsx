import { Button } from "./components/Button";
import {
  CanvasShell,
  GlassGrid,
  GlassPanel,
  GlassSection,
  SectionHeading,
} from "./components/GlassLayout";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

const workflow = [
  {
    title: "Map the customer journey",
    copy: "We model your highest-value UAE customer conversations across WhatsApp, web, and CRM touchpoints.",
  },
  {
    title: "Train the BizBot brain",
    copy: "Your chatbot learns offers, objections, handoff rules, and brand tone before launch.",
  },
  {
    title: "Optimize every week",
    copy: "We review conversations, improve intent routing, and surface revenue automation opportunities.",
  },
];

const pricing = [
  "AI consultation and chatbot strategy",
  "Premium web chat interface",
  "Lead capture and handoff flows",
  "Analytics dashboard setup",
];

export default function App() {
  return (
    <CanvasShell>
      <Navbar />

      <main id="home">
        <HeroSection />

        <GlassSection id="how-it-works">
          <SectionHeading eyebrow="How it works" title="Built like a premium growth system.">
            Strategy, implementation, and optimization are combined into one high-touch chatbot
            deployment process.
          </SectionHeading>
          <GlassGrid className="mt-12">
            {workflow.map((item, index) => (
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
        </GlassSection>

        <GlassSection id="pricing">
          <GlassPanel className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.82fr] lg:p-10">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber">
                Pricing
              </p>
              <h2 className="font-display text-4xl font-bold tracking-[-0.065em] text-white sm:text-5xl">
                Custom chatbot builds for serious UAE operators.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite-200/76">
                Start with a premium implementation sprint and scale into managed optimization as
                your automation footprint grows.
              </p>
              <Button href="mailto:hello@bizbot.ae" className="mt-8" size="lg">
                Request Proposal
              </Button>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-canvas-950/44 p-5 backdrop-blur-glass">
              <p className="font-display text-2xl font-bold tracking-[-0.055em] text-white">
                Included foundation
              </p>
              <ul className="mt-5 space-y-3">
                {pricing.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
                    <span className="mt-1 h-4 w-4 rounded-full border border-electric-orange/40 bg-electric-orange/15" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassPanel>
        </GlassSection>

        <GlassSection id="about">
          <SectionHeading eyebrow="About" title="Designed for high-trust digital conversations.">
            BizBot helps UAE companies present a refined AI experience while improving speed,
            qualification, and operational consistency.
          </SectionHeading>
        </GlassSection>

        <GlassSection id="faq" className="pb-24">
          <SectionHeading eyebrow="FAQ" title="Questions before launch?">
            The component system is ready for deeper content, integrations, and conversion flows
            as the new site expands.
          </SectionHeading>
        </GlassSection>
      </main>
    </CanvasShell>
  );
}
