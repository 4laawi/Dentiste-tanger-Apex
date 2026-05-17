"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react';
import { SEOServiceData } from '../data/seoServices';
import { PHONE } from '../constants';

interface Props {
  data: SEOServiceData;
  lang?: 'en' | 'fr';
}

const SeoServiceView: React.FC<Props> = ({ data, lang = 'fr' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappMessage = `Bonjour Dr. Saoui, je souhaite avoir plus d'informations concernant : ${data.title}`;
  const whatsappUrl = `https://wa.me/212${PHONE.replace(/\D/g, '').replace(/^0/, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* 1. Hero Section (Above the Fold) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40 z-0">
            <img 
              src="/DSCF7556.webp" 
              alt={data.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-brand-cyan text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">
              {data.heroTag}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-work leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-work font-light leading-relaxed mb-10">
              {data.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 font-bold text-lg hover:bg-[#128C7E] transition-colors rounded-none"
              >
                <MessageCircle size={24} />
                Contactez-nous sur WhatsApp
              </a>
              <a 
                href="#details"
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-bold text-lg hover:bg-white/20 transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Description & Before/After */}
      <section id="details" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold font-work mb-8">
                À propos du traitement
              </h2>
              <div className="prose prose-lg text-brand-dark/80 max-w-none space-y-6">
                <p className="text-lg leading-relaxed">{data.description}</p>
                <div className="bg-gray-50 p-6 border-l-4 border-brand-cyan mt-8">
                  <h3 className="font-bold font-work text-xl mb-2">Résultat Avant / Après</h3>
                  <p className="italic font-serif">{data.beforeAfterMention}</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-gray-100"
            >
              <img 
                src="/Photo3.webp" 
                alt={`${data.title} Cabinet Dentaire`} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-work mb-6">
              Les Avantages de ce Traitement
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl font-work mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing & CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-work mb-8">
              Tarifs et Devis
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
              {data.priceRange}
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 font-bold text-xl hover:bg-white hover:text-[#25D366] transition-colors rounded-none"
            >
              <MessageCircle size={24} />
              Demander un devis sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-work mb-6">
              Questions Fréquentes (FAQ)
            </h2>
            <p className="text-gray-600 text-lg">
              Retrouvez les réponses aux questions les plus courantes sur {data.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-gray-200 bg-white"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold font-work text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-brand-cyan' : 'text-gray-400'}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServiceView;
