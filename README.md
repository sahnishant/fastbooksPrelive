# fastbooksPrelive

Standalone static prelaunch website for Fastbooks.

This version is intentionally plain HTML/CSS/JS:
- no monorepo
- no package manager
- no build step
- Netlify-ready
- WhatsApp waitlist CTA
- visual direction inspired by the original FataFat/Fastbooks landing page

## Configure WhatsApp

Open:

```txt
assets/site-config.js
```

Set:

```js
whatsappNumber: "919471499233"
```

Use your real WhatsApp number with country code.

## Local preview

Open `index.html` directly in the browser, or run:

```bash
python -m http.server 4174
```

Then open:

```txt
http://localhost:4174
```

## GitHub setup

```bash
git init
git add .
git commit -m "Add Fastbooks prelaunch site"
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

Then connect your domain:

```txt
www.fastbooks.in
fastbooks.in
```

Make `www.fastbooks.in` the primary domain.
