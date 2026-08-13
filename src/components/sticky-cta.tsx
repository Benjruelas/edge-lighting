import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/94 px-3 pt-3 shadow-[0_-12px_40px_rgb(0_0_0_/_45%)] backdrop-blur-xl md:hidden"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5">
        <Button
          asChild
          variant="secondary"
          className="h-14 gap-2 rounded-xl px-4 text-base font-semibold"
        >
          <a href={`tel:${site.phoneTel}`}>
            <Phone className="size-5" />
            Call now
          </a>
        </Button>
        <Button
          asChild
          className="h-14 rounded-xl px-4 text-base font-semibold pulse-glow"
        >
          <a href="#design">Get my design</a>
        </Button>
      </div>
    </div>
  );
}
