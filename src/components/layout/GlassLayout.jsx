import { cn } from '../../lib/cn'

export function PageCanvas({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-premium-canvas text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-electric-orange/10 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function ContentShell({ className, children, ...props }) {
  return (
    <main
      className={cn('mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </main>
  )
}

export function GlassPanel({ className, children, ...props }) {
  return (
    <section
      className={cn(
        'rounded-3xl border border-glass bg-white/[0.04] p-6 shadow-glass-soft backdrop-blur-3xl transition-shadow duration-300 hover:shadow-glass-hover sm:p-8',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
