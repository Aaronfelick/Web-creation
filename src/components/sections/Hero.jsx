import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

const stats = [
  { value: "120+", label: "UAE businesses automated" },
  { value: "<2s", label: "Avg. response time" },
  { value: "24/7", label: "Arabic & English support" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-44 lg:pt-52">
      {/* Spotlight + aurora orb */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-spotlight" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-aurora opacity-20 blur-3xl animate-spin-slow"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              AI chatbot agency · Dubai, UAE
            </span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl"
          >
            Conversations that <span className="text-gradient">close deals</span> while you sleep
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-xl text-pretty text-base text-white/60 sm:text-lg"
          >
            BizBot designs, builds and deploys bespoke AI chatbots for UAE businesses —
            capturing leads, answering customers and booking meetings around the clock.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button as="a" href="#contact" variant="primary" size="lg" iconRight={<ArrowUpRight strokeWidth={2.25} />}>
              Get Started
            </Button>
            <Button as="a" href="#how-it-works" variant="secondary" size="lg" icon={<Play strokeWidth={2.25} />}>
              See how it works
            </Button>
          </motion.div>
        </div>

        {/* Floating glass preview */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mx-auto mt-16 max-w-4xl sm:mt-20"
        >
          <GlassCard padding="none" glow className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
              <span className="ml-3 text-xs font-medium text-white/40">bizbot · live assistant</span>
            </div>
            <div className="grid gap-3 p-5 sm:p-7">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/80">
                Do you offer same-day delivery in Abu Dhabi?
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md border border-brand/20 bg-brand/[0.10] px-4 py-3 text-sm text-white/90 shadow-glow-soft">
                Yes! Order before 4 PM and we deliver across Abu Dhabi today.
                Want me to start your order now? 🛵
              </div>
              <div className="mr-auto flex items-center gap-1.5 px-2 pt-1">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand/70" />
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand/50 [animation-delay:0.2s]" />
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand/30 [animation-delay:0.4s]" />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <dt className="font-display text-3xl font-bold text-white">{s.value}</dt>
              <dd className="mt-1 text-sm text-white/50">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
