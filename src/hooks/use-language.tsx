
'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
} from 'react';
import pt from '@/lib/i18n/pt.json';
import en from '@/lib/i18n/en.json';
import es from '@/lib/i18n/es.json';
import de from '@/lib/i18n/de.json';
import it from '@/lib/i18n/it.json';

const translations = { pt, en, es, de, it };

type Language = keyof typeof translations;

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
  const [language, setLanguage] = useState<Language>('pt');

  // Mantém todos os campos disponíveis mesmo quando uma tradução ainda não
  // possui uma chave específica; nesses casos, o conteúdo original em PT é usado.
  const t = useMemo(
    () => mergeTranslations<Translations>(pt, translations[language]),
    [language]
  );

  const value = {
    language,
    setLanguage,
    t,
  };

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
