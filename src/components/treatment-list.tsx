import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import type { TreatmentGroup } from "~/content/treatments";
import { cn } from "~/lib/utils";

type TreatmentTone = "default" | "rose" | "sage" | "gold";

const toneClasses: Record<
  TreatmentTone,
  { card: string; header: string; price: string }
> = {
  default: {
    card: "border-bronze-800/10 bg-white",
    header: "bg-gradient-to-br from-cream-100 to-gold-300/25",
    price: "text-bronze-900",
  },
  rose: {
    card: "border-[#d4a38f]/35 bg-[#fffaf7]",
    header: "bg-gradient-to-br from-[#f7ded4] via-[#f3cfc1] to-[#e9b99f]",
    price: "text-[#87452f]",
  },
  sage: {
    card: "border-sage-700/25 bg-[#fbfcf8]",
    header: "bg-gradient-to-br from-[#dfe8d8] via-[#cbd9bf] to-[#b5c7a6]",
    price: "text-sage-700",
  },
  gold: {
    card: "border-gold-400/30 bg-white",
    header: "bg-gradient-to-br from-gold-300/70 via-[#efc875] to-[#d8a43d]",
    price: "text-bronze-900",
  },
};

export const TreatmentList = component$<{
  groups: TreatmentGroup[];
  tone?: TreatmentTone;
}>(({ groups, tone = "default" }) => (
  <div class="grid gap-6 lg:grid-cols-2">
    {groups.map((group) => (
      <Card
        key={group.title}
        class={cn(
          "overflow-hidden transition-transform duration-300 hover:-translate-y-1",
          toneClasses[tone].card,
        )}
      >
        <div
          class={cn(
            "border-b border-bronze-800/10 p-6",
            toneClasses[tone].header,
          )}
        >
          <h2 class="font-display text-3xl">{group.title}</h2>
          {group.description && (
            <p class="mt-2 text-sm leading-6 text-ink-soft">
              {group.description}
            </p>
          )}
        </div>
        <dl class="divide-y divide-bronze-800/10 px-6">
          {group.items.map((item) => (
            <div
              key={item.name}
              class="grid grid-cols-[1fr_auto] items-start gap-4 py-4"
            >
              <dt>
                <span class="text-sm font-medium leading-6 text-ink">
                  {item.name}
                </span>
                {item.note && (
                  <span class="mt-1 block text-xs leading-5 text-ink-soft">
                    {item.note}
                  </span>
                )}
              </dt>
              <dd
                class={cn(
                  "whitespace-nowrap font-semibold",
                  toneClasses[tone].price,
                )}
              >
                {item.price}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    ))}
  </div>
));
