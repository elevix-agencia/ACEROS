
'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import pt from '@/lib/i18n/pt.json';
import en from '@/lib/i18n/en.json';
import es from '@/lib/i18n/es.json';
import de from '@/lib/i18n/de.json';
import it from '@/lib/i18n/it.json';
import translationCorrections from '@/lib/i18n/translation-corrections.json';

const translations = { pt, en, es, de, it };

export type Language = keyof typeof translations;

const DEFAULT_LANGUAGE: Language = 'pt';
const LANGUAGE_STORAGE_KEY = 'aceros-language';

function isLanguage(value: string | null): value is Language {
  return value !== null && value in translations;
}

type Translations = typeof pt;

function mergeTranslations<T>(base: T, override: unknown): T {
  if (
    typeof base !== 'object' ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== 'object' ||
    override === null ||
    Array.isArray(override)
  ) {
    return (override ?? base) as T;
  }

  const merged: Record<string, unknown> = {
    ...(base as Record<string, unknown>),
  };

  for (const [key, value] of Object.entries(
    override as Record<string, unknown>
  )) {
    merged[key] = key in merged ? mergeTranslations(merged[key], value) : value;
  }

  return merged as T;
}

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const urlLanguage = new URLSearchParams(window.location.search).get('lang');
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLanguage = isLanguage(urlLanguage)
      ? urlLanguage
      : isLanguage(storedLanguage)
        ? storedLanguage
        : DEFAULT_LANGUAGE;

    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage === 'pt' ? 'pt-BR' : initialLanguage;
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : nextLanguage;

    const url = new URL(window.location.href);
    if (nextLanguage === DEFAULT_LANGUAGE) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', nextLanguage);
    }
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  // Aplica as revisões linguísticas e mantém o português apenas como proteção
  // para uma eventual chave nova que ainda não exista nos demais idiomas.
  const t = useMemo(
    () =>
      mergeTranslations<Translations>(
        pt,
        mergeTranslations(translations[language], translationCorrections[language])
      ),
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
