function getSiteConfig() {
  return window.FastbooksSiteConfig || {};
}

function normalizeNumber(value) {
  return String(value || "").replace(/[^0-9]/g, "");
}

function isConfiguredNumber(rawNumber) {
  const raw = String(rawNumber || "").trim();
  const normalized = normalizeNumber(raw);
  return Boolean(raw) && !/[Xx]/.test(raw) && normalized.length >= 10;
}

function buildMessage(source) {
  return [
    "Hi Fastbooks, I want early access.",
    "",
    "Business type:",
    "Biggest bookkeeping pain:",
    "What I want to reduce first: sales bills / expenses / bank entries / GST review",
    "",
    `Source: ${source || "fastbooks.in"}`
  ].join("\n");
}

function openWaitlist() {
  const config = getSiteConfig();
  const rawNumber = config.whatsappNumber || "";
  const number = normalizeNumber(rawNumber);

  if (!isConfiguredNumber(rawNumber)) {
    alert("Fastbooks WhatsApp number is not configured yet. Edit assets/site-config.js before deploying.");
    return;
  }

  const source = config.siteUrl ? new URL(config.siteUrl).hostname : window.location.hostname;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(buildMessage(source))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-waitlist-trigger]").forEach((button) => {
  button.addEventListener("click", openWaitlist);
});
