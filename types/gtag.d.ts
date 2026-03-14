export {};

declare global {
  interface Window {
    dataLayer?: Object[];
    gtag?: (...args: any[]) => void;
  }
}
