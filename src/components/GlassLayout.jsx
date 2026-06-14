import { motion } from "framer-motion";
import { cn } from "../lib/cn";

export function CanvasShell({ children, className }) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-premium-radial text-graphite-100",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-electric-orange/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-electric-ember/10 blur-[150px]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Container({ children, className, as: Component = "div" }) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}

export function GlassPanel({
  children,
  className,
  as: Component = motion.div,
  hover = false,
  ...props
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-4xl border border-white/10 bg-glass-white shadow-glass backdrop-blur-panel",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-glass-sheen before:opacity-75",
        "after:pointer-events-none after:absolute after:inset-x-8 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent",
        hover &&
          "transition duration-300 hover:-translate-y-1 hover:border-electric-orange/35 hover:bg-white/[0.095] hover:shadow-orange-glow",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

export function GlassSection({ children, id, className }) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function GlassGrid({ children, className }) {
  return (
    <div className={cn("grid gap-4 sm:gap-5 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

export function SectionEyebrow({ children, className }) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, children, className }) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2 className="font-display text-3xl font-bold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-8 text-graphite-200/78 sm:text-lg">{children}</p>
      ) : null}
    </div>
  );
}
