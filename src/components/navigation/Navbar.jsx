import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GlassButton from '../ui/GlassButton'
import { cn } from '../../lib/cn'

const NAV_LINKS = ['Home', 'How It Works', 'Pricing', 'About', 'FAQ']

function toSectionHref(label) {
  return `#${label.toLowerCase().replace(/\s+/g, '-')}`
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 shadow-glass-soft backdrop-blur-2xl sm:px-6"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl font-semibold tracking-tight text-white">
            Biz<span className="text-electric-orange">Bot</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={toSectionHref(item)}
                  className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <GlassButton size="sm">Get Started</GlassButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-3 text-sm text-slate-200 backdrop-blur-xl transition hover:text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={toSectionHref(item)}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors',
                      'hover:bg-white/[0.06] hover:text-white',
                    )}
                  >
                    {item}
                  </a>
                ))}
                <GlassButton className="w-full" size="sm">
                  Get Started
                </GlassButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
