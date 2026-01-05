
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props {
  t: any;
}

const FAQSection: React.FC<Props> = ({ t }) => {
  return (
    <section className="pt-16 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-work font-bold leading-tight">
            <span className="block mb-2 mt-[58px]">{t.title_bold}</span>
            <span className="font-light opacity-60 italic">{t.title_light}</span>
          </h2>
          <div className="w-px h-16 bg-brand-cyan mx-auto mt-8"></div>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center text-brand-cyan">
              <ArrowRight size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-work font-bold text-brand-dark leading-tight">
                {t.q1.title}
              </h3>
              <p className="font-sans text-lg text-brand-dark/80 leading-relaxed">
                {t.q1.desc}
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center text-brand-cyan">
              <ArrowRight size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-work font-bold text-brand-dark leading-tight">
                {t.q2.title}
              </h3>
              <p className="font-sans text-lg text-brand-dark/80 leading-relaxed">
                {t.q2.desc}
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-cyan flex items-center justify-center text-brand-cyan">
              <ArrowRight size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-work font-bold text-brand-dark leading-tight">
                {t.q3.title}
              </h3>
              <div className="font-sans text-lg text-brand-dark/80 space-y-4 leading-relaxed">
                <p>{t.q3.desc}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {t.q3.list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{t.q3.footer}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
