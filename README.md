# fastbooksPrelive

Standalone static prelaunch website for Fastbooks.

This version is more accounting-focused and simpler:
- no build step
- no dependencies
- no monorepo
- Netlify-ready
- WhatsApp waitlist CTA
- accounting-style mockups instead of generic feature text dumps

## Files

```txt
index.html
assets/styles.css
assets/waitlist.js
assets/site-config.js
netlify.toml
robots.txt
sitemap.xml
```

## Configure WhatsApp

Open:

```txt
assets/site-config.js
```

Replace:

```js
whatsappNumber: "91XXXXXXXXXX"
```

with your real WhatsApp number including country code:

```js
whatsappNumber: "919471499233"
```

## Local preview

Option 1: open `index.html` directly.

Option 2:

```bash
python -m http.server 4174
```

Then open:

```txt
http://localhost:4174
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Rebuild Fastbooks prelaunch page"
git branch -M main
git remote add origin https://github.com/sahnishant/fastbooksPrelive.git
git push -u origin main
```

## Netlify setup

Use the repository root.

```txt
Build command: leave blank
Publish directory: .
```

Then connect:

```txt
www.fastbooks.in
fastbooks.in
```

Make `www.fastbooks.in` the primary domain.
