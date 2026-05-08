"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, ChevronDown, ChevronRight } from 'lucide-react';
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
  const pathname = usePathname();
  const router = useRouter();
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
    if (pathname === targetPath) {
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

  const isAboutActive = pathname === getLangPath('/about');
  const isProblemsActive = pathname === getLangPath('/problemes-traites');

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-700 ${isOpen ? 'z-[110]' : 'z-50'} ${isOpen ? 'bg-transparent' : (scrolled || activeDropdown ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4')}`}>
      <div className="w-[95%] mx-auto flex items-center justify-between">

        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Link href={getLangPath('/')} className="flex flex-col items-start group text-left" onClick={() => handleLinkClick('/')}>
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
              href={getLangPath('/urgence-dentaire-tanger')}
              onClick={() => handleLinkClick('/urgence-dentaire-tanger')}
              className={`font-work font-medium text-lg transition-colors ${pathname === getLangPath('/urgence-dentaire-tanger') ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
            >
              {nt.urgence}
            </Link>

            <Link
              href={getLangPath('/contact')}
              onClick={() => handleLinkClick('/contact')}
              className={`font-work font-medium text-lg transition-colors ${pathname === getLangPath('/contact') ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
            >
              Contact
            </Link>

            <Link
              href={getLangPath('/blog')}
              onClick={() => handleLinkClick('/blog')}
              className={`font-work font-medium text-lg transition-colors ${pathname === getLangPath('/blog') ? 'text-brand-cyan' : 'text-white/90 hover:text-brand-cyan'}`}
            >
              Blog
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
              href={getLangPath('/contact')}
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
        <div className="lg:hidden flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="text-white/80 font-bold uppercase text-xs sm:text-sm hover:text-brand-cyan transition-colors px-2 py-1"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button 
            className="text-brand-cyan p-2 relative z-[110]" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? (lang === 'fr' ? "Fermer le menu" : "Close menu") : (lang === 'fr' ? "Ouvrir le menu" : "Open menu")}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                className="absolute w-8 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-8 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                className="absolute w-8 h-0.5 bg-current rounded-full"
              />
            </div>
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
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setIsOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]" 
              />
              <motion.div 
                initial={{ x: '100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '100%' }} 
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden fixed inset-y-0 right-0 w-[85%] max-w-md bg-black border-l border-white/10 z-[100] flex flex-col shadow-2xl"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-end items-center mb-12 lg:hidden">
                    {/* The close button is handled by the dynamic Navbar z-index above, 
                        but we keep this spacing to match the header height */}
                    <div className="h-10" />
                  </div>

                  <nav className="flex flex-col gap-6 flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    {[
                      { label: nt.home, href: '/' },
                      { 
                        label: lang === 'fr' ? 'À Propos' : 'About', 
                        href: '/about',
                        subItems: [
                          { label: lang === 'fr' ? 'Notre Clinique' : 'Our Clinic', href: '/about' },
                          { label: lang === 'fr' ? 'Dentiste Anglophone' : 'English Dentist', href: '/english-speaking-dentist-tangier' },
                          { label: lang === 'fr' ? 'Dr. Reda Saoui' : 'Dr. Reda Saoui', href: '/dentiste-reda-saoui' }
                        ]
                      },
                      { 
                        label: 'Services', 
                        href: '/#services',
                        subItems: [
                          { label: lang === 'fr' ? 'Implants Dentaires' : 'Dental Implants', href: '/dental-implants-morocco' },
                          { label: lang === 'fr' ? 'Esthétique Dentaire' : 'Cosmetic Dentistry', href: '/#services' },
                          { label: lang === 'fr' ? 'Soins Généraux' : 'General Care', href: '/#services' }
                        ]
                      },
                      { label: nt.problems, href: '/problemes-traites' },
                      { label: nt.urgence, href: '/urgence-dentaire-tanger', important: true },
                      { label: 'Blog', href: '/blog' },
                      { label: 'Contact', href: '/contact' },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex flex-col gap-4"
                      >
                        <Link 
                          href={getLangPath(item.href)} 
                          onClick={() => handleLinkClick(item.href)}
                          className={`text-2xl font-work font-medium ${item.important ? 'text-red-500' : 'text-white'} hover:text-brand-cyan transition-colors flex items-center justify-between group`}
                        >
                          {item.label}
                          <ChevronRight size={20} className="text-white/20 group-hover:text-brand-cyan transition-colors" />
                        </Link>
                        
                        {item.subItems && (
                          <div className="flex flex-col gap-3 pl-4 border-l border-white/5">
                            {item.subItems.map((sub, sIdx) => (
                              <Link 
                                key={sIdx}
                                href={getLangPath(sub.href)}
                                onClick={() => handleLinkClick(sub.href)}
                                className="text-lg font-work font-light text-white/60 hover:text-brand-cyan transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
                    <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={24} className="text-black" fill="currentColor" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/50 text-xs uppercase tracking-widest">{lang === 'fr' ? 'Appelez-nous' : 'Call Us'}</span>
                        <span className="text-white font-work font-bold text-xl tracking-tight">{PHONE}</span>
                      </div>
                    </a>

                    <Link
                      href={getLangPath('/contact')}
                      onClick={() => handleLinkClick('/contact')}
                      className="w-full bg-brand-cyan text-black py-4 font-work font-bold text-center tracking-tight hover:bg-white transition-all shadow-lg"
                    >
                      {nt.schedule}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;


