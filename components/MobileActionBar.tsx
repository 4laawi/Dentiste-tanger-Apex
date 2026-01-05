
import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE } from '../constants.tsx';

interface MobileActionBarProps {
    t: any;
    lang: 'en' | 'fr';
}

const MobileActionBar: React.FC<MobileActionBarProps> = ({ t, lang }) => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact-team');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if contact section is not on current page
            window.location.href = lang === 'en' ? '/en#contact-team' : '/#contact-team';
        }
    };

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-brand-teal shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        >
            <div className="flex divide-x divide-white/10">
                {/* Call Button */}
                <a
                    href={`tel:${PHONE}`}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-4 text-white font-bold transition-all active:bg-black/10"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest">{t.mobile_bar.call}</span>
                </a>

                {/* Contact Button */}
                <button
                    onClick={handleContactClick}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-4 text-white font-bold transition-all active:bg-black/10"
                >
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest">{t.mobile_bar.contact}</span>
                </button>
            </div>
        </motion.div>
    );
};

export default MobileActionBar;
