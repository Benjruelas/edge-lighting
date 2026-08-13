import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CalendarRange,
  Hammer,
  MoonStar,
  PencilRuler,
  SunMedium,
} from "lucide-react";
import { AmbientGlow } from "@/components/ambient-glow";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { guarantees } from "@/lib/offer";

const guaranteeIcons: Record<(typeof guarantees)[number]["title"], LucideIcon> =
  {
    "Free After-Dark Design": PencilRuler,
    "30-Night Make-It-Right": MoonStar,
    "Lifetime Workmanship": Hammer,
    "5-Year Parts": CalendarRange,
    "Texas Weather Promise": SunMedium,
  };

export function Guarantees() {
  return (
    <section
      id="guarantees"
      className="relative scroll-mt-20 overflow-hidden section-y section-pad"
    >
      <AmbientGlow position="top" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="RISK REVERSAL"
            title="Five guarantees. You keep the upside. We keep the risk."
            description="Custom installed lighting shouldn’t be “no questions asked refund.” It should be service guarantees that make saying yes feel safe."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => {
            const Icon = guaranteeIcons[g.title];
            return (
              <Reveal key={g.title} delay={i * 70}>
                <div className="surface-panel group h-full p-6 transition-colors hover:border-primary/35">
                  <div className="relative">
                    <div className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_24px_var(--amber-glow)]">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-heading text-xl">{g.title}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                      {g.type}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {g.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Full warranty language lives on our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms
          </Link>{" "}
          page — specific, not slogan-y.
        </p>
      </div>
    </section>
  );
}
