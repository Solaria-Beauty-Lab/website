import { Slot, component$, type ClassList } from "@builder.io/qwik";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "border-bronze-800 bg-bronze-800 px-5 text-white shadow-[0_12px_28px_-16px_rgba(88,47,12,.75)] hover:-translate-y-0.5 hover:bg-bronze-900",
        secondary:
          "border-gold-400/60 bg-cream-100 px-5 text-bronze-900 hover:-translate-y-0.5 hover:border-bronze-800 hover:bg-white",
        ghost:
          "border-transparent bg-transparent px-3 text-ink hover:bg-cream-100 hover:text-bronze-900",
      },
      size: {
        sm: "min-h-10 px-4 text-xs",
        md: "min-h-11",
        lg: "min-h-13 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  class?: ClassList;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const Button = component$<ButtonProps>(
  ({
    href,
    variant,
    size,
    class: className,
    type = "button",
    target,
    rel,
    ariaLabel,
  }) => {
    const styles = cn(buttonVariants({ variant, size }), className);
    if (href) {
      return (
        <a
          href={href}
          class={styles}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          <Slot />
        </a>
      );
    }

    return (
      <button type={type} class={styles} aria-label={ariaLabel}>
        <Slot />
      </button>
    );
  },
);
