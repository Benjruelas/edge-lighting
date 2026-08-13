import { ImageResponse } from "next/og";

export const alt = "Edge Lighting by All Slopes Roofing & Exteriors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#f5f1e8",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#e8b86d",
            fontWeight: 700,
          }}
        >
          EDGE LIGHTING
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            Invisible by day. Unforgettable after dark.
          </div>
          <div style={{ fontSize: 28, color: "#a39e93", maxWidth: 800 }}>
            Permanent aluminum-track LED soffit lighting for Mansfield & DFW —
            by All Slopes Roofing & Exteriors.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#e8b86d",
          }}
        >
          <span>$28/ft all-inclusive</span>
          <span>(682) 300-5502</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
