import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Condense + intensify the glass once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on resize to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn("px-3 transition-all duration-500 ease-out-expo", scrolled ? "pt-3" : "pt-5")}
      >
        <Container
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 ease-out-expo sm:px-5",
            "backdrop-blur-xl backdrop-saturate-150",
            scrolled
              ? "border-white/10 bg-ink-900/70 shadow-glass-lg"
              : "border-white/[0.06] bg-white/[0.03]"
          )}
        >
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={() => setActive(link.href)}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      active === link.href
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {active === link.href && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.07] shadow-inner-glow"
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="md"
              iconRight={<ArrowUpRight strokeWidth={2.25} />}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-md transition-colors hover:bg-white/[0.1] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </Container>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 top-20 z-50 origin-top rounded-3xl border border-white/10 bg-ink-900/80 p-4 shadow-glass-lg backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => {
                        setActive(link.href);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-base font-medium text-white/75 transition-colors hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 text-white/30" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="my-3 hairline" />
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                fullWidth
                iconRight={<ArrowUpRight strokeWidth={2.25} />}
                onClick={() => setOpen(false)}
              >
                Get Started
              </Button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
