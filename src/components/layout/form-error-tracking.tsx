'use client';

import { useEffect } from 'react';
import { trackFormError } from '@/lib/form-analytics';

// Native validation blocks submit, so the form's onSubmit callback never runs.
// The browser can emit one invalid event per field; count one attempt per form.
export function FormErrorTracking() {
  useEffect(() => {
    const lastInvalid = new WeakMap<HTMLFormElement, number>();

    function onInvalid(event: Event) {
      if (!(event.target instanceof Element)) return;
      const form = event.target.closest('form');
      if (!form?.hasAttribute('data-netlify')) return;

      const now = Date.now();
      if (now - (lastInvalid.get(form) || 0) < 1000) return;
      lastInvalid.set(form, now);

      trackFormError(form.getAttribute('name') || 'contato', 'validation');
    }

    document.addEventListener('invalid', onInvalid, true);
    return () => document.removeEventListener('invalid', onInvalid, true);
  }, []);

  return null;
}
