"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#gallery", label: "See it" },
  { href: "#offer", label: "The offer" },
  { href: "#pricing", label: "Pricing" },
  { href: "#guarantees", label: "Guarantees" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/90 shadow-[0_10px_40px_rgb(0_0_0_/_35%)] backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-background/80 to-transparent backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 section-pad sm:h-[4.75rem]">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <BrandLogo
            variant="full"
            height={42}
            priority
            className="sm:hidden"
          />
          <BrandLogo
            variant="full"
            height={52}
            priority
            className="hidden sm:inline-flex"
          />
          <div className="min-w-0 leading-tight">
            <div className="text-[10px] font-semibold tracking-[0.2em] text-primary sm:text-[11px] sm:tracking-[0.24em]">
              EDGE LIGHTING
            </div>
            <div className="truncate text-[10px] tracking-wide text-muted-foreground">
              <span className="sm:hidden">by All Slopes</span>
              <span className="hidden sm:inline">by {site.parent}</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={`tel:${site.phoneTel}`}>
              <Phone className="size-4" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="sm" className="glow-amber">
            <a href="#design">Get my design</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card">
            <SheetHeader>
              <SheetTitle className="font-heading text-left">
                Edge Lighting
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4 px-4">
              <BrandLogo variant="full" height={64} />
            </div>
            <div className="mt-6 flex flex-col gap-4 px-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4">
                <a href={`tel:${site.phoneTel}`} onClick={() => setOpen(false)}>
                  <Phone className="size-4" />
                  Call {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#design" onClick={() => setOpen(false)}>
                  Get my design
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
