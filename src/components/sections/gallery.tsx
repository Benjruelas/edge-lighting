import Image from "next/image";
import { BeforeAfter } from "@/components/before-after";
import { Reveal } from "@/components/reveal";
import { SceneSwitcher } from "@/components/scene-switcher";
import { SectionHeading } from "@/components/section-heading";

const ribbon = [
  { src: "/gallery/hero-warm-white.png", alt: "Warm white edge lighting" },
  { src: "/gallery/scene-christmas.png", alt: "Christmas scene" },
  { src: "/gallery/scene-cowboys.png", alt: "Cowboys game night scene" },
  { src: "/gallery/scene-halloween.png", alt: "Halloween scene" },
  { src: "/gallery/led-nodes-glow.png", alt: "LED nodes glowing in track" },
  { src: "/gallery/track-detail.png", alt: "Daytime track detail" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 section-y">
      <div className="section-pad mx-auto w-full max-w-6xl">
        <Reveal className="mx-auto w-full">
          <SectionHeading
            align="center"
            eyebrow="SHOW, DON'T TELL"
            title="One system. Every occasion. Zero ladders."
            description="Tap a scene. Drag day vs night. Zoom in on the track that disappears when the lights are off."
          />
        </Reveal>

        <div className="mx-auto mt-8 grid w-full max-w-5xl gap-4 sm:mt-12 sm:gap-6 lg:max-w-none lg:grid-cols-2">
          <Reveal className="mx-auto w-full max-w-xl lg:max-w-none">
            <SceneSwitcher />
          </Reveal>
          <Reveal
            delay={120}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <BeforeAfter />
          </Reveal>
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-5xl gap-6 md:max-w-none md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="mx-auto w-full max-w-xl md:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border glow-amber-soft">
              <Image
                src="/gallery/led-nodes-glow.png"
                alt="Close-up of glowing LED nodes in aluminum track"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="mx-auto w-full max-w-xl md:max-w-none"
          >
            <div className="surface-panel flex h-full flex-col justify-center p-6 sm:p-8">
              <div className="relative">
                <h3 className="font-heading text-2xl sm:text-3xl">
                  HOA-friendly by design
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Powder-coated aluminum track sits under the eave, color-matched
                  to your fascia. From the street in daylight, most neighbors never
                  notice it — until night falls and your home looks like it belongs
                  on a magazine cover.
                </p>
                <div className="mt-6 h-px w-full light-line" />
                <p className="mt-4 text-sm text-primary">
                  Daytime off-state photos included for your HOA board.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
        <div className="marquee-track flex min-w-max gap-3 pr-3">
          {[...ribbon, ...ribbon].map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative h-36 w-56 shrink-0 overflow-hidden rounded-xl border border-border/70 sm:h-44 sm:w-72"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
