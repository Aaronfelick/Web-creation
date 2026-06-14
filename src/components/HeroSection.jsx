import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./GlassLayout";

const parallaxCards = [
  {
    label: "Live in 48 hours",
    detail: "Launch-ready flows",
    icon: "⚡",
    className: "left-2 top-[18%] sm:left-6 lg:left-2 xl:left-8",
    yRange: [-18, 98],
    xRange: [-8, 14],
  },
  {
    label: "Arabic & English",
    detail: "Bilingual support",
    icon: "AE",
    className: "right-0 top-[38%] sm:right-8 lg:right-0 xl:right-4",
    yRange: [24, -82],
    xRange: [10, -22],
  },
  {
    label: "CRM handoff",
    detail: "Qualified leads routed",
    icon: "↗",
    className: "bottom-[12%] left-[16%] sm:left-[22%]",
    yRange: [48, -46],
    xRange: [-18, 12],
  },
];

function FloatingInsightCard({ card, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], card.yRange);
  const x = useTransform(scrollYProgress, [0, 1], card.xRange);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 5]);

  return (
    <motion.div
      className={`absolute z-20 min-w-44 rounded-3xl border border-white/10 bg-canvas-950/52 p-3 shadow-glass-sm backdrop-blur-panel ${card.className}`}
      style={{ x, y, rotate }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-electric-orange/25 bg-electric-orange/10 text-sm font-bold text-electric-amber shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          {card.icon}
        </span>
        <span>
          <span className="block text-sm font-bold tracking-[-0.02em] text-white">
            {card.label}
          </span>
          <span className="mt-0.5 block text-xs text-white/52">{card.detail}</span>
        </span>
      </div>
    </motion.div>
  );
}

