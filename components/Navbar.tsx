
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PHONE } from '../constants.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import AboutDropdown from './AboutDropdown.tsx';
import ServicesDropdown from './ServicesDropdown.tsx';
import ProblemsDropdown from './ProblemsDropdown.tsx';

interface Props {
  scrolled: boolean;
  lang: 'en' | 'fr';
  setLang: (l: 'en' | 'fr') => void;
  t: any;
  onOpenProblems: () => void;
  currentView: string;
  setSelectedService: (service: string) => void;
}

const Navbar: React.FC<Props> = ({ scrolled, lang, setLang, t, onOpenProblems, currentView, setSelectedService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'about' | 'services' | 'problems' | null>(null);
  const [showUrgency, setShowUrgency] = useState(false);
  const location = useLocation();
  const nt = t.nav;

  const toggleDropdown = (dropdown: 'about' | 'services' | 'problems') => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  const handleLinkClick = (to: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    const targetPath = getLangPath(to);
    if (location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowUrgency(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    let initialScrollY = window.scrollY;

    const handleScroll = () => {
      if (isOpen) {
        const currentScrollY = window.scrollY;
        // Only close if scrolled more than 10px to avoid accidental closes or initial layout shifts
        if (Math.abs(currentScrollY - initialScrollY) > 10) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      initialScrollY = window.scrollY;
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const isAboutActive = location.pathname === getLangPath('/about');
  const isProblemsActive = location.pathname === getLangPath('/problemes-traites');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled || activeDropdown ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="w-[95%] mx-auto flex items-center justify-between">

        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Link to={getLangPath('/')} className="flex flex-col items-start group text-left" onClick={() => handleLinkClick('/')}>
            <span className="text-white font-work font-bold text-2xl lg:text-3xl tracking-tighter uppercase group-hover:text-brand-cyan transition-colors">
              APEX
            </span>
            <span className="text-white font-work font-light text-[10px] lg:text-[11px] tracking-[0.4em] uppercase -mt-1 opacity-80">
              CLINIQUE DENTAIRE
            </span>
          </Link>
        </div>

        {/* Right Side: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className={`flex items-center gap-1.5 font-work font-medium text-lg transition-colors ${activeDropdown === 'about' || isAboutActive ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
              >
                {lang === 'fr' ? 'À Propos' : 'About'} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : 'opacity-50'}`} />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className={`flex items-center gap-1.5 font-work font-medium text-lg transition-colors ${activeDropdown === 'services' ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : 'opacity-50'}`} />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('problems')}
                className={`flex items-center gap-1.5 font-work font-medium text-lg transition-colors ${activeDropdown === 'problems' || isProblemsActive ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
              >
                {nt.problems} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'problems' ? 'rotate-180' : 'opacity-50'}`} />
              </button>
            </div>

            <Link
              to={getLangPath('/urgence-dentaire-tanger')}
              onClick={() => handleLinkClick('/urgence-dentaire-tanger')}
              className={`font-work font-medium text-lg transition-colors ${location.pathname === getLangPath('/urgence-dentaire-tanger') ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
            >
              {nt.urgence}
            </Link>

            <Link
              to={getLangPath('/contact')}
              onClick={() => handleLinkClick('/contact')}
              className={`font-work font-medium text-lg transition-colors ${location.pathname === getLangPath('/contact') ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-8 border-l border-white/20 pl-8">
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="flex items-center gap-2 group relative h-8 overflow-hidden min-w-[160px]">
              <AnimatePresence mode="wait">
                {!showUrgency ? (
                  <motion.div
                    key="phone"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2"
                  >
                    <Phone size={18} className="text-brand-cyan group-hover:scale-110 transition-transform" fill="currentColor" />
                    <span className="text-white font-work font-bold text-lg tracking-tight">{PHONE}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="urgency"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-red-500 font-work font-black text-lg uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-pulse">
                      {lang === 'fr' ? 'Urgences 24/7' : 'Emergencies 24/7'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </a>

            <Link
              to={getLangPath('/contact')}
              onClick={() => handleLinkClick('/contact')}
              className="bg-brand-cyan text-black px-8 py-3.5 font-work font-bold text-lg tracking-tight hover:bg-white transition-all rounded-none shadow-xl inline-block"
            >
              {nt.schedule}
            </Link>

            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="text-white/50 text-sm font-bold hover:text-brand-cyan uppercase"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="text-white/80 font-bold uppercase text-sm hover:text-brand-cyan transition-colors"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button className="text-brand-cyan p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? (lang === 'fr' ? "Fermer le menu" : "Close menu") : (lang === 'fr' ? "Ouvrir le menu" : "Open menu")}>
            {isOpen ? <X size={36} strokeWidth={1.5} /> : <Menu size={36} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Dropdowns */}
      <AnimatePresence mode="wait">
        {activeDropdown === 'about' && (
          <AboutDropdown
            key="about"
            isOpen={true}
            onClose={() => setActiveDropdown(null)}
            onLinkClick={handleLinkClick}
            lang={lang}
            t={t}
          />
        )}
        {activeDropdown === 'services' && (
          <ServicesDropdown
            key="services"
            isOpen={true}
            onClose={() => setActiveDropdown(null)}
            onLinkClick={handleLinkClick}
            lang={lang}
            t={t}
            setSelectedService={setSelectedService}
          />
        )}
        {activeDropdown === 'problems' && (
          <ProblemsDropdown
            key="problems"
            isOpen={true}
            onClose={() => setActiveDropdown(null)}
            onLinkClick={handleLinkClick}
            lang={lang}
            t={t}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="lg:hidden fixed inset-0 bg-black z-[100] overflow-y-auto">
              <div className="p-6 flex flex-col min-h-full">
                <div className="flex justify-between items-center mb-12">
                  <span className="text-white font-work font-bold text-xl uppercase tracking-tighter">APEX</span>
                  <button onClick={() => setIsOpen(false)} className="text-brand-cyan"><X size={40} /></button>
                </div>
                <div className="flex flex-col gap-8 flex-1">
                  <Link to={getLangPath('/')} onClick={() => handleLinkClick('/')} className="text-white text-3xl font-work text-left">{nt.home}</Link>
                  <Link to={getLangPath('/about')} onClick={() => handleLinkClick('/about')} className={`text-3xl font-work text-left ${location.pathname === getLangPath('/about') ? 'text-brand-cyan font-bold' : 'text-white'}`}>{nt.about.label}</Link>
                  <Link to={getLangPath('/#services')} onClick={() => handleLinkClick('/')} className="text-white text-3xl font-work text-left">{nt.services.label}</Link>
                  <Link to={getLangPath('/problemes-traites')} onClick={() => handleLinkClick('/problemes-traites')} className={`text-3xl font-work text-left ${location.pathname === getLangPath('/problemes-traites') ? 'text-brand-cyan font-bold' : 'text-white'}`}>{nt.problems}</Link>
                  <Link to={getLangPath('/urgence-dentaire-tanger')} onClick={() => handleLinkClick('/urgence-dentaire-tanger')} className={`text-3xl font-work text-left ${location.pathname === getLangPath('/urgence-dentaire-tanger') ? 'text-brand-cyan font-bold' : 'text-white'}`}>{nt.urgence}</Link>
                  <Link to={getLangPath('/contact')} onClick={() => handleLinkClick('/contact')} className={`text-3xl font-work text-left ${location.pathname === getLangPath('/contact') ? 'text-brand-cyan font-bold' : 'text-white'}`}>{nt.contact_label}</Link>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="flex items-center gap-4 group relative h-12 overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showUrgency ? (
                          <motion.div
                            key="phone-mobile"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-4"
                          >
                            <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                              <Phone size={24} className="text-brand-cyan" fill="currentColor" />
                            </div>
                            <span className="text-white font-work font-bold text-2xl tracking-tight">{PHONE}</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="urgency-mobile"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center"
                          >
                            <span className="text-red-500 font-work font-black text-2xl uppercase tracking-tighter">
                              {lang === 'fr' ? 'urgences 24/7' : 'emergencies 24/7'}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </a>
                  </div>


                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;


