
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t, language } = useLanguage();

  const navLinks = [
      { href: "/sobre", label: t.header.about },
      { href: "/produtos", label: t.header.products },
      { href: "/qualificacao", label: t.header.qualifications },
      { href: "/contato", label: t.header.contact },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          <div className="flex flex-col items-start lg:col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105" aria-label="Aceros — Página inicial">
                <Image
                    src="/images/imgur/OBD0nJ0.png"
                    alt="Aceros — Aços Centrifugados"
                    width={200}
                    height={50}
                    className="h-auto w-52"
                    priority
                />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {t.footer.description}
            </p>
            {/* Social links removidos ate ter os perfis oficiais da Aceros.
                Quando o Daniel confirmar Instagram/LinkedIn, adicionar aqui. */}
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 font-headline text-lg font-semibold">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm font-semibold text-slate-900 transition-colors hover:text-primary flex items-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h3 className="mb-4 font-headline text-lg font-semibold">{t.footer.contact}</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3 justify-start">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <span>{t.footer.address}</span>
                </div>
                 <div className="flex items-center gap-3 justify-start">
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>vendas@aceros.com.br</span>
                </div>
                <div className="flex items-center gap-3 justify-start">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>+55 (11) 5555-6551</span>
                </div>
              </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 font-headline text-lg font-semibold">{t.footer.newsletter}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{t.footer.newsletter_prompt}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="email@email.com" className="bg-background" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">{t.footer.subscribe}</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground space-y-1">
          <p>Aceros Centrifugados LTDA &middot; CNPJ 29.506.517/0001-39</p>
          <p>Divisão de aços inoxidáveis do Grupo Metalúrgica Daniela</p>
          <p>&copy; {new Date().getFullYear()} {t.footer.rights_reserved}</p>
        </div>
      </div>
    </footer>
  );
}
