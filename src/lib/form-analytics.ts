'use client';

import { hasAnalyticsConsent } from '@/lib/analytics-consent';

export type FormErrorType = 'validation' | 'submission_failed' | 'network';

const SERVICE_BY_PATH: Record<string, string> = {
  '/tubos-de-aco-inox': 'tubos_aco_inox',
  '/bucha-de-aco-inox': 'buchas_aco_inox',
  '/rolos-de-forno': 'rolos_para_fornos',
  '/sink-rolls': 'sink_rolls',
  '/fundicao-centrifugada': 'fundicao_centrifugada',
};

export function serviceNameForCurrentPage(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return SERVICE_BY_PATH[window.location.pathname.replace(/\/$/, '')];
}

export function trackFormError(formName: string, errorType: FormErrorType) {
  if (!hasAnalyticsConsent()) return;

  const trackedWindow = window as Window & {
    dataLayer?: Array<Record<string, string>>;
  };
  const serviceName = serviceNameForCurrentPage();
  trackedWindow.dataLayer = trackedWindow.dataLayer || [];
  trackedWindow.dataLayer.push({
    event: 'form_error',
    form_name: formName,
    error_type: errorType,
    ...(serviceName ? { service_name: serviceName } : {}),
    page_path: window.location.pathname,
  });
}
