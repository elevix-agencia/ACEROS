'use client';

import { Award, Factory, Flame, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { siteExtras } from '@/lib/i18n/site-extras';

const differentiatorIcons = [Flame, Layers, Sparkles];
const certificationIcons = [Award, ShieldCheck, Factory];

export function TrustSignals() {
  const { language } = useLanguage();
  const content = siteExtras[language].trust;
  const differenciais = content.differentiators.map((item, index) => ({
    ...item,
    icon: differentiatorIcons[index],
  }));
  const certifications = content.certifications.map((item, index) => ({
    ...item,
    icon: certificationIcons[index],
  }));

  return (
    <section className="bg-primary py-14 text-white sm:py-28" id="credibilidade">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center animate-fade-in-up sm:mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            {content.eyebrow}
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            {content.title}
          </h2>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 sm:mb-20">
          {content.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 text-center transition-colors hover:border-accent animate-fade-in-up sm:p-6"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent font-headline mb-2">
                {stat.number}
              </div>
              <div className="text-slate-200 font-semibold">{stat.label}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="mb-14 sm:mb-20">
          <div className="mb-8 text-center sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Sparkles className="h-4 w-4" />
              {content.differentiatorsLabel}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              {content.differentiatorsTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {differenciais.map((d, i) => (
              <div
                key={d.title}
                className="rounded-xl border border-slate-700 bg-slate-800/40 p-5 transition-all hover:border-accent hover:bg-slate-800/60 animate-fade-in-up sm:p-6"
                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'both' }}
              >
                <d.icon className="h-9 w-9 text-accent mb-3" />
                <h4 className="font-headline text-lg font-bold mb-2">{d.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 text-center sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <ShieldCheck className="h-4 w-4" />
              {content.certificationsLabel}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              {content.certificationsTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="rounded-xl border border-slate-700 bg-slate-800/30 p-5 transition-all hover:border-accent hover:bg-slate-800/60 animate-fade-in-up sm:p-6"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
              >
                <cert.icon className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-headline text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in-up sm:mt-16">
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            {content.closingBefore}
            <span className="text-white font-semibold">
              {content.closingStrong}
            </span>
            {content.closingMiddle}
            <span className="text-white font-semibold">{content.closingMarkets}</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
