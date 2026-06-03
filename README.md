# Fastbooks Astro SEO Starter

This converts the Fastbooks prelaunch site into an Astro static site with shared layouts/components.

## Why Astro

- Shared header/footer/CTA/schema
- No duplicated WhatsApp number across every page
- Static HTML output for Netlify
- Easy to add SEO landing pages later

## Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321/
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Netlify

Netlify settings:

```text
Build command: npm run build
Publish directory: dist
```

`netlify.toml` is already included.

## Replace before deploy

Open:

```text
src/data/site.ts
```

Replace:

```ts
ownerWhatsAppNumber: "91XXXXXXXXXX",
```

with your WhatsApp number in international format without `+`.

Example:

```ts
ownerWhatsAppNumber: "919471499233",
```

## Pages included

- `/`
- `/alternatives/tally-prime/`
- `/solutions/accounting-software-for-small-business/`
- `/solutions/accounting-software-for-traders/`
- `/solutions/accounting-software-for-accountants/`
- `/features/gst-accounting-software/`
- `/features/bank-reconciliation-software/`
- `/features/whatsapp-accounting/`
- `/tools/free-gst-calculator/`
- `/privacy/`
- `/terms/`

## Early-access CTA

Primary CTA opens WhatsApp immediately.

Optional CTA fields:
- Name
- Company
- Mobile Number
- Email ID
- What do you want from Fastbooks?

All fields are optional because WhatsApp already gives you the sender's number when the user messages you.

## Important SEO note

No fake rating/review schema is used. Add ratings only after there are real public reviews.


## Expanded SEO sitemap pass

This version adds:
- Two long-form resource pages:
  - `/resources/best-accounting-software-india/`
  - `/resources/most-used-accounting-software-india/`
- Dynamic solution pages
- Dynamic feature pages
- Dynamic alternative pages
- Dynamic tool/template pages
- Expanded footer links
- Updated sitemap.xml

See `SEO_ROADMAP.md`.

## Pass 2: SEO Authority + AI Citation Hardening

Implemented:
- `src/components/AnswerBlock.astro`
- `src/components/FAQSection.astro`
- `src/components/RelatedLinks.astro`
- `src/components/Breadcrumbs.astro`
- BreadcrumbList schema support in `BaseLayout.astro`
- FAQPage schema support in `BaseLayout.astro`
- Article schema support for resource pages
- WhatsApp CTA tracking attributes
- Deepened priority pages:
  - `/resources/best-accounting-software-india/`
  - `/resources/most-used-accounting-software-india/`
  - `/alternatives/tally-prime/`
  - `/features/bank-reconciliation-software/`
  - `/solutions/accounting-software-for-traders/`

Verification run:

```bash
npm run check
npm run build
```

Result:
- `npm run check`: 0 errors, 1 Astro inline-script hint for JSON-LD output.
- `npm run build`: success, 37 static pages built.


## Pass 3: Launch + Measurement + Technical SEO Hardening

Added:

- `googleSiteVerification` and `defaultOgImage` in `src/data/site.ts`
- Google verification meta support in `BaseLayout`
- Open Graph and Twitter card support
- `public/og/fastbooks-og.svg`
- Analytics-ready CTA events
- `public/assets/analytics.js`
- `src/utils/tracking.ts`
- `src/pages/404.astro`
- `MEASUREMENT_PLAN.md`
- `TECHNICAL_SEO_CHECKLIST.md`

Events emitted:

- `request_early_access_click`
- `optional_details_submit`
- `gst_calculator_used`

Before deploy, replace:

```ts
ownerWhatsAppNumber: "91XXXXXXXXXX"
```

in:

```text
src/data/site.ts
```

with your actual WhatsApp number without `+`.
