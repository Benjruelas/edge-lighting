import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/offer";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 section-y section-pad">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Objections, answered."
          />
        </Reveal>

        <Reveal delay={100}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 rounded-2xl border border-border bg-card/40 px-2 sm:px-4"
          >
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
