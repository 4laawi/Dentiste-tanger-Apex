"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactFloatingButton from './ContactFloatingButton';
import MobileActionBar from './MobileActionBar';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { BLOG_POSTS } from '../blogData';

function getTranslatedPath(pathname: string, targetLang: 'en' | 'fr'): string {
  let path = pathname || '/';
  
  // 1. Dynamic Blog post lookup
  const segments = path.split('/');
  const blogIndex = segments.indexOf('blog');
  if (blogIndex !== -1 && blogIndex < segments.length - 1) {
    const currentSlug = segments[blogIndex + 1];
    const isFrenchPost = BLOG_POSTS.fr.find(p => p.slug === currentSlug);
    const isEnglishPost = BLOG_POSTS.en.find(p => p.slug === currentSlug);
    const post = isFrenchPost || isEnglishPost;

    if (post) {
      const targetPost = BLOG_POSTS[targetLang].find(p => p.id === post.id);
      if (targetPost) {
        return targetLang === 'en' ? `/en/blog/${targetPost.slug}` : `/blog/${targetPost.slug}`;
      }
    }
  }

  // Remove lang prefix from path to work with base path
  const isEnPath = path.startsWith('/en/') || path === '/en';
  const basePath = isEnPath ? (path.replace(/^\/en(\/|$)/, '$1') || '/') : path;
  
  // 2. Static path translations
  const staticMap: Record<string, string> = {
    '/dentiste-reda-saoui': '/dr-reda-saoui-dentist',
    '/dentiste-anglophone-tanger': '/english-speaking-dentist-tangier',
    '/facettes-dentaires-tanger': '/#services',
    '/invisalign-tanger': '/#services',
    '/implants-dentaires-tanger': '/dental-implants-morocco',
    '/blanchiment-dentaire-tanger': '/#services',
  };

  const reverseStaticMap: Record<string, string> = {
    '/dr-reda-saoui-dentist': '/dentiste-reda-saoui',
    '/english-speaking-dentist-tangier': '/dentiste-anglophone-tanger',
    '/dental-implants-morocco': '/implants-dentaires-tanger',
  };

  if (targetLang === 'en') {
    const mapped = staticMap[basePath];
    if (mapped) {
      return `/en${mapped === '/' ? '' : mapped}`;
    }
    return `/en${basePath === '/' ? '' : basePath}`;
  } else {
    const mapped = reverseStaticMap[basePath];
    if (mapped) {
      return mapped;
    }
    const frenchCounterpart = Object.keys(staticMap).find(key => staticMap[key] === basePath);
    if (frenchCounterpart) {
      return frenchCounterpart;
    }
    return basePath;
  }
}

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
    document.documentElement.lang = lang;
  }, [lang]);

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
            const newPath = getTranslatedPath(pathname, newLang);
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
