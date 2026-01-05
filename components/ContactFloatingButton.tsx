
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    lang: 'en' | 'fr';
}

const ContactFloatingButton: React.FC<Props> = ({ lang }) => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] hidden md:block">
            <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-brand-dark text-brand-cyan rounded-full shadow-2xl flex items-center justify-center relative group"
                aria-label={lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            >
                <MessageSquare size={28} />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-brand-dark text-white text-sm font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                    {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                </div>
            </motion.button>
        </div>
    );
};

export default ContactFloatingButton;
