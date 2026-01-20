
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PHONE } from '../constants';

interface Props {
  t: any;
}

const Intro: React.FC<Props> = ({ t }) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const href = target.getAttribute('href');
      if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-12 relative z-10" onClick={handleLinkClick}>
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* Image Column */}
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
                alt="Patient care"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                width="1200"
                height="800"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[62%] flex flex-col justify-center"
          >
            <div className="mb-4">
              <h2 className="text-black font-work font-semibold leading-[1.1] flex flex-col">
                <span className="text-4xl md:text-5xl lg:text-6xl font-light opacity-80 lowercase leading-tight">
                  {t.smile.title_light}
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl lowercase">
                  {t.smile.title_bold}
                </span>
              </h2>
            </div>

            {/* Cyan Divider */}
            <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>

            <div className="space-y-6 font-sans text-lg md:text-xl text-brand-dark leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.smile.desc1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.smile.desc2 }} />
              <p>
                {t.smile.cta} <a
                  href={`tel:${PHONE.replace(/\D/g, '')}`}
                  className="font-bold underline decoration-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  {PHONE}
                </a> {t.smile.cta_end}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
