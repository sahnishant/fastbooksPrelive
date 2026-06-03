# Technical SEO Checklist

## Files

- `public/robots.txt`
- `public/sitemap.xml`
- `src/pages/404.astro`
- `src/layouts/BaseLayout.astro`
- `src/data/site.ts`

## Must verify

- Canonical URL present on every page.
- Open Graph title/description/url present.
- Twitter card metadata present.
- `og:image` present.
- No fake `aggregateRating`.
- No fake `Review` schema.
- No `noindex`.
- No `nosnippet`.
- `robots.txt` points to sitemap.
- Sitemap contains all public pages.
- WhatsApp CTA links use the real owner number.
- Google verification token can be inserted from `site.ts`.

## Schema types used

- `Organization`
- `WebSite`
- `SoftwareApplication`
- `WebPage`
- `WebApplication`
- `BreadcrumbList`
- `FAQPage`
- `Article`

## Do not add

- Fake reviews
- Fake ratings
- Hidden FAQ schema that is not visible on the page
- Claims about Tally export, GST filing, e-invoicing, or e-way bill generation until those features are actually production-ready
