import Image from "next/image";
import { AmbientGlow } from "@/components/ambient-glow";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { offer } from "@/lib/offer";
import { site } from "@/lib/site";

export function Mechanism() {
  return (
    <section className="relative overflow-hidden section-y section-pad">
      <AmbientGlow position="center" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.6rem] bg-primary/10 blur-2xl" />
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] border border-primary/20 glow-amber-soft">
              <Image
                src="/gallery/install-process.png"
                alt="All Slopes crew installing aluminum LED track under eaves"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary">
                  ROOFING CREW INSTALL
                </p>
                <p className="mt-1 text-sm text-foreground/90">
                  Soffit work by people who already own the eaves.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="THE UNIQUE MECHANISM"
            title="Soffit lighting installed by the company that already owns the eaves."
            description={offer.uniqueMechanism}
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {site.parent} is family-owned in Mansfield — led by Steve and Ben
            Ruelas. We already work roofs, fascia, and soffits across DFW. Edge
            Lighting is the natural next layer: clean aluminum track, addressable
            LEDs, and a workmanship guarantee that only a roofing crew can stand
            behind.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["Family-owned", "Mansfield / DFW"],
              ["Install speed", "Typically 1 day"],
              ["Daytime look", "Nearly invisible"],
              ["Guarantee", "Lifetime workmanship"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-border/80 bg-card/50 px-4 py-3"
              >
                <p className="text-xs tracking-wide text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