function RobotIllustration() {
  return (
    <svg
      className="h-full w-full drop-shadow-[0_44px_70px_rgba(255,106,0,0.18)]"
      viewBox="0 0 420 520"
      role="img"
      aria-label="Premium corporate AI robot"
    >
      <defs>
        <linearGradient id="robotBody" x1="85" x2="340" y1="92" y2="456">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
          <stop offset="45%" stopColor="#d7d0c3" />
          <stop offset="100%" stopColor="#6f675c" />
        </linearGradient>
        <linearGradient id="robotDark" x1="99" x2="321" y1="160" y2="355">
          <stop offset="0%" stopColor="#24221f" />
          <stop offset="100%" stopColor="#080807" />
        </linearGradient>
        <radialGradient id="robotOrange" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffc46b" />
          <stop offset="48%" stopColor="#ff8a1f" />
          <stop offset="100%" stopColor="#ff6a00" />
        </radialGradient>
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feColorMatrix
            in="blur"
            result="glow"
            type="matrix"
            values="1 0 0 0 1 0 0.42 0 0 0.35 0 0 0.05 0 0 0 0 0 0.62 0"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="210" cy="474" fill="rgba(0,0,0,0.42)" rx="112" ry="24" />
      <path
        d="M125 252c-28 14-48 47-48 86 0 42 23 78 55 90l27-56c-12-7-20-20-20-35 0-16 9-30 22-37l-36-48Z"
        fill="url(#robotBody)"
        opacity="0.9"
      />
      <path
        d="M295 252c28 14 48 47 48 86 0 42-23 78-55 90l-27-56c12-7 20-20 20-35 0-16-9-30-22-37l36-48Z"
        fill="url(#robotBody)"
        opacity="0.9"
      />
      <path
        d="M128 236c0-45 37-82 82-82s82 37 82 82v112c0 45-37 82-82 82s-82-37-82-82V236Z"
        fill="url(#robotBody)"
      />
      <path
        d="M150 245c0-34 27-61 60-61s60 27 60 61v86c0 34-27 61-60 61s-60-27-60-61v-86Z"
        fill="url(#robotDark)"
      />
      <path
        d="M111 145c0-53 44-96 99-96s99 43 99 96v33c0 53-44 96-99 96s-99-43-99-96v-33Z"
        fill="url(#robotBody)"
      />
      <path
        d="M136 148c0-35 30-63 68-63h12c38 0 68 28 68 63v20c0 35-30 63-68 63h-12c-38 0-68-28-68-63v-20Z"
        fill="url(#robotDark)"
      />
      <circle cx="181" cy="158" r="16" fill="url(#robotOrange)" filter="url(#softGlow)" />
      <circle cx="239" cy="158" r="16" fill="url(#robotOrange)" filter="url(#softGlow)" />
      <path
        d="M186 207c14 11 34 11 48 0"
        fill="none"
        stroke="#ffc46b"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M190 52c0-11 9-20 20-20s20 9 20 20v14h-40V52Z"
        fill="url(#robotBody)"
      />
      <circle cx="210" cy="28" r="16" fill="url(#robotOrange)" filter="url(#softGlow)" />
      <path
        d="M168 300h84c8 0 15 7 15 15v36c0 8-7 15-15 15h-84c-8 0-15-7-15-15v-36c0-8 7-15 15-15Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.16)"
      />
      <path
        d="M181 333h58"
        stroke="#ff8a1f"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M130 122c18-34 48-51 89-51 27 0 51 8 71 25"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  );
}

export function HeroSection() {
  const heroRef = useRef(null);
  const scrollStopRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const velocity = useVelocity(scrollYProgress);
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-8, 280]), {
    stiffness: 92,
    damping: 24,
    mass: 0.55,
  });
  const pitch = useSpring(useTransform(scrollYProgress, [0, 0.72, 1], [0, 18, 34]), {
    stiffness: 105,
    damping: 22,
  });
  const yawFromProgress = useTransform(scrollYProgress, [0, 0.45, 1], [-9, 7, -5]);
  const yawFromVelocity = useTransform(velocity, [-2, 2], [-7, 7], { clamp: true });
  const rotateY = useSpring(useTransform([yawFromProgress, yawFromVelocity], ([base, bank]) => base + bank), {
    stiffness: 130,
    damping: 20,
  });
  const rotateZ = useSpring(useTransform(velocity, [-2, 2], [5, -5], { clamp: true }), {
    stiffness: 120,
    damping: 22,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.74, 0.94, 1], [1, 1, 0.24, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const shadowScale = useTransform(scrollYProgress, [0, 1], [1, 0.54]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (shouldReduceMotion) {
      return;
    }

    setIsScrolling(true);
    window.clearTimeout(scrollStopRef.current);
    scrollStopRef.current = window.setTimeout(() => setIsScrolling(false), 160);
  });

  useEffect(() => () => window.clearTimeout(scrollStopRef.current), []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[178vh] overflow-clip pt-36 sm:pt-40 lg:min-h-[190vh] lg:pt-0"
    >
      <Container className="grid gap-10 lg:sticky lg:top-0 lg:min-h-screen lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber backdrop-blur-xl">
            UAE AI Chatbot Agency
          </p>
          <h1 className="text-balance font-display text-5xl font-bold tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Chatbots that actually know your business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite-200/78 sm:text-xl">
            BizBot turns your sales scripts, FAQs, service logic, and handoff rules into a
            premium AI concierge built for UAE customers.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing" size="lg">
              Get Started
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="#how-it-works" size="lg" variant="secondary">
              Watch the Flow
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[34rem] overflow-hidden rounded-5xl border border-white/10 bg-canvas-950/38 shadow-glass backdrop-blur-panel [perspective:1400px] sm:h-[42rem] lg:h-[calc(100vh-8rem)]"
          style={{ opacity, scale: sceneScale }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-aurora opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(255,255,255,0.12),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute left-1/2 top-[52%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-orange/20 blur-[90px]" />

          {parallaxCards.map((card) => (
            <FloatingInsightCard key={card.label} card={card} scrollYProgress={scrollYProgress} />
          ))}

          <motion.div
            className="absolute left-1/2 top-[11%] z-10 h-[28rem] w-[22rem] max-w-[78vw] -translate-x-1/2 will-change-transform [transform-style:preserve-3d] sm:h-[34rem] sm:w-[27rem] lg:top-[7%]"
            style={
              shouldReduceMotion
                ? { opacity: 1 }
                : { y, rotateX: pitch, rotateY, rotateZ, transformPerspective: 1200 }
            }
          >
            <motion.div
              className="h-full w-full"
              animate={shouldReduceMotion || isScrolling ? { y: 0 } : { y: [0, -14, 0] }}
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
            >
              <RobotIllustration />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-black/45 blur-2xl"
            style={{ opacity, scaleX: shadowScale }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
