export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const saved = localStorage.getItem('aceros-cookie-consent-v1');
    return saved ? JSON.parse(saved).analytics === true : false;
  } catch {
    return false;
  }
}
