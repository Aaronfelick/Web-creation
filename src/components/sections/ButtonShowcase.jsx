import { ArrowUpRight, Download, Plus } from "lucide-react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const variants = ["primary", "secondary", "outline", "ghost"];

export default function ButtonShowcase() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-2xl text-center">
        <span className="chip">Design system</span>
        <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          One frosted-glass button, every variant
        </h2>
        <p className="mt-4 text-pretty text-white/55">
          Translucent fills, hairline borders, hover color shifts and an elegant glow
          bloom — consistent across the whole product.
        </p>
      </div>

      <GlassCard className="mt-12" padding="lg">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-start gap-4">
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                {variant}
              </span>
              <Button variant={variant} size="md" iconRight={<ArrowUpRight strokeWidth={2.25} />}>
                Get Started
              </Button>
              <Button variant={variant} size="md" icon={<Download strokeWidth={2.25} />}>
                Download
              </Button>
              <Button variant={variant} size="icon" aria-label="Add">
                <Plus strokeWidth={2.25} />
              </Button>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}
