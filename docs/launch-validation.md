# FastBooks Launch Validation Checklist

## 1. Domain Redirect Smoke Test

Ensure the hosting provider (Netlify) is configured to redirect all domain variants cleanly to the canonical apex domain:

* [ ] `https://fastbooks.in` -> Resolves to status `200`
* [ ] `https://www.fastbooks.in` -> Redirects to `https://fastbooks.in` (`301`)
* [ ] `http://fastbooks.in` -> Redirects to `https://fastbooks.in` (`301`)
* [ ] `http://www.fastbooks.in` -> Redirects to `https://fastbooks.in` (`301`)

Verify with `curl`:
```bash
curl -I https://fastbooks.in
curl -I https://www.fastbooks.in
curl -I http://fastbooks.in
curl -I http://www.fastbooks.in
```

---

## 2. Robots & Sitemap Validation

Confirm the crawlability configurations are correctly online:

* [ ] `https://fastbooks.in/robots.txt`
  * Available online and correctly references the sitemap:
    `Sitemap: https://fastbooks.in/sitemap.xml`
  * No generic `Disallow: /` blocking crawl.
* [ ] `https://fastbooks.in/sitemap.xml`
  * Available online.
  * References 100% correct apex URLs (no Netlify preview domains or `www.fastbooks.in` present).

---

## 3. Google Search Console Setup

Complete the following steps to activate search tracking:

1. Open Google Search Console.
2. Add a new **Domain property** for `fastbooks.in`.
3. Complete DNS TXT record verification inside your domain registrar.
4. Submit sitemap: `https://fastbooks.in/sitemap.xml`.
5. Run the **URL Inspection** tool on `https://fastbooks.in/` and request indexing.

---

## 4. Live WhatsApp CTA Verification

Test from both desktop and mobile devices:

* [ ] Click "Request Early Access" hero button.
* [ ] Click waitlist form submit button.
* [ ] Confirm that both CTA actions redirect to `https://wa.me/919472612333` with the correct prefilled text:
  `Hi, I want early access to Fastbooks. Please contact me.`
