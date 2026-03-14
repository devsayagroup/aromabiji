// export function trackEvent(action: string, params?: Record<string, any>) {
//   if (typeof window === "undefined") return;

//   const payload = {
//     page_path: window.location.pathname,
//     page_location: window.location.href,
//     page_referrer: document.referrer || undefined,
//     ...params,
//   };

//   if (typeof window.gtag === "function") {
//     window.gtag("event", action, payload);
//     return;
//   }

//   const w = window as any;
//   w.dataLayer = w.dataLayer || [];
//   w.dataLayer.push({ event: action, ...payload });
// }

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventParams = Record<string, any>;

export function pageview(page_path: string) {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path,
  });
}

/**
 * GA4 custom event tracking (works everywhere).
 * Keep params consistent so reports are clean.
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, {
    // helpful defaults:
    page_path: window.location.pathname,
    ...params,
  });
}
