"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactFloatingButton from './ContactFloatingButton';
import MobileActionBar from './MobileActionBar';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const ProblemsOverlay = dynamic(() => import('./ProblemsOverlay'), {
  ssr: false
});

interface Props {
  children: React.ReactNode;
  lang: 'en' | 'fr';
  t: any;
  currentView?: string;
}

export default function ClientPageLayout({ children, lang, t, currentView = 'home' }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [isProblemsOpen, setIsProblemsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowMobileBar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isProblemsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isProblemsOpen]);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar
        scrolled={scrolled}
        lang={lang}
        setLang={(newLang) => {
            if (newLang === lang) return;
            let newPath = pathname;
            if (newLang === 'en') {
              newPath = `/en${pathname === '/' ? '' : pathname}`;
            } else {
              newPath = pathname.replace(/^\/en(\/|$)/, '$1') || '/';
            }
            router.push(newPath);
        }}
        t={t}
        onOpenProblems={() => setIsProblemsOpen(true)}
        currentView={currentView}
        setSelectedService={setSelectedService}
      />

      <AnimatePresence>
        {isProblemsOpen && (
          <ProblemsOverlay
            onClose={() => setIsProblemsOpen(false)}
            lang={lang}
            t={t.problems}
          />
        )}
      </AnimatePresence>

      <main>
        {/* We pass these down via children if they are cloned, or just use context */}
        {/* For now, we'll assume children might need these props */}
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && typeof child.type !== 'string') {
            return React.cloneElement(child as React.ReactElement<any>, { 
              selectedService, 
              setSelectedService 
            });
          }
          return child;
        })}
      </main>

      <Footer lang={lang} />
      <ContactFloatingButton lang={lang} />
      <MobileActionBar t={t} lang={lang} isVisible={showMobileBar} />
    </div>
  );
}
