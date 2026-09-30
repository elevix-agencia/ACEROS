'use client';

import { useLanguage } from '@/hooks/use-language';
import { privacyCopy } from '@/lib/i18n/privacy-copy';
import PrivacyPortuguese from './PrivacyPortuguese';

export default function PrivacyClient() {
  const { language } = useLanguage();
  if (language === 'pt') return <PrivacyPortuguese />;

  const copy = privacyCopy[language];
  return (
    <main className="bg-[#f3f4f6]">
      <header className="bg-[#07121e] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">{copy.eyebrow}</p>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{copy.subtitle}</p>
        </div>
      </header>
      <article className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl border-t-4 border-[#ef7b21] bg-white px-6 py-10 shadow-[0_20px_50px_rgba(7,18,30,.10)] sm:px-10 sm:py-12 lg:px-14">
          <div className="prose prose-slate max-w-none space-y-5 text-base leading-8 text-slate-700">
            <p>{copy.updated}</p>
            <p>{copy.intro}</p>
            {copy.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">{section.heading}</h2>
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul className="list-disc pl-6 space-y-2">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                {index === 9 && <p>{copy.contact}</p>}
              </section>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500"><p>{copy.updated}</p></div>
        </div>
      </article>
    </main>
  );
}
