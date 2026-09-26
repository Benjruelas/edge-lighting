export const REGULAR_PRICE_PER_FOOT = 28;
export const DEAL_PRICE_PER_FOOT = 24.25;
/** Active quote rate while the Thanksgiving deal is running. */
export const PRICE_PER_FOOT = DEAL_PRICE_PER_FOOT;

export const deal = {
  active: true,
  endsLabel: "Thanksgiving",
  /** ISO date for Thanksgiving 2026 (Thursday, Nov 26). */
  endsOn: "2026-11-26",
  badge: "Thanksgiving deal",
  savingsLabel: `Save $${(REGULAR_PRICE_PER_FOOT - DEAL_PRICE_PER_FOOT).toFixed(2)}/ft`,
} as const;

export const offer = {
  name: "The After-Dark Curb Appeal System",
  shortName: "After-Dark System",
  dreamOutcome:
    "A color-matched aluminum-track LED halo under your eaves — invisible by day, stunning every night — installed in one day by a roofing crew.",
  uniqueMechanism:
    "This is not a lighting franchise. It is soffit lighting installed by the company that already works on DFW roofs, fascia, and eaves — so the workmanship guarantee can last as long as you own the home.",
  starvingCrowd:
    "DFW homeowners who want a home that looks expensive after dark — holidays, Cowboys nights, everyday warm white — without ladders, clip-on lights, or a national-franchise markup.",
  /** Regular published rate before the promotional deal. */
  regularPricePerFoot: REGULAR_PRICE_PER_FOOT,
  /** Active promotional rate while the deal runs. */
  pricePerFoot: PRICE_PER_FOOT,
  bestDeal:
    `Normally $${REGULAR_PRICE_PER_FOOT}/ft — lock in $${DEAL_PRICE_PER_FOOT}/ft all-in through ${deal.endsLabel}, controller included.`,
  financingNote:
    "As low as ~$99/mo on a typical Street Face package via third-party financing (subject to approval).",
  scarcity:
    `Thanksgiving deal ends ${deal.endsLabel}. Only 6 Edge Lighting installs per month in DFW — holiday calendars fill fast.`,
} as const;

export const coreIncludes = [
  "Color-matched powder-coated aluminum track",
  "Addressable RGB-WW LED nodes",
  "Weather-rated outdoor controller",
  "Hidden wiring under the eaves",
  "Professional soffit installation",
  "Smartphone app control & scheduling",
] as const;

export const bonuses = [
  {
    title: "Controller Included",
    value: 750,
    valueLabel: "$650–$850",
    description:
      "National brands often charge separately for the brain of the system. Yours is included.",
  },
  {
    title: "Fascia Color-Match",
    value: 350,
    valueLabel: "$350",
    description:
      "Track powder-coated to blend with your fascia so daytime curb appeal stays clean.",
  },
  {
    title: "Complimentary Soffit & Fascia Inspection",
    value: 199,
    valueLabel: "$199",
    description:
      "A roofing crew walks your eaves before we install — so surprises get caught early.",
  },
  {
    title: "8 Preloaded Scenes",
    value: 250,
    valueLabel: "$250",
    description:
      "Everyday warm white, Christmas, Halloween, July 4th, Cowboys, birthday, patio dinner, and security white.",
  },
  {
    title: "15-Minute In-Home App Walkthrough",
    value: 150,
    valueLabel: "$150",
    description:
      "We set up the app on your phone and show you schedules, scenes, and music sync.",
  },
] as const;

export const packages = [
  {
    id: "street-face",
    name: "Street Face",
    priceFrom: 2590,
    regularPriceFrom: 2990,
    feet: "90–110 ft",
    description:
      "The street-facing eave — maximum curb appeal per dollar, at the Thanksgiving deal rate.",
    highlight: false,
    bestFor: "Front-only glow & holiday curb appeal",
  },
  {
    id: "curb-wings",
    name: "Curb + Wings",
    priceFrom: 3975,
    regularPriceFrom: 4590,
    feet: "150–170 ft",
    description:
      "Front plus the visible side returns that complete the look from the street — locked in through Thanksgiving.",
    highlight: true,
    bestFor: "Most DFW suburban homes",
  },
  {
    id: "whole-home",
    name: "Whole Home Halo",
    priceFrom: 5625,
    regularPriceFrom: 6490,
    feet: "220–240 ft",
    description:
      "Full perimeter wrap for estates and homeowners who want every angle lit — without franchise pricing.",
    highlight: false,
    bestFor: "Full wrap & backyard entertaining",
  },
] as const;

