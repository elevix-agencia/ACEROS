'use client';

import { useEffect } from 'react';
import { hasAnalyticsConsent } from '@/lib/analytics-consent';
import { serviceNameForCurrentPage } from '@/lib/form-analytics';

type ContactClickEvent = 'click_whatsapp' | 'click_phone' | 'click_email';

function classifyContactLink(href: string): ContactClickEvent | null {
  if (/^https?:\/\/(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) {
    return 'click_whatsapp';
  }
  if (/^tel:/i.test(href)) return 'click_phone';
  if (/^mailto:/i.test(href)) return 'click_email';
  return null;
}

export function ContactClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!hasAnalyticsConsent() || !(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;

      const contactEvent = classifyContactLink(link.href);
      if (!contactEvent) return;

      const serviceName = serviceNameForCurrentPage();
      const trackedWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
      trackedWindow.dataLayer = trackedWindow.dataLayer || [];
      trackedWindow.dataLayer.push({
        event: contactEvent,
        contact_method: contactEvent.replace('click_', ''),
        ...(serviceName ? { service_name: serviceName } : {}),
        link_url: link.href.split('?')[0],
        page_path: window.location.pathname,
      });
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
