import React from 'react';
import TechSection from './TechSection.tsx';
import FAQAccordion from './FAQAccordion.tsx';
import ScheduleBanner from './ScheduleBanner.tsx';
import Testimonials from './Testimonials.tsx';
import ContactSection from './ContactSection.tsx';
import SEO from './SEO.tsx';
import { motion } from 'framer-motion';
import { PHONE, TRANSLATIONS } from '../constants.tsx';

interface Props {
    t: any;
    lang: 'en' | 'fr';
}

const DentalImplantsView: React.FC<Props> = ({ t, lang }) => {
    // Access the dental_implants_page translations
    // Fallback to English if translation is missing (safety check)
    const ut = t.dental_implants_page || TRANSLATIONS.en.dental_implants_page;
    const locationText = lang === 'fr' ? 'à Tanger' : 'in Tangier';

    return (
        <div className="pt-0">
            {/* Dynamic SEO title/desc from constants if available, else fallback */}
            <SEO
                title={ut.hero.tag + " - " + ut.intro.title}
                description={ut.hero.desc}
                lang={lang}
            />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-bg" // Parallax effect if possible, else cover
                    style={{
                        backgroundImage: `url(/photo4.webp)`,
                        backgroundPosition: 'center 30%'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
                </div>

                <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10 pt-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-left"
                        >
                            <div className="inline-block bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 text-brand-cyan px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 uppercase">
                                {ut.hero.tag}
                            </div>

                            <h1 className="font-work font-bold text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-8 tracking-tight">
                                {ut.hero.title_light} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">
                                    {ut.hero.title_bold}
                                </span>
                            </h1>

                            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed font-light">
                                {ut.hero.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 items-center mb-16">
                                <motion.a
                                    href={`tel:${PHONE.replace(/\D/g, '')}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto text-center bg-brand-cyan text-brand-dark px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 min-w-[220px]"
                                >
                                    {lang === 'fr' ? `Appeler` : `Call Now`}
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/212666061666"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto text-center bg-white text-brand-dark px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 min-w-[220px] flex items-center justify-center gap-2"
                                >
                                    <span>WhatsApp</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="pt-20">
                {/* Intro Section */}
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
                                        src="/photo-implants-intro.webp"
                                        onError={(e) => { e.currentTarget.src = '/photo-problems.webp' }} // Fallback
                                        alt="Dental Implants Morocco"
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
                                            {ut.intro.title}
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>
                                <div className="space-y-6 font-sans text-lg md:text-xl text-brand-dark leading-relaxed">
                                    <p>{ut.intro.p1}</p>
                                    <p>{ut.intro.p2}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <TechSection t={t.tech} />

                {/* Patient Journey Section */}
                <section className="py-20 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-work font-bold text-black mb-4">
                                {ut.journey.title}
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-[2px] h-[35px] bg-brand-cyan"></div>
                            </div>
                            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                {ut.journey.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {ut.journey.steps.map((step: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-neutral-50 border border-neutral-100 relative group hover:border-brand-cyan transition-colors"
                                >
                                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-cyan text-black flex items-center justify-center font-bold text-xl">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-work font-bold mb-4 text-black mt-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
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
                                        alt="Dr. Reda Saoui Implantologist"
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="pt-16 pb-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-work font-bold text-black leading-[1.1] mb-4">
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

                {/* Environment Section */}
                <section className="py-20 bg-neutral-50">
                    <div className="container mx-auto px-4 md:px-12">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <h2 className="text-3xl md:text-5xl font-work font-bold text-black mb-6 leading-tight">
                                    {ut.environment.title}
                                </h2>
                                <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>
                                <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                                    {ut.environment.desc}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {ut.environment.features.map((feature: any, i: number) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="text-xl font-work font-bold text-black flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                                                {feature.title}
                                            </h4>
                                            <p className="text-neutral-500">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="aspect-[4/3] bg-neutral-100 rounded-sm overflow-hidden shadow-2xl">
                                    <img
                                        src="/photo5.webp"
                                        alt="Apex Clinic Interior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Tips Section */}
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

export default DentalImplantsView;
