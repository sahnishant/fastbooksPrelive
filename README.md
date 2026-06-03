# fastbooksPrelive

Standalone static prelaunch website for Fastbooks.

This repo is intentionally separate from the FataFat product monorepo. It contains only the public landing page and WhatsApp waitlist flow.

## Configure WhatsApp

Open:

```txt
assets/site-config.js
```

Replace:

```js
whatsappNumber: "91XXXXXXXXXX"
```

with your real WhatsApp number including country code, for example:

```js
whatsappNumber: "919471499233"
```

## Local preview

No build step is required. Use any static server.

With Python:

```bash
python -m http.server 4174
```

Then open:

```txt
http://localhost:4174
```

## Deploy to Netlify

Connect this GitHub repo to Netlify.

Use these settings:

```txt
Build command: leave blank
Publish directory: .
```

The included `netlify.toml` already sets `publish = "."` and redirects apex traffic to `www.fastbooks.in`.

## Domain

Use `www.fastbooks.in` as the primary domain.

External DNS pattern:

```txt
www.fastbooks.in   CNAME   <your-netlify-site>.netlify.app
fastbooks.in       A       75.2.60.5
```

If your DNS supports ALIAS/ANAME/CNAME flattening, use Netlify's recommended apex target instead of the A record.
