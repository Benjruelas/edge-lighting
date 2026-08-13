import Image from "next/image";
import { AmbientGlow } from "@/components/ambient-glow";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  bonusTotal,
  bonuses,
  coreIncludes,
  formatUsd,
  offer,
} from "@/lib/offer";

export function ValueStack() {
  return (
    <section
      id="offer"
      className="relative scroll-mt-20 overflow-hidden section-y section-pad"
    >
      <AmbientGlow position="top" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="THE VALUE STACK"
            title={offer.name}
            description="We don’t discount. We stack value until saying no feels expensive."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="surface-panel border-primary/35 p-6 sm:p-8">
              <div className="relative">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-border/70">
                  <Image
                    src="/gallery/track-detail.png"
                    alt="Color-matched aluminum track detail"
                    fill
                    className="object-cover"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold tracking-[0.16em] text-primary">
                    CORE SYSTEM
                  </p>
                </div>
                <ul className="space-y-3">
                  {coreIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--amber-glow)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                  Published rate:{" "}
                  <span className="font-semibold text-primary">
                    ${offer.pricePerFoot}/linear foot
                  </span>{" "}
                  all-inclusive.
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {bonuses.map((bonus, i) => (
              <Reveal key={bonus.title} delay={i * 60}>
                <div className="group flex flex-col gap-2 rounded-xl border border-border bg-card/70 px-4 py-4 transition-colors hover:border-primary/35 hover:bg-card sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-5">
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3 sm:block">
                      <p className="text-xs tracking-wide text-muted-foreground">
                        Bonus #{i + 1}
                      </p>
                      <p className="font-heading text-base text-primary sm:hidden">
                        {bonus.valueLabel}
                      </p>
                    </div>
                    <p className="mt-1 font-medium text-foreground">
                      {bonus.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {bonus.description}
                    </p>
                  </div>
                  <p className="hidden shrink-0 font-heading text-lg text-primary transition-transform group-hover:scale-105 sm:block">
                    {bonus.valueLabel}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={bonuses.length * 60}>
              <div className="rounded-xl border border-primary/40 bg-gradient-to-r from-primary/15 to-primary/5 px-5 py-4 text-sm glow-amber-soft">
                <span className="text-muted-foreground">
                  Stacked bonus value ≈{" "}
                </span>
                <span className="font-heading text-xl text-primary">
                  {formatUsd(bonusTotal)}+
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  — included with every install.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
