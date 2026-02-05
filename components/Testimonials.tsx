import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  t: any;
}

const Testimonials: React.FC<Props> = ({ t }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!t.list || t.list.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [t.list]);

  if (!t.list || t.list.length === 0) return null;

  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden min-h-[600px]">

      {/* Left Column: Black Background Slider */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center px-12 py-20 lg:px-24">
        <div className="max-w-2xl mx-auto w-full">
          <div className="mb-10">
            <img
              src="https://jacksonfamilydentalonline.com/wp-content/uploads/2023/09/quote-icon-ffffff.svg"
              alt="Quote"
              className="w-12 md:w-16 h-auto opacity-100"
              loading="lazy"
              width="64"
              height="64"
            />
          </div>

          <div className="relative h-[250px] sm:h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white"
              >
                <p className="text-xl md:text-2xl font-sans leading-relaxed mb-6 font-medium">
                  {t.list[index].text}
                </p>
                <p className="text-white/60 text-lg md:text-xl uppercase tracking-widest font-bold">
                  — {t.list[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-3 mt-12">
            {t.list.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-brand-cyan scale-125' : 'bg-white/20'}`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Marble/Light Background Heading */}
      <div className="w-full lg:w-1/2 relative flex items-center px-12 py-20 lg:px-24 bg-[#f8f9fa]">
        {/* Subtle Marble Background Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-2xl mx-auto w-full text-center lg:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-black font-work font-bold leading-tight flex flex-col mb-8">
              <span className="text-5xl md:text-7xl lg:text-8xl">{t.kind}</span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-light opacity-70 italic font-serif">
                {t.from}
              </span>
            </h2>

            <a
              href="https://www.google.com/search?sca_esv=a1d45f8b5f97718d&sxsrf=AE3TifMA5taF1AfVPd9WtnABFfiQqIoX6Q:1767536573675&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ey_9sMBbFIUeWo5fdrAyGLCwvBu1h9IA_ueSIZ7RgFfez1Dxch2xsDUOqELRvOHJ1HB07ObJMis_jMZmwXMo650UadBpTfwmCP0bQUJvD0AaFTyvvA%3D%3D&q=Apex+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwjCzefsivKRAxVkOfsDHRlpMpsQ0bkNegQIORAD&biw=1792&bih=1008&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <img
                src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                alt="Google"
                className="w-6 h-6"
                loading="lazy"
                width="48"
                height="48"
              />
              <span>{t.reviews}</span>
              <span className="text-brand-cyan text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
