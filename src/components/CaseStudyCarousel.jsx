import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "./GlassLayout";

const caseStudies = [
  {
    title: "SwiftFreight Assistant",
    subtitle: "GCC Air Rates",
    metric: "41% faster quotes",
    category: "Logistics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Maison Concierge",
    subtitle: "Luxury Retail Styling",
    metric: "3.2x lead capture",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Noura Clinic AI",
    subtitle: "Patient Intake Flow",
    metric: "68% fewer calls",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Atlas Real Estate Bot",
    subtitle: "Dubai Buyer Qualification",
    metric: "2.6x booked viewings",
    category: "Property",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "AeroDesk Agent",
    subtitle: "Bilingual Travel Support",
    metric: "24/7 Arabic + English",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "FinEdge Advisor",
    subtitle: "SME Finance Routing",
    metric: "52% cleaner handoffs",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Velvet Table Bot",
    subtitle: "Restaurant Reservations",
    metric: "19k chats served",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=90",
  },
];

function getCoverFlowTransform(index, progressIndex, shouldReduceMotion) {
  const offset = index - progressIndex;
  const depth = Math.min(Math.abs(offset), 3);
  const direction = Math.sign(offset);
  const scale = shouldReduceMotion
    ? depth < 0.55
      ? 1
      : 0.86
    : Math.max(0.6, depth < 1 ? 1.2 - depth * 0.4 : 0.8 - (depth - 1) * 0.2);
  const x = shouldReduceMotion
    ? offset * 120
    : direction * (depth * 150 + Math.max(depth - 1, 0) * 72);
  const z = shouldReduceMotion ? 0 : -depth * 180;
  const rotateY = shouldReduceMotion ? 0 : direction * -34 * Math.min(depth, 1.65);
  const rotateZ = shouldReduceMotion ? 0 : direction * -2.5 * Math.min(depth, 1);

  return `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
}

function CaseStudyPill({ caseStudy, index, progressIndex, activeIndex, shouldReduceMotion }) {
  const transform = useTransform(progressIndex, (latest) =>
    getCoverFlowTransform(index, latest, shouldReduceMotion),
  );
  const opacity = useTransform(progressIndex, (latest) => {
    const distance = Math.abs(index - latest);
    return distance > 2.8 ? 0 : Math.max(0.18, 1 - distance * 0.28);
  });
  const captionOpacity = useTransform(progressIndex, (latest) =>
    Math.max(0, 1 - Math.abs(index - latest) * 4.5),
  );
  const captionY = useTransform(progressIndex, (latest) => {
    const distance = Math.abs(index - latest);
    return Math.min(26, distance * 34);
  });
  const imageY = useTransform(progressIndex, (latest) => (index - latest) * -22);
  const zIndex = caseStudies.length * 2 - Math.round(Math.abs(index - activeIndex) * 2);
  const isActive = index === activeIndex;

  return (
    <motion.article
      className="absolute left-1/2 top-1/2 h-[24rem] w-[12rem] origin-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] shadow-[0_42px_120px_rgba(0,0,0,0.72)] will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d] sm:h-[32rem] sm:w-[15rem] lg:h-[38rem] lg:w-[18rem]"
      style={{ transform, opacity, zIndex }}
      aria-hidden={!isActive}
    >
      <motion.img
        className="absolute inset-0 h-[112%] w-full object-cover"
        src={caseStudy.image}
        alt=""
        loading={index < 3 ? "eager" : "lazy"}
        style={{ y: imageY }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.08)_44%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
      <div className="absolute inset-x-10 top-8 h-32 rounded-full bg-white/20 blur-2xl" />
      <motion.div
        className="absolute inset-x-5 bottom-10 text-center"
        style={{ opacity: captionOpacity, y: captionY }}
      >
        <p className="mx-auto mb-3 w-fit rounded-full border border-electric-orange/30 bg-black/38 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-electric-amber backdrop-blur-xl">
          {caseStudy.category}
        </p>
        <h3 className="font-display text-2xl font-bold leading-none tracking-[-0.07em] text-white">
          {caseStudy.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-white/74">{caseStudy.subtitle}</p>
      </motion.div>
    </motion.article>
  );
}

export function CaseStudyCarousel() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawProgressIndex = useTransform(
    scrollYProgress,
    [0.08, 0.92],
    [0, caseStudies.length - 1],
    { clamp: true },
  );
  const progressIndex = useSpring(rawProgressIndex, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });

  useMotionValueEvent(rawProgressIndex, "change", (latest) => {
    setActiveIndex(Math.min(caseStudies.length - 1, Math.max(0, Math.round(latest))));
  });

  const activeCaseStudy = caseStudies[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative min-h-[720vh] bg-black text-white"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,106,0,0.18),transparent_28%),radial-gradient(circle_at_50%_72%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />

        <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-electric-amber backdrop-blur-xl">
              Chatbot showcase
            </p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              Scroll through industry-ready AI agents.
            </h2>
          </div>

          <div className="relative mx-auto mt-8 h-[30rem] w-full max-w-6xl [perspective:1500px] sm:mt-10 sm:h-[40rem] lg:h-[44rem]">
            <div className="absolute inset-0 [transform-style:preserve-3d]">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyPill
                  key={caseStudy.title}
                  caseStudy={caseStudy}
                  index={index}
                  progressIndex={progressIndex}
                  activeIndex={activeIndex}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div className="relative mx-auto -mt-4 min-h-32 w-full max-w-3xl text-center sm:-mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseStudy.title}
                className="mx-auto rounded-4xl border border-white/10 bg-white/[0.055] p-5 shadow-glass-sm backdrop-blur-panel"
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-electric-amber">
                  {activeCaseStudy.metric}
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-[-0.055em] text-white sm:text-3xl">
                  {activeCaseStudy.title} — {activeCaseStudy.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </section>
  );
}
