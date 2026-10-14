import { component$ } from "@builder.io/qwik";
import type { BodyProgram } from "~/content/treatments";
import { cn } from "~/lib/utils";

const ProgramIcon = component$<{ id: string }>(({ id }) => {
  const common = "h-8 w-8";

  if (id === "drenami") {
    return (
      <svg viewBox="0 0 48 48" fill="none" class={common} aria-hidden="true">
        <path
          d="M24 5C18 14 12 20 12 29a12 12 0 0 0 24 0C36 20 30 14 24 5Z"
          stroke="currentColor"
          stroke-width="2.4"
        />
        <path
          d="M19 31c1.5 3 4 4.5 7.5 4"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
        />
      </svg>
    );
  }

  if (id === "rimodellami") {
    return (
      <svg viewBox="0 0 48 48" fill="none" class={common} aria-hidden="true">
        <path
          d="M18 6c1 7-3 10-3 18s4 11 3 18M30 6c-1 7 3 10 3 18s-4 11-3 18M18 17c4 2 8 2 12 0M18 31c4-2 8-2 12 0"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <path d="m6 24 7-4v8l-7-4Zm36 0-7-4v8l7-4Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "body-rituals") {
    return (
      <svg viewBox="0 0 48 48" fill="none" class={common} aria-hidden="true">
        <path
          d="M24 38c-8-5-12-11-12-18 6 1 10 4 12 10 2-6 6-9 12-10 0 7-4 13-12 18Z"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linejoin="round"
        />
        <path
          d="M24 30c-5-5-6-11 0-19 6 8 5 14 0 19ZM7 31c7-1 12 1 17 7-8 2-14 0-17-7Zm34 0c-7-1-12 1-17 7 8 2 14 0 17-7Z"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" class={common} aria-hidden="true">
      <circle cx="24" cy="11" r="4" stroke="currentColor" stroke-width="2.2" />
      <path
        d="M18 42c1-7 2-13 6-18 4 5 5 11 6 18M10 26c5 0 9 2 14 7 5-5 9-7 14-7M13 36c4-2 7-2 11 0 4-2 7-2 11 0"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </svg>
  );
});

const programStyles = [
  {
    section:
      "border-[#aac2c1]/50 bg-gradient-to-br from-[#eef7f5] via-[#dceceb] to-[#c7dedc] text-ink",
    icon: "border-[#78a7a3]/45 bg-white/70 text-[#2f7771]",
    accent: "text-[#2f7771]",
    number: "text-[#2f7771]/15",
    item: "border-white/75 bg-gradient-to-b from-white/92 to-[#d7eeec]/88 shadow-[0_18px_32px_-24px_rgba(25,105,100,.65)] backdrop-blur-sm",
    image: "/images/body-water.webp",
    imagePosition: "center",
    wash: "bg-gradient-to-r from-[#eaf8f7]/90 via-[#d9efed]/72 to-[#b9dcda]/42",
  },
  {
    section:
      "border-[#704438] bg-gradient-to-br from-[#211713] via-[#563226] to-[#9a5a3a] text-white",
    icon: "border-gold-300/45 bg-white/10 text-gold-300",
    accent: "text-gold-300",
    number: "text-white/10",
    item: "border-[#f6c979]/35 bg-gradient-to-b from-[#7a4735]/88 to-[#3c211a]/92 shadow-[0_18px_32px_-24px_rgba(0,0,0,.7)] backdrop-blur-sm",
    image: "/images/body-sand.webp",
    imagePosition: "center",
    wash: "bg-gradient-to-r from-[#241612]/92 via-[#4d2c22]/82 to-[#8b5438]/62",
  },
  {
    section:
      "border-[#d7b7c8]/45 bg-gradient-to-br from-[#fff8fb] via-[#f3dfe9] to-[#e6c7d6] text-ink",
    icon: "border-[#b47b98]/40 bg-white/65 text-[#884d6b]",
    accent: "text-[#884d6b]",
    number: "text-[#884d6b]/15",
    item: "border-white/75 bg-gradient-to-b from-[#fffdfd]/92 to-[#f0cfdf]/88 shadow-[0_18px_32px_-24px_rgba(129,59,95,.42)] backdrop-blur-sm",
    image: "/images/body-lotus.webp",
    imagePosition: "right center",
    wash: "bg-gradient-to-r from-[#fff7fb]/94 via-[#f4dfeb]/78 to-[#e8c7d7]/38",
  },
  {
    section:
      "border-[#c9ae7a]/45 bg-gradient-to-br from-[#fff8e8] via-[#eddfbd] to-[#d8bf8e] text-ink",
    icon: "border-[#9c7842]/35 bg-white/65 text-[#7a5522]",
    accent: "text-[#7a5522]",
    number: "text-[#7a5522]/15",
    item: "border-white/75 bg-gradient-to-b from-[#fffdf7]/92 to-[#ead5a4]/88 shadow-[0_18px_32px_-24px_rgba(112,72,20,.48)] backdrop-blur-sm",
    image: "/images/body-stones.webp",
    imagePosition: "right center",
    wash: "bg-gradient-to-r from-[#fff8e8]/96 via-[#f0dfba]/78 to-[#d4b47a]/32",
  },
];

export const BodyPrograms = component$<{ programs: BodyProgram[] }>(
  ({ programs }) => (
    <div>
      <nav
        aria-label="Vai al percorso corpo"
        class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {programs.map((program, index) => (
          <a
            key={program.id}
            href={`#${program.id}`}
            class={cn(
              "group relative overflow-hidden rounded-2xl border p-5 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg",
              programStyles[index].section,
            )}
          >
            <img
              src={programStyles[index].image}
              alt=""
              width="1600"
              height="900"
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: programStyles[index].imagePosition }}
            />
            <span
              aria-hidden="true"
              class={cn("absolute inset-0", programStyles[index].wash)}
            />
            <span class="relative block text-xs font-bold tracking-[.16em] text-gold-500">
              0{index + 1}
            </span>
            <span class="relative mt-2 flex items-center justify-between gap-3">
              <span
                class={cn(
                  "font-display text-2xl",
                  index === 1 ? "text-white" : "text-ink",
                )}
              >
                {program.title}
              </span>
              <span
                aria-hidden="true"
                class={cn(
                  "transition-transform group-hover:translate-y-1",
                  index === 1 ? "text-gold-300" : "text-bronze-800",
                )}
              >
                ↓
              </span>
            </span>
            <span
              class={cn(
                "relative mt-1 block text-xs uppercase tracking-wide",
                index === 1 ? "text-cream-100/70" : "text-ink-soft",
              )}
            >
              {program.subtitle}
            </span>
          </a>
        ))}
      </nav>

      <div class="mt-10 grid gap-8">
        {programs.map((program, index) => {
          const dark = index === 1;
          const style = programStyles[index];

          return (
            <section
              key={program.id}
              id={program.id}
              aria-labelledby={`${program.id}-title`}
              class={cn(
                "relative scroll-mt-28 overflow-hidden rounded-[2.25rem] border px-5 py-8 shadow-[var(--shadow-soft)] md:px-8 md:py-10 lg:px-10",
                style.section,
              )}
            >
              <img
                src={style.image}
                alt=""
                width="1600"
                height="900"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: style.imagePosition }}
              />
              <div
                aria-hidden="true"
                class={cn("absolute inset-0", style.wash)}
              />
              <div class="relative grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:items-center lg:gap-10">
                <header>
                  <div class="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      class={cn(
                        "font-display text-2xl leading-none",
                        style.accent,
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      class={cn(
                        "grid h-16 w-16 place-items-center rounded-full border font-display text-3xl",
                        style.icon,
                      )}
                    >
                      <ProgramIcon id={program.id} />
                    </span>
                  </div>
                  <p
                    class={cn(
                      "mt-8 text-xs font-bold uppercase tracking-[.16em]",
                      style.accent,
                    )}
                  >
                    {program.subtitle}
                  </p>
                  <h2
                    id={`${program.id}-title`}
                    class="mt-3 font-display text-4xl leading-none md:text-5xl"
                  >
                    {program.title}
                  </h2>
                  <p
                    class={cn(
                      "pretty mt-5 max-w-xl text-sm leading-7 md:text-base",
                      dark ? "text-cream-100/70" : "text-ink-soft",
                    )}
                  >
                    {program.description}
                  </p>
                </header>

                <div
                  id={`${program.id}-list`}
                  class={cn(
                    "grid gap-4",
                    program.items.length === 3
                      ? "md:grid-cols-3"
                      : program.items.length === 5
                        ? "md:grid-cols-2 lg:grid-cols-5"
                        : "md:grid-cols-2 lg:grid-cols-4",
                  )}
                >
                  {program.items.map((item) => (
                    <article
                      key={item.name}
                      class={cn(
                        "flex min-h-44 flex-col rounded-2xl border p-5 shadow-sm",
                        style.item,
                      )}
                    >
                      <div>
                        <h3
                          class={cn(
                            "text-sm font-bold uppercase tracking-wide",
                            dark ? "text-gold-300" : "text-bronze-900",
                          )}
                        >
                          {item.name}
                        </h3>
                      </div>
                      {item.note && (
                        <p
                          class={cn(
                            "mt-4 text-sm leading-6",
                            dark ? "text-cream-100/70" : "text-ink-soft",
                          )}
                        >
                          {item.note}
                        </p>
                      )}
                      <p
                        class={cn(
                          "mt-auto border-t pt-4 text-center font-display text-3xl font-semibold",
                          dark
                            ? "border-gold-300/30 text-gold-300"
                            : "border-bronze-800/15 text-bronze-900",
                        )}
                      >
                        {item.price}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  ),
);
