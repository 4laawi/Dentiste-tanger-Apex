
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PHONE, ADDRESS } from '../constants.tsx';
import { Instagram, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax.ts';
import BeautifulSmileSection from './BeautifulSmileSection.tsx';
import Testimonials from './Testimonials.tsx';
import ScheduleBanner from './ScheduleBanner.tsx';
import ContactSection from './ContactSection.tsx';
import SEO from './SEO.tsx';

interface Props {
  t: any;
  expertise?: any;
  lang?: 'en' | 'fr';
  selectedService: string;
  setSelectedService: (service: string) => void;
}

const HomeView: React.FC<Props> = ({ t, expertise, lang, selectedService, setSelectedService }) => {
  // Track which expertise card is hovered (default to first card)
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#services') {
      const element = document.getElementById('services');
      if (element) {
        const yOffset = -100; // Adjust for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (location.hash === '#contact-team') {
      const element = document.getElementById('contact-team');
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  // Desktop-only parallax hooks
  const doctorParallax = useParallax(15);
  const detailsParallax = useParallax(15);
  const implantsParallax = useParallax(10);
  const comfortParallax = useParallax(20);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const expertiseItems = [
    { title: expertise?.facettes || "Facettes", img: "/photo5.webp", width: 6240, height: 4160 },
    { title: expertise?.aligneurs || "Aligneurs", img: "/orthodontie.webp", width: 1200, height: 801 },
    { title: expertise?.couronnes || "Couronnes", img: "/couronne.webp", width: 1400, height: 934 },
    { title: expertise?.blanchimentFlash || "Blanchiment Fläsh", img: "/blanchiment dentaire (1).webp", width: 778, height: 518 },
    { title: expertise?.implant || "Implant", img: "/implant.webp", width: 1200, height: 800 },
    { title: expertise?.pedodontie || "Pédodontie", img: "/enfant.webp", width: 2560, height: 1707 },
    { title: expertise?.traitementsCanalaires || "Traitements Canalaires", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80", width: 800, height: 600 },
    { title: expertise?.parodontie || "Parodontie", img: "/parodontie.webp", width: 1067, height: 679 },
    { title: expertise?.chirurgieOrale || "Chirurgie Orale", img: "/photo6.webp", width: 6240, height: 4160 },
  ];


  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <div className="bg-white">
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        lang={lang}
      />
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/photo5.webp"
            alt="Dr. Reda Saoui - Dental Consultation"
            className="hidden md:block w-full h-full object-cover"
            style={{ opacity: 0.6, transform: 'scaleX(-1)' }}
            width="6240"
            height="4160"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
          />
          <img
            src="/homepage-hero-mobiles (1).webp"
            alt="Dr. Reda Saoui - Dental Consultation Mobile"
            className="block md:hidden w-full h-full object-cover"
            style={{ opacity: 0.6, transform: 'scaleX(-1)' }}
            width="800"
            height="1200"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
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
            <p className="text-brand-cyan text-xs md:text-base font-bold uppercase tracking-[0.5em] mb-4 md:mb-6 opacity-90">{t.hero.tag}</p>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white font-work leading-[1.1] mb-6 md:mb-8 tracking-tight">
              {t.hero.title_part1} <br />
              <span className="font-light italic font-serif text-brand-cyan">{t.hero.title_part2}</span>
            </h1>
            <p className="text-base md:text-xl text-white/70 font-sans mb-8 md:mb-12 max-w-xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={getLangPath('/#contact-team')}
                className="bg-brand-cyan text-black px-6 py-3 md:px-10 md:py-4 font-bold uppercase hover:bg-white transition-all text-base md:text-lg rounded-none shadow-xl text-center"
              >
                {t.hero.cta_schedule}
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="backdrop-blur-md bg-white/5 border border-white/10 text-white px-6 py-3 md:px-10 md:py-4 font-bold uppercase hover:bg-white/10 transition-all text-base md:text-lg text-center"
              >
                {t.hero.cta_call} {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Know Your Doctor Section */}
      <section ref={doctorParallax.containerRef} className="parallax-section bg-white py-12 md:py-24 lg:py-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-20 lg:gap-40">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/5 -translate-x-6 translate-y-6 -z-10"></div>
                <img
                  src="/dr-reda.webp"
                  className="w-full h-[300px] md:h-[650px] object-cover shadow-2xl rounded-sm"
                  alt="Dr. Reda Saoui"
                  loading="lazy"
                  width="1696"
                  height="2528"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div ref={doctorParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-8xl lg:text-[7vw] font-bold font-work leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 tracking-tighter">
                <span className="font-light block opacity-40 text-2xl md:text-5xl lg:text-[4vw]">{t.know_doctor.title_light}</span>
                {t.know_doctor.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-6 md:pl-10 space-y-6 md:space-y-8">
                <p className="text-xl md:text-2xl font-bold italic font-serif text-brand-dark/90">{t.know_doctor.desc}</p>
                <ul className="space-y-4 md:space-y-6">
                  {t.know_doctor.list.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 text-lg md:text-xl font-medium group">
                      <span className="text-brand-dark font-bold transition-transform group-hover:translate-x-2">»</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 md:pt-10">
                  <Link
                    to={getLangPath('/dentiste-reda-saoui')}
                    className="inline-block bg-brand-dark text-brand-cyan px-8 py-3 md:px-10 md:py-4 font-bold uppercase hover:bg-brand-cyan hover:text-black transition-all rounded-none"
                  >
                    {t.know_doctor.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Parallax Details Section */}
      < section ref={detailsParallax.containerRef} className="parallax-section bg-[#fcfcfc] py-12 md:py-24 lg:py-0" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20 lg:gap-40">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/5 translate-x-6 translate-y-6 -z-10"></div>
                <img
                  src="/Photo3.webp"
                  className="w-full h-[300px] md:h-[650px] object-cover shadow-2xl rounded-sm"
                  alt="Clinic"
                  loading="lazy"
                  width="1371"
                  height="839"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div ref={detailsParallax.targetRef} className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-8xl lg:text-[7vw] font-bold font-work leading-[0.8] mb-12 tracking-tighter">
                <span className="font-light block opacity-40">{t.details.title_light}</span>
                {t.details.title_bold}
              </h2>
              <div className="border-l-2 border-black pl-10 space-y-8">
                <p className="text-2xl font-bold italic font-serif text-brand-dark/90">{t.details.desc}</p>
                <ul className="space-y-6">
                  {t.details.list.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 text-xl font-medium group">
                      <span className="text-brand-dark font-bold transition-transform group-hover:translate-x-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ section >

      {/* Insurance Savings Plan Section */}
      < section className="bg-brand-cyan py-12 md:py-16" >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-work tracking-tighter text-black">
              {t.insurance.title}
            </h2>
            <h3 className="text-base md:text-xl lg:text-2xl font-work font-semibold text-black/90 max-w-3xl mx-auto leading-relaxed">
              {t.insurance.desc}
            </h3>
            <div className="pt-8 overflow-x-auto no-scrollbar">
              <div className="flex flex-nowrap items-center gap-6 md:gap-12 min-w-max px-4 mx-auto justify-center">
                <img src="/cnss.webp" alt="CNSS" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="200" height="80" />
                <img src="/cnops.webp" alt="CNOPS" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="200" height="80" />
                <img src="/axa.webp" alt="AXA" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="160" height="80" />
                <img src="/wafa.webp" alt="Wafa Assurance" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="200" height="80" />
                <img src="/sanlam1.webp" alt="Sanlam" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="200" height="80" />
                <img src="/ROYALE-MAROCAINE-DASSURANCE.webp" alt="Royal Marocaine d'Assurance" className="h-10 md:h-16 w-auto object-contain flex-shrink-0" loading="lazy" width="240" height="80" />
              </div>
            </div>
          </div>
        </div>
      </ section >

      {/* 4. Implants Section Parallax (Dark) */}
      < section ref={implantsParallax.containerRef} className="parallax-section bg-black text-white py-12 md:py-24 lg:py-0" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-24">
            <div className="w-full lg:w-1/2 h-[300px] md:h-[600px] overflow-hidden shadow-[0_0_100px_rgba(106,224,242,0.1)] rounded-sm">
              <img
                src="/DSCF7556.webp"
                className="w-full h-full object-cover"
                alt="Dental Technology"
                loading="lazy"
                width="6044"
                height="4029"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div ref={implantsParallax.targetRef} className="w-full lg:w-1/2 space-y-8 md:space-y-10">
              <h2 className="text-3xl md:text-8xl font-bold font-work leading-none tracking-tighter">
                <span className="font-light block opacity-40">{t.implants.title_light}</span>
                {t.implants.title_bold}
              </h2>
              <p className="text-xl md:text-2xl opacity-60 font-serif italic max-w-xl leading-relaxed">{t.implants.desc}</p>
              <Link
                to={getLangPath('/problemes-traites')}
                className="inline-block bg-brand-cyan text-black px-8 py-4 md:px-12 md:py-5 font-bold uppercase hover:bg-white transition-all text-lg md:text-xl rounded-none text-center"
              >
                {t.implants.cta}
              </Link>
            </div>
          </div>
        </div>
      </ section >

      {/* 5. Expertise Grid */}
      <section id="services" className="bg-black py-12 md:py-32 border-t border-white/5" >
        <div className="container mx-auto px-6 mb-12 md:mb-24 flex items-center gap-8">
          <h2 className="text-3xl md:text-9xl font-bold font-work text-white tracking-tighter shrink-0">
            {t.our_expertise}
          </h2>
          <div className="h-px flex-1 bg-white/20"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const isLast = i === expertiseItems.length - 1;
            const isImplant = item.img.includes('implant.webp'); // Identify implant item by image or title

            const CardContent = () => (
              <>
                <img
                  src={item.img}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'opacity-60 grayscale-0 scale-110' : 'opacity-30 grayscale'}`}
                  alt={item.title}
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className={`text-xl md:text-4xl font-bold font-work leading-none mb-2 md:mb-4 transition-transform ${isHovered ? '-translate-y-2' : ''}`}>{item.title}</h3>
                  <div className={`h-1 bg-brand-cyan transition-all duration-700 ${isHovered ? 'w-10 md:w-16' : 'w-0'}`}></div>
                </div>
              </>
            );

            return (
              <div
                key={i}
                className={`relative aspect-[16/9] border border-white/5 overflow-hidden cursor-pointer ${isLast ? 'col-span-2 md:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                {isImplant ? (
                  <Link to={getLangPath('/dental-implants-morocco')} className="block w-full h-full">
                    <CardContent />
                  </Link>
                ) : (
                  <div
                    className="w-full h-full"
                    onClick={() => {
                      setSelectedService(item.title);
                      const element = document.getElementById('contact-team');
                      if (element) {
                        const yOffset = -100;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    <CardContent />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section >

      {/* 6. Technologies Section Parallax */}
      < section ref={comfortParallax.containerRef} className="parallax-section bg-white py-12 md:py-24 lg:py-0" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
            <div ref={comfortParallax.targetRef} className="lg:w-1/2">
              <h2 className="text-4xl md:text-[6vw] font-bold font-work leading-[0.9] tracking-tighter mb-12">
                <span>{t.tech_section.title_main}</span> <br />
                <span className="font-light opacity-60 italic font-serif text-brand-dark text-2xl md:text-[3vw] block mt-2">{t.tech_section.title_sub}</span>
              </h2>
              <div className="max-w-xl space-y-10">
                <div className="space-y-6">
                  {t.tech_section.items.map((item: any, i: number) => (
                    <div key={i} className="group border-l-2 border-brand-cyan/20 hover:border-brand-cyan pl-6 transition-colors">
                      <h3 className="text-2xl font-bold font-work mb-2">{item.title}</h3>
                      <p className="text-lg text-brand-dark/70 leading-relaxed italic font-serif">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <Link to={getLangPath('/about')} className="inline-block bg-brand-dark text-brand-cyan px-10 py-4 font-bold uppercase hover:bg-brand-cyan hover:text-black transition-all rounded-none">{t.tech_section.cta}</Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[300px] md:h-[700px]">
              <img src="/photo4.webp" className="w-full h-full object-cover col-span-2 row-span-1 rounded-sm shadow-xl" alt="APEX Technology" loading="lazy" width="1568" height="839" sizes="(max-width: 1024px) 100vw, 50vw" />
              <img src="/DSCF7518.webp" className="w-full h-full object-cover rounded-sm shadow-xl" alt="3D Printing" loading="lazy" width="5757" height="3838" sizes="(max-width: 1024px) 50vw, 25vw" />
              <img src="/DSCF7520.webp" className="w-full h-full object-cover rounded-sm shadow-xl" alt="Advanced Imaging" loading="lazy" width="5909" height="3939" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </ section >

      {/* Beautiful Smile Section */}
      < div className="smile-section-heading" >
        <motion.h2
          {...fadeInUp}
          className="font-work font-semibold text-5xl md:text-7xl lg:text-[6em] text-black text-center leading-[1.1]"
        >
          <span className="font-light">{t.smile_heading.light} </span>
          <span className="font-bold">{t.smile_heading.bold}</span>
        </motion.h2>
      </div >
      <BeautifulSmileSection t={t.smile_rows} lang={lang} />

      {/* 2.5 Why Choose Us Section (SEO Rich Content) */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold font-work mb-12 tracking-tight">
                <span className="font-light block text-brand-cyan/70">{t.why_choose.title_light}</span>
                {t.why_choose.title_bold}
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-brand-dark/80 leading-relaxed font-sans">
                <p>{t.why_choose.p1}</p>
                <p>{t.why_choose.p2}</p>
                <div className="pt-8 flex justify-center">
                  <Link
                    to={getLangPath('/about')}
                    className="group flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest text-sm hover:text-brand-cyan transition-colors"
                  >
                    {t.why_choose.cta}
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-brand-cyan" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials t={t.testimonials} />

      {/* Schedule Your First Visit Section */}
      <ScheduleBanner t={t.schedule_banner} lang={lang!} />

      {/* Our Office / Map Section */}
      <ContactSection t={t.contact} />

      {/* 7. Contact Section */}
      <section id="contact-team" className="bg-brand-dark pt-8 pb-10 md:pb-20 md:py-32 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
            <div className="w-full lg:w-2/5 space-y-8 md:space-y-12">
              <h2 className="text-3xl md:text-8xl font-bold font-work leading-none tracking-tighter text-white">{t.contact_team.title_bold} <br /><span className="font-light opacity-50">{t.contact_team.title_light}</span></h2>
              <div className="space-y-10 text-white">
                <div className="flex gap-6 items-start">
                  <MapPin className="text-brand-cyan mt-1" size={40} strokeWidth={1} />
                  <div>
                    <p className="text-2xl font-work mb-2">{ADDRESS}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Apex+Dental+Clinic+Tanger" target="_blank" rel="noopener noreferrer" className="text-brand-cyan font-bold uppercase text-xs tracking-widest border-b border-brand-cyan">{t.contact_team.get_directions}</a>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Phone className="text-brand-cyan mt-1" size={40} strokeWidth={1} />
                  <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-3xl font-bold font-work tracking-tighter hover:text-brand-cyan transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div className="flex gap-6 items-start opacity-60">
                  <Clock className="text-brand-cyan mt-1" size={32} strokeWidth={1} />
                  <div className="text-lg">
                    <p>{t.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="bg-white/5 backdrop-blur-3xl p-6 md:p-20 border border-white/10 shadow-2xl relative rounded-sm">
                <div className="absolute top-0 left-0 w-1.5 h-20 bg-brand-cyan"></div>
                <form
                  className="space-y-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name') as string;
                    const lastName = formData.get('lastName') as string;
                    const service = formData.get('service') as string;
                    const otherService = formData.get('otherService') as string;

                    const selectedService = service === 'other' ? otherService : service;
                    const message = t.contact_team.whatsapp_msg
                      .replace('{name}', name)
                      .replace('{lastName}', lastName)
                      .replace('{service}', selectedService);

                    const whatsappUrl = `https://wa.me/212${PHONE.replace(/\D/g, '').replace(/^0/, '')}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name-input" className="sr-only">{t.contact_team.placeholders.name}</label>
                      <input id="name-input" name="name" type="text" placeholder={t.contact_team.placeholders.name} required className="w-full bg-transparent border-b border-white/20 p-4 font-work outline-none focus:border-brand-cyan transition-colors text-white" />
                    </div>
                    <div>
                      <label htmlFor="lastname-input" className="sr-only">{t.contact_team.placeholders.lastName}</label>
                      <input id="lastname-input" name="lastName" type="text" placeholder={t.contact_team.placeholders.lastName} required className="w-full bg-transparent border-b border-white/20 p-4 font-work outline-none focus:border-brand-cyan transition-colors text-white" />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="service-select" className="sr-only">{t.contact_team.placeholders.service}</label>
                    <select
                      id="service-select"
                      name="service"
                      required
                      className="w-full bg-transparent border-b border-white/20 p-4 font-work outline-none focus:border-brand-cyan transition-colors text-white appearance-none cursor-pointer"
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value);
                        const otherInput = document.getElementById('other-service-input');
                        if (otherInput) {
                          otherInput.style.display = e.target.value === 'other' ? 'block' : 'none';
                          if (e.target.value === 'other') {
                            (otherInput as HTMLInputElement).required = true;
                          } else {
                            (otherInput as HTMLInputElement).required = false;
                          }
                        }
                      }}
                    >
                      <option value="" disabled className="bg-brand-dark">{t.contact_team.placeholders.service}</option>
                      {expertiseItems.map((item, i) => (
                        <option key={i} value={item.title} className="bg-brand-dark">{item.title}</option>
                      ))}
                      <option value="other" className="bg-brand-dark">{lang === 'fr' ? "Autre" : "Other"}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="text-white/40 rotate-90" size={20} />
                    </div>
                  </div>

                  <label htmlFor="other-service-input" className="sr-only">{t.contact_team.placeholders.specify}</label>
                  <input
                    id="other-service-input"
                    name="otherService"
                    type="text"
                    placeholder={t.contact_team.placeholders.specify}
                    style={{ display: 'none' }}
                    className="w-full bg-transparent border-b border-white/20 p-4 font-work outline-none focus:border-brand-cyan transition-colors text-white"
                  />

                  <button type="submit" className="w-full bg-brand-cyan text-black py-4 md:py-6 font-bold uppercase hover:bg-white transition-all text-base md:text-xl tracking-wider md:tracking-widest shadow-xl rounded-none flex items-center justify-center gap-3 md:gap-4 px-4">
                    <span className="text-center">{t.contact_team.placeholders.submit}</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default HomeView;
