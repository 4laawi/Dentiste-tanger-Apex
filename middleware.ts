// No imports needed for standard Request/Response in Edge Runtime


export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.webp|.*\\.jpg|.*\\.svg|.*\\.css|.*\\.js|.*\\.html).*)',
  runtime: 'edge',
};

// Metadata mapping based on constants.tsx and blogData.ts
const SITE_URL = 'https://apexdental.ma';
const DEFAULT_IMAGE = '/hero-image.webp';

const SEO_DATA: Record<string, any> = {
  fr: {
    home: {
      title: "Dentiste à Tanger | Dr. Reda Saoui – APEX Dental Clinic",
      description: "Bienvenue chez APEX Dental Clinic. Le Dr. Reda Saoui, votre dentiste de confiance à Tanger, propose des soins d'excellence : implants, facettes et Invisalign."
    },
    about: {
      title: "Dr. Reda Saoui | Dentiste Expert à Tanger – À propos d'APEX",
      description: "Rencontrez le Dr. Reda Saoui, expert en dentisterie moderne à Tanger. Découvrez son parcours, sa vision et son engagement pour votre santé bucco-dentaire."
    },
    problems: {
      title: "Soins Dentaires à Tanger | Esthétique & Orthodontie | APEX",
      description: "Découvrez les soins dentaires innovants du Dr. Saoui à Tanger. Spécialiste en implants, facettes, orthodontie et esthétique dentaire moderne."
    },
    doctor: {
      title: "Dr. Reda Saoui - Dentiste à Tanger | Expertise & Vision",
      description: "Parcours et expertise du Dr. Reda Saoui, votre dentiste de confiance au service de l'innovation dentaire à Tanger."
    },
    blog: {
      title: "Blog Dentaire Tanger | Conseils & Innovations | APEX Dental",
      description: "Retrouvez les derniers conseils en hygiène dentaire et les innovations en dentisterie à Tanger sur le blog du Dr. Reda Saoui."
    },
    contact: {
      title: "Contact & Localisation | Dentiste Tanger Place des Nations | APEX",
      description: "Prenez rendez-vous avec le Dr. Reda Saoui à Tanger. Localisation à la Place des Nations, contact et formulaire de prise en charge rapide."
    },
    urgence: {
      title: "Urgence Dentaire à Tanger | Dr. Reda Saoui",
      description: "Besoin d'un dentiste à Tanger ? APEX Dental offre des soins dentaires d'urgence avec le Dr. Reda Saoui. Contactez-nous pour toute urgence dentaire à Tanger."
    },
    dental_implants: {
      title: "Implants Dentaires Maroc | Restaurez Votre Sourire à Tanger",
      description: "Implants dentaires de classe mondiale à Tanger. Le Dr Reda Saoui offre des services d'implantologie haut de gamme pour les patients internationaux et locaux."
    }
  },
  en: {
    home: {
      title: "Dentist in Tangier | Dr. Reda Saoui – APEX Dental Clinic",
      description: "Experience premium dental care in Tangier with Dr. Reda Saoui. Expert specialists in dental implants, aesthetic veneers, and Invisalign clear aligners."
    },
    about: {
      title: "About Dr. Reda Saoui | Expert Dentist in Tangier | APEX",
      description: "Meet Dr. Reda Saoui and learn about the philosophy and advanced technology behind APEX Dental Clinic in Tangier."
    },
    problems: {
      title: "Dental Treatments in Tangier | Implants & Aesthetics | APEX",
      description: "Discover the professional dental solutions at APEX, from emergency care to cosmetic transformations and dental implants in Tangier."
    },
    doctor: {
      title: "Dr. Reda Saoui - Dentist in Tangier | Expertise & Vision",
      description: "Expertise, training, and philosophy of Dr. Reda Saoui, your trusted dentist for high-tech care in Tangier."
    },
    blog: {
      title: "Dental Blog Tangier | Tips & Innovations | APEX Dental",
      description: "Expert advice on oral health, latest dental technologies, and clinic news from Dr. Reda Saoui in Tangier."
    },
    contact: {
      title: "Contact Us | Dentist in Tangier Place des Nations | APEX",
      description: "Contact APEX Dental Clinic in Tangier for appointments or emergencies. Located at Place des Nations, we are here to help you."
    },
    urgence: {
      title: "Urgence Dentaire à Tanger | Dr. Reda Saoui",
      description: "Besoin d'un dentiste à Tanger ? APEX Dental offre des soins dentaires d'urgence avec le Dr. Reda Saoui. Contactez-nous pour toute urgence dentaire à Tanger."
    },
    english_dentist: {
      title: "English Speaking Dentist in Tangier | Dr. Reda Saoui | APEX",
      description: "Looking for an English speaking dentist in Tangier? Dr. Reda Saoui provides premium dental care for international patients and expats."
    },
    dental_implants: {
      title: "Dental Implants Morocco | Restore Your Smile in Tangier",
      description: "World-class dental implants in Tangier at a fraction of the cost. Dr. Reda Saoui provides premium implantology services for international patients."
    }
  }
};

