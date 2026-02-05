
import React from 'react';
import Intro from './Intro.tsx';
import TechSection from './TechSection.tsx';
import ProblemsGrid from './ProblemsGrid.tsx';
import FAQAccordion from './FAQAccordion.tsx';
import ScheduleBanner from './ScheduleBanner.tsx';
import MoreProblems from './MoreProblems.tsx';
import Testimonials from './Testimonials.tsx';
import ContactSection from './ContactSection.tsx';
import ProblemsHero from './ProblemsHero.tsx';
import SEO from './SEO.tsx';

interface Props {
  t: any;
  lang: 'en' | 'fr';
}

const ProblemsView: React.FC<Props> = ({ t, lang }) => {
  return (
    <div className="pt-0">
      <SEO
        title={t.seo.problems.title}
        description={t.seo.problems.description}
        lang={lang}
      />
      <ProblemsHero t={t} lang={lang} />
      <div className="pt-0 md:pt-20"> {/* Offset for sticky nav */}
        <Intro t={t} />
        <TechSection t={t.tech} />

        {/* Problems Section Header */}
        <section id="problems-section" className="pt-16 pb-0 bg-white overflow-hidden">
          <div className="container mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-[69px] font-work font-bold text-black leading-[1.1] mb-0 mt-[79px]">
              {t.problems.title_bold}
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-[39px] font-work font-light text-black opacity-80 leading-[1.1]">
              {t.problems.title_light}
            </h3>
            <div className="flex justify-center mt-6 mb-4">
              <div className="w-[2px] h-[35px] bg-brand-cyan"></div>
            </div>
          </div>
          <ProblemsGrid />
        </section>

        <MoreProblems t={t.more_problems} />
        <FAQAccordion t={t.faq} />
        <Testimonials t={t.testimonials} />
        <ScheduleBanner t={t.schedule_banner} lang={lang} />
        <ContactSection t={t.contact} />
      </div>
    </div>
  );
};

export default ProblemsView;
