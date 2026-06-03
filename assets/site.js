const OWNER_WHATSAPP_NUMBER = "91XXXXXXXXXX";

function buildWhatsAppUrl(message) {
  return (
    "https://wa.me/" +
    OWNER_WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message)
  );
}

function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

function setupDirectWhatsAppButtons() {
  document.querySelectorAll("[data-whatsapp-direct]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const source = button.getAttribute("data-source") || document.title;

      const message = [
        "Hi, I want early access to Fastbooks.",
        "",
        "Page: " + source,
        "",
        "Please contact me."
      ].join("\n");

      openWhatsApp(message);
    });
  });
}

function setupWaitlistForms() {
  document.querySelectorAll("[data-waitlist-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.querySelector("[name='name']")?.value.trim() || "";
      const company = form.querySelector("[name='company']")?.value.trim() || "";
      const phone = form.querySelector("[name='phone']")?.value.trim() || "";
      const email = form.querySelector("[name='email']")?.value.trim() || "";
      const need = form.querySelector("[name='need']")?.value.trim() || "";
      const source = form.querySelector("[name='source']")?.value || document.title;

      const lines = [
        "Hi, I want early access to Fastbooks.",
        "",
        "Page: " + source
      ];

      if (name) lines.push("Name: " + name);
      if (company) lines.push("Company: " + company);
      if (phone) lines.push("Mobile number: " + phone);
      if (email) lines.push("Email: " + email);
      if (need) lines.push("I want help with: " + need);

      lines.push("");
      lines.push("Please contact me.");

      openWhatsApp(lines.join("\n"));
    });
  });
}

function setupGstCalculator() {
  const amount = document.querySelector("[data-gst-amount]");
  const rate = document.querySelector("[data-gst-rate]");
  const mode = document.querySelector("[data-gst-mode]");
  const taxable = document.querySelector("[data-gst-taxable]");
  const gst = document.querySelector("[data-gst-tax]");
  const total = document.querySelector("[data-gst-total]");
  const cgst = document.querySelector("[data-gst-cgst]");
  const sgst = document.querySelector("[data-gst-sgst]");

  if (!amount || !rate || !mode || !taxable || !gst || !total) return;

  function formatINR(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2
    }).format(Number.isFinite(value) ? value : 0);
  }

  function calculate() {
    const rawAmount = parseFloat(amount.value || "0");
    const gstRate = parseFloat(rate.value || "0") / 100;
    let taxableValue = 0;
    let gstValue = 0;
    let totalValue = 0;

    if (mode.value === "inclusive") {
      totalValue = rawAmount;
      taxableValue = rawAmount / (1 + gstRate);
      gstValue = totalValue - taxableValue;
    } else {
      taxableValue = rawAmount;
      gstValue = taxableValue * gstRate;
      totalValue = taxableValue + gstValue;
    }

    taxable.textContent = formatINR(taxableValue);
    gst.textContent = formatINR(gstValue);
    total.textContent = formatINR(totalValue);
    if (cgst) cgst.textContent = formatINR(gstValue / 2);
    if (sgst) sgst.textContent = formatINR(gstValue / 2);
  }

  [amount, rate, mode].forEach((el) => {
    el.addEventListener("input", calculate);
    el.addEventListener("change", calculate);
  });

  calculate();
}

document.addEventListener("DOMContentLoaded", () => {
  setupDirectWhatsAppButtons();
  setupWaitlistForms();
  setupGstCalculator();
});

