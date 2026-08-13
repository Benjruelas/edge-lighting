import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata = {
  title: "Design request received",
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 section-pad section-y">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            YOU&apos;RE ON THE LIST
          </p>
          <h1 className="mt-3 font-heading text-4xl text-balance">
            Request received — we&apos;ll confirm your After-Dark Design Visit.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Expect a call or text from {site.parent} within one business day. Want
            to move faster? Call us now.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="glow-amber">
              <a href={`tel:${site.phoneTel}`}>
                <Phone className="size-4" />
                Call {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/">Back to Edge Lighting</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
