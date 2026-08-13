import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offer } from "@/lib/offer";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden noise-overlay">
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/gallery/hero-wide-estate.png"
            alt="DFW home with warm edge lighting glowing along the eaves at dusk"
            fill
            priority
            className="object-cover object-[68%_40%] ken-burns sm:object-[center_35%]"
            sizes="100vw"
          />
        </div>
        {/* Desktop: side fade. Mobile: heavy bottom/top wash so type stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/55 sm:via-background/35 sm:to-background/50" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background via-background/80 to-background/25 sm:block" />
        <div className="absolute inset-x-0 bottom-[34%] h-px eave-sweep bg-gradient-to-r from-transparent via-primary/70 to-transparent sm:bottom-[28%]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent sm:h-40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end section-pad pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-24 sm:pb-24 sm:pt-32 md:pb-28">
        <div className="max-w-2xl">
          <p className="hero-enter text-xs font-semibold tracking-[0.28em] text-primary sm:text-sm">
            EDGE LIGHTING
          </p>
          <p className="hero-enter hero-enter-delay-1 mt-1.5 text-[11px] tracking-[0.14em] text-muted-foreground sm:mt-2 sm:text-sm sm:tracking-[0.16em]">
            BY ALL SLOPES ROOFING
          </p>
          <h1 className="hero-enter hero-enter-delay-2 mt-4 font-heading text-[2.4rem] leading-[1.08] text-balance text-foreground sm:mt-5 sm:text-6xl lg:text-7xl">
            Invisible by day.
            <br />
            <span className="italic text-primary text-glow">Unforgettable</span>{" "}
            after dark.
          </h1>
          <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Aluminum-track LED soffit lighting for Mansfield &amp; {site.region}
            — installed in one day by a roofing crew.
          </p>
          <div className="hero-enter hero-enter-delay-4 mt-7 flex w-full flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 w-full px-6 text-[15px] pulse-glow sm:w-auto"
            >
              <a href="#design">Book free After-Dark Design</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 w-full px-6 text-[15px] sm:w-auto"
            >
              <a href={`tel:${site.phoneTel}`}>
                <Phone className="size-4" />
                {site.phoneDisplay}
              </a>
            </Button>
          </div>
          <p className="hero-enter hero-enter-delay-4 mt-4 text-xs leading-relaxed text-muted-foreground/90 sm:mt-5 sm:text-sm">
            <span className="sm:hidden">
              ${offer.pricePerFoot}/ft all-in · Design visit $0
            </span>
            <span className="hidden sm:inline">
              {offer.name} · ${offer.pricePerFoot}/ft all-inclusive · Design
              visit $0
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
