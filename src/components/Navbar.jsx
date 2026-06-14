import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";
import { cn } from "../lib/cn";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto max-w-7xl rounded-full border border-white/10 bg-canvas-950/62 px-4 py-3 shadow-glass-sm backdrop-blur-navbar supports-backdrop:bg-canvas-950/48",
          "ring-1 ring-white/[0.03]",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="BizBot home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
              <span className="h-3 w-3 rounded-full bg-electric-orange shadow-[0_0_28px_rgba(255,106,0,0.85)]" />
            </span>
            <span className="font-display text-xl font-bold tracking-[-0.06em] text-white">
              BizBot
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition duration-300 hover:bg-white/[0.06] hover:text-electric-amber"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="#pricing" size="sm">
              Get Started
            </Button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-white/80 backdrop-blur-xl transition hover:border-electric-orange/45 hover:text-electric-amber md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-5 bg-current transition duration-300",
                  isOpen && "top-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2 h-px w-5 bg-current transition duration-300",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300",
                  isOpen && "bottom-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-canvas-950/78 p-3 shadow-glass backdrop-blur-navbar md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl px-4 py-3 text-sm font-medium text-white/72 transition hover:bg-white/[0.07] hover:text-electric-amber"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#pricing" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
