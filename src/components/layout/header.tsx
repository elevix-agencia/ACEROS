
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LanguageSwitcher } from '../language-switcher';

export function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.header.home },
    { href: '/sobre', label: t.header.about },
    { href: '/produtos', label: t.header.products },
    { href: '/#sectors', label: t.header.expertise },
    { href: '/qualificacao', label: t.header.qualifications },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header
      className={cn(
        'site-header sticky top-0 left-0 right-0 z-50 border-b border-slate-200/80',
        'bg-white/95 backdrop-blur-xl'
      )}
    >
      <div className="header-container mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <div className="header-logo flex-shrink-0">
          <Link href="/" className="flex items-center" aria-label="Aceros — Página inicial">
            <Image
              src="/images/imgur/OBD0nJ0.png"
              alt="Aceros — Aços Centrifugados"
              width={220}
              height={55}
              className="h-auto w-[172px] lg:w-[196px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-navigation hidden items-center xl:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-600 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#e46f1f] after:transition-transform hover:text-slate-950 hover:after:scale-x-100 xl:px-4 xl:after:inset-x-4"
              >
                  {link.label}
              </Link>
            ))}
          <div className="ml-3 flex items-center gap-3 border-l border-slate-200 pl-5">
            <Button
              asChild
              size="lg"
              className="btn-contato h-11 rounded-none bg-[#e46f1f] px-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white shadow-none hover:bg-[#bf5412]"
            >
              <Link href="/contato" className="flex items-center gap-2">
                {t.header.contact}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="btn-idioma">
                <LanguageSwitcher />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="header-mobile-actions flex items-center gap-2 xl:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="menu-icon-mobile h-11 w-11 rounded-none border border-slate-200">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-sm">
              <SheetHeader>
                <SheetTitle>
                   <Image
                      src="/images/imgur/OBD0nJ0.png"
                      alt="Aceros Logo"
                      width={280}
                      height={70}
                      className="h-auto w-36"
                      priority
                    />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors duration-300 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="mt-4 transition-transform duration-300 hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contato">{t.header.contact}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
           <div className="btn-idioma">
             <LanguageSwitcher />
           </div>
        </div>
      </div>
    </header>
  );
}
