import { AmbientGlow } from "@/components/ambient-glow";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const problems = [
  {
    title: "Seasonal labor forever",
    body: "Hang lights. Take them down. Store them. Repeat every October — or pay someone $300–$800 every year.",
    visual: "from-amber-900/20 to-transparent",
  },
  {
    title: "Ugly daytime hardware",
    body: "Cheap clips and tangled cords ruin the look when the holidays end. Your home shouldn’t look half-finished in March.",
    visual: "from-stone-700/25 to-transparent",
  },
  {
    title: "Franchise sticker shock",
    body: "National brands often quote $25–$40/ft — then add $650–$850 for a controller. Same aluminum track idea. Different invoice.",
    visual: "from-orange-900/20 to-transparent",
  },
];

export function Problem() {
  return (
    <section className="relative section-y section-pad">
      <AmbientGlow position="top" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="THE PROBLEM"
            title="Clip-ons, ladders, and franchise markups steal the joy."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="surface-panel group h-full p-6 sm:p-7">
                <div
                  className={`pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.visual} blur-2xl transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <span className="font-heading text-4xl text-primary/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
