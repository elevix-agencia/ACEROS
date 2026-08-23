
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/layout/whatsapp-float';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';
import { LanguageProvider } from '@/hooks/use-language';
import Template from './template';
import React from 'react';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <LanguageProvider>
        <Header />
        <Template>{children}</Template>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </LanguageProvider>
    </FirebaseClientProvider>
  );
}
