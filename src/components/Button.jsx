import { motion } from "framer-motion";
import { cn } from "../lib/cn";

const variantClasses = {
  primary:
    "hover:border-electric-orange/60 hover:text-electric-amber focus-visible:ring-electric-orange/45",
  secondary:
    "text-white/78 hover:border-white/25 hover:text-white focus-visible:ring-white/30",
  ghost:
    "border-transparent bg-white/[0.035] text-white/72 hover:border-electric-orange/35 hover:text-electric-orange focus-visible:ring-electric-orange/35",
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm sm:text-base",
  lg: "h-14 px-7 text-base",
};

export function Button({
  children,
  className,
  href,
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={cn(
        "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.075] font-semibold tracking-[-0.01em] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_42px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 ease-out",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.28),transparent_56%)] before:opacity-0 before:transition-opacity before:duration-300",
        "after:absolute after:inset-px after:-z-20 after:rounded-full after:bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.025))]",
        "hover:-translate-y-0.5 hover:bg-white/[0.11] hover:shadow-orange-glow hover:before:opacity-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-950",
        "disabled:pointer-events-none disabled:opacity-45",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      href={href}
      type={href ? undefined : type}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
    </Component>
  );
}
