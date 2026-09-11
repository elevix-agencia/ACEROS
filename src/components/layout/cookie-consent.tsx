'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/use-language';

const STORAGE_KEY = 'aceros-cookie-consent-v1';
const GTM_ID = 'GTM-WMKKZ3CL';

type Consent = {
  analytics: boolean;
  updatedAt: string;
};

const copy = {
  pt: {
    title: 'Sua privacidade importa',
    description: 'Usamos cookies essenciais para o funcionamento do site. Cookies de análise e marketing são opcionais e só serão ativados com sua autorização.',
    accept: 'Aceitar todos',
    reject: 'Recusar opcionais',
    preferences: 'Preferências',
    dialogTitle: 'Preferências de cookies',
    dialogDescription: 'Escolha quais cookies opcionais a Aceros pode utilizar.',
    essential: 'Cookies essenciais',
    essentialDescription: 'Necessários para o funcionamento e a segurança do site. Permanecem sempre ativos.',
    analytics: 'Análise e marketing',
    analyticsDescription: 'Ajudam a medir o uso do site e o desempenho das campanhas.',
    save: 'Salvar preferências',
    policy: 'Política de Privacidade',
  },
  en: {
    title: 'Your privacy matters',
    description: 'We use essential cookies to operate the website. Analytics and marketing cookies are optional and are activated only with your permission.',
    accept: 'Accept all', reject: 'Reject optional', preferences: 'Preferences',
    dialogTitle: 'Cookie preferences', dialogDescription: 'Choose which optional cookies Aceros may use.',
    essential: 'Essential cookies', essentialDescription: 'Required for website operation and security. They are always active.',
    analytics: 'Analytics and marketing', analyticsDescription: 'Help measure website usage and campaign performance.',
    save: 'Save preferences', policy: 'Privacy Policy',
  },
  es: {
    title: 'Tu privacidad importa',
    description: 'Utilizamos cookies esenciales para el funcionamiento del sitio. Las cookies de análisis y marketing son opcionales y solo se activan con tu autorización.',
    accept: 'Aceptar todas', reject: 'Rechazar opcionales', preferences: 'Preferencias',
    dialogTitle: 'Preferencias de cookies', dialogDescription: 'Elige qué cookies opcionales puede utilizar Aceros.',
    essential: 'Cookies esenciales', essentialDescription: 'Necesarias para el funcionamiento y la seguridad del sitio. Siempre están activas.',
    analytics: 'Análisis y marketing', analyticsDescription: 'Ayudan a medir el uso del sitio y el rendimiento de las campañas.',
    save: 'Guardar preferencias', policy: 'Política de Privacidad',
  },
  de: {
    title: 'Ihre Privatsphäre ist wichtig',
    description: 'Wir verwenden notwendige Cookies für den Betrieb der Website. Analyse- und Marketing-Cookies werden nur mit Ihrer Zustimmung aktiviert.',
    accept: 'Alle akzeptieren', reject: 'Optionale ablehnen', preferences: 'Einstellungen',
    dialogTitle: 'Cookie-Einstellungen', dialogDescription: 'Wählen Sie, welche optionalen Cookies Aceros verwenden darf.',
    essential: 'Notwendige Cookies', essentialDescription: 'Für Betrieb und Sicherheit der Website erforderlich. Sie bleiben immer aktiv.',
    analytics: 'Analyse und Marketing', analyticsDescription: 'Helfen, die Nutzung der Website und die Kampagnenleistung zu messen.',
    save: 'Einstellungen speichern', policy: 'Datenschutzrichtlinie',
  },
  it: {
    title: 'La tua privacy è importante',
    description: 'Utilizziamo cookie essenziali per il funzionamento del sito. I cookie di analisi e marketing sono facoltativi e si attivano solo con il tuo consenso.',
    accept: 'Accetta tutti', reject: 'Rifiuta facoltativi', preferences: 'Preferenze',
    dialogTitle: 'Preferenze cookie', dialogDescription: 'Scegli quali cookie facoltativi Aceros può utilizzare.',
    essential: 'Cookie essenziali', essentialDescription: 'Necessari per il funzionamento e la sicurezza del sito. Restano sempre attivi.',
    analytics: 'Analisi e marketing', analyticsDescription: 'Aiutano a misurare l’utilizzo del sito e le prestazioni delle campagne.',
    save: 'Salva preferenze', policy: 'Informativa sulla privacy',
  },
};

