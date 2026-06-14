import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Universal frosted-glass button.
 *
 * Every variant shares the premium glass language:
 *  - ultra-subtle white border
 *  - translucent background fill
 *  - text color shifts on hover
 *  - an elegant background glow blooms on hover
 *
 * @typedef {"primary" | "secondary" | "ghost" | "outline"} ButtonVariant
 * @typedef {"sm" | "md" | "lg" | "icon"} ButtonSize
 */

const sizes = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-xl",
  md: "h-11 px-5 text-sm gap-2 rounded-xl",
  lg: "h-14 px-7 text-base gap-2.5 rounded-2xl",
  icon: "h-11 w-11 rounded-xl",
};

const variants = {
  /* Signature electric-orange glass */
  primary:
    "text-white border border-white/15 bg-brand/90 shadow-glow " +
    "hover:bg-brand hover:text-white hover:shadow-glow-lg",
  /* Neutral frosted glass */
  secondary:
    "text-white/80 border border-white/10 bg-white/[0.06] shadow-glass " +
    "hover:text-white hover:bg-white/[0.10]",
  /* Minimal — fill appears on hover */
  ghost:
    "text-white/70 border border-transparent bg-transparent " +
    "hover:text-white hover:bg-white/[0.06] hover:border-white/10",
  /* Crisp outline that warms to brand on hover */
  outline:
    "text-white/80 border border-white/15 bg-transparent " +
    "hover:text-white hover:border-brand/50 hover:bg-brand/[0.08]",
};

/* The hover glow bloom shared by every variant */
const glowByVariant = {
  primary: "bg-gradient-brand opacity-0 group-hover/btn:opacity-70 blur-xl",
  secondary: "bg-gradient-glass opacity-0 group-hover/btn:opacity-100 blur-md",
  ghost: "bg-white/10 opacity-0 group-hover/btn:opacity-100 blur-md",
  outline: "bg-gradient-brand opacity-0 group-hover/btn:opacity-40 blur-xl",
};

const Button = forwardRef(function Button(
  {
    as: Component = "button",
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconRight,
    fullWidth = false,
    ...props
  },
  ref
) {
  const MotionComp = motion(Component);

  return (
    <MotionComp
      ref={ref}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      className={cn(
        "group/btn relative inline-flex select-none items-center justify-center overflow-hidden",
        "font-medium tracking-tight backdrop-blur-md",
        "transition-colors duration-300 ease-out-expo",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        "disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Elegant background glow on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1 -z-10 rounded-[inherit] transition-opacity duration-500 ease-out-expo",
          glowByVariant[variant]
        )}
      />
      {/* Top sheen for the frosted finish */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-hairline opacity-60"
      />

      {icon && <span className="shrink-0 [&_svg]:h-[1.1em] [&_svg]:w-[1.1em]">{icon}</span>}
      {children && <span className="relative">{children}</span>}
      {iconRight && (
        <span className="shrink-0 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5 [&_svg]:h-[1.1em] [&_svg]:w-[1.1em]">
          {iconRight}
        </span>
      )}
    </MotionComp>
  );
});

export default Button;
