export const PRICE_PER_FOOT = 28;

export const offer = {
  name: "The After-Dark Curb Appeal System",
  shortName: "After-Dark System",
  dreamOutcome:
    "A color-matched aluminum-track LED halo under your eaves — invisible by day, stunning every night — installed in one day by a roofing crew.",
  uniqueMechanism:
    "This is not a lighting franchise. It is soffit lighting installed by the company that already works on DFW roofs, fascia, and eaves — so the workmanship guarantee can last as long as you own the home.",
  starvingCrowd:
    "DFW homeowners who want a home that looks expensive after dark — holidays, Cowboys nights, everyday warm white — without ladders, clip-on lights, or a national-franchise markup.",
  pricePerFoot: PRICE_PER_FOOT,
  financingNote:
    "As low as ~$99/mo on a typical Street Face package via third-party financing (subject to approval).",
  paymentTerms:
    "50% to lock your install date and order color-matched track. 50% due on completion. The After-Dark Design Visit is $0.",
  scarcity:
    "Only 6 Edge Lighting installs per month in DFW. Holiday calendars fill by October.",
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
      "Track powder-coated to blend with your fascia so daytime curb appeal stays HOA-clean.",
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
  {
    title: "HOA Spec Sheet",
    value: 75,
    valueLabel: "$75",
    description:
      "Daytime off-state photos plus a product sheet ready for your HOA board.",
  },
  {
    title: "First-Year Night Tune-Up",
    value: 199,
    valueLabel: "$199",
    description:
      "One complimentary visit in year one to refresh scenes and fine-tune brightness.",
  },
] as const;

export const packages = [
  {
    id: "street-face",
    name: "Street Face",
    priceFrom: 2990,
    feet: "90–110 ft",
    description: "The street-facing eave — maximum curb appeal per dollar.",
    highlight: false,
    bestFor: "Front-only glow & holiday curb appeal",
  },
  {
    id: "curb-wings",
    name: "Curb + Wings",
    priceFrom: 4590,
    feet: "150–170 ft",
    description: "Front plus the visible side returns that complete the look from the street.",
    highlight: true,
    bestFor: "Most DFW suburban homes",
  },
  {
    id: "whole-home",
    name: "Whole Home Halo",
    priceFrom: 6490,
    feet: "220–240 ft",
    description: "Full perimeter wrap for estates and homeowners who want every angle lit.",
    highlight: false,
    bestFor: "Full wrap & backyard entertaining",
  },
] as const;

export const guarantees = [
  {
    title: "Free After-Dark Design",
    type: "Unconditional",
    description:
      "We map your eaves, recommend the right package, and show you the plan. Don’t love it? You pay nothing.",
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
    title: "Book your free design visit",
    description:
      "Call or submit the form. We schedule a no-obligation After-Dark Design at your home.",
  },
  {
    step: 2,
    title: "We measure & design",
    description:
      "Linear footage, fascia color match, controller placement, and scene recommendations — on site.",
  },
  {
    step: 3,
    title: "One-day install",
    description:
      "Our crew mounts track, seats LEDs, hides wiring, and configures the app. Most homes finish in a day.",
  },
  {
    step: 4,
    title: "Night walkthrough",
    description:
      "After dark we dial in brightness and leave you with your 8 scenes ready to run.",
  },
] as const;

export const comparisons = [
  {
    name: "Edge Lighting by All Slopes",
    price: "$28/ft all-in",
    controller: "Included",
    warranty: "Lifetime workmanship · 5-yr parts",
    who: "Local roofing & soffit crew",
    highlight: true,
  },
  {
    name: "National franchise brands",
    price: "$25–$40/ft",
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
    a: "No. Edge Lighting is professional-grade aluminum-track LED soffit lighting installed by All Slopes Roofing & Exteriors — a Mansfield/DFW family company. You get the same clean daytime look and app-controlled night scenes without franchise markup.",
  },
  {
    q: "Will my HOA approve it?",
    a: "Most DFW HOAs approve permanent soffit systems because the slim aluminum track is nearly invisible when lights are off. We include an HOA spec sheet with daytime off-state photos for your board.",
  },
  {
    q: "How long does installation take?",
    a: "Most single-story Street Face and Curb + Wings jobs finish in one day. Larger Whole Home Halo installs may take 1–2 days depending on footage and roof complexity.",
  },
  {
    q: "What does $28 per foot include?",
    a: "Track, LEDs, controller, color-match, labor, app setup, and the full bonus stack listed on this page. Two-story, steep, or complex hip roofs may adjust after the free measure.",
  },
  {
    q: "Can I finance it?",
    a: "Yes — third-party financing is available for qualified homeowners. A typical Street Face can run as low as about $99/mo depending on terms. We’ll walk you through options on the design visit.",
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
