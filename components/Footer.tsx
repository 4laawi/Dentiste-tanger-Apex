
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ADDRESS, PHONE } from '../constants';
import { Link } from 'react-router-dom';

interface Props {
  lang: 'en' | 'fr';
}

const Footer: React.FC<Props> = ({ lang }) => {
  const t = {
    fr: {
      services: "Spécialités",
      info: "Clinique",
      office: "Adresse",
      connect: "Suivez-nous",
      appointment: "Prendre Rendez-vous",
      rights: "Tous droits réservés APEX Dental Care 2026",
      s1: "Implants Dentaires",
      s2: "Esthétique Dentaire",
      s3: "Blanchiment Laser",
      s4: "Urgence Dentaire",
      i1: "Le Docteur",
      i2: "Nouveaux Patients",
      i3: "Technologie",
      i4: "Accès & Plan"
    },
    en: {
      services: "Specialties",
      info: "Practice",
      office: "Location",
      connect: "Connect",
      appointment: "Book Consultation",
      rights: "All rights reserved APEX Dental Care 2026",
      s1: "Dental Implants",
      s2: "Cosmetic Dentistry",
      s3: "Laser Whitening",
      s4: "Emergency Care",
      i1: "The Doctor",
      i2: "New Patients",
      i3: "Technology",
      i4: "Map & Directions"
    }
  }[lang];

  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <footer className="bg-black text-white pt-6 md:pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-bold mb-6 text-brand-cyan">{t.services}</h4>
            <ul className="space-y-4 font-sans text-white/70">
              <li><Link to={getLangPath('/#services')} className="hover:text-brand-cyan transition-colors">{t.s1}</Link></li>
              <li><Link to={getLangPath('/#services')} className="hover:text-brand-cyan transition-colors">{t.s2}</Link></li>
              <li><Link to={getLangPath('/#services')} className="hover:text-brand-cyan transition-colors">{t.s3}</Link></li>
              <li><Link to={getLangPath('/#services')} className="hover:text-brand-cyan transition-colors">{t.s4}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-brand-cyan">{t.info}</h4>
            <ul className="space-y-4 font-sans text-white/70">
              <li><Link to={getLangPath('/dentiste-reda-saoui')} className="hover:text-brand-cyan transition-colors">{t.i1}</Link></li>
              <li><Link to={getLangPath('/about')} className="hover:text-brand-cyan transition-colors">{t.i2}</Link></li>
              <li><Link to={getLangPath('/about')} className="hover:text-brand-cyan transition-colors">{t.i3}</Link></li>
              <li><Link to={getLangPath('/contact')} className="hover:text-brand-cyan transition-colors">{t.i4}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-brand-cyan">{t.office}</h4>
            <p className="text-white/70 font-sans leading-relaxed">
              {ADDRESS}
            </p>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-brand-cyan font-bold mt-4 block hover:text-white transition-colors">
              {PHONE}
            </a>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-brand-cyan">{t.connect}</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/apexdental.ma/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-cyan text-black flex items-center justify-center hover:bg-white transition-all rounded-full" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/apexdental.ma/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-cyan text-black flex items-center justify-center hover:bg-white transition-all rounded-full" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
            <Link to={getLangPath('/contact')} className="w-full bg-brand-teal text-white py-4 font-bold uppercase hover:bg-brand-cyan hover:text-black transition-all rounded-sm block text-center">
              {t.appointment}
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-sans text-sm">
          <p>© {t.rights} | Clinique Dentaire Tanger</p>
          <p>
            Made by <a href="https://www.sitepro.ma" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">www.sitepro.ma</a>
          </p>
          <p>Tanger, Maroc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
