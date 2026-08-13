import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { offer } from "@/lib/offer";
import { site } from "@/lib/site";

export const alt = `${site.brand} by ${site.parent} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(filename: string) {
  return readFile(join(process.cwd(), "assets/fonts", filename));
}

export default async function OpenGraphImage() {
  const [heroPng, dmSans, newsreader, newsreaderItalic] = await Promise.all([
    readFile(join(process.cwd(), "public/gallery/hero-wide-estate.png")),
    loadFont("DMSans-SemiBold.woff"),
    loadFont("Newsreader-Medium.woff"),
    loadFont("Newsreader-MediumItalic.woff"),
  ]);

  const heroSrc = `data:image/png;base64,${heroPng.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#070708",
          color: "#f5f1e8",
          overflow: "hidden",
        }}
      >
        {/* Full-bleed hero photo */}
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "68% 40%",
          }}
        />

        {/* Left wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(7,7,8,0.94) 0%, rgba(7,7,8,0.78) 42%, rgba(7,7,8,0.28) 72%, rgba(7,7,8,0.12) 100%)",
          }}
        />

        {/* Bottom wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(7,7,8,0.45) 0%, rgba(7,7,8,0.15) 35%, rgba(7,7,8,0.55) 70%, rgba(7,7,8,0.92) 100%)",
          }}
        />

        {/* Amber eave sweep */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 318,
            height: 2,
            display: "flex",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(232,184,109,0.75) 35%, rgba(232,184,109,0.35) 70%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "56px 64px 48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 7,
                color: "#e8b86d",
              }}
            >
              EDGE LIGHTING
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 4,
                color: "#a39e93",
              }}
            >
              BY ALL SLOPES ROOFING
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Newsreader",
                fontSize: 64,
                lineHeight: 1.05,
                color: "#f5f1e8",
              }}
            >
              <div style={{ display: "flex" }}>Invisible by day.</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "Newsreader Italic",
                    fontStyle: "italic",
                    color: "#e8b86d",
                  }}
                >
                  Unforgettable
                </span>
                <span style={{ marginLeft: 14 }}>after dark.</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 26,
                lineHeight: 1.35,
                color: "#a39e93",
                maxWidth: 720,
              }}
            >
              Aluminum-track LED soffit lighting for Mansfield & {site.region} —
              installed in one day by a roofing crew.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "DM Sans",
              fontSize: 20,
              fontWeight: 600,
              color: "#e8b86d",
              letterSpacing: 0.5,
            }}
          >
            <span>${offer.pricePerFoot}/ft all-inclusive</span>
            <span>Free After-Dark Design</span>
            <span>{site.phoneDisplay}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Sans",
          data: dmSans,
          style: "normal",
          weight: 600,
        },
        {
          name: "Newsreader",
          data: newsreader,
          style: "normal",
          weight: 500,
        },
        {
          name: "Newsreader Italic",
          data: newsreaderItalic,
          style: "italic",
          weight: 500,
        },
      ],
    },
  );
}
