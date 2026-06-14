import { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { Container, GlassPanel, SectionHeading } from "../components/GlassLayout";
import { pricingPlans } from "../content/marketing";
import { cn } from "../lib/cn";

const annualDiscount = 0.2;

function formatPrice(value) {
  return new Intl.NumberFormat("en-AE", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function PricingMatrixSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const isAnnual = billingCycle === "annual";

  const renderedPlans = useMemo(
    () =>
      pricingPlans.map((plan) => {
        if (!plan.monthly) {
          return { ...plan, price: "Custom", cadence: "Designed around your workflow" };
        }

        const discounted = Math.round(plan.monthly * (1 - annualDiscount));
        const price = isAnnual ? discounted : plan.monthly;
        return {
          ...plan,
          price: `AED ${formatPrice(price)}`,
          cadence: isAnnual ? "per month, billed annually" : "per month",
          originalPrice: isAnnual ? `AED ${formatPrice(plan.monthly)}` : null,
        };
      }),
    [isAnnual],
  );

  return (
    <Container>
      <SectionHeading eyebrow="Pricing" title="Choose the AI automation tier that fits your team.">
        Switch between monthly flexibility and annual plans with a built-in 20% discount.
      </SectionHeading>

      <div className="mt-8 flex justify-center">
        <div className="flex rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-glass-sm backdrop-blur-panel">
          {["monthly", "annual"].map((cycle) => (
            <button
              key={cycle}
              type="button"
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-bold capitalize transition duration-300",
                billingCycle === cycle ? "text-canvas-950" : "text-white/64 hover:text-white",
              )}
              onClick={() => setBillingCycle(cycle)}
              aria-pressed={billingCycle === cycle}
            >
              {billingCycle === cycle ? (
                <span className="absolute inset-0 rounded-full bg-orange-glow shadow-orange-glow" />
              ) : null}
              <span className="relative z-10">
                {cycle}
                {cycle === "annual" ? " -20%" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {renderedPlans.map((plan) => (
          <GlassPanel
            key={plan.name}
            className={cn(
              "p-6 sm:p-7",
              plan.featured && "border-electric-orange/35 bg-electric-orange/[0.075]",
            )}
            hover
          >
            {plan.featured ? (
              <p className="mb-5 w-fit rounded-full border border-electric-orange/30 bg-electric-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-electric-amber">
                Most popular
              </p>
            ) : null}
            <h3 className="font-display text-3xl font-bold tracking-[-0.06em] text-white">
              {plan.name}
            </h3>
            <p className="mt-3 min-h-20 leading-7 text-graphite-200/72">{plan.description}</p>

            <div className="mt-8">
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl font-bold tracking-[-0.07em] text-white">
                  {plan.price}
                </span>
                {plan.originalPrice ? (
                  <span className="pb-1 text-sm text-white/38 line-through">{plan.originalPrice}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-white/52">{plan.cadence}</p>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-white/74">
                  <span className="mt-1.5 h-3 w-3 rounded-full border border-electric-orange/45 bg-electric-orange/20" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href={plan.name === "Enterprise" ? "#contact" : "mailto:hello@bizbot.ae"}
              className="mt-8 w-full"
              variant={plan.featured ? "primary" : "secondary"}
            >
              {plan.name === "Enterprise" ? "Plan Enterprise Build" : "Start with " + plan.name}
            </Button>
          </GlassPanel>
        ))}
      </div>
    </Container>
  );
}