function loadGoogleTagManager() {
  if (document.querySelector(`script[data-gtm-id="${GTM_ID}"]`)) return;

  const trackedWindow = window as Window & { dataLayer?: unknown[] };
  trackedWindow.dataLayer = trackedWindow.dataLayer || [];
  trackedWindow.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  script.dataset.gtmId = GTM_ID;
  document.head.appendChild(script);
}

function disableGoogleTagManager() {
  const scripts = document.querySelectorAll<HTMLScriptElement>('script[src*="googletagmanager.com"]');
  const wasLoaded = scripts.length > 0;
  scripts.forEach((script) => script.remove());

  const trackedWindow = window as Window & { dataLayer?: unknown[] };
  trackedWindow.dataLayer = [];

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (name && (name === '_ga' || name === '_gid' || name === '_gat' || name.startsWith('_ga_'))) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });

  return wasLoaded;
}

export function CookieConsent() {
  const { language } = useLanguage();
  const text = copy[language];
  const [ready, setReady] = useState(false);
  const [hasChoice, setHasChoice] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const consent = JSON.parse(saved) as Consent;
        setAnalytics(consent.analytics);
        if (consent.analytics) loadGoogleTagManager();
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setHasChoice(false);
      }
    } else {
      setHasChoice(false);
    }

    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener('open-cookie-settings', openPreferences);
    setReady(true);

    return () => window.removeEventListener('open-cookie-settings', openPreferences);
  }, []);

  function saveConsent(allowAnalytics: boolean) {
    const consent: Consent = {
      analytics: allowAnalytics,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setAnalytics(allowAnalytics);
    setHasChoice(true);
    setPreferencesOpen(false);

    if (allowAnalytics) {
      loadGoogleTagManager();
    } else if (disableGoogleTagManager()) {
      window.location.reload();
    }
  }

  if (!ready) return null;

  return (
    <>
      {!hasChoice && (
        <aside
          aria-label={text.title}
          className="fixed inset-x-0 bottom-0 z-[70] border-t-4 border-[#ef7b21] bg-[#07121e] text-white shadow-[0_-18px_50px_rgba(7,18,30,.28)]"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3 sm:gap-5 sm:px-5 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="flex max-w-3xl items-start gap-3 sm:gap-4">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-[#ef7b21] sm:mt-1 sm:h-6 sm:w-6" aria-hidden="true" />
              <div>
                <h2 className="font-headline text-base font-bold sm:text-xl">{text.title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                  {text.description}{' '}
                  <Link className="font-semibold text-white underline decoration-[#ef7b21] underline-offset-4" href="/politica-de-privacidade">
                    {text.policy}
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:w-auto">
              <Button type="button" variant="outline" onClick={() => saveConsent(false)} className="h-9 rounded-none border-white/40 bg-transparent px-3 text-xs text-white hover:bg-white/10 hover:text-white sm:h-10 sm:text-sm">
                {text.reject}
              </Button>
              <Button type="button" variant="outline" onClick={() => setPreferencesOpen(true)} className="h-9 rounded-none border-white/40 bg-transparent px-3 text-xs text-white hover:bg-white/10 hover:text-white sm:h-10 sm:text-sm">
                {text.preferences}
              </Button>
              <Button type="button" onClick={() => saveConsent(true)} className="col-span-2 h-9 rounded-none bg-[#ef7b21] px-3 text-xs font-bold text-white hover:bg-[#cf5f11] sm:col-span-1 sm:h-10 sm:text-sm">
                {text.accept}
              </Button>
            </div>
          </div>
        </aside>
      )}

      <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-xl rounded-none border-t-4 border-[#ef7b21] p-0">
          <DialogHeader className="bg-[#07121e] px-6 py-6 text-left text-white">
            <DialogTitle className="font-headline text-2xl">{text.dialogTitle}</DialogTitle>
            <DialogDescription className="text-slate-300">{text.dialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 px-6 py-6">
            <div className="flex items-start justify-between gap-5 border-b border-slate-200 pb-6">
              <div>
                <p className="font-bold text-[#07121e]">{text.essential}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text.essentialDescription}</p>
              </div>
              <Switch checked disabled aria-label={text.essential} className="data-[state=checked]:bg-[#ef7b21]" />
            </div>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-bold text-[#07121e]">{text.analytics}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text.analyticsDescription}</p>
              </div>
              <Switch checked={analytics} onCheckedChange={setAnalytics} aria-label={text.analytics} className="data-[state=checked]:bg-[#ef7b21]" />
            </div>
            <Button type="button" onClick={() => saveConsent(analytics)} className="w-full rounded-none bg-[#ef7b21] py-6 font-bold text-white hover:bg-[#cf5f11]">
              {text.save}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
