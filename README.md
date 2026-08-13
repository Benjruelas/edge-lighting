# Edge Lighting by All Slopes Roofing & Exteriors

Landing page / lead funnel for permanent aluminum-track LED soffit lighting (edge lighting) serving Mansfield & DFW.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS v4
- shadcn/ui (dark cinematic theme)
- Resend for lead email delivery

## Setup

```bash
npm install
cp .env.example .env.local
# Add RESEND_API_KEY and LEAD_TO_EMAIL
npm run dev
```

Without `RESEND_API_KEY`, form submissions succeed in dev and log the lead to the server console.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build

## Offer source of truth

Copy, packages, bonuses, guarantees, and pricing live in [`src/lib/offer.ts`](src/lib/offer.ts). Company constants live in [`src/lib/site.ts`](src/lib/site.ts).

Gallery stand-ins are in `public/gallery/` — swap in real install photos without changing layout.
