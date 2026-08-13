"use client";

import Image from "next/image";
import { useState } from "react";
import { scenes } from "@/lib/offer";
import { cn } from "@/lib/utils";

type SceneId = (typeof scenes)[number]["id"];

export function SceneSwitcher() {
  const [active, setActive] = useState<SceneId>(scenes[0].id);
  const current = scenes.find((s) => s.id === active) ?? scenes[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card glow-amber-soft">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        {scenes.map((scene) => (
          <Image
            key={scene.id}
            src={scene.image}
            alt={`${scene.label} edge lighting scene`}
            fill
            className={cn(
              "object-cover transition-all duration-700",
              scene.id === current.id
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0",
            )}
            sizes="(max-width: 1024px) 100vw, 720px"
            priority={scene.id === "warm-white"}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 pt-16 sm:p-5 sm:pt-20">
          <p className="font-heading text-xl text-white sm:text-3xl">
            {current.label}
          </p>
          <p className="mt-1 text-xs text-white/75 sm:text-sm">
            {current.caption}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 border-t border-border/70 bg-background/40 p-3 sm:p-4">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            type="button"
            onClick={() => setActive(scene.id)}
            className={cn(
              "rounded-full border px-4 py-2.5 text-sm transition-all active:scale-[0.98]",
              scene.id === active
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_var(--amber-glow)]"
                : "border-border bg-secondary/80 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {scene.label}
          </button>
        ))}
      </div>
    </div>
  );
}
