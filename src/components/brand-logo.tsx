import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const variants = {
  /** Full ASR + All Slopes lockup (landscape). */
  full: {
    src: "/logo/asr-logo.png",
    width: 804,
    height: 520,
  },
  blue: {
    src: "/logo/asr-logo-blue.png",
    width: 804,
    height: 520,
  },
  /** Square ASR monogram for compact / icon use. */
  mark: {
    src: "/logo/asr-mark.png",
    width: 512,
    height: 512,
  },
} as const;

type BrandLogoProps = {
  variant?: keyof typeof variants;
  /** Rendered CSS height in px; width follows the asset aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "full",
  height = 48,
  className,
  priority = false,
}: BrandLogoProps) {
  const asset = variants[variant];
  const width = Math.round(height * (asset.width / asset.height));

  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center", className)}
      style={{ width, height }}
    >
      <Image
        src={asset.src}
        alt={`${site.parent} logo`}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className="h-full w-full object-contain object-center"
        sizes={`${width}px`}
      />
    </span>
  );
}
