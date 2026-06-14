import { ArrowUpRight, MessageCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <Section id="contact">
      <GlassCard padding="none" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-brand-soft"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-brand opacity-25 blur-3xl"
        />
        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:p-16">
          <div>
            <span className="chip">
              <MessageCircle className="h-3.5 w-3.5 text-brand" />
              Free 30-min strategy call
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to put your business on autopilot?
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-white/60">
              Tell us about your business and we&apos;ll map out the perfect AI chatbot —
              live in days, not months.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button as="a" href="#" variant="primary" size="lg" fullWidth iconRight={<ArrowUpRight strokeWidth={2.25} />}>
              Get Started
            </Button>
            <Button as="a" href="#pricing" variant="outline" size="lg" fullWidth>
              View pricing
            </Button>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
