(function () {
  function normalizeLocation(value) {
    return value || "";
  }

  function track(payload) {
    var normalizedPayload = Object.assign({ target: "whatsapp" }, payload);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(normalizedPayload);

    if (typeof window.gtag === "function") {
      window.gtag("event", normalizedPayload.event, {
        page: normalizedPayload.page,
        cta_location: normalizedPayload.ctaLocation,
        source: normalizedPayload.source,
        target: normalizedPayload.target
      });
    }

    window.dispatchEvent(
      new CustomEvent("fastbooks:analytics", {
        detail: normalizedPayload
      })
    );
  }

  function bindTrackedClicks() {
    document.querySelectorAll("[data-event]").forEach(function (el) {
      if (el.dataset.trackingBound === "true") return;
      el.dataset.trackingBound = "true";

      el.addEventListener("click", function () {
        track({
          event: el.getAttribute("data-event"),
          page: normalizeLocation(el.getAttribute("data-page")),
          ctaLocation: normalizeLocation(el.getAttribute("data-cta-location")),
          source: normalizeLocation(el.getAttribute("data-source")),
          target: normalizeLocation(el.getAttribute("data-target")) || "whatsapp"
        });
      });
    });
  }

  function bindCalculatorTracking() {
    var calculator = document.querySelector("[data-gst-calculator]");
    if (!calculator || calculator.dataset.trackingBound === "true") return;
    calculator.dataset.trackingBound = "true";

    var fired = false;
    calculator.addEventListener("input", function () {
      if (fired) return;
      fired = true;
      track({
        event: "gst_calculator_used",
        page: window.location.pathname,
        ctaLocation: "gst-calculator",
        source: "GST Calculator",
        target: "calculator"
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindTrackedClicks();
    bindCalculatorTracking();
  });
})();
