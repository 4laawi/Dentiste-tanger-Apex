
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onLinkClick: (to: string) => void;
    lang: 'en' | 'fr';
    t: any;
}

const ProblemsDropdown: React.FC<Props> = ({ isOpen, onClose, onLinkClick, lang, t }) => {
    const problems = t.problems.list;

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 overflow-hidden z-40"
        >
            <div className="w-[90%] max-w-7xl mx-auto py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                        transition={{ delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-[16/9] overflow-hidden rounded-sm">
                            <img
                                src="/photo6.webp"
                                alt="Problems We Treat"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                width="1200"
                                height="675"
                            />
                        </div>
                        <div className="absolute inset-0 border border-brand-cyan/20 pointer-events-none -m-4 rounded-sm" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                        >
                            <h2 className="text-brand-cyan font-work font-bold text-sm tracking-[0.3em] uppercase mb-2">
                                {lang === 'fr' ? 'problèmes traités' : 'problems we treat'}
                            </h2>
                            <div className="w-12 h-[1px] bg-brand-cyan/50" />
                        </motion.div>


                        <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {problems.map((problem: string, index: number) => {
                                const targetPath = lang === 'en' ? '/en/problemes-traites' : '/problemes-traites';
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            to={targetPath}
                                            onClick={() => onLinkClick('/problemes-traites')}
                                            className="group flex items-center gap-4 text-white hover:text-brand-cyan transition-colors"
                                        >
                                            <span className="text-xl lg:text-2xl font-work font-light group-hover:pl-2 transition-all duration-300">
                                                {problem}
                                            </span>
                                            <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-cyan" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/40 hover:text-brand-cyan transition-colors"
                >
                    <X size={32} strokeWidth={1} />
                </button>
            </div>
        </motion.div>
    );
};

export default ProblemsDropdown;
