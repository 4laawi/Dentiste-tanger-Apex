
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  t: any;
  lang: 'en' | 'fr';
}

const ScheduleBanner: React.FC<Props> = ({ t, lang }) => {
  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <section
      className="relative py-20 md:py-32 lg:py-40 bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url(/photo10.webp)',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-[1px] w-full max-w-[800px] p-10 md:p-16 text-center shadow-2xl"
        >
          <div className="space-y-8">
            <h2 className="text-black leading-none font-work flex flex-col items-center">
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold">
                {t.title_bold}
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-light opacity-80 mt-2">
                {t.title_light}
              </span>
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to={getLangPath('/contact')}
                className="inline-block bg-brand-cyan text-black px-10 py-4 text-xl font-bold uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
              >
                {t.btn}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleBanner;
