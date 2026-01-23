
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

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
    { href: '/#sectors', label: t.header.expertise },
    { href: '/qualificacao', label: t.header.qualifications },
  ];

  return (
    <header
      className={cn(
        'site-header top-0 left-0 right-0 z-50',
        'bg-white/80 backdrop-blur-sm shadow-md'
      )}
    >
      <div className="header-container container mx-auto px-4 sm:px-8">
        {/* Logo */}
        <div className="header-logo flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.imgur.com/OBD0nJ0.png"
              alt="Aceros Logo"
              width={280}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-navigation hidden md:flex">
            {navLinks.map(link => (
              <Button key={link.href} asChild variant="ghost" size="lg" className="transition-colors duration-300 hover:text-primary text-xl px-8 py-5">
                <Link href={link.href}>
                  {link.label}
                </Link>
              </Button>
            ))}
          <div className="flex items-center gap-4 ml-4">
            <Button
              asChild
              size="lg"
              className="btn-contato bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 text-xl px-12 py-6"
            >
              <Link href="/contato">{t.header.contact}</Link>
            </Button>
            <div className="btn-idioma">
                <LanguageSwitcher />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="menu-icon-mobile">
                <Menu className="h-8 w-8" />
                <span className="sr-only">{t.header.open_menu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-sm">
              <SheetHeader>
                <SheetTitle>
                   <Image
                      src="https://i.imgur.com/OBD0nJ0.png"
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
