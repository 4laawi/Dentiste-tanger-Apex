import React from 'react';
import { motion } from 'framer-motion';
import { PHONE } from '../constants';

interface Props {
  t: any;
  lang: 'en' | 'fr';
}

const ProblemsHero: React.FC<Props> = ({ t, lang }) => {
  const locationText = lang === 'fr' ? 'à Tanger' : 'in Tanger';

  return (
    <section
      className="relative pt-[12vh] pb-[12vh] overflow-hidden"
      style={{
        position: 'relative'
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(54, 54, 54, 0.65) 100%, rgba(255, 255, 255, 0) 100%), url(/Photo3.png)`,
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
            {/* Heading */}
            <h1 className="font-work font-semibold text-3xl md:text-4xl lg:text-[3em] text-white leading-[1.1em] mb-0">
              {t.problems.title_bold} {t.problems.title_light}
              <br />
              <span className="font-light">{locationText}</span>
            </h1>

            {/* Divider */}
            <div className="w-20 h-[2px] bg-white mt-6 mb-6"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <motion.a
                href="#"
                whileHover={{ backgroundColor: '#FFF', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-brand-cyan text-black px-8 py-3 text-lg font-bold uppercase tracking-tight hover:bg-white transition-all duration-300 rounded-none"
                style={{
                  fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                  fontSize: '18px',
                  paddingTop: '12px',
                  paddingRight: '30px',
                  paddingBottom: '12px',
                  paddingLeft: '30px',
                  marginRight: '20px'
                }}
              >
                {lang === 'fr' ? 'Prendre RDV' : 'schedule now'}
              </motion.a>

              <motion.a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                whileHover={{ backgroundColor: '#66DBE8' }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-white text-black px-8 py-3 text-lg font-bold uppercase tracking-tight hover:bg-[#66DBE8] transition-all duration-300 rounded-none"
                style={{
                  fontFamily: "'Karla', Helvetica, Arial, Lucida, sans-serif",
                  fontSize: '18px',
                  paddingTop: '12px',
                  paddingRight: '30px',
                  paddingBottom: '12px',
                  paddingLeft: '30px'
                }}
              >
                {lang === 'fr' ? `Appeler ${PHONE}` : `call or text ${PHONE}`}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsHero;

