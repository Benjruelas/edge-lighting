import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 section-pad section-y">
        <article className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            PRIVACY
          </p>
          <h1 className="font-heading text-4xl">Privacy &amp; communications</h1>
          <p className="text-muted-foreground">
            {site.legalName} (&quot;we&quot;) collects information you submit on
            the Edge Lighting website to respond to quote and design-visit
            requests. Last updated August 2026.
          </p>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-xl text-foreground">
              What we collect
            </h2>
            <p>
              Name, phone, email, property address/city, package interest, and any
              notes you provide on the lead form. If you call us, we may also
              collect information you share verbally.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-xl text-foreground">How we use it</h2>
            <p>
              We use your information to schedule design visits, prepare estimates,
              perform installations, honor warranties, and send service-related
              communications. We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-xl text-foreground">
              SMS &amp; phone consent
            </h2>
            <p>
              By checking the consent box on our form, you agree that we may
              contact you by phone call, text message, or email about your Edge
              Lighting inquiry and related services. Message and data rates may
              apply. Message frequency varies. Reply STOP to opt out of texts; reply
              HELP for help. Consent is not a condition of purchase.
            </p>
          </section>

          <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-xl text-foreground">Contact</h2>
            <p>
              Questions:{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="text-primary hover:underline"
              >
                {site.phoneDisplay}
              </a>{" "}
              · {site.address}
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
