
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { PHONE, ADDRESS } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  t: any;
}

const ContactSection: React.FC<Props> = ({ t }) => {
  return (
    <section id="contact" className="bg-black w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-[600px]">

        {/* Left: Office Details */}
        <div className="w-full lg:w-1/2 px-8 pt-16 pb-8 md:p-24 lg:p-32 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white font-work font-bold leading-none mb-4 lowercase tracking-tighter flex flex-col md:flex-row md:items-baseline md:gap-4">
              <span className="text-3xl md:text-5xl font-light opacity-80">{t.our}</span>
              <span className="text-5xl md:text-7xl">{t.office}</span>
            </h2>
            <div className="w-16 h-[2px] bg-brand-cyan mb-12"></div>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-6 items-start group">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <MapPin className="text-brand-cyan" size={36} strokeWidth={1.5} />
                </div>
                <div className="text-white text-xl md:text-2xl font-sans leading-snug">
                  <p>{ADDRESS}</p>
                  <a href="#" className="text-brand-cyan font-bold text-lg border-b border-brand-cyan hover:text-white hover:border-white transition-all mt-2 inline-block">
                    {t.directions}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                    <Phone className="text-brand-cyan" size={32} strokeWidth={1.5} />
                  </div>
                  <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-white text-xl md:text-2xl font-bold hover:text-brand-cyan transition-colors pt-1">
                    {t.call_text} {PHONE}
                  </a>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="text-brand-cyan w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <a
                    href={`https://wa.me/212${PHONE.replace(/\D/g, '').replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl md:text-2xl font-bold hover:text-brand-cyan transition-colors pt-1"
                  >
                    {t.whatsapp} {PHONE}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Clock className="text-brand-cyan" size={32} strokeWidth={1.5} />
                </div>
                <div className="text-white text-lg md:text-xl font-sans opacity-90 pt-1">
                  <p>{t.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Map Integration */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9899426278835!2d-5.8047094999999995!3d35.7756234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7fb2933d913f%3A0x80899102823ebcf3!2sApex%20Dental%20Clinic!5e0!3m2!1sen!2sma!4v1767470670542!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
