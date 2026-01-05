
import React from 'react';
import { motion } from 'framer-motion';
import { PHONE } from '../constants';

interface Props {
  t: any;
}

const Hero: React.FC<Props> = ({ t }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80"
          alt="Centre Dentaire Apex"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-brand-cyan text-sm md:text-base font-bold uppercase tracking-[0.5em] mb-6 opacity-90"
          >
            {t.hero.tag}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight font-work"
          >
            {t.hero.title_part1}<br />
            <span className="font-light italic font-serif text-brand-cyan">{t.hero.title_part2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 font-sans mb-12 max-w-xl leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-cyan text-black px-10 py-4 font-bold uppercase transition-all text-lg rounded-none shadow-xl"
            >
              {t.hero.cta_schedule}
            </motion.button>
            <motion.a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase transition-all text-lg text-center"
            >
              {t.hero.cta_call} {PHONE}
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white rotate-90 mb-8">{t.hero.discover}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
