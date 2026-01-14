
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface Props {
    t: any;
}

const FAQAccordion: React.FC<Props> = ({ t }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems = [
        { title: t.q1.title, content: t.q1.desc },
        { title: t.q2.title, content: t.q2.desc },
        { title: t.q3.title, content: t.q3.desc },
        { title: t.q4.title, content: t.q4.desc },
        { title: t.q5.title, content: t.q5.desc },
        { title: t.q6.title, content: t.q6.desc },
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-work font-bold leading-tight mb-2 text-[#0F5A64]">
                            {t.title_bold}
                        </h2>
                        <p className="text-xl md:text-2xl font-light opacity-60 italic font-serif text-[#0F5A64]">
                            {t.title_light}
                        </p>
                    </motion.div>

                    {/* Accordion List */}
                    <div className="space-y-0 border-t border-[#dadde1]">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b border-[#dadde1]">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
                                >
                                    <span className={`text-xl md:text-2xl font-work font-medium transition-colors duration-300 ${activeIndex === index ? 'text-[#0F5A64]' : 'text-black group-hover:text-[#0F5A64]'}`}>
                                        {item.title}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        {activeIndex === index ? (
                                            <Minus size={24} className="text-[#0F5A64]" />
                                        ) : (
                                            <Plus size={24} className="text-[#0F5A64]" />
                                        )}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 text-lg md:text-xl text-[#1C1A1A] leading-relaxed font-sans opacity-80">
                                                {typeof item.content === 'string' ? (
                                                    <p>{item.content}</p>
                                                ) : (
                                                    <div className="space-y-4">
                                                        <p>{item.content.desc}</p>
                                                        {item.content.list && (
                                                            <ul className="list-disc pl-5 space-y-2">
                                                                {item.content.list.map((li: string, i: number) => (
                                                                    <li key={i}>{li}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {item.content.footer && <p>{item.content.footer}</p>}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
