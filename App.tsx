
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import HomeView from './components/HomeView.tsx';

// Lazy load non-critical views
const ProblemsView = lazy(() => import('./components/ProblemsView.tsx'));
const AboutView = lazy(() => import('./components/AboutView.tsx'));
const RedaSaouiView = lazy(() => import('./components/RedaSaouiView.tsx'));
const BlogView = lazy(() => import('./components/BlogView.tsx'));
const BlogPostView = lazy(() => import('./components/BlogPostView.tsx'));
const ContactView = lazy(() => import('./components/ContactView.tsx'));
const UrgenceView = lazy(() => import('./components/UrgenceView.tsx'));
const EnglishDentistView = lazy(() => import('./components/EnglishDentistView.tsx'));
const DentalImplantsView = lazy(() => import('./components/DentalImplantsView.tsx'));

import Footer from './components/Footer.tsx';
import ContactFloatingButton from './components/ContactFloatingButton.tsx';
import ProblemsOverlay from './components/ProblemsOverlay.tsx';
import { TRANSLATIONS } from './constants.tsx';

const AnimatedRoutes: React.FC<{ t: any; lang: 'en' | 'fr' }> = ({ t, lang }) => {
  const location = useLocation();
  const normalizedPathname = location.pathname.replace(/\/+/g, '/');

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={normalizedPathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={{ ...location, pathname: normalizedPathname }}>
          <Route
            path="/"
            element={<HomeView t={t} expertise={t.expertise} lang={lang} />}
          />
          <Route
            path="/problemes-traites"
            element={<ProblemsView t={t} lang={lang} />}
          />
          <Route
            path="/about"
            element={<AboutView t={t} lang={lang} />}
          />
          <Route
            path="/dentiste-reda-saoui"
            element={<RedaSaouiView t={t} lang={lang} />}
          />
          <Route
            path="/blog"
            element={<BlogView t={t} lang={lang} />}
          />
          <Route
            path="/blog/:slug"
            element={<BlogPostView t={t} lang={lang} />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

import MobileActionBar from './components/MobileActionBar.tsx';

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [isProblemsOpen, setIsProblemsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language from URL
  const isEnglish = location.pathname.startsWith('/en');
  const lang: 'en' | 'fr' = isEnglish ? 'en' : 'fr';
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowMobileBar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isProblemsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isProblemsOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: 'en' | 'fr') => {
    if (newLang === lang) return;

    let newPath = location.pathname;
    if (newLang === 'en') {
      newPath = `/en${location.pathname === '/' ? '' : location.pathname}`;
    } else {
      newPath = location.pathname.replace(/^\/en(\/|$)/, '$1') || '/';
    }
    navigate(newPath);
  };

  const currentView = location.pathname.includes('/problemes-traites') ? 'problems' : 'home';

  // Helper to strip /en from path for routing
  const getRoutingPath = () => {
    if (lang === 'en') {
      return location.pathname.replace(/^\/en(\/|$)/, '$1') || '/';
    }
    return location.pathname;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar
        scrolled={scrolled}
        lang={lang}
        setLang={setLang}
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
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<div className="min-h-screen bg-white" />}>
              <Routes location={{ ...location, pathname: getRoutingPath() }}>
                <Route
                  path="/"
                  element={<HomeView t={t} expertise={t.expertise} lang={lang} selectedService={selectedService} setSelectedService={setSelectedService} />}
                />
                <Route
                  path="/problemes-traites"
                  element={<ProblemsView t={t} lang={lang} />}
                />
                <Route
                  path="/about"
                  element={<AboutView t={t} lang={lang} />}
                />
                <Route
                  path="/dentiste-reda-saoui"
                  element={<RedaSaouiView t={t} lang={lang} />}
                />
                <Route
                  path="/blog"
                  element={<BlogView t={t} lang={lang} />}
                />
                <Route
                  path="/blog/:slug"
                  element={<BlogPostView t={t} lang={lang} />}
                />
                <Route
                  path="/contact"
                  element={<ContactView t={t} lang={lang} />}
                />
                <Route
                  path="/urgence-dentaire-tanger"
                  element={<UrgenceView t={t} lang={lang} />}
                />
                <Route
                  path="/english-speaking-dentist-tangier"
                  element={<EnglishDentistView t={t} lang={lang} />}
                />
                <Route
                  path="/dental-implants-morocco"
                  element={<DentalImplantsView t={t} lang={lang} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer lang={lang} />
      <ContactFloatingButton lang={lang} />
      <MobileActionBar t={t} lang={lang} isVisible={showMobileBar} />
    </div>
  );
};

import { HelmetProvider } from 'react-helmet-async';
import NotFound from './components/NotFound.tsx';

// ... other imports ...

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
};

export default App;
