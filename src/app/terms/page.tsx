import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { guarantees, offer, packages, PRICE_PER_FOOT } from "@/lib/offer";
import { site } from "@/lib/site";

export const metadata = {
  title: "Offer terms & warranties",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 section-pad section-y">
        <article className="mx-auto max-w-3xl space-y-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              TERMS
            </p>
            <h1 className="mt-3 font-heading text-4xl">
              Edge Lighting offer terms &amp; warranties
            </h1>
            <p className="mt-4 text-muted-foreground">
              These terms describe {offer.name} offered by {site.legalName}{" "}
              (&quot;All Slopes,&quot; &quot;we,&quot; &quot;us&quot;) for permanent
              aluminum-track LED soffit lighting in the {site.region} service area.
              Last updated August 2026.
            </p>
          </div>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">
              1. Service area
            </h2>
            <p>
              {site.serviceArea}. Final eligibility confirmed at the design visit.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">2. Pricing</h2>
            <p>
              Published rate is ${PRICE_PER_FOOT} per linear foot of installed
              lighting, all-inclusive of track, LEDs, controller, color-match,
              labor, and the bonus stack advertised on the website. Package
              starting prices:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              {packages.map((pkg) => (
                <li key={pkg.id}>
                  <strong className="text-foreground">{pkg.name}</strong> — from $
                  {pkg.priceFrom.toLocaleString()} (typical {pkg.feet})
                </li>
              ))}
            </ul>
            <p>
              Two-story elevations, steep pitches, complex hips/valleys, or
              unusual access may adjust the final quote after on-site measurement.
              Website estimates are not binding quotes.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">3. Payment</h2>
            <p>{offer.paymentTerms}</p>
          </section>

          <section className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">
              4. Guarantees
            </h2>
            {guarantees.map((g) => (
              <div key={g.title} className="space-y-1">
                <h3 className="text-base font-medium text-foreground">
                  {g.title}{" "}
                  <span className="font-normal text-muted-foreground">
                    ({g.type})
                  </span>
                </h3>
                <p>{g.description}</p>
              </div>
            ))}
            <p>
              Warranties apply to the original purchaser for installations
              completed by All Slopes at the address on the signed proposal. Abuse,
              third-party modification, power surges outside normal residential
              conditions, or failure to provide reasonable access may void
              coverage. Lifetime workmanship means for as long as the original
              purchaser owns the home.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">
              5. Design visit
            </h2>
            <p>
              The After-Dark Design Visit is complimentary and carries no
              obligation to purchase. If you decline the proposal, you owe nothing
              for the visit.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">
              6. Brand clarity
            </h2>
            <p>
              Edge Lighting is a service of {site.legalName}. We are not a
              JellyFish Lighting, Trimlight, EverLights, or other franchise dealer
              unless separately stated in a written agreement. Comparisons on the
              website use publicly available market pricing ranges for educational
              purposes.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">
              7. Capacity &amp; scheduling
            </h2>
            <p>
              {offer.scarcity} Install dates are confirmed only after deposit and
              material order.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl text-foreground">8. Contact</h2>
            <p>
              {site.legalName}
              <br />
              {site.address}
              <br />
              <a
                href={`tel:${site.phoneTel}`}
                className="text-primary hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </section>

          <Link href="/" className="inline-block text-primary hover:underline">
            ← Back to Edge Lighting
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
