
import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS } from '../constants';

const ProblemsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {PROBLEMS.map((problem, index) => (
        <motion.a
          key={problem.id}
          href={problem.link}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative h-[280px] overflow-hidden block"
        >
          <img 
            src={problem.image} 
            alt={problem.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/5 transition-all duration-300"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-left">
            <h3 className="text-white text-2xl font-work font-bold uppercase leading-tight drop-shadow-md group-hover:text-brand-cyan transition-colors">
              {problem.title}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default ProblemsGrid;
