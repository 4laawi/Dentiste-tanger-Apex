"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { BlogPost } from '../blogData.ts';
import ContactSection from './ContactSection.tsx';

interface Props {
    t: any;
    lang: 'en' | 'fr';
    post: BlogPost;
}

const BlogPostView: React.FC<Props> = ({ t, lang, post }) => {
    const getLangPath = (path: string) => {
        if (lang === 'en') {
            return `/en${path === '/' ? '' : path}`;
        }
        return path;
    };

    if (!post) return null;

    return (
        <div className="bg-white min-h-screen pt-32">
            <div className="container mx-auto px-6 pb-20">
                <Link
                    href={getLangPath('/blog')}
                    className="flex items-center gap-2 text-brand-dark/60 hover:text-brand-cyan transition-colors mb-12 group w-fit"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase tracking-widest text-sm">{t.blog_page.back_to_blog}</span>
                </Link>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-sm">{post.category}</span>
                            <h1 className="text-4xl md:text-6xl font-bold font-work leading-tight">{post.title}</h1>
                            <div className="flex flex-wrap gap-6 text-brand-dark/50 font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={18} />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>

                        <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            className="w-full aspect-video object-cover rounded-sm shadow-2xl"
                        />

                        <div
                            className="prose prose-lg max-w-none text-brand-dark/80 font-sans leading-relaxed space-y-6 blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Authority Flow: Relevant Services Box */}
                        <div className="mt-16 p-8 bg-brand-dark text-white rounded-sm">
                            <h3 className="text-2xl font-bold font-work mb-4">
                                {lang === 'fr' ? 'Besoin de plus d\'informations ?' : 'Need more information?'}
                            </h3>
                            <p className="text-white/80 mb-6">
                                {lang === 'fr' 
                                    ? 'Découvrez nos solutions personnalisées pour votre santé bucco-dentaire à Tanger.'
                                    : 'Discover our personalized solutions for your oral health in Tangier.'}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {post.category.includes('Technologie') || post.category.includes('Technology') || post.category.includes('Guide') ? (
                                    <>
                                        <Link href={getLangPath('/')} className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold text-center hover:bg-white transition-colors">
                                            {lang === 'fr' ? 'Nos Technologies' : 'Our Technologies'}
                                        </Link>
                                        <Link href={getLangPath('/problemes-traites')} className="px-6 py-3 border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                                            {lang === 'fr' ? 'Tous nos Soins' : 'All our Treatments'}
                                        </Link>
                                    </>
                                ) : post.category.includes('Implant') || post.category.includes('Tourisme') || post.category.includes('Tourism') ? (
                                    <>
                                        <Link href={lang === 'fr' ? '/implants-dentaires-tanger' : getLangPath('/dental-implants-morocco')} className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold text-center hover:bg-white transition-colors">
                                            {lang === 'fr' ? 'Implants Dentaires' : 'Dental Implants'}
                                        </Link>
                                        <Link href={getLangPath('/problemes-traites')} className="px-6 py-3 border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                                            {lang === 'fr' ? 'Esthétique Dentaire' : 'Cosmetic Dentistry'}
                                        </Link>
                                    </>
                                ) : post.category.includes('Urgence') || post.category.includes('Emergency') ? (
                                    <>
                                        <Link href={getLangPath('/urgence-dentaire-tanger')} className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold text-center hover:bg-white transition-colors">
                                            {lang === 'fr' ? 'SOS Urgence Dentaire' : 'Emergency Dental Care'}
                                        </Link>
                                        <Link href={getLangPath('/contact')} className="px-6 py-3 border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                                            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href={getLangPath('/problemes-traites')} className="px-6 py-3 bg-brand-cyan text-brand-dark font-bold text-center hover:bg-white transition-colors">
                                            {lang === 'fr' ? 'Voir nos Services' : 'View our Services'}
                                        </Link>
                                        <Link href={getLangPath('/')} className="px-6 py-3 border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                                            {lang === 'fr' ? 'Retour à l\'Accueil' : 'Back to Home'}
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ContactSection t={t.contact} />

            <style>{`
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #005163;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-family: 'Work Sans', sans-serif;
                }
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #005163;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    font-family: 'Work Sans', sans-serif;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul, .blog-content ol {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                }
                .blog-content strong {
                    color: #005163;
                    font-weight: 700;
                }
                .seo-faq {
                    background-color: #f8fafc;
                    padding: 2rem;
                    border-radius: 0.5rem;
                    margin-top: 3rem;
                    border-left: 4px solid #00D1FF;
                }
                .seo-faq h3 {
                    margin-top: 0;
                    color: #005163;
                    font-size: 1.25rem;
                }
            `}</style>
        </div>
    );
};

export default BlogPostView;
