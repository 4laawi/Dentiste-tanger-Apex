import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { PHONE, ADDRESS } from '../constants.tsx';
import SEO from './SEO.tsx';

interface Props {
    t: any;
    lang: 'en' | 'fr';
}

const ContactView: React.FC<Props> = ({ t, lang }) => {
    const [selectedService, setSelectedService] = useState<string>('');

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const getLangPath = (path: string) => {
        if (lang === 'en') {
            return `/en${path === '/' ? '' : path}`;
        }
        return path;
    };

    const expertiseItems = [
        { title: t.expertise?.facettes || "facettes" },
        { title: t.expertise?.aligneurs || "aligneurs" },
        { title: t.expertise?.couronnes || "couronnes" },
        { title: t.expertise?.blanchimentFlash || "blanchiment fläsh" },
        { title: t.expertise?.implant || "implant" },
        { title: t.expertise?.pedodontie || "pédodontie" },
        { title: t.expertise?.traitementsCanalaires || "traitements canalaires" },
        { title: t.expertise?.parodontie || "parodontie" },
        { title: t.expertise?.chirurgieOrale || "chirurgie orale" },
    ];

    return (
        <div className="bg-white">
            <SEO
                title={t.seo.contact.title}
                description={t.seo.contact.description}
                lang={lang}
            />

            {/* 1. Notre Clinique à Tanger (Hero/Map Section) */}
            <section className="relative pt-32 pb-20 bg-black overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-8xl font-bold text-white font-work leading-none lowercase tracking-tighter">
                            <span className="font-light opacity-50 block md:inline">{t.contact.our}</span> {t.contact.office}
                        </h1>
                        <div className="w-24 h-1 bg-brand-cyan mt-8"></div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        <div className="w-full lg:w-1/2 space-y-12">
                            <motion.div {...fadeInUp} className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <MapPin className="text-brand-cyan shrink-0" size={40} strokeWidth={1} />
                                    <div>
                                        <p className="text-2xl text-white font-work lowercase mb-4">{ADDRESS}</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Apex+Dental+Clinic+Tanger"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-brand-cyan font-bold uppercase text-sm tracking-widest border-b border-brand-cyan hover:text-white hover:border-white transition-all pb-1"
                                        >
                                            {t.contact.directions}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Phone className="text-brand-cyan shrink-0" size={40} strokeWidth={1} />
                                    <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-3xl font-bold font-work text-white tracking-tighter hover:text-brand-cyan transition-colors">
                                        {PHONE}
                                    </a>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Clock className="text-brand-cyan shrink-0" size={32} strokeWidth={1} />
                                    <div className="text-lg text-white/70 font-sans italic">
                                        <p>{t.contact.hours}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-2xl border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9899426278835!2d-5.8047094999999995!3d35.7756234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7fb2933d913f%3A0x80899102823ebcf3!2sApex%20Dental%20Clinic!5e0!3m2!1sen!2sma!4v1767470670542!5m2!1sen!2sma"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)', display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
            </section>

            {/* 2. Contactez Notre Équipe (Form Section) */}
            <section className="bg-white py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="w-full lg:w-1/3">
                            <motion.div {...fadeInUp} className="sticky top-40">
                                <h2 className="text-4xl md:text-7xl font-bold font-work text-black lowercase tracking-tighter mb-8 leading-none">
                                    {t.contact_team.title_bold} <br />
                                    <span className="font-light opacity-40">{t.contact_team.title_light}</span>
                                </h2>
                                <p className="text-xl text-black/60 font-serif italic max-w-sm leading-relaxed">
                                    {lang === 'fr'
                                        ? "Notre équipe dédiée est à votre écoute pour répondre à toutes vos questions et vous accompagner vers votre plus beau sourire."
                                        : "Our dedicated team is here to answer your questions and guide you toward your most beautiful smile."}
                                </p>
                                <div className="mt-12 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                                        <span className="font-bold uppercase tracking-widest text-xs text-black/40">{lang === 'fr' ? 'disponible maintenant' : 'available now'}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-2/3">
                            <div className="bg-brand-dark p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative">
                                <div className="absolute top-0 left-0 w-2 h-24 bg-brand-cyan"></div>
                                <form
                                    className="space-y-10"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.currentTarget);
                                        const name = formData.get('name') as string;
                                        const lastName = formData.get('lastName') as string;
                                        const service = formData.get('service') as string;
                                        const otherService = formData.get('otherService') as string;

                                        const finalService = service === 'other' ? otherService : service;
                                        const message = t.contact_team.whatsapp_msg
                                            .replace('{name}', name)
                                            .replace('{lastName}', lastName)
                                            .replace('{service}', finalService);

                                        const whatsappUrl = `https://wa.me/212${PHONE.replace(/\D/g, '').replace(/^0/, '')}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappUrl, '_blank');
                                    }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="relative group">
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder={t.contact_team.placeholders.name}
                                                required
                                                className="w-full bg-transparent border-b border-white/20 p-4 font-work lowercase outline-none focus:border-brand-cyan transition-colors text-white placeholder-white/30"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder={t.contact_team.placeholders.lastName}
                                                required
                                                className="w-full bg-transparent border-b border-white/20 p-4 font-work lowercase outline-none focus:border-brand-cyan transition-colors text-white placeholder-white/30"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            className="w-full bg-transparent border-b border-white/20 p-4 font-work lowercase outline-none focus:border-brand-cyan transition-colors text-white appearance-none cursor-pointer"
                                            value={selectedService}
                                            onChange={(e) => {
                                                setSelectedService(e.target.value);
                                            }}
                                        >
                                            <option value="" disabled className="bg-brand-dark">{t.contact_team.placeholders.service}</option>
                                            {expertiseItems.map((item, i) => (
                                                <option key={i} value={item.title} className="bg-brand-dark">{item.title}</option>
                                            ))}
                                            <option value="other" className="bg-brand-dark">{lang === 'fr' ? "autre" : "other"}</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ArrowRight className="text-brand-cyan rotate-90" size={20} />
                                        </div>
                                    </div>

                                    {selectedService === 'other' && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="overflow-hidden"
                                        >
                                            <input
                                                name="otherService"
                                                type="text"
                                                placeholder={t.contact_team.placeholders.specify}
                                                required
                                                className="w-full bg-transparent border-b border-white/20 p-4 font-work lowercase outline-none focus:border-brand-cyan transition-colors text-white placeholder-white/30"
                                            />
                                        </motion.div>
                                    )}

                                    <button type="submit" className="w-full bg-brand-cyan text-black py-6 md:py-8 font-bold uppercase hover:bg-white transition-all text-xl tracking-[0.2em] shadow-2xl flex items-center justify-center gap-4 group">
                                        <span>{t.contact_team.placeholders.submit}</span>
                                        <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aesthetic touches */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            </section>
        </div>
    );
};

export default ContactView;
