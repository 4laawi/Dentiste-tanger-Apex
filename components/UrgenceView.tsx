
import React from 'react';
import Intro from './Intro.tsx';
import TechSection from './TechSection.tsx';
import FAQAccordion from './FAQAccordion.tsx';
import ScheduleBanner from './ScheduleBanner.tsx';
import Testimonials from './Testimonials.tsx';
import ContactSection from './ContactSection.tsx';
import SEO from './SEO.tsx';
import { motion } from 'framer-motion';
import { PHONE } from '../constants';

interface Props {
    t: any;
    lang: 'en' | 'fr';
}

const UrgenceView: React.FC<Props> = ({ t, lang }) => {
    const ut = t.urgence_page;
    const locationText = lang === 'fr' ? 'à Tanger' : 'in Tangier';

    return (
        <div className="pt-0">
            <SEO
                title={t.seo.urgence.title}
                description={t.seo.urgence.description}
                lang={lang}
            />

            {/* Urgence Hero */}
            <section className="relative pt-[12vh] pb-[12vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(54, 54, 54, 0.65) 100%, rgba(255, 255, 255, 0) 100%), url(/Photo3.webp)`,
                        backgroundBlendMode: 'soft-light'
                    }}
                ></div>
                <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
                    <div className="max-w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-left"
                        >
                            <h1 className="font-work font-semibold text-3xl md:text-4xl lg:text-[3em] text-white leading-[1.1em] mb-0">
                                {ut.hero.title_light} <span className="font-bold">{ut.hero.title_bold}</span>
                                <br />
                                <span className="font-light">{locationText}</span>
                            </h1>

                            <div className="w-20 h-[2px] bg-white mt-6 mb-6"></div>

                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <motion.a
                                    href={`tel:${PHONE.replace(/\D/g, '')}`}
                                    whileHover={{ backgroundColor: '#66DBE8', color: '#000' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block bg-brand-cyan text-black px-8 py-3 text-lg font-bold uppercase tracking-tight hover:bg-white transition-all duration-300 rounded-none shrink-0"
                                    style={{
                                        fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                                        fontSize: '18px',
                                        padding: '12px 30px'
                                    }}
                                >
                                    {lang === 'fr' ? `Appeler ${PHONE}` : `Call Now ${PHONE}`}
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/212666061666"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ backgroundColor: '#FFF' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block bg-white text-black px-8 py-3 text-lg font-bold uppercase tracking-tight hover:bg-[#66DBE8] transition-all duration-300 rounded-none shrink-0"
                                    style={{
                                        fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                                        fontSize: '18px',
                                        padding: '12px 30px'
                                    }}
                                >
                                    {lang === 'fr' ? 'WhatsApp' : 'WhatsApp'}
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="pt-20">
                {/* Customized Intro for Emergencies */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden font-sans">
                    <div className="container mx-auto px-4 md:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-[38%] relative min-h-[400px] lg:min-h-0"
                            >
                                <div className="h-full rounded-sm overflow-hidden shadow-[0_12px_18px_-6px_rgba(0,0,0,0.3)]">
                                    <img
                                        src="/photo-problems.webp"
                                        alt="Urgence Dentaire"
                                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-[62%] flex flex-col justify-center"
                            >
                                <div className="mb-4">
                                    <h2 className="text-black font-work font-semibold leading-[1.1] flex flex-col">
                                        <span className="text-4xl md:text-5xl lg:text-6xl font-light opacity-80 leading-tight">
                                            {ut.intro.title.split(' ').slice(0, -1).join(' ')}
                                        </span>
                                        <span className="text-5xl md:text-7xl lg:text-8xl">
                                            {ut.intro.title.split(' ').slice(-1)}
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>
                                <div className="space-y-6 font-sans text-lg md:text-xl text-brand-dark leading-relaxed">
                                    <p>{ut.intro.p1}</p>
                                    <p>{ut.intro.p2}</p>
                                    <p className="font-bold text-brand-cyan">
                                        {lang === 'fr' ? 'Besoin d\'aide immédiate ?' : 'Need immediate help?'} {PHONE}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <TechSection t={t.tech} />

                {/* Pourquoi Choisir Notre Cabinet */}
                <section className="py-20 bg-neutral-50 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-12">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <h2 className="text-3xl md:text-5xl font-work font-bold text-black mb-6 leading-tight">
                                    {ut.why_choose.title}
                                </h2>
                                <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>
                                <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                                    {ut.why_choose.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {ut.why_choose.badges.map((badge: string, i: number) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                                            <span className="font-work font-semibold text-black">{badge}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="aspect-video bg-neutral-200 rounded-sm overflow-hidden relative group">
                                    <img
                                        src="/photo-reda-saoui.webp"
                                        alt="Apex Dental Team"
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Zone de Couverture */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-12 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-work font-bold text-black mb-4">
                            {ut.coverage.title}
                        </h2>
                        <div className="flex justify-center mb-8">
                            <div className="w-[2px] h-[35px] bg-brand-cyan"></div>
                        </div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            {ut.coverage.desc}
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/3">
                            <div className="grid grid-cols-2 gap-6">
                                {ut.coverage.locations.map((loc: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 border-l-2 border-brand-cyan bg-neutral-50 font-work font-bold text-black"
                                    >
                                        {loc}
                                    </motion.div>
                                ))}
                            </div>
                            <p className="mt-10 font-work font-bold text-brand-cyan italic">
                                {ut.coverage.highlight}
                            </p>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="h-[400px] w-full bg-neutral-100 rounded-sm relative overflow-hidden shadow-inner grayscale contrast-125 border border-neutral-200">
                                {/* Map Placeholder with stylized look */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12948.373204207!2d-5.811822!3d35.772583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b80985a66a39b%3A0x7d97b37f37494f4c!2sApex%20Dental%20Clinic!5e0!3m2!1sen!2sma!4v1710000000000!5m2!1sen!2sma"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border-[20px] border-white/50"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Services Grid */}
                <section id="emergency-services" className="pt-16 pb-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-[69px] font-work font-bold text-black leading-[1.1] mb-4">
                            {ut.services.title}
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-[2px] h-[35px] bg-brand-cyan"></div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ut.services.list.map((service: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-neutral-50 p-8 border border-neutral-100 hover:border-brand-cyan transition-colors"
                            >
                                <h3 className="text-2xl font-work font-bold mb-4 text-black">{service.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conseils Rapides en Cas d’Urgence */}
                <section className="py-20 bg-brand-dark text-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-work font-bold text-white mb-4">
                                {ut.tips.title}
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-[20px] h-[2px] bg-brand-cyan"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {ut.tips.list.map((tip: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <h3 className="text-xl font-work font-bold mb-3 text-brand-cyan">{tip.title}</h3>
                                    <p className="text-white/70 leading-relaxed">{tip.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.a
                                href={`tel:${PHONE.replace(/\D/g, '')}`}
                                whileHover={{ backgroundColor: '#66DBE8', color: '#000', scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block bg-brand-cyan text-black px-10 py-4 text-lg font-bold uppercase tracking-tight transition-all duration-300 rounded-none w-full sm:w-auto text-center"
                                style={{
                                    fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                                }}
                            >
                                {ut.tips.cta_call}
                            </motion.a>

                            <motion.a
                                href="https://wa.me/212666061666"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ backgroundColor: '#FFF', color: '#000', scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block border-2 border-white text-white px-10 py-4 text-lg font-bold uppercase tracking-tight hover:bg-white hover:text-black transition-all duration-300 rounded-none w-full sm:w-auto text-center"
                                style={{
                                    fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                                }}
                            >
                                {ut.tips.cta_whatsapp}
                            </motion.a>
                        </div>
                    </div>
                </section>

                <FAQAccordion t={ut.faq} />
                <Testimonials t={t.testimonials} />
                <ScheduleBanner t={t.schedule_banner} lang={lang} />
                <ContactSection t={t.contact} />
            </div>
        </div>
    );
};

export default UrgenceView;
