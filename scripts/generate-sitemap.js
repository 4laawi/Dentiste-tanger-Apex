import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://apexdental.ma';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

const ROUTES = [
    // French (Default)
    { path: '/', priority: 1.0, lang: 'fr' },
    { path: '/problemes-traites', priority: 0.8, lang: 'fr' },
    { path: '/about', priority: 0.8, lang: 'fr' },
    { path: '/dentiste-reda-saoui', priority: 0.8, lang: 'fr' },
    { path: '/blog', priority: 0.7, lang: 'fr' },
    { path: '/contact', priority: 0.8, lang: 'fr' },
    { path: '/urgence-dentaire-tanger', priority: 0.9, lang: 'fr' },

    // English
    { path: '/en', priority: 0.9, lang: 'en' },
    { path: '/en/about', priority: 0.8, lang: 'en' },
    { path: '/english-speaking-dentist-tangier', priority: 0.9, lang: 'en' },
    { path: '/dental-implants-morocco', priority: 0.9, lang: 'en' },
    // Add other English routes that map to French ones if they exist as separate URLs
    // Based on App.tsx, some English routes might use the same component but different URL or just /en prefix
    // For simplicity and matching App.tsx, we list known routes
];

// Blog posts - meaningful slugs
const BLOG_POSTS = [
    'avenir-dentisterie-numerique-tanger',
    'invisalign-meilleur-choix-adultes-tanger',
    'entretenir-votre-sourire-soins-post-implantaires-tanger',
    'comment-choisir-meilleur-dentiste-tanger',
    'tourisme-dentaire-tanger-soins-qualite',
    'urgences-dentaires-tanger-que-faire'
];

// English blog posts
const BLOG_POSTS_EN = [
    'future-of-digital-dentistry-tangier',
    'invisalign-best-choice-adults-tangier',
    'maintaining-smile-post-implant-care-tangier',
    'how-to-choose-best-dentist-tangier',
    'dental-tourism-tangier-quality-care',
    'emergency-dental-care-tangier-what-to-do'
];


const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    // Static Routes
    ROUTES.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;

        // Add alternates
        // Simple logic: if path is /foo, alt is /en/foo (unless specific mapping exists)
        // For specific pages like english-speaking-dentist-tangier which is English only or specific, we might handle differently
        // For now, we add generic alternates for robust SEO if applicable

        xml += '  </url>\n';
    });

    // Blog Posts FR
    BLOG_POSTS.forEach(slug => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/blog/${slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <priority>0.6</priority>\n`;
        xml += '  </url>\n';
    });

    // Blog Posts EN
    BLOG_POSTS_EN.forEach(slug => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/en/blog/${slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <priority>0.6</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    fs.writeFileSync(OUTPUT_FILE, xml);
    console.log(`Sitemap generated at ${OUTPUT_FILE}`);
};

generateSitemap();
