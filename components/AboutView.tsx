
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Star, Award, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { PHONE, TESTIMONIALS } from '../constants.tsx';
import { useParallax } from '../hooks/useParallax.ts';
import Testimonials from './Testimonials.tsx';
import ScheduleBanner from './ScheduleBanner.tsx';
import ContactSection from './ContactSection.tsx';
import SEO from './SEO.tsx';

interface Props {
  t: any;
  lang: 'en' | 'fr';
}

const AboutView: React.FC<Props> = ({ t, lang }) => {
  const at = t.about_page;

  // Parallax hooks
  const storyParallax = useParallax(15);
  const personalParallax = useParallax(15);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white overflow-hidden">
      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
        lang={lang}
      />
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/photo6.webp"
            alt="Dr. Reda Saoui"
            className="w-full h-full object-cover opacity-60"
            width="6240"
            height="4160"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-none bg-brand-cyan text-black font-work font-bold text-xs tracking-[0.4em] uppercase mb-8"
          >
            {at.hero.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-work font-bold text-white mb-8 leading-[0.8] tracking-tighter"
          >
            <span className="font-light block opacity-50 lowercase">{at.hero.title_light}</span>
            <span className="italic font-serif text-brand-cyan">{at.hero.title_bold}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-work font-light leading-relaxed"
          >
            {at.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-20 bg-gradient-to-b from-brand-cyan to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 2. Story Section with Parallax */}
      <section ref={storyParallax.containerRef} className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-40">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/5 -translate-x-6 translate-y-6 -z-10"></div>
                <img
                  src="/photo-reda-saoui.webp"
                  className="w-full h-[650px] object-cover shadow-2xl rounded-sm"
                  alt="Dr. Reda Saoui"
                  loading="lazy"
                  width="1696"
                  height="2528"
                />
              </div>
            </div>
            <div ref={storyParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-6xl md:text-8xl lg:text-[7vw] font-bold font-work leading-[0.8] mb-12 lowercase tracking-tighter">
                <span className="font-light block opacity-40">{at.story.title_light}</span>
                {at.story.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-10 space-y-8">
                <p className="text-2xl font-bold italic font-serif text-brand-dark/90">
                  {at.story.p1}
                </p>
                <div className="w-20 h-1 bg-brand-cyan" />
                <div
                  className="text-xl text-brand-dark/70 font-work leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: at.story.p2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Approach Section (Dark & Cinematic) */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/background-ursmile.webp" className="w-full h-full object-cover grayscale" alt="" loading="lazy" width="1920" height="1080" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-4xl md:text-6xl font-work font-bold mb-16 lowercase tracking-tighter">
                <span className="font-light opacity-40 block mb-4">our philosophy</span>
                {at.approach.title}
              </h2>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative p-12 md:p-24 border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="absolute top-0 left-0 w-2 h-20 bg-brand-cyan" />
              <p className="text-3xl md:text-5xl font-serif italic text-brand-cyan leading-tight">
                "{at.approach.desc}"
              </p>
              <div className="absolute bottom-0 right-0 w-20 h-2 bg-brand-cyan" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Education & Certs (Modern Grid) */}
      <section className="py-32 bg-[#fcfcfc]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-24 flex items-center gap-8">
            <h2 className="text-6xl md:text-8xl font-bold font-work text-brand-dark lowercase tracking-tighter shrink-0">
              <span className="font-light opacity-30">his</span> credentials
            </h2>
            <div className="h-px flex-1 bg-brand-dark/10"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-0 border border-brand-dark/5">
            {/* Education */}
            <motion.div
              {...fadeInUp}
              className="p-12 border-b lg:border-b-0 lg:border-r border-brand-dark/5 hover:bg-brand-cyan/5 transition-colors group"
            >
              <div className="w-12 h-12 text-brand-cyan mb-8 group-hover:scale-110 transition-transform">
                <GraduationCap size={48} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-work font-bold text-brand-dark mb-8 lowercase">{at.education.edu_label}</h3>
              <ul className="space-y-6">
                {at.education.edu_list.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-brand-dark/70 font-work text-lg">
                    <span className="text-brand-cyan font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Associations */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="p-12 border-b lg:border-b-0 lg:border-r border-brand-dark/5 hover:bg-brand-cyan/5 transition-colors group"
            >
              <div className="w-12 h-12 text-brand-cyan mb-8 group-hover:scale-110 transition-transform">
                <Users size={48} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-work font-bold text-brand-dark mb-8 lowercase">{at.education.assoc_label}</h3>
              <ul className="space-y-6">
                {at.education.assoc_list.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-brand-dark/70 font-work text-lg">
                    <span className="text-brand-cyan font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-12 hover:bg-brand-cyan/5 transition-colors group"
            >
              <div className="w-12 h-12 text-brand-cyan mb-8 group-hover:scale-110 transition-transform">
                <Award size={48} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-work font-bold text-brand-dark mb-8 lowercase">{at.education.cert_label}</h3>
              <ul className="space-y-6">
                {at.education.cert_list.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-brand-dark/70 font-work text-lg">
                    <span className="text-brand-cyan font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Outside the Office (Parallax Details Style) */}
      <section ref={personalParallax.containerRef} className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20 lg:gap-40">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="/PHoto1.webp" alt="Lifestyle 1" className="w-full h-[400px] object-cover rounded-sm shadow-xl" loading="lazy" width="2560" height="1707" />
                <img src="/DSCF7518.webp" alt="Lifestyle 2" className="w-full h-[400px] object-cover rounded-sm shadow-xl mt-12" loading="lazy" width="5757" height="3838" />
              </div>
            </div>
            <div ref={personalParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-6xl md:text-8xl lg:text-[7vw] font-bold font-work leading-[0.8] mb-12 lowercase tracking-tighter">
                <span className="font-light block opacity-40">{at.personal.title_light}</span>
                {at.personal.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-10 space-y-10">
                <p className="text-2xl font-bold italic font-serif text-brand-dark/90">
                  {at.personal.desc}
                </p>

                <div className="bg-brand-dark text-white p-12 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full translate-x-16 -translate-y-16" />
                  <h4 className="text-2xl font-work font-bold mb-8 lowercase text-brand-cyan">{at.personal.fun_title}</h4>
                  <ul className="grid md:grid-cols-1 gap-6">
                    {at.personal.fun_list.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-4 text-white/80 font-work text-lg">
                        <div className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Components for Consistency */}
      <Testimonials t={t.testimonials} />
      <ScheduleBanner t={t.schedule_banner} lang={lang} />
      <ContactSection t={t.contact} />
    </div>
  );
};

export default AboutView;