const BLOG_POSTS: Record<string, any[]> = {
  en: [
    { slug: 'future-of-digital-dentistry-tangier', title: 'The Future of Digital Dentistry in Tangier | APEX Dr. Reda Saoui', description: 'Discover how 3D printing and CAD/CAM technology are revolutionizing dental care at APEX, the leading digital dentist in Tangier.', image: '/photo4.webp' },
    { slug: 'invisalign-best-choice-adults-tangier', title: 'Invisalign for Adults in Tangier | Discreet Orthodontics | APEX', description: 'Learn why Invisalign is the preferred choice for adults in Tangier seeking a discreet way to straighten their teeth at APEX clinic.', image: '/orthodontie.webp' },
    { slug: 'maintaining-smile-post-implant-care-tangier', title: 'Dental Implant Care Tips Tangier | APEX Dr. Reda Saoui', description: 'Expert advice on how to maintain your dental implants for long-lasting results. Visit APEX, your trusted dentist in Tangier.', image: '/implant.webp' },
    { slug: 'how-to-choose-best-dentist-tangier', title: 'How to Choose the Best Dentist in Tangier | APEX Guide', description: 'Looking for a dentiste Tanger? Our guide covers the top factors to consider, from technology to patient reviews, to help you find the right fit.', image: '/PHoto1.webp' },
    { slug: 'dental-tourism-tangier-quality-care', title: 'Dental Tourism Tangier | Affordable High-Quality Care | APEX', description: 'Discover why Tangier is a top destination for dental tourism. Get world-class implants and cosmetic dentistry at APEX clinic.', image: '/Photo3.webp' },
    { slug: 'emergency-dental-care-tangier-what-to-do', title: 'Emergency Dentist Tangier | Urgent Dental Care | APEX', description: 'Facing a dental emergency in Tangier? Learn what to do and how to get urgent care at APEX clinic. We prioritize your pain relief.', image: '/photo6.webp' }
  ],
  fr: [
    { slug: 'avenir-dentisterie-numerique-tanger', title: 'L\'Avenir de la Dentisterie Numérique à Tanger | APEX Dr. Reda Saoui', description: 'Découvrez comment l\'impression 3D et la technologie CAD/CAM révolutionnent les soins chez APEX, votre dentiste numérique à Tanger.', image: '/photo4.webp' },
    { slug: 'invisalign-meilleur-choix-adultes-tanger', title: 'Invisalign pour Adultes à Tanger | Orthodontie Discrète | APEX', description: 'Découvrez pourquoi Invisalign est le choix préféré des adultes à Tanger pour aligner leurs dents en toute discrétion chez APEX.', image: '/orthodontie.webp' },
    { slug: 'entretenir-votre-sourire-soins-post-implantaires-tanger', title: 'Conseils Soins Implants Dentaires Tanger | APEX Dr. Reda Saoui', description: 'Conseils d\'expert pour entretenir vos implants dentaires et garantir leur longévité. Visitez APEX, votre dentiste de confiance à Tanger.', image: '/implant.webp' },
    { slug: 'comment-choisir-meilleur-dentiste-tanger', title: 'Comment Choisir le Meilleur Dentiste à Tanger | Guide APEX', description: 'Vous cherchez un dentiste Tanger ? Notre guide vous aide à choisir selon la technologie, l\'expertise et les avis patients.', image: '/PHoto1.webp' },
    { slug: 'tourisme-dentaire-tanger-soins-qualite', title: 'Tourisme Dentaire Tanger | Soins de Qualité Accessibles | APEX', description: 'Découvrez pourquoi Tanger est une destination majeure pour le tourisme dentaire. Implants et esthétique de qualité chez APEX.', image: '/Photo3.webp' },
    { slug: 'urgences-dentaires-tanger-que-faire', title: 'Dentiste Urgence Tanger | Soins Dentaires Urgents | APEX', description: 'Urgence dentaire à Tanger ? Apprenez les bons gestes et obtenez des soins rapides chez APEX. Nous traitons vos urgences en priorité.', image: '/photo6.webp' }
  ]
};

