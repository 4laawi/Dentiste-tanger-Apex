import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../blogData.ts';
import ContactSection from './ContactSection.tsx';

interface Props {
    t: any;
    lang: 'en' | 'fr';
}

const BlogView: React.FC<Props> = ({ t, lang }) => {
    const posts = BLOG_POSTS[lang];

    const getLangPath = (path: string) => {
        if (lang === 'en') {
            return `/en${path === '/' ? '' : path}`;
        }
        return path;
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/photo4.png"
                        alt="Blog Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="max-w-4xl"
                    >
                        <p className="text-brand-cyan text-sm md:text-base font-bold uppercase tracking-[0.5em] mb-6 opacity-90">
                            {t.blog_page.hero.tag}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-work leading-tight mb-8 tracking-tight">
                            {t.blog_page.hero.title_light} <br />
                            <span className="font-light italic font-serif text-brand-cyan">{t.blog_page.hero.title_bold}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 font-sans max-w-2xl leading-relaxed">
                            {t.blog_page.hero.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={getLangPath(`/blog/${post.slug}`)} className="group block">
                                    <div className="relative aspect-[16/10] overflow-hidden mb-6 rounded-sm shadow-lg">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-brand-cyan text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-brand-dark/50 text-sm font-bold uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <User size={14} />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold font-work group-hover:text-brand-cyan transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-brand-dark/70 font-sans line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-brand-dark font-bold uppercase tracking-widest text-xs pt-2 group-hover:gap-4 transition-all">
                                            {t.blog_page.read_more}
                                            <ArrowRight size={16} className="text-brand-cyan" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection t={t.contact} />
        </div>
    );
};

export default BlogView;


