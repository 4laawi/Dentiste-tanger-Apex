import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS } from '../blogData.ts';
import ContactSection from './ContactSection.tsx';

import SEO from './SEO.tsx';

interface Props {
    t: any;
    lang: 'en' | 'fr';
}

const BlogPostView: React.FC<Props> = ({ t, lang }) => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const posts = BLOG_POSTS[lang];
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    const getLangPath = (path: string) => {
        if (lang === 'en') {
            return `/en${path === '/' ? '' : path}`;
        }
        return path;
    };

    if (!post) return null;

    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title={post.seoTitle}
                description={post.seoDescription}
                image={post.image}
                lang={lang}
            />
            <div className="container mx-auto px-6 pb-20">
                <Link
                    to={getLangPath('/blog')}
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
                            alt={post.title}
                            className="w-full aspect-video object-cover rounded-sm shadow-2xl"
                        />

                        <div
                            className="prose prose-lg max-w-none text-brand-dark/80 font-sans leading-relaxed space-y-6 blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>
                </div>
            </div>
            <ContactSection t={t.contact} />

            <style>{`
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #005163;
                    margin-top: 2rem;
                    font-family: 'Work Sans', sans-serif;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                }
                .blog-content strong {
                    color: #005163;
                }
            `}</style>
        </div>
    );
};

export default BlogPostView;
