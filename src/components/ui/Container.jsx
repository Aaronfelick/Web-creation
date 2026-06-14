import { cn } from "@/lib/cn";

/**
 * Centered, responsive content container with consistent gutters.
 */
export default function Container({ as: Component = "div", className, children, ...props }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
