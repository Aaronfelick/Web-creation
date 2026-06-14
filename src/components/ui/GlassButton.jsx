import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

const variantClasses = {
  primary:
    'text-slate-100 hover:text-electric-orange focus-visible:text-electric-orange hover:shadow-orange-glow',
  subtle:
    'text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/[0.1]',
}

const sizeClasses = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const GlassButton = forwardRef(function GlassButton(
  { className, variant = 'primary', size = 'md', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] font-medium tracking-wide backdrop-blur-2xl transition-all duration-300',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-cta-glow before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-orange/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-900',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
})

export default GlassButton
