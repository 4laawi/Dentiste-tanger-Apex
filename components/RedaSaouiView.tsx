import React from "react";
import { motion } from "framer-motion";
import { PHONE } from "../constants";
import { useParallax } from "../hooks/useParallax";
import SEO from "./SEO";

const bannerImage = "/DSCF7556.webp";

interface Props {
  t: any;
  lang: 'en' | 'fr';
}

const RedaSaouiView: React.FC<Props> = ({ t, lang }) => {
  const at = t.about_page;

  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };


  // Parallax hooks for consistency with home page
  const storyParallax = useParallax(15);
  const personalParallax = useParallax(15);

  return (
    <div className="overflow-hidden bg-white font-sans text-brand-dark">
      <SEO
        title={t.seo.doctor.title}
        description={t.seo.doctor.description}
        lang={lang}
      />
      {/* Hero Section - Aligned with Home Page */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Dr. Reda Saoui"
            className="w-full h-full object-cover"
            style={{ opacity: 0.6 }}
            width="6044"
            height="4029"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-brand-cyan text-sm md:text-base font-bold uppercase tracking-[0.5em] mb-6 opacity-90">
              {t.hero.tag}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-work leading-[1.1] mb-8 tracking-tight">
              {t.hero.title_part1} <br />
              <span className="font-light italic font-serif text-brand-cyan">{t.hero.title_part2}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-sans mb-12 max-w-xl leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getLangPath('/#contact')}
                className="bg-brand-cyan text-black px-10 py-4 font-bold uppercase hover:bg-white transition-all text-lg rounded-none shadow-xl text-center"
              >
                {t.hero.cta_schedule}
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="backdrop-blur-md bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase hover:bg-white/10 transition-all text-lg text-center"
              >
                {t.hero.cta_call} {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Aligned with Home Page Parallax Pattern */}
      <section ref={storyParallax.containerRef} className="parallax-section bg-white py-16 lg:py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse lg:items-stretch items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-brand-cyan/5 -translate-x-6 translate-y-6 -z-10"></div>
                <img src="/photo-reda-saoui.webp" className="w-full h-full object-cover shadow-2xl rounded-sm" alt="Dr. Reda Saoui" loading="lazy" width="1696" height="2528" />
              </div>
            </div>
            <div ref={storyParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-7xl lg:text-[5.5vw] font-bold font-work leading-[0.8] mb-8 lowercase tracking-tighter">
                <span className="font-light block opacity-40">{at.story.title_light}</span>
                {at.story.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-8 space-y-6">
                <p className="text-xl font-bold font-serif text-brand-dark/90">
                  {at.story.p1}
                </p>
                <div
                  className="text-lg opacity-70 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: at.story.p2 }}
                />
                <button className="bg-brand-dark text-brand-cyan px-10 py-4 font-bold uppercase hover:bg-brand-cyan hover:text-black transition-all rounded-none mt-4">
                  {lang === 'fr' ? 'notre philosophie' : 'our philosophy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section - Minimalist & Consistent */}
      <section className="bg-black py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex items-center gap-8">
            <h2 className="text-6xl md:text-8xl font-bold font-work text-white lowercase tracking-tighter shrink-0">
              <span className="font-light opacity-30">notre</span> expertise
            </h2>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              { title: at.education.edu_label, list: at.education.edu_list },
              { title: at.education.assoc_label, list: at.education.assoc_list },
              { title: at.education.cert_label, list: at.education.cert_list }
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-black p-12 space-y-8 hover:bg-white/5 transition-colors"
              >
                <h3 className="text-3xl font-bold font-work text-brand-cyan lowercase tracking-tighter">{box.title}</h3>
                <ul className="space-y-4">
                  {box.list.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-xl text-white/60 font-medium group">
                      <span className="text-brand-cyan font-bold transition-transform group-hover:translate-x-2">»</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="bg-[#f7f7f7] py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold font-work lowercase tracking-tighter mb-8"
            >
              {at.areas_of_focus.title}
            </motion.h2>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              className="w-0.5 h-16 bg-brand-cyan mx-auto origin-top"
            />
          </div>

          {/* First Row: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {at.areas_of_focus.services.slice(0, 4).map((service: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 shadow-[0_5px_12px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_18px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 mb-8 relative">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                </div>
                <h3 className="text-2xl font-bold font-work lowercase tracking-tighter leading-tight">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 3 Items (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {at.areas_of_focus.services.slice(4).map((service: any, idx: number) => (
              <motion.div
                key={idx + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 4) * 0.1 }}
                className="bg-white p-10 shadow-[0_5px_12px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_18px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 mb-8 relative">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                </div>
                <h3 className="text-2xl font-bold font-work lowercase tracking-tighter leading-tight">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section - Aligned with Home Page "Details" Pattern */}
      <section ref={personalParallax.containerRef} className="parallax-section bg-[#fcfcfc] py-16 lg:py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/5 translate-x-6 translate-y-6 -z-10"></div>
                <img src="/Photo3.png" className="w-full h-[500px] object-cover shadow-2xl rounded-sm" alt="Dr. Reda Personal" loading="lazy" width="1371" height="839" />
              </div>
            </div>
            <div ref={personalParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-7xl lg:text-[5.5vw] font-bold font-work leading-[0.8] mb-8 lowercase tracking-tighter">
                <span className="font-light block opacity-40">{at.personal.title_light}</span>
                {at.personal.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-8 space-y-6">
                <p className="text-xl font-bold italic font-serif text-brand-dark/90">
                  {at.personal.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {at.personal.fun_list.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 text-lg font-medium group">
                      <span className="text-brand-cyan font-bold transition-transform group-hover:translate-x-2">»</span>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Consistent with Home Page Schedule Banner */}
      <section className="bg-brand-cyan py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <h2 className="text-5xl md:text-8xl lg:text-[7vw] font-bold font-work lowercase tracking-tighter text-black leading-none">
              <span className="font-light opacity-60 block mb-4">
                {lang === 'fr' ? 'réservez une consultation,' : 'book a consultation,'}
              </span>
              {lang === 'fr' ? 'et redécouvrez votre sourire' : 'and rediscover your smile'}
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <a
                href={getLangPath('/#contact')}
                className="bg-black text-brand-cyan px-16 py-6 font-bold uppercase hover:bg-white hover:text-black transition-all text-2xl rounded-none shadow-2xl text-center"
              >
                {t.nav.schedule}
              </a>
              <p className="text-2xl font-work lowercase text-black/70">
                {lang === 'fr' ? 'ou appelez-nous au' : 'or call us at'} <span className="text-black font-bold border-b-2 border-black">{PHONE}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RedaSaouiView;

