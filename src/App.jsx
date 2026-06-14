import { motion } from "framer-motion";
import { Button } from "./components/Button";
import {
  CanvasShell,
  Container,
  GlassGrid,
  GlassPanel,
  GlassSection,
  SectionHeading,
} from "./components/GlassLayout";
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
        <section className="relative min-h-screen overflow-hidden pt-36 sm:pt-40 lg:pt-44">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber backdrop-blur-xl">
                UAE AI Chatbot Agency
              </p>
              <h1 className="text-balance font-display text-5xl font-bold tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
                Premium AI chatbots for businesses ready to scale.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite-200/78 sm:text-xl">
                BizBot designs intelligent chatbot systems for UAE brands that need faster
                response times, better lead qualification, and a luxury digital experience.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#pricing" size="lg">
                  Get Started
                  <span aria-hidden="true">→</span>
                </Button>
                <Button href="#how-it-works" size="lg" variant="secondary">
                  See How It Works
                </Button>
              </div>
            </motion.div>

            <GlassPanel
              className="p-4 sm:p-6"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-canvas-950/48 p-4 backdrop-blur-glass">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                      Live preview
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.06em]">
                      BizBot Concierge
                    </h2>
                  </div>
                  <span className="rounded-full border border-electric-orange/30 bg-electric-orange/10 px-3 py-1 text-xs font-bold text-electric-amber">
                    Online
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="max-w-[82%] rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-sm leading-6 text-white/78 backdrop-blur-xl">
                    Welcome to BizBot. Would you like to automate customer support, capture
                    leads, or book consultations?
                  </div>
                  <div className="ml-auto max-w-[78%] rounded-3xl border border-electric-orange/25 bg-orange-glow p-4 text-sm font-semibold leading-6 text-canvas-950 shadow-orange-glow">
                    I want qualified leads from WhatsApp and my website.
                  </div>
                  <div className="max-w-[86%] rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-sm leading-6 text-white/78 backdrop-blur-xl">
                    Perfect. I can route visitors by budget, service need, and urgency before
                    your sales team receives the handoff.
                  </div>
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>

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
