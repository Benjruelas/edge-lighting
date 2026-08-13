"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { estimateFromFeet, formatUsd, PRICE_PER_FOOT } from "@/lib/offer";

export function PriceEstimator() {
  const [feet, setFeet] = useState(150);
  const estimate = estimateFromFeet(feet);

  return (
    <div className="surface-panel p-5 sm:p-8">
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary">
            Instant estimate
          </p>
          <h3 className="mt-1 font-heading text-xl text-foreground sm:text-3xl">
            How many linear feet?
          </h3>
        </div>
        <div className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-left sm:border-0 sm:bg-transparent sm:p-0 sm:text-right">
          <p className="font-heading text-4xl text-primary text-glow sm:text-5xl">
            {formatUsd(estimate)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {feet} ft × ${PRICE_PER_FOOT}/ft
          </p>
        </div>
      </div>

      <div className="relative mt-8 space-y-4">
        <Slider
          value={[feet]}
          onValueChange={(v) => setFeet(v[0] ?? 150)}
          min={60}
          max={300}
          step={5}
          aria-label="Linear feet of lighting"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>60 ft</span>
          <span>Typical front: ~100 ft</span>
          <span>300 ft</span>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        All-inclusive at ${PRICE_PER_FOOT}/ft — track, LEDs, controller,
        color-match, and install. Two-story, steep, or complex hip roofs may
        adjust after your free measure. Final quote comes from the After-Dark
        Design Visit.
      </p>
    </div>
  );
}
