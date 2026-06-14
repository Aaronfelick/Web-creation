import { cn } from "@/lib/cn";

/**
 * BizBot wordmark + glass glyph.
 */
export default function Logo({ className, compact = false }) {
  return (
    <a
      href="#home"
      aria-label="BizBot home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-gradient-brand-soft backdrop-blur-md">
        <span className="absolute inset-0 rounded-xl bg-gradient-brand opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-brand shadow-glow" />
      </span>
      {!compact && (
        <span className="font-heading text-lg font-bold tracking-tight text-white">
          Biz<span className="text-gradient">Bot</span>
        </span>
      )}
    </a>
  );
}
