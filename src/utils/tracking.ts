export type FastbooksTrackingPayload = {
  event: string;
  page?: string;
  ctaLocation?: string;
  source?: string;
  target?: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackFastbooksEvent(payload: FastbooksTrackingPayload) {
  if (typeof window === "undefined") return;

  const normalizedPayload = {
    target: "whatsapp",
    ...payload
  };

  window.dataLayer?.push(normalizedPayload);

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
