
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
  lang: 'en' | 'fr';
  t: any;
}

const ProblemsOverlay: React.FC<Props> = ({ onClose, lang, t }) => {
  return (
    <>
      {/* Semi-transparent backdrop for the bottom portion of the screen */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-[90]"
      />
      
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] bg-black h-[65vh] md:h-[55vh] flex overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-brand-cyan transition-colors z-[110]"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        {/* Image side - Matches the composition in the reference image */}
        <div className="hidden md:block w-1/2 relative h-full">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80" 
            alt="Dental consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-start pt-12 md:pt-16 pb-8 px-8 md:px-20 overflow-y-auto custom-scrollbar">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold font-work lowercase tracking-tight">
                {t.title_bold}
              </h2>
              <h3 className="text-white/60 text-xl md:text-2xl font-work font-light lowercase mb-4">
                {t.title_light}
              </h3>
              <div className="w-12 h-[2px] bg-brand-cyan mb-8"></div>
            </motion.div>

            <div className="flex flex-col items-start">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-brand-cyan hover:text-white transition-colors text-base font-bold lowercase mb-4"
              >
                {t.all}
              </motion.button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1">
                {t.list.map((problem: string, index: number) => (
                  <motion.div
                    key={problem}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 + index * 0.03 }}
                  >
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-brand-cyan transition-colors text-sm md:text-base font-sans lowercase block py-0.5 tracking-wide"
                      onClick={(e) => {
                          e.preventDefault();
                          onClose();
                      }}
                    >
                      {problem}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ProblemsOverlay;
