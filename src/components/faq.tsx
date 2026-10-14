import { component$ } from "@builder.io/qwik";
import { Accordion } from "@qwik-ui/headless";
import { StructuredData } from "~/components/structured-data";

export interface FaqItem {
  question: string;
  answer: string;
}

export const Faq = component$<{ items: FaqItem[] }>(({ items }) => (
  <>
    <Accordion.Root class="grid gap-3">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          class="overflow-hidden rounded-2xl border border-bronze-800/10 bg-white shadow-[var(--shadow-card)]"
        >
          <Accordion.Header as="h3">
            <Accordion.Trigger class="group flex min-h-14 w-full items-center justify-between gap-5 px-5 py-4 text-left font-semibold text-ink hover:text-bronze-900">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                class="text-xl text-gold-500 transition-transform group-aria-expanded:rotate-45"
              >
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content class="px-5 pb-5 leading-7 text-ink-soft">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
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
