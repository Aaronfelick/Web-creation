import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/cn";

export function SectionFoldContainer({ folds }) {
  const [activeFold, setActiveFold] = useState(folds[0]?.id);
  const foldIds = useMemo(() => folds.map((fold) => fold.id), [folds]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveFold(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    foldIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [foldIds]);

  return (
    <div className="relative">
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 gap-2 lg:grid">
        {folds.map((fold) => (
          <a
            key={fold.id}
            href={`#${fold.id}`}
            aria-label={`Jump to ${fold.label}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full border border-white/20 bg-white/10 transition duration-300",
              activeFold === fold.id &&
                "h-8 border-electric-orange/60 bg-electric-orange shadow-[0_0_24px_rgba(255,106,0,0.62)]",
            )}
          />
        ))}
      </div>

      {folds.map((fold, index) => {
        const FoldComponent = fold.component;

        if (fold.fullBleed) {
          return <FoldComponent key={fold.id} isActive={activeFold === fold.id} />;
        }

        return (
          <motion.section
            key={fold.id}
            id={fold.id}
            className={cn("scroll-mt-28 py-16 sm:py-20 lg:py-28", fold.className)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-18% 0px" }}
            transition={{ duration: 0.58, delay: Math.min(index * 0.03, 0.12), ease: [0.22, 1, 0.36, 1] }}
          >
            <FoldComponent isActive={activeFold === fold.id} />
          </motion.section>
        );
      })}
    </div>
  );
}
