import{c,f as l,u as m,r as d,j as e,S as x,L as g,m as p,e as f,C as h}from"./index-LJpiA0xX.js";import{B as b,U as u}from"./blogData-NP61VV71.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],v=c("ChevronLeft",j),k=({t:n,lang:a})=>{const{slug:r}=l(),o=m(),s=b[a].find(t=>t.slug===r);d.useEffect(()=>{s||o("/blog")},[s,o]);const i=t=>a==="en"?`/en${t}`:t;return s?e.jsxs("div",{className:"bg-white min-h-screen pt-32",children:[e.jsx(x,{title:s.seoTitle,description:s.seoDescription,image:s.image,lang:a}),e.jsxs("div",{className:"container mx-auto px-6 pb-20",children:[e.jsxs(g,{to:i("/blog"),className:"flex items-center gap-2 text-brand-dark/60 hover:text-brand-cyan transition-colors mb-12 group w-fit",children:[e.jsx(v,{size:20,className:"group-hover:-translate-x-1 transition-transform"}),e.jsx("span",{className:"font-bold uppercase tracking-widest text-sm",children:n.blog_page.back_to_blog})]}),e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-brand-cyan font-bold uppercase tracking-[0.3em] text-sm",children:s.category}),e.jsx("h1",{className:"text-4xl md:text-6xl font-bold font-work leading-tight",children:s.title}),e.jsxs("div",{className:"flex flex-wrap gap-6 text-brand-dark/50 font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{size:18}),e.jsx("span",{children:s.date})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{size:18}),e.jsx("span",{children:s.author})]})]})]}),e.jsx("img",{src:s.image,alt:s.title,className:"w-full aspect-video object-cover rounded-sm shadow-2xl"}),e.jsx("div",{className:"prose prose-lg max-w-none text-brand-dark/80 font-sans leading-relaxed space-y-6 blog-content",dangerouslySetInnerHTML:{__html:s.content}})]})})]}),e.jsx(h,{t:n.contact}),e.jsx("style",{children:`
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
            `})]}):null};export{k as default};
