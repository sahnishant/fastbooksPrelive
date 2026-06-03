# Fastbooks Measurement Plan

This plan turns the Fastbooks Astro SEO site into a measurable production asset.

## 1. Launch checks

Before deploying:

```bash
npm install
npm run check
npm run build
npm run preview
```

Verify:

- Homepage loads.
- Priority SEO pages load.
- WhatsApp CTA opens the correct number.
- Optional details form opens WhatsApp with filled fields.
- GST calculator works.
- 404 page loads.
- `robots.txt` and `sitemap.xml` are available.

## 2. Google Search Console setup

1. Deploy to Netlify.
2. Connect `fastbooks.in`.
3. Open Google Search Console.
4. Add the domain property for `fastbooks.in`.
5. Verify using DNS if possible.
6. Alternative: use HTML meta verification by setting:

```ts
googleSiteVerification: "YOUR_VERIFICATION_TOKEN"
```

in:

```text
src/data/site.ts
```

7. Submit:

```text
https://www.fastbooks.in/sitemap.xml
```

## 3. Weekly SEO metrics

Track weekly:

| Metric | Why it matters |
|---|---|
| Submitted URLs | Pages in sitemap |
| Indexed URLs | Pages Google accepted |
| Not indexed URLs | Pages needing quality/technical review |
| Impressions | Google is testing pages |
| Clicks | Search traffic |
| CTR | Title/meta effectiveness |
| Average position | Ranking progress |
| Queries | Whether we are visible for right search intent |
| Top pages | Which pages are getting tested |
| WhatsApp CTA clicks | Lead intent |
| Optional details submits | Higher-intent leads |

## 4. Search intent buckets

Group queries into:

- Accounting software India
- Accounts software
- GST accounting software
- Tally alternative
- Bank reconciliation software
- Accounting software for traders
- WhatsApp accounting
- Best accounting software India
- Most used accounting software India

## 5. Event tracking

The site now emits:

```text
request_early_access_click
optional_details_submit
gst_calculator_used
```

These are sent to:

- `window.dataLayer`
- `window.gtag`, if GA4 exists
- `CustomEvent("fastbooks:analytics")`

## 6. Recommended GA4 events

Use these event names:

```text
request_early_access_click
optional_details_submit
gst_calculator_used
```

Recommended parameters:

```text
page
cta_location
source
target
```

## 7. First 30-day focus

Do not judge by traffic volume first. Judge by:

1. Important pages indexed.
2. Relevant impressions appearing.
3. Long-tail accounting/accounting software queries.
4. WhatsApp CTA clicks.
5. Pages with high impressions and low CTR.

## 8. Priority pages to watch

- `/resources/best-accounting-software-india/`
- `/resources/most-used-accounting-software-india/`
- `/alternatives/tally-prime/`
- `/features/bank-reconciliation-software/`
- `/solutions/accounting-software-for-traders/`
- `/tools/free-gst-calculator/`
