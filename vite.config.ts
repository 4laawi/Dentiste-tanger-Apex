import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3001,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Only prerender locally. On Vercel, it skips to avoid missing library errors.
        // We push the 'dist' folder to Vercel instead.
        !process.env.VERCEL && prerender({
          // Path to the directory where the compiled assets are
          staticDir: path.resolve('./dist'),
          // List of routes to prerender
          routes: [
            '/',
            '/en',
            '/problemes-traites',
            '/en/problemes-traites',
            '/about',
            '/en/about',
            '/dentiste-reda-saoui',
            '/en/dentiste-reda-saoui',
            '/blog',
            '/en/blog',
            '/contact',
            '/en/contact',
            '/urgence-dentaire-tanger',
            '/en/urgence-dentaire-tanger',
            '/english-speaking-dentist-tangier',
            '/en/english-speaking-dentist-tangier',
            '/dental-implants-morocco',
            '/en/dental-implants-morocco',
            // Blog Posts (French)
            '/blog/avenir-dentisterie-numerique-tanger',
            '/blog/invisalign-meilleur-choix-adultes-tanger',
            '/blog/entretenir-votre-sourire-soins-post-implantaires-tanger',
            '/blog/comment-choisir-meilleur-dentiste-tanger',
            '/blog/tourisme-dentaire-tanger-soins-qualite',
            '/blog/urgences-dentaires-tanger-que-faire',
            // Blog Posts (English)
            '/en/blog/future-of-digital-dentistry-tangier',
            '/en/blog/invisalign-best-choice-adults-tangier',
            '/en/blog/maintaining-smile-post-implant-care-tangier',
            '/en/blog/how-to-choose-best-dentist-tangier',
            '/en/blog/dental-tourism-tangier-quality-care',
            '/en/blog/emergency-dental-care-tangier-what-to-do',
          ],
          renderer: new PuppeteerRenderer({
            renderAfterTime: 5000,
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          }),
        }),
      ].filter(Boolean),
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
