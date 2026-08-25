
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
      { href: "/sobre", label: t.header.about },
      { href: "/produtos", label: t.header.products },
      { href: "/qualificacao", label: t.header.qualifications },
      { href: "/contato", label: t.header.contact },
  ];

  return (
    <footer className="border-t-4 border-[#ef7b21] bg-[#07121e] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start md:col-span-2 lg:col-span-4 lg:pr-12">
            <Link href="/" className="mb-6 flex items-center" aria-label="Aceros — Página inicial">
                <Image
                    src="/images/aceros/generated/logo-footer-crop.png"
                    alt="Aceros — Aços Centrifugados"
                    width={732}
                    height={247}
                    className="h-auto w-44 brightness-0 invert"
                    priority
                />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              {t.footer.description}
            </p>
            {/* Social links removidos ate ter os perfis oficiais da Aceros.
                Quando o Daniel confirmar Instagram/LinkedIn, adicionar aqui. */}
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 border-b border-white/15 pb-3 font-headline text-sm font-bold uppercase tracking-[0.12em] text-accent">{t.footer.navigation}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-accent"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h3 className="mb-6 border-b border-white/15 pb-3 font-headline text-sm font-bold uppercase tracking-[0.12em] text-accent">{t.footer.contact}</h3>
              <div className="space-y-4 text-sm leading-6 text-slate-300">
                <div className="flex items-start gap-3 justify-start">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#ef7b21]" />
                  <span>{t.footer.address}</span>
                </div>
                 <div className="flex items-center gap-3 justify-start">
                  <Mail className="h-4 w-4 flex-shrink-0 text-[#ef7b21]" />
                  <span>vendas@aceros.com.br</span>
                </div>
                <div className="flex items-center gap-3 justify-start">
                  <Phone className="h-4 w-4 flex-shrink-0 text-[#ef7b21]" />
                  <span>+55 (11) 5555-6551</span>
                </div>
                <div className="flex items-start gap-3 justify-start">
                  <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-[#ef7b21]" />
                  <span>
                    Seg a Qui: 07:30 às 17:30<br />
                    Sex: 07:30 às 16:30
                  </span>
                </div>
              </div>
          </div>

          <div className="lg:col-span-3 lg:border-l lg:border-white/15 lg:pl-8">
            <h3 className="mb-5 font-headline text-2xl font-semibold leading-tight">Fale com a Aceros</h3>
            <p className="mb-6 text-sm leading-6 text-slate-300">
              Solicite um orçamento sob medida. Nossa equipe técnica retorna com uma proposta comercial competitiva.
            </p>
            <Button asChild className="h-12 w-full rounded-none bg-[#ef7b21] px-6 font-bold text-white hover:bg-[#cf5f11] sm:w-auto">
              <Link href="/contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-xs leading-5 text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p>Aceros Centrifugados LTDA &middot; CNPJ 29.506.517/0001-39</p>
            <p>Divisão de aços inoxidáveis do Grupo Metalúrgica Daniela</p>
          </div>
          <p className="md:text-right">&copy; {new Date().getFullYear()} {t.footer.rights_reserved}</p>
        </div>
      </div>
    </footer>
  );
}
