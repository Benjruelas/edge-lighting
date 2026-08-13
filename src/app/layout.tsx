import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#070708",
};

const shareTitle = `${site.brand} by ${site.parent} | ${site.tagline}`;
const shareDescription =
  "Permanent aluminum-track LED soffit lighting for Mansfield & DFW — installed in one day. Book a free After-Dark Design.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} by ${site.parent} | Permanent LED Soffit Lighting DFW`,
    template: `%s | ${site.brand}`,
  },
  description:
    "Professional aluminum-track LED soffit lighting (edge lighting / jellyfish-style) for Mansfield & DFW. Invisible by day. Unforgettable after dark. Free After-Dark Design.",
  keywords: [
    "edge lighting",
    "jellyfish lighting",
    "permanent LED Christmas lights",
    "aluminum track LED soffit lighting",
    "Mansfield TX",
    "DFW",
    "All Slopes Roofing",
  ],
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    locale: "en_US",
    siteName: `${site.brand} by ${site.parent}`,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
  },
  icons: {
    icon: [
      { url: "/logo/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/logo/asr-mark.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo/apple-touch-icon.png", sizes: "512x512" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${dmSans.variable} ${newsreader.variable} h-full`}
    >
      <body className={`${dmSans.className} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
