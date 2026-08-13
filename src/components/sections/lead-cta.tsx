import Image from "next/image";
import { AmbientGlow } from "@/components/ambient-glow";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { offer } from "@/lib/offer";
import { site } from "@/lib/site";

export function LeadCta() {
  return (
    <section
      id="design"
      className="relative scroll-mt-20 overflow-hidden section-y section-pad"
    >
      <AmbientGlow position="center" />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/gallery/hero-wide-estate.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="FREE AFTER-DARK DESIGN"
            title="Book the visit. Keep the risk on us."
            description="Tell us about your home. We’ll call to schedule a $0 design visit — measure, recommend a package, and show you the plan. Don’t love it? You pay nothing."
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Response typically within one business day",
              `Serving ${site.serviceArea}`,
              `Or call now: ${site.phoneDisplay}`,
              offer.scarcity,
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--amber-glow)]" />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-panel border-primary/25 p-4 glow-amber-soft sm:p-8">
            <div className="relative">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
