'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/hooks/use-language';
import { pageTitles, sectorTitles } from '@/lib/i18n/page-titles';

// Substitui o document.title (usado pela aba do navegador e pelo Google)
// pelo titulo do idioma ativo. A metadata do Next fica fixada em PT porque
// e gerada server-side; este componente client-side ajusta em runtime.
export function LocalizedTitle() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    if (!pathname) return;

    // Rota estatica com dicionario proprio
    const staticEntry = pageTitles[pathname];
    if (staticEntry) {
      const next = staticEntry[language] ?? staticEntry.pt;
      if (next && document.title !== next) document.title = next;
      return;
    }

    // Setor: /atuacao/<slug>
    const sectorMatch = pathname.match(/^\/atuacao\/([^/]+)\/?$/);
    if (sectorMatch) {
      const slug = sectorMatch[1];
      const entry = sectorTitles[slug];
      if (entry) {
        const next = entry[language] ?? entry.pt;
        if (next && document.title !== next) document.title = next;
      }
      return;
    }

    // Post do blog ou outra rota nao mapeada: mantem o title do server.
  }, [pathname, language]);

  return null;
}
