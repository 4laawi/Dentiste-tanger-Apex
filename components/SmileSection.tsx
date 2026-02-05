
import React from 'react';
import { motion } from 'framer-motion';
import { PHONE } from '../constants';

interface Props {
  t: any;
}

const SmileSection: React.FC<Props> = ({ t }) => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* Image Column (2/5 proportional) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[38%] relative min-h-[400px] lg:min-h-0"
          >
            <div className="h-full rounded-sm overflow-hidden shadow-[0_12px_18px_-6px_rgba(0,0,0,0.3)]">
              <img
                src="https://jacksonfamilydentalonline.com/wp-content/uploads/2024/01/20240102_JFD_comfort_casual_3.jpg"
                alt="Patient care"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text Column (3/5 proportional) */}
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
                  {t.title_light}
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl">
                  {t.title_bold}
                </span>
              </h2>
            </div>

            {/* Cyan Divider */}
            <div className="w-20 h-[2px] bg-brand-cyan mb-8"></div>

            <div className="space-y-6 font-sans text-lg md:text-xl text-brand-dark leading-relaxed">
              <p>
                {t.desc1}
              </p>
              <p>
                {t.desc2}
              </p>
              <p>
                {t.cta} <a
                  href={`tel:${PHONE.replace(/\D/g, '')}`}
                  className="font-bold underline decoration-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  {PHONE}
                </a> {t.cta_end}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SmileSection;
