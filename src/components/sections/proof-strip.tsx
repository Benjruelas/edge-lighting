import { site } from "@/lib/site";

const items = [
  "Family-owned Mansfield / DFW",
  "Roofing + soffit specialists",
  "$28/ft all-inclusive",
  "Lifetime workmanship",
  `${site.monthlyCapacity} installs / month`,
  "Controller included",
  "HOA-friendly daytime look",
  "1-day typical install",
];

export function ProofStrip() {
  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-card/40">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex overflow-hidden py-4 sm:py-5">
        <div className="marquee-track flex min-w-max items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 text-xs tracking-wide text-muted-foreground sm:gap-10 sm:text-sm"
            >
              <span className="size-1.5 rounded-full bg-primary/80" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
