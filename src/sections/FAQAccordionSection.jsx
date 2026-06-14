import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container, SectionHeading } from "../components/GlassLayout";
import { faqs } from "../content/marketing";
import { cn } from "../lib/cn";

export function FAQAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container>
      <SectionHeading eyebrow="FAQ" title="Questions before your chatbot goes live?">
        Straight answers on data, bilingual support, memory, integrations, and optimization.
      </SectionHeading>

      <div className="mx-auto mt-12 max-w-4xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={cn(
                "overflow-hidden rounded-4xl border border-white/10 bg-white/[0.06] shadow-glass-sm backdrop-blur-panel transition duration-300",
                isOpen && "border-electric-orange/30 bg-electric-orange/[0.07]",
              )}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="font-display text-xl font-bold tracking-[-0.05em] text-white sm:text-2xl">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-xl text-electric-amber transition duration-300",
                    isOpen && "rotate-45 border-electric-orange/35",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-6 leading-8 text-graphite-200/76 sm:px-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
