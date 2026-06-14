import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Primary glassmorphic panel.
 * Frosted translucent fill, subtle white border, top sheen, and an
 * optional brand glow that warms in on hover.
 *
 * @typedef {"sm" | "md" | "lg"} GlassPadding
 */

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

const GlassCard = forwardRef(function GlassCard(
  {
    as: Component = "div",
    className,
    children,
    padding = "md",
    interactive = false,
    glow = false,
    sheen = true,
    ...props
  },
  ref
) {
  const MotionComp = motion(Component);

  return (
    <MotionComp
      ref={ref}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group/card relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/[0.05]",
        "backdrop-blur-xl backdrop-saturate-150 shadow-glass",
        "transition-colors duration-500 ease-out-expo",
        interactive && "cursor-pointer hover:border-white/20 hover:bg-white/[0.07]",
        paddings[padding],
        className
      )}
      {...props}
    >
      {/* Top sheen for the frosted finish */}
      {sheen && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-glass opacity-50"
        />
      )}
      {/* Brand glow that warms in on hover */}
      {glow && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-700 ease-out-expo group-hover/card:opacity-30"
        />
      )}
      <div className="relative">{children}</div>
    </MotionComp>
  );
});

export default GlassCard;
