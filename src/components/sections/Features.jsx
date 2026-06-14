import { MessagesSquare, Bot, Languages, BarChart3, ShieldCheck, Workflow } from "lucide-react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: Bot,
    title: "Custom-trained agents",
    body: "Chatbots trained on your products, tone and policies — not generic scripts.",
  },
  {
    icon: Languages,
    title: "Arabic & English",
    body: "Native bilingual conversations tuned for the UAE market and dialects.",
  },
  {
    icon: Workflow,
    title: "Deep integrations",
    body: "Connect WhatsApp, Instagram, your CRM, calendar and payment stack.",
  },
  {
    icon: MessagesSquare,
    title: "Lead capture",
    body: "Qualify, capture and route leads to your team in real time, 24/7.",
  },
  {
    icon: BarChart3,
    title: "Live analytics",
    body: "Track conversions, intents and drop-off with a clear glass dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & compliant",
    body: "Data handled with enterprise-grade security and UAE compliance in mind.",
  },
];

export default function Features() {
  return (
    <Section id="how-it-works" spotlight>
      <div className="mx-auto max-w-2xl text-center">
        <span className="chip">What you get</span>
        <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          A complete AI front desk for your business
        </h2>
        <p className="mt-4 text-pretty text-white/55">
          Everything is designed, built and managed for you — from the first message to
          the closed deal.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <GlassCard key={title} interactive glow>
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-brand-soft text-brand">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
