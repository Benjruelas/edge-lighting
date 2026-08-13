import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/offer";

export function Process() {
  return (
    <section className="section-y section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="THE PROCESS"
              title="From design visit to night walkthrough — usually one day on site."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border glow-amber-soft">
              <Image
                src="/gallery/install-process.png"
                alt="Professional one-day edge lighting installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <li className="surface-panel relative h-full p-5">
                <div className="relative">
                  <span className="font-heading text-4xl text-primary/50">
                    0{step.step}
                  </span>
                  <h3 className="mt-3 font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
