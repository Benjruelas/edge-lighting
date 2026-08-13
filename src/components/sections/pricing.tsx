import { AmbientGlow } from "@/components/ambient-glow";
import { PriceEstimator } from "@/components/price-estimator";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { formatUsd, offer, packages } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 overflow-hidden section-y section-pad"
    >
      <AmbientGlow position="bottom" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="PRICING"
            title="Buy a system — not a commodity foot of LED."
            description={`Premium to the discounters. Below franchise + controller sticker shock. Transparent DFW pricing at $${offer.pricePerFoot}/ft.`}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal
              key={pkg.id}
              delay={i * 90}
              className={cn(pkg.highlight && "order-first lg:order-none")}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-7",
                  pkg.highlight
                    ? "border-primary bg-gradient-to-b from-primary/15 via-card to-card glow-amber"
                    : "border-border bg-card/70",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-2xl sm:text-3xl">{pkg.name}</h3>
                  {pkg.highlight ? (
                    <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                      Most chosen
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.feet}</p>
                <p className="mt-5 font-heading text-4xl text-primary sm:mt-6 sm:text-5xl">
                  {formatUsd(pkg.priceFrom)}
                  <span className="text-base text-muted-foreground"> from</span>
                </p>
                <div className="my-5 h-px w-full light-line opacity-60" />
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Best for · {pkg.bestFor}
                </p>
                <Button
                  asChild
                  className={cn("mt-6 h-11", pkg.highlight && "pulse-glow")}
                  variant={pkg.highlight ? "default" : "secondary"}
                >
                  <a href="#design">Get this design</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8">
            <PriceEstimator />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="surface-panel p-5 text-sm text-muted-foreground">
              <div className="relative">
                <p className="font-medium text-foreground">Payment terms</p>
                <p className="mt-2">{offer.paymentTerms}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-panel p-5 text-sm text-muted-foreground">
              <div className="relative">
                <p className="font-medium text-foreground">Financing</p>
                <p className="mt-2">{offer.financingNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-center text-sm text-primary">{offer.scarcity}</p>
      </div>
    </section>
  );
}
