"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function BeforeAfter() {
  const [pos, setPos] = useState(54);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(next, 8, 92));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card glow-amber-soft">
      <div
        ref={frameRef}
        role="slider"
        aria-label="Compare night and day lighting"
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setPos((p) => clamp(p - 3, 8, 92));
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setPos((p) => clamp(p + 3, 8, 92));
          }
        }}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none sm:aspect-[16/10]"
      >
        <Image
          src="/gallery/slider-day-v3.png"
          alt="Same home by day with edge lighting off"
          fill
          priority
          draggable={false}
          className="pointer-events-none object-cover object-center"
          sizes="(max-width: 768px) 100vw, 640px"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src="/gallery/slider-night-v3.png"
            alt="Same home at night with warm white edge lighting on"
            fill
            priority
            draggable={false}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-primary shadow-[0_0_24px_var(--amber-glow)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background/90 text-sm text-primary shadow-lg backdrop-blur sm:size-9 sm:text-xs">
            ↔
          </div>
        </div>
        <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-background/75 px-3 py-1.5 text-xs font-medium backdrop-blur">
          Night
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/10 bg-background/75 px-3 py-1.5 text-xs font-medium backdrop-blur">
          Day
        </div>
      </div>
      <div className="border-t border-border px-4 py-3">
        <p className="text-center text-sm text-muted-foreground">
          Drag across the image to compare night vs day.
        </p>
      </div>
    </div>
  );
}
