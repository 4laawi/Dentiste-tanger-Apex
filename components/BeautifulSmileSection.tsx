import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Link } from 'react-router-dom';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BeautifulSmileSectionProps {
  t?: any;
  lang?: 'en' | 'fr';
}

const BeautifulSmileSection: React.FC<BeautifulSmileSectionProps> = ({ t, lang }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 981px)", () => {
      // First row - image slides in from right
      if (image1Ref.current) {
        gsap.fromTo(image1Ref.current,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image1Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      // Second row - image slides in from left
      if (image2Ref.current) {
        gsap.fromTo(image2Ref.current,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image2Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      // Third row - image slides in from right
      if (image3Ref.current) {
        gsap.fromTo(image3Ref.current,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image3Ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      // Text animations - fade in
      [text1Ref.current, text2Ref.current, text3Ref.current].forEach((ref) => {
        if (ref) {
          gsap.fromTo(ref,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                toggleActions: "play none none none",
              }
            }
          );
        }
      });
    });

    return () => mm.revert();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const getLangPath = (path: string) => {
    if (lang === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <section
      ref={sectionRef}
      className="smile-section"
    >
      {/* First Row - Routine Dental Care */}
      <div className="smile-section-row">
        <div className="background-layer"></div>
        <div ref={image1Ref} className="image-layer">
          <img
            src="/photo5.webp"
            alt="Routine dental care"
            className="w-full h-full object-cover"
            loading="lazy"
            width="6240"
            height="4160"
          />
          <div
            className="image-gradient-overlay"
            style={{
              background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(54,54,54,0.22) 51%, rgba(255,255,255,0.57) 96%)'
            }}
          ></div>
        </div>
        <div ref={text1Ref} className="text-overlay text-overlay-left">
          <h3 className="font-work font-bold text-4xl md:text-6xl lg:text-[3.5em] text-black leading-tight">
            <span className="font-bold">{t.routine.bold}</span>
            <br />
            <span className="font-light">{t.routine.light}</span>
          </h3>
          <p className="text-lg md:text-xl text-black leading-relaxed" style={{ fontFamily: 'Sen, sans-serif' }}>
            {t.routine.desc}
          </p>
          <div className="text-button-wrapper">
            <Link
              to={getLangPath('/general-dentistry')}
              className="inline-block bg-[#6AE0F2] text-black px-8 py-3 text-lg hover:bg-white transition-all duration-300"
              style={{ borderRadius: '0', fontFamily: 'Karla, sans-serif', fontWeight: '500' }}
            >
              {t.routine.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Second Row - Restorative Procedures */}
      <div className="smile-section-row">
        <div className="background-layer"></div>
        <div ref={image2Ref} className="image-layer image-layer-left">
          <img
            src="/photo7.webp"
            alt="Restorative procedures"
            className="w-full h-full object-cover"
            loading="lazy"
            width="5875"
            height="3917"
          />
          <div
            className="image-gradient-overlay"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(54,54,54,0.22) 51%, rgba(238,238,238,0.57) 96%)'
            }}
          ></div>
        </div>
        <div ref={text2Ref} className="text-overlay text-overlay-right">
          <h3 className="font-work font-bold text-4xl md:text-6xl lg:text-[3.5em] text-black leading-tight">
            <span className="font-bold">{t.restorative.bold}</span>
            <br />
            <span className="font-light">{t.restorative.light}</span>
          </h3>
          <p className="text-lg md:text-xl text-black leading-relaxed" style={{ fontFamily: 'Sen, sans-serif' }}>
            {t.restorative.desc}
          </p>
          <div className="text-button-wrapper">
            <Link
              to={getLangPath('/dental-surgery')}
              className="inline-block bg-[#6AE0F2] text-black px-8 py-3 text-lg hover:bg-white transition-all duration-300"
              style={{ borderRadius: '0', fontFamily: 'Karla, sans-serif', fontWeight: '500' }}
            >
              {t.restorative.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Third Row - Cosmetic Transformations */}
      <div className="smile-section-row">
        <div className="background-layer"></div>
        <div ref={image3Ref} className="image-layer">
          <img
            src="/DSCF7556.jpg"
            alt="Cosmetic transformations"
            className="w-full h-full object-cover"
            loading="lazy"
            width="6044"
            height="4029"
          />
          <div
            className="image-gradient-overlay"
            style={{
              background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(54,54,54,0.22) 51%, rgba(255,255,255,0.57) 96%)'
            }}
          ></div>
        </div>
        <div ref={text3Ref} className="text-overlay text-overlay-left">
          <h3 className="font-work font-bold text-4xl md:text-6xl lg:text-[3.5em] text-black leading-tight">
            <span className="font-bold">{t.cosmetic.bold}</span>
            <br />
            <span className="font-light">{t.cosmetic.light}</span>
          </h3>
          <p className="text-lg md:text-xl text-black leading-relaxed" style={{ fontFamily: 'Sen, sans-serif' }}>
            {t.cosmetic.desc}
          </p>
          <div className="text-button-wrapper">
            <Link
              to={getLangPath('/cosmetic-dentistry')}
              className="inline-block bg-[#6AE0F2] text-black px-8 py-3 text-lg hover:bg-white transition-all duration-300"
              style={{ borderRadius: '0', fontFamily: 'Karla, sans-serif', fontWeight: '500' }}
            >
              {t.cosmetic.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulSmileSection;
