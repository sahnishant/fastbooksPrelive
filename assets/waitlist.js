(function () {
  const config = window.FASTBOOKS_SITE_CONFIG || {};
  const configuredWhatsappNumber = String(config.whatsappNumber || "").trim();
  const whatsappNumber = configuredWhatsappNumber.replace(/[^0-9]/g, "");
  const form = document.querySelector("#waitlist-form");
  const error = document.querySelector("#form-error");

  function setError(message) {
    if (!error) return;
    error.textContent = message;
    error.hidden = !message;
  }

  function hasConfiguredWhatsappNumber() {
    return Boolean(configuredWhatsappNumber) && !/[Xx]/.test(configuredWhatsappNumber) && whatsappNumber.length >= 10;
  }

  function buildMessage(data) {
    const sourceUrl = config.siteUrl || window.location.origin || "fastbooks.in";
    let source;
    try {
      source = new URL(sourceUrl).hostname;
    } catch {
      source = "fastbooks.in landing page";
    }

    return [
      "Hi Fastbooks, I want early access.",
      "",
      `Name: ${data.name}`,
      `Mobile: ${data.mobile}`,
      `Business type: ${data.businessType}`,
      `Biggest pain: ${data.painPoint || "Too much typing / manual bookkeeping"}`,
      `Preferred capture: ${data.capturePreference}`,
      "",
      `Source: ${source}`
    ].join("\n");
  }

  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    setError("");

    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      mobile: String(formData.get("mobile") || "").trim(),
      businessType: String(formData.get("businessType") || "").trim(),
      painPoint: String(formData.get("painPoint") || "").trim(),
      capturePreference: String(formData.get("capturePreference") || "Voice + image scan").trim()
    };

    if (!data.name || !data.mobile || !data.businessType) {
      setError("Please add your name, mobile number, and business type.");
      return;
    }

    if (!hasConfiguredWhatsappNumber()) {
      setError("The Fastbooks WhatsApp number is not configured yet. Edit assets/site-config.js first.");
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage(data))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();
