import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { Compare } from "@/components/sections/compare";
import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Guarantees } from "@/components/sections/guarantees";
import { Hero } from "@/components/sections/hero";
import { LeadCta } from "@/components/sections/lead-cta";
import { Mechanism } from "@/components/sections/mechanism";
import { Pricing } from "@/components/sections/pricing";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ValueStack } from "@/components/sections/value-stack";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Problem />
        <Mechanism />
        <Gallery />
        <ValueStack />
        <Pricing />
        <Guarantees />
        <Process />
        <Compare />
        <Faq />
        <LeadCta />
      </main>
      <div className="mobile-bottom-safe">
        <SiteFooter />
      </div>
      <StickyCta />
    </>
  );
}
