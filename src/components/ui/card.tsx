import { Slot, component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export const Card = component$<PropsOf<"article">>((props) => (
  <article
    {...props}
    class={cn(
      "rounded-[var(--radius-card)] border border-bronze-800/10 bg-white/85 text-ink shadow-[var(--shadow-card)] backdrop-blur-sm",
      props.class,
    )}
  >
    <Slot />
  </article>
));

export const CardHeader = component$<PropsOf<"div">>((props) => (
  <div {...props} class={cn("space-y-2 p-6 pb-3", props.class)}>
    <Slot />
  </div>
));

export const CardTitle = component$<PropsOf<"h3">>((props) => (
  <h3 {...props} class={cn("font-display text-2xl leading-tight", props.class)}>
    <Slot />
  </h3>
));

export const CardContent = component$<PropsOf<"div">>((props) => (
  <div {...props} class={cn("p-6 pt-2", props.class)}>
    <Slot />
  </div>
));
