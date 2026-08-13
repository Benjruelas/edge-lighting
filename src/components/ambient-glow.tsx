export function AmbientGlow({
  position = "top",
}: {
  position?: "top" | "center" | "bottom";
}) {
  return (
    <div
      aria-hidden
      className={
        position === "top"
          ? "pointer-events-none absolute inset-x-0 top-0 h-[480px] ambient-glow"
          : position === "bottom"
            ? "pointer-events-none absolute inset-x-0 bottom-0 h-[420px] ambient-glow rotate-180"
            : "pointer-events-none absolute inset-0 ambient-glow-center"
      }
    />
  );
}
