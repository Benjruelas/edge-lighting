import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-primary/80" />
        <p className="text-[11px] font-semibold tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.18em]">
          {eyebrow}
        </p>
        {align === "center" ? (
          <span className="h-px w-8 bg-primary/80" />
        ) : null}
      </div>
      <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.15] text-balance sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
