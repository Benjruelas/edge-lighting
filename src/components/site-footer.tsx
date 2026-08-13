import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/50 md:pb-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px light-line" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 section-pad section-y sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-4 sm:max-w-md">
          <BrandLogo variant="full" height={80} />
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-primary">
              EDGE LIGHTING
            </p>
            <p className="mt-1 font-heading text-2xl text-foreground">
              by {site.parent}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Permanent aluminum-track LED soffit lighting for Mansfield &amp;{" "}
              {site.region}. Family-owned. Roof-ready installers.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <a
              href={`tel:${site.phoneTel}`}
              className="text-lg text-foreground transition-colors hover:text-primary"
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p>{site.address}</p>
          <p className="max-w-xs">{site.serviceArea}</p>
          <div className="flex gap-4 pt-3">
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <a href="#design" className="hover:text-primary">
              Get a design
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
