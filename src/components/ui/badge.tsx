import { Slot, component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export const Badge = component$<PropsOf<"span">>((props) => (
  <span
    {...props}
    class={cn(
      "inline-flex w-fit items-center rounded-full border border-gold-400/35 bg-cream-100 px-3 py-1 text-xs font-semibold tracking-wide text-bronze-900",
      props.class,
    )}
  >
    <Slot />
  </span>
));
