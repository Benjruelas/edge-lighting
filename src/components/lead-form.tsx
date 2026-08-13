"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Phone } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { packages } from "@/lib/offer";
import { site } from "@/lib/site";

const initial: LeadState = { ok: false, message: "" };

const fieldClass =
  "h-12 rounded-xl px-3.5 text-base md:h-11 md:text-sm";

export function LeadForm() {
  const router = useRouter();
  const [state, action, pending] = useActionState(submitLead, initial);

  useEffect(() => {
    if (state.ok) {
      router.push("/thank-you");
    }
  }, [state, router]);

  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Jordan"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(682) 555-0123"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Street address / city</Label>
        <Input
          id="address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="Mansfield, TX"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="package">Package interest</Label>
        <select
          id="package"
          name="package"
          defaultValue=""
          className="h-12 w-full rounded-xl border border-input bg-transparent px-3.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:h-11 md:text-sm dark:bg-input/30"
        >
          <option value="">Not sure yet</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.name}>
              {pkg.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Anything we should know? (optional)</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Two-story, HOA, want Christmas ready by November…"
          className="min-h-24 rounded-xl px-3.5 text-base md:text-sm"
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="smsConsent"
          className="mt-0.5 size-5 shrink-0 accent-[var(--amber)] sm:size-4"
          required
        />
        <span>
          I agree to be contacted by phone, text, or email about my free
          After-Dark Design Visit. Message/data rates may apply. Reply STOP to
          opt out. See{" "}
          <a
            href="/privacy"
            className="text-primary underline-offset-2 hover:underline"
          >
            Privacy
          </a>
          .
        </span>
      </label>

      {state.message ? (
        <p
          className={
            state.ok
              ? "rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary"
              : "rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          }
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
        <Button
          type="submit"
          disabled={pending}
          className="h-12 flex-1 text-[15px] glow-amber"
        >
          {pending ? "Sending…" : "Book my free design visit"}
        </Button>
        <Button
          asChild
          type="button"
          variant="secondary"
          className="h-12 flex-1 text-[15px]"
        >
          <a href={`tel:${site.phoneTel}`}>
            <Phone className="size-4" />
            Call {site.phoneDisplay}
          </a>
        </Button>
      </div>
    </form>
  );
}