export function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  const bots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
    'facebookexternalhit', 'twitterbot', 'rogerbot', 'linkedinbot', 'embedly',
    'quora link preview', 'showyoubot', 'outbrain', 'pinterest/0.',
    'slackbot', 'vkShare', 'W3C_Validator', 'whatsapp', 'telegrambot', 'threads'
  ];

  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot));

  if (!isBot) {
    // Continue with the request
    return;
  }

  const url = new URL(request.url);
  const pathname = url.pathname;
  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'fr';
  const cleanPath = pathname.replace(/^\/en/, '') || '/';

  let metadata = {
    title: SEO_DATA[lang].home.title,
    description: SEO_DATA[lang].home.description,
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}${pathname}`
  };

  // Determine metadata based on path
  if (cleanPath === '/about') {
    metadata.title = SEO_DATA[lang].about.title;
    metadata.description = SEO_DATA[lang].about.description;
  } else if (cleanPath === '/problemes-traites') {
    metadata.title = SEO_DATA[lang].problems.title;
    metadata.description = SEO_DATA[lang].problems.description;
  } else if (cleanPath === '/dentiste-reda-saoui') {
    metadata.title = SEO_DATA[lang].doctor.title;
    metadata.description = SEO_DATA[lang].doctor.description;
  } else if (cleanPath === '/blog') {
    metadata.title = SEO_DATA[lang].blog.title;
    metadata.description = SEO_DATA[lang].blog.description;
  } else if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');
    const post = BLOG_POSTS[lang].find(p => p.slug === slug);
    if (post) {
      metadata.title = post.title;
      metadata.description = post.description;
      metadata.image = post.image;
    }
  } else if (cleanPath === '/contact') {
    metadata.title = SEO_DATA[lang].contact.title;
    metadata.description = SEO_DATA[lang].contact.description;
  } else if (cleanPath === '/urgence-dentaire-tanger') {
    metadata.title = SEO_DATA[lang].urgence.title;
    metadata.description = SEO_DATA[lang].urgence.description;
  } else if (cleanPath === '/english-speaking-dentist-tangier') {
    metadata.title = SEO_DATA[lang].english_dentist?.title || metadata.title;
    metadata.description = SEO_DATA[lang].english_dentist?.description || metadata.description;
  } else if (cleanPath === '/dental-implants-morocco') {
    metadata.title = SEO_DATA[lang].dental_implants.title;
    metadata.description = SEO_DATA[lang].dental_implants.description;
  }

  // Ensure absolute image URL
  const ogImage = metadata.image.startsWith('http') ? metadata.image : `${SITE_URL}${metadata.image}`;

  // Inject meta tags into index.html
  // We fetch the original index.html from the origin
  return fetch(new URL('/index.html', request.url))
    .then(async (response) => {
      let html = await response.text();

      const metaTags = `
    <!-- Server-Side Injected SEO for Bots -->
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}" />
    <link rel="canonical" href="${metadata.url}" />
    <meta property="og:site_name" content="APEX Dental Clinic" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="${metadata.url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;

      // Insert before </head>
      html = html.replace('</head>', `${metaTags}\n</head>`);

      return new Response(html, {
        headers: { 'content-type': 'text/html; charset=UTF-8' },
      });
    })
    .catch(() => {
        // Fallback to continue with the request if fetch fails
        return;
    });
}

