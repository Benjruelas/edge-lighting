import {
  Building2,
  CalendarX2,
  Check,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { comparisons } from "@/lib/offer";
import { cn } from "@/lib/utils";

const optionMeta: Record<
  (typeof comparisons)[number]["name"],
  { icon: LucideIcon; short: string }
> = {
  "Edge Lighting by All Slopes": {
    icon: Sparkles,
    short: "Edge Lighting",
  },
  "National franchise brands": {
    icon: Building2,
    short: "Franchise brands",
  },
  "DIY kits": {
    icon: Wrench,
    short: "DIY kits",
  },
  "Seasonal clip-ons": {
    icon: CalendarX2,
    short: "Seasonal clip-ons",
  },
};

const winner = comparisons.find((c) => c.highlight)!;
const others = comparisons.filter((c) => !c.highlight);

const dimensions = [
  { key: "price" as const, label: "Price" },
  { key: "controller" as const, label: "Controller" },
  { key: "warranty" as const, label: "Warranty" },
  { key: "who" as const, label: "Who installs" },
];

export function Compare() {
  const WinnerIcon = optionMeta[winner.name].icon;

  return (
    <section className="relative overflow-hidden section-y section-pad">
      <div className="absolute inset-x-0 top-0 h-px light-line" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="COMPARISON"
            title="Same dream outcome. Different path — and different risk."
          />
        </Reveal>

        {/* Mobile comparison */}
        <div className="mt-10 md:hidden">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-b from-primary/20 via-card to-card p-5 glow-amber">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                      <WinnerIcon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Best choice
                      </p>
                      <h3 className="font-heading text-xl leading-tight text-foreground">
                        {optionMeta[winner.name].short}
                      </h3>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                    You are here
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {dimensions.map((dim) => (
                    <li
                      key={dim.key}
                      className="flex items-start gap-3 rounded-xl border border-primary/15 bg-background/40 px-3 py-2.5"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          {dim.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-foreground">
                          {winner[dim.key]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 light-line opacity-70" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How others compare
              </p>
              <div className="h-px flex-1 light-line opacity-70" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {others.map((row) => {
                const meta = optionMeta[row.name];
                const Icon = meta.icon;
                return (
                  <article
                    key={row.name}
                    className="w-[82%] max-w-[300px] shrink-0 snap-center rounded-2xl border border-border bg-card/80 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground">
                        <Icon className="size-4" aria-hidden />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Alternative
                        </p>
                        <h4 className="font-heading text-lg text-foreground">
                          {meta.short}
                        </h4>
                      </div>
                    </div>

                    <dl className="mt-4 space-y-2.5">
                      {dimensions.map((dim) => (
                        <div
                          key={dim.key}
                          className="grid grid-cols-[5.5rem_1fr] gap-2 border-t border-border/70 pt-2.5 text-sm first:border-t-0 first:pt-0"
                        >
                          <dt className="text-xs text-muted-foreground">
                            {dim.label}
                          </dt>
                          <dd className="text-right text-foreground/90">
                            {row[dim.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-4 text-xs text-muted-foreground">
                      vs Edge:{" "}
                      <span className="text-primary">
                        {row.name === "National franchise brands"
                          ? "controller often extra"
                          : row.name === "DIY kits"
                            ? "you climb the ladder"
                            : "pay again every year"}
                      </span>
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Swipe to compare alternatives →
          </p>
        </div>

        {/* Desktop: table */}
        <Reveal delay={100}>
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border bg-card/50 shadow-[0_0_60px_rgb(232_184_109_/_6%)] md:block">
            <table className="w-full table-fixed text-left text-sm">
              <colgroup>
                <col className="w-[34%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
                <col className="w-[18%]" />
                <col className="w-[16%]" />
              </colgroup>
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="px-4 py-4 font-medium">Option</th>
                  <th className="px-4 py-4 font-medium">Price signal</th>
                  <th className="px-4 py-4 font-medium">Controller</th>
                  <th className="px-4 py-4 font-medium">Warranty</th>
                  <th className="px-4 py-4 font-medium">Who installs</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr
                    key={row.name}
                    className={cn(
                      "border-t border-border transition-colors",
                      row.highlight
                        ? "bg-primary/10"
                        : "bg-transparent hover:bg-muted/20",
                    )}
                  >
                    <td className="px-4 py-4 font-medium text-foreground">
                      <span className="inline-flex items-center gap-2 whitespace-nowrap">
                        <span>{row.name}</span>
                        {row.highlight ? (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                            You are here
                          </span>
                        ) : null}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {row.price}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {row.controller}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {row.warranty}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Competitor ranges reflect published DFW / national market pricing as of
          2026 and are for comparison only. Edge Lighting is not affiliated with
          JellyFish, Trimlight, or other franchise brands.
        </p>
      </div>
    </section>
  );
}
