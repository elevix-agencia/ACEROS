
'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const selectedLanguage =
    languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-11 rounded-none border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 shadow-none hover:bg-slate-50 sm:px-4"
          aria-label={`Idioma atual: ${selectedLanguage.name}. Clique para trocar.`}
        >
          <span className="hidden min-[460px]:inline" aria-hidden="true">{selectedLanguage.flag}</span>
          <span className="hidden md:inline">{selectedLanguage.name}</span>
          <span className="md:hidden">{selectedLanguage.code.toUpperCase()}</span>
          <Globe className="h-4 w-4 text-slate-400" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => setLanguage(lang.code as any)}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
