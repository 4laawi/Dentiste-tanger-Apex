
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  t: any;
}

const TechSection: React.FC<Props> = ({ t }) => {
  return (
    <section 
      className="relative bg-fixed bg-cover bg-center overflow-hidden" 
      style={{ 
        backgroundImage: 'url(https://jacksonfamilydentalonline.com/wp-content/uploads/2020/05/jackson-solea-background.jpg)',
        backgroundBlendMode: 'overlay',
        paddingTop: '18px',
        paddingBottom: '0px'
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(54, 54, 54, 0.8)' }}></div>
      
      <div className="relative z-10" style={{ width: '80%', maxWidth: '1080px', margin: 'auto', padding: '2% 0' }}>
        {/* First Row - Heading */}
        <div style={{ paddingBottom: '0', marginBottom: '4%' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 
              className="font-work text-white leading-[1.1em] mb-0"
              style={{ 
                fontSize: '3em',
                color: '#FFFFFF',
                lineHeight: '1.1em',
                textAlign: 'left',
                fontWeight: 600,
                fontFamily: "'Work Sans', Helvetica, Arial, Lucida, sans-serif"
              }}
            >
              <span style={{ fontWeight: 300 }}>{t.anxiety}</span>
              <br />
              {t.title}
            </h2>
          </motion.div>
          
          {/* White Divider */}
          <div style={{ width: '80px', height: '23px', marginTop: '0', marginBottom: '0' }}>
            <div style={{ 
              width: '100%', 
              height: '2px', 
              borderTop: '2px solid #FFF',
              position: 'relative'
            }}></div>
          </div>
        </div>

        {/* Second Row - Description */}
        <div className="pt-0 flex flex-col md:flex-row" style={{ gap: '0px', height: '209px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[46%] text-left"
            style={{ 
              paddingBottom: '3%',
              marginBottom: '8.696%'
            }}
          >
            <p 
              className="text-white"
              style={{ 
                fontSize: '18px',
                color: '#ffffff',
                fontFamily: "'Sen', Helvetica, Arial, Lucida, sans-serif",
                lineHeight: '1.7em',
                margin: 0,
                paddingBottom: '0px'
              }}
            >
              {t.desc}
            </p>
          </motion.div>
          <div className="w-full md:w-[46%] hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
