import { motion } from "framer-motion";
import Container from "./Container";
import { cn } from "@/lib/cn";

/**
 * Vertical section wrapper with scroll-reveal and an optional spotlight glow.
 * Pairs with <Container> for horizontal rhythm.
 */
export default function Section({
  id,
  className,
  containerClassName,
  children,
  spotlight = false,
  reveal = true,
  ...props
}) {
  const inner = (
    <Container className={cn("relative", containerClassName)}>{children}</Container>
  );

  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28 lg:py-32", className)}
      {...props}
    >
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-spotlight"
        />
      )}

      {reveal ? (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {inner}
        </motion.div>
      ) : (
        inner
      )}
    </section>
  );
}
