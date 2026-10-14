import { component$, type ClassList } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  class?: ClassList;
}

export const SectionHeading = component$<SectionHeadingProps>(
  ({ eyebrow, title, description, align = "left", class: className }) => (
    <div
      class={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p class="eyebrow mb-3">{eyebrow}</p>}
      <h2 class="balance font-display text-4xl leading-[1.08] tracking-[-0.025em] text-ink md:text-5xl">
        {title}
      </h2>
      {description && (
        <p class="pretty mt-4 text-base leading-7 text-ink-soft md:text-lg">
          {description}
        </p>
      )}
    </div>
  ),
);