export const guarantees = [
  {
    title: "Free On-Site Measure",
    type: "Unconditional",
    description:
      "We measure your eaves, recommend the right package, and quote the job. Don’t love it? You pay nothing.",
  },
  {
    title: "30-Night Make-It-Right",
    type: "Service guarantee",
    description:
      "For 30 nights after install, we return at no charge to fix alignment, brightness, dead nodes, or scene setup.",
  },
  {
    title: "Lifetime Workmanship",
    type: "As long as you own the home",
    description:
      "Track mounting, fasteners, and weatherseal — repaired for as long as you own the home.",
  },
  {
    title: "5-Year Parts",
    type: "Parts + labor years 1–3",
    description:
      "LEDs, controller, and track components covered for 5 years. Labor included for years 1–3.",
  },
  {
    title: "Texas Weather Promise",
    type: "IP65 + DFW heat",
    description:
      "IP65-rated hardware, eave-protected, built for Texas summers. Install failures from weather are covered under workmanship.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Request your free measure",
    description:
      "Call or submit the form. We schedule a no-obligation on-site measure at your home.",
  },
  {
    step: 2,
    title: "We measure & quote",
    description:
      "Linear footage, fascia color match, controller placement, and package recommendation — on site.",
  },
  {
    step: 3,
    title: "One-day install",
    description:
      "Our crew mounts track, seats LEDs, hides wiring, and configures the app. Most homes finish in a day.",
  },
  {
    step: 4,
    title: "App setup & handoff",
    description:
      "We load your 8 scenes, walk you through the app, and leave you ready to run the system.",
  },
] as const;

export const comparisons = [
  {
    name: "Edge Lighting by All Slopes",
    price: `$${DEAL_PRICE_PER_FOOT}/ft deal (reg. $${REGULAR_PRICE_PER_FOOT})`,
    controller: "Included",
    warranty: "Lifetime workmanship · 5-yr parts",
    who: "Local roofing & soffit crew",
    highlight: true,
  },
  {
    name: "National franchise brands",
    price: "$25–$40/ft + extras",
    controller: "Often $650–$850 extra",
    warranty: "Varies by dealer",
    who: "Franchise dealer network",
    highlight: false,
  },
  {
    name: "DIY kits",
    price: "$8–$16/ft materials",
    controller: "DIY setup",
    warranty: "1 year typical",
    who: "You on a ladder",
    highlight: false,
  },
  {
    name: "Seasonal clip-ons",
    price: "$300–$800+/yr forever",
    controller: "N/A",
    warranty: "None",
    who: "You (or a seasonal crew) every year",
    highlight: false,
  },
] as const;

export const faqs = [
  {
    q: "Is this JellyFish Lighting or Trimlight?",
    a: "No. Edge Lighting is professional-grade aluminum-track LED soffit lighting installed by All Slopes Roofing & Exteriors — a Mansfield/DFW family company. You get the same clean daytime look and app-controlled night scenes without franchise markup — usually the best all-in deal in DFW.",
  },
  {
    q: "How long does installation take?",
    a: "Most single-story Street Face and Curb + Wings jobs finish in one day. Larger Whole Home Halo installs may take 1–2 days depending on footage and roof complexity.",
  },
  {
    q: `What does $${DEAL_PRICE_PER_FOOT} per foot include?`,
    a: `Our regular rate is $${REGULAR_PRICE_PER_FOOT}/ft. Through ${deal.endsLabel}, lock in $${DEAL_PRICE_PER_FOOT}/ft all-in — track, LEDs, controller, color-match, labor, app setup, and the full bonus stack. Two-story, steep, or complex hip roofs may adjust after the free measure.`,
  },
  {
    q: "Why is Edge Lighting priced lower than franchise brands?",
    a: `We’re a local roofing & exteriors crew, not a national lighting franchise. No franchise fees, no separate controller upcharge — regular rate $${REGULAR_PRICE_PER_FOOT}/ft, currently $${DEAL_PRICE_PER_FOOT}/ft through ${deal.endsLabel}. Same class of aluminum-track system, better DFW value.`,
  },
  {
    q: "Can I finance it?",
    a: "Yes — third-party financing is available for qualified homeowners. A typical Street Face can run as low as about $99/mo depending on terms. We’ll walk you through options when we quote your home.",
  },
  {
    q: "What if a light goes out?",
    a: "Call us. The 30-Night Make-It-Right covers early issues at no charge. After that, your 5-Year Parts and Lifetime Workmanship warranties apply as described in our terms.",
  },
  {
    q: "Do you only light the front?",
    a: "You choose. Street Face is front-only. Curb + Wings adds the visible sides. Whole Home Halo wraps the full perimeter. We’ll recommend based on how your home reads from the street.",
  },
  {
    q: "Where do you install?",
    a: "Mansfield and surrounding DFW — Arlington, Midlothian, Waxahachie, Burleson, Fort Worth, Dallas, and nearby communities. Not sure if you’re in range? Call (682) 300-5502.",
  },
] as const;

export const scenes = [
  {
    id: "warm-white",
    label: "Warm White",
    image: "/gallery/hero-warm-white.png",
    caption: "Everyday curb appeal — soft 2700K glow.",
  },
  {
    id: "christmas",
    label: "Christmas",
    image: "/gallery/scene-christmas.png",
    caption: "Classic red & green, on demand from your phone.",
  },
  {
    id: "cowboys",
    label: "Cowboys",
    image: "/gallery/scene-cowboys.png",
    caption: "Game-day silver & blue without climbing a ladder.",
  },
  {
    id: "halloween",
    label: "Halloween",
    image: "/gallery/scene-halloween.png",
    caption: "Orange & purple — set it and forget it.",
  },
] as const;

export function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function estimateFromFeet(feet: number) {
  return feet * PRICE_PER_FOOT;
}

export const bonusTotal = bonuses.reduce((sum, b) => sum + b.value, 0);
