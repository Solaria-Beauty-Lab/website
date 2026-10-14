import { component$ } from "@builder.io/qwik";
import { StructuredData } from "~/components/structured-data";

export interface FaqItem {
  question: string;
  answer: string;
}

export const Faq = component$<{ items: FaqItem[] }>(({ items }) => (
  <>
    <div class="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          class="group overflow-hidden rounded-2xl border border-bronze-800/10 bg-white shadow-[var(--shadow-card)]"
        >
          <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left font-semibold text-ink hover:text-bronze-900 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              class="text-xl text-gold-500 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div class="px-5 pb-5 leading-7 text-ink-soft">{item.answer}</div>
        </details>
      ))}
    </div>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  </>
));
