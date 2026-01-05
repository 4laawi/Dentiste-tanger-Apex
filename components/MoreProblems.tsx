
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  t: any;
}

const MoreProblems: React.FC<Props> = ({ t }) => {
  return (
    <section 
      className="relative min-h-[400px] flex items-center bg-cover bg-no-repeat overflow-hidden py-12 lg:py-0" 
      style={{ 
        backgroundImage: `url(https://jacksonfamilydentalonline.com/wp-content/uploads/2020/08/3D-technology-jackson-family-dental.jpg)`,
        backgroundPosition: 'right center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
          
          {/* Main Title Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex flex-row items-baseline gap-3 md:gap-4 flex-wrap">
              {/* "plus de" / "more" */}
              <h2 className="text-4xl md:text-6xl lg:text-[80px] font-work font-black leading-[0.85] text-black lowercase whitespace-nowrap">
                {t.title_bold}
              </h2>

              {/* "problèmes dentaires" / "dental problems" */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-work font-light leading-[1] text-black/80 lowercase">
                {t.title_light}
              </h3>
            </div>
            {/* Cyan Divider placed exactly as in the image */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[3px] bg-brand-cyan mt-6"
            />
          </motion.div>
        </div>

        {/* List Section - Positioned below the heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:ml-4 lg:ml-8"
        >
          <ul className="space-y-2 font-work text-black">
            {t.list.map((item: { label: string, link: string }, index: number) => (
              <li key={index} className="flex items-center gap-3 text-base md:text-lg font-bold">
                {/* Custom Cyan Bullet */}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0"></span>
                <a 
                  href={item.link} 
                  className="hover:text-brand-cyan transition-colors duration-300 underline decoration-brand-cyan decoration-2 underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreProblems;
