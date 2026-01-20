
import { Problem, Testimonial } from './types.ts';

export const PHONE = "0666-061666";
export const ADDRESS = "Place des Nations, Avenue Abou Bakr Errazi, Résidence Zainab – rez-de-chaussée, cabinet n°8, 90000 Tanger, Maroc";

export const TRANSLATIONS = {
  en: {
    nav: {
      about: {
        label: "about",
        sub: ["meet the doctor", "new patients", "payment options", "technology", "blog"]
      },
      services: {
        label: "services",
        sub: {
          general: ["bridges", "crowns", "dentures", "fillings", "cleanings", "emergency"],
          cosmetic: ["invisalign", "veneers", "whitening", "botox"],
          surgical: ["implants", "root canal", "extractions"]
        }
      },
      problems: "problems we treat",
      schedule: "schedule now",
      call: PHONE
    },
    seo: {
      home: {
        title: "APEX Dental Clinic Tangier | Dr. Reda Saoui",
        description: "Experience premium dental care in Tangier with Dr. Reda Saoui. Expert specialists in dental implants, aesthetic veneers, and Invisalign clear aligners. High-tech dentistry clinic in Tangier for a perfect smile."
      },
      about: {
        title: "About US | Dr. Reda Saoui | APEX Dental Clinic",
        description: "Meet Dr. Reda Saoui and learn about the philosophy and advanced technology behind APEX Dental Clinic in Tangier."
      },
      problems: {
        title: "Treatments & Solutions | APEX Dental Clinic Tangier",
        description: "Discover the dental problems we treat at APEX, from emergency care to cosmetic transformations and dental implants."
      },
      doctor: {
        title: "Dr. Reda Saoui - Dental Surgeon Tangier | APEX",
        description: "Expertise, training, and philosophy of Dr. Reda Saoui, your trusted dentist for high-tech care in Tangier."
      },
      blog: {
        title: "Dental Blog & Tips | APEX Dental Clinic Tangier",
        description: "Expert advice on oral health, latest dental technologies, and clinic news from Dr. Reda Saoui."
      },
      contact: {
        title: "Contact Us | APEX Dental Clinic Tangier | Dr. Reda Saoui",
        description: "Contact APEX Dental Clinic in Tangier for appointments, inquiries, or emergencies. Our expert team is here to help you achieve your perfect smile."
      }
    },
    about_page: {
      hero: {
        tag: "Meet Dr. Reda Saoui",
        title_light: "Dedicated to",
        title_bold: "Your Smile",
        desc: "Learn about the founder and lead dentist of our <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>Tangier practice</a>, his journey, and his commitment to excellence in dental care."
      },
      story: {
        title_light: "Founding",
        title_bold: "APEX",
        p1: "Dr. Reda Saoui founded <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>APEX in Tangier</a> with a vision to revolutionize the dental experience. His journey began with a passion for both medicine and technology, leading him to create a clinic that feels like a modern sanctuary rather than a traditional dental office.",
        p2: "Our goal was to create something new and innovative—a space where patients feel welcomed like old friends, and where we have the autonomy to continually invest in the latest technology to provide exceptional care."
      },
      approach: {
        title: "Dr. Saoui's Approach to Care",
        desc: "As a dentist, I believe in comprehensive, quality dental care that is patient-centered. I strive to create a positive and comfortable experience for each guest while meeting their dental needs and expectations. Using the latest technology is not just about efficiency; it's about enhancing the overall patient experience."
      },
      education: {
        title: "Education & Certifications",
        edu_label: "Education",
        edu_list: [
          "Doctor of Dental Surgery (DDS) from top Moroccan institutions",
          "Advanced training in Implantology and Oral Surgery",
          "Specialization in Digital Dentistry and CAD/CAM technologies"
        ],
        assoc_label: "Associations",
        assoc_list: [
          "Moroccan National Order of Dentists",
          "International Congress of Oral Implantologists (ICOI)",
          "Advanced Digital Dentistry Association"
        ],
        cert_label: "Certifications",
        cert_list: [
          "Certified Invisalign Provider",
          "Advanced Laser Dentistry Certification",
          "Yomi Implant Robot Specialist",
          "Expert in Aesthetic Reconstruction"
        ]
      },
      personal: {
        title_light: "Outside",
        title_bold: "the Office",
        desc: "In his free time, Dr. Saoui is an avid sports enthusiast. He enjoys challenging himself through basketball, tennis, and exploring the beautiful landscapes around Tangier. He values family time above all else and believes that a balanced life is key to providing the best care for his patients.",
        fun_title: "Fun to Know:",
        fun_list: [
          "Avid traveler and culture enthusiast",
          "Passionate about medical technology and innovation",
          "Regular volunteer in local community health initiatives",
          "Favorite pastime: Exploring Tangier's historical sites with family"
        ]
      },
      areas_of_focus: {
        title: "areas of focus",
        services: [
          { title: "cosmetic dentistry", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/cosmetic-dentistry-icon.png" },
          { title: "dental implants", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/implant-icon.png" },
          { title: "full mouth reconstruction", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/full-mouth-reconstruction-icon.png" },
          { title: "invisalign", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/invisalign-icon.png" },
          { title: "infant frenectomies", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/infant-frenectomy-icon.png" },
          { title: "same-day crowns", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/crown-icon.png" },
          { title: "treating tmd disorders", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/tmd-icon.png" }
        ]
      }
    },
    hero: {
      tag: "APEX Dental Clinic - Tangier",
      title_part1: "Redefining Your Smile",
      title_part2: "in Tangier",
      desc: "Premium dental care by Dr. Reda Saoui. Advanced technology for exceptional results in Tangier.",
      cta_schedule: "Book Now",
      cta_call: "Call Us",
      discover: "Explore"
    },
    know_doctor: {
      title_light: "Meet your",
      title_bold: "doctor",
      desc: "Meet Dr. Reda Saoui, a dental surgeon in Tangier, whose practice is part of a modern and demanding vision of dentistry. Driven by precision, aesthetics and respect for the patient, he attaches particular importance to listening, understanding and the quality of each care.",
      list: [
        "In-depth expertise in aesthetic and implant dentistry",
        "A tailor-made approach, based on trust, transparency and benevolence",
        "The use of cutting-edge technology for precise, comfortable and durable care"
      ],
      cta: "Learn more about Dr. Saoui"
    },
    details: {
      title_light: "It's all in",
      title_bold: "the details",
      desc: "Our dental clinic in Tangier redefines the standards of first-class care, placing requirements, comfort and the human heart at the core of every detail.",
      list: [
        "Caring professionals, listening and without judgment, welcoming patients of all ages",
        "Sharp expertise in aesthetic and restorative dentistry, dedicated to natural and sustainable transformations",
        "Integration of the most advanced technologies for optimal comfort and precise results"
      ]
    },
    insurance: {
      title: "we accept all types of insurances",
      desc: "don't have insurance? don't worry — we've got you covered. our affordable pricing ensures quality dental care is accessible to everyone, with or without insurance."
    },
    implants: {
      title_light: "excellence in",
      title_bold: "full-arch implants",
      desc: "Using advanced Yomi technology, Dr. Saoui ensures a precise, comfortable procedure to replace your natural teeth.",
      cta: "explore surgical care"
    },
    our_expertise: "our expertise",
    tech_section: {
      title_main: "nos technologies",
      title_sub: "de pointe chez APEX",
      cta: "découvrir notre expertise",
      items: [
        {
          title: "dentisterie numérique 3D + impression 3D",
          desc: "Une précision inégalée pour vos restaurations, réalisée en un temps record grâce à nos flux numériques intégrés."
        },
        {
          title: "chirurgie guidée par ordinateur",
          desc: "La sécurité et la précision absolue pour vos implants, planifiées virtuellement pour des résultats optimaux."
        },
        {
          title: "imagerie radiographique avancée",
          desc: "Des diagnostics haute définition avec une exposition minimale, pour une compréhension totale de votre santé bucco-dentaire."
        }
      ]
    },
    smile_heading: {
      light: "your",
      bold: "beautiful smile"
    },
    smile_rows: {
      routine: {
        bold: "routine",
        light: "dental care",
        desc: "Clean and healthy has never been this easy — or this enjoyable. We're your entire family's partner in dental health.",
        cta: "explore general dentistry"
      },
      restorative: {
        bold: "restorative",
        light: "procedures",
        desc: "With advanced training and a focus on full-mouth reconstruction, our doctors provide premier care for those dealing with damaged or missing teeth.",
        cta: "explore surgical dentistry"
      },
      cosmetic: {
        bold: "cosmetic",
        light: "transformations",
        desc: "See what's possible through veneers, GLO whitening, or clear aligners. We're a certified Invisalign provider and have designed thousands of confident smiles.",
        cta: "explore cosmetic dentistry"
      }
    },
    contact_team: {
      title_light: "our team",
      title_bold: "contact",
      get_directions: "get directions",
      placeholders: {
        name: "name *",
        lastName: "last name *",
        service: "choose a service *",
        specify: "please specify *",
        submit: "submit message"
      },
      whatsapp_msg: "Hello Dr. Saoui, my name is {name} {lastName}. I would like to have more information or book a session for the following service: {service}."
    },
    intro: {
      tag: "APEX Expertise",
      title: "Dr. Reda Saoui - Tangier Dentist",
      years: "Years of Experience",
      satisfaction: "Patient Satisfaction",
      smiles: "Perfect Smiles",
      p1: "Your health and aesthetics are our mission. As a leading dentist in Tangier, Dr. Reda Saoui combines artistic vision with advanced clinical expertise at APEX clinic.",
      p2: "Our clinic is designed to provide a serene and luxury environment for all our patients, ensuring every visit is comfortable and stress-free.",
      p3: "Using the latest CAD/CAM technology and pain-free laser solutions, we redefine what a dental visit feels like in Morocco."
    },
    smile: {
      title_light: "helping you",
      title_bold: "smile again",
      desc1: "At Dr. Reda Saoui's clinic, <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>your dentist in Tangier</a>, we understand the frustration of living with dental problems. Bad breath, bleeding gums, chipped or cracked teeth, crooked smiles – we’ve seen it all, and we’re here to help.",
      desc2: "Our dedicated team is ready to tackle these issues head-on, providing high-tech solutions that restore your confidence and well-being.",
      cta: "Call or text us at",
      cta_end: "and welcome a brighter, healthier smile."
    },
    faq: {
      title_bold: "Vous avez une question ?",
      title_light: "On vous répond.",
      q1: {
        title: "Puis-je savoir le prix des traitement ?",
        desc: "Pour avoir un devis détaillé de tout les traitements nous vous invitons à nous visiter pour faire une consultation , qui comprend un examen clinique détaillé et un examen radiologique , ces dernier vont nous aider à poser le bon diagnostic et donc le bon plan de traitement , a la fin notre rendez vous , notre secrétaire d'accueil va vous donner votre dossier qui comprend la radio et le devis personnalisé"
      },
      q2: {
        title: "Est ce que le détartrage fragilise les dents ?",
        desc: "Le détartrage dentaire est généralement considéré comme sûr et bénéfique pour la santé bucco-dentaire. En fait, il est recommandé de subir un détartrage régulier chez le dentiste pour prévenir les problèmes dentaires tels que la gingivite (inflammation des gencives) et la maladie parodontale (infection des tissus de soutien des dents). Le détartrage peut sembler agressif, car il implique l'utilisation d'instruments spéciaux, tels qu'un grattoir ou une sonde ultrasonique, pour enlever le tartre. Cependant, lorsqu’il est réalisé par un professionnel qualifié, le détartrage est généralement sûr et ne fragilise pas les dents. Au contraire, il permet de maintenir une bonne santé bucco-dentaire en éliminant les accumulations indésirables. Il est possible que certaines personnes ressentent une légère sensibilité dentaire après un détartrage, mais cela est généralement temporaire et disparaît rapidement."
      },
      q3: {
        title: "Est ce que le blanchiment dentaire fait mal ?",
        desc: "Le blanchiment dentaire peut parfois entraîner une sensibilité dentaire temporaire, mais il ne devrait pas causer de douleur intense. Certaines personnes peuvent ressentir une légère gêne ou sensibilité pendant ou après le traitement de blanchiment. Cela peut se manifester par une sensibilité accrue aux aliments chauds ou froids, aux boissons sucrées ou acides, ou même à l'air froid. La sensibilité dentaire après un blanchiment est généralement de courte durée et disparaît souvent dans les jours qui suivent le traitement. Il est recommandé d'utiliser un dentifrice pour dents sensibles et d'éviter les aliments et les boissons chauds ou froids pendant un certain temps."
      },
      q4: {
        title: "Est ce qu’on peut utiliser le bain de bouche tout les jours ?",
        desc: "Les bains de bouche ne sont pas conçus pour être utilisés quotidiennement. Certains bains de bouche contiennent des agents actifs plus puissants et peuvent être recommandés pour une utilisation à court terme, par exemple pour traiter une infection de la bouche ou des gencives. Une utilisation excessive de ces produits peut perturber l'équilibre naturel de la bouche et entraîner des effets indésirables, tels que des taches sur les dents ou une irritation des muqueuses."
      },
      q5: {
        title: "Quelle est la durée d'un traitement orthodontique ?",
        desc: "La durée d'un traitement orthodontique peut varier considérablement en fonction de plusieurs facteurs, tels que la complexité des problèmes orthodontiques, la méthode de traitement utilisée, la coopération du patient et la réponse individuelle aux traitements. Pour les cas orthodontiques mineurs, tels que des corrections mineures de l'alignement dentaire, un traitement peut durer de 6 à 12 mois. Cependant, pour des problèmes plus complexes, tels que des malocclusions sévères ou des mâchoires désalignées, le traitement peut prendre de 1 à 3 ans, voire plus dans certains cas."
      },
      q6: {
        title: "Quelle est la durée de traitement par facettes dentaires ?",
        desc: "La durée d'un traitement par facettes dentaires peut varier en fonction de plusieurs facteurs, tels que le nombre de dents à traiter, l'état initial des dents, les techniques utilisées et les objectifs esthétiques spécifiques du patient. En général, le processus de pose de facettes dentaires peut être divisé en plusieurs étapes, qui peuvent s'étaler sur plusieurs semaines."
      }
    },
    tech: {
      anxiety: "suffer from dental anxiety?",
      title: "discover our Solea Laser solution",
      desc: "In our <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>dental practice in Tangier</a>, we address dental anxiety with the innovative Solea Laser, a pain-free solution that eliminates the need for drills, needles, scalpels, or loud noises during treatments. With this technology, you can experience dental care without stress or discomfort!"
    },
    schedule_banner: {
      title_bold: "schedule",
      title_light: "your first visit",
      btn: "schedule now"
    },
    more_problems: {
      title_bold: "more",
      title_light: "dental problems",
      list: [
        { label: "Dental Anxiety", link: "#" },
        { label: "Denture Repair", link: "#" },
        { label: "Gum Disease", link: "#" },
        { label: "Missing Teeth", link: "#" },
        { label: "Sensitivity", link: "#" },
        { label: "Stained Teeth", link: "#" }
      ]
    },
    problems: {
      title_bold: "problems",
      title_light: "we treat",
      all: "all problems",
      list: [
        "bad breath / halitosis",
        "infant frenectomies",
        "gum disease",
        "teeth grinding",
        "bleeding gums",
        "sleep apnea & snoring",
        "missing teeth",
        "chipped / cracked tooth repair",
        "dental anxiety",
        "sensitivity",
        "crooked teeth",
        "denture repair",
        "stained teeth"
      ]
    },
    testimonials: {
      kind: "kind words",
      from: "from our patients",
      reviews: "100+ 5-Star Reviews",
      list: [
        {
          text: "The service is impeccable, the dentist is very professional and competent, he explained my problem very well and made me superb bridges for my teeth.",
          author: "Nouhaila Salmoun"
        },
        {
          text: "A very good dentist with excellent customer service. I recommend trying the clinic, you won't regret it.",
          author: "Ayoub Yaagoubi"
        },
        {
          text: "Highly recommend for their professionalism, gentle care, and modern treatments. They make every visit comfortable.",
          author: "Mounib Tellal"
        },
        {
          text: "Doctor Saoui is a professional and competent dentist! I had a filling and a cavity treated. The doctor examined my health, explained the work done and was very attentive. The assistants were also kind and helpful. The location is easy to find, near the police station, and very clean and tidy. Highly recommended!",
          author: "Theo traveler"
        }
      ]
    },
    contact: {
      our: "our",
      office: "Tangier office",
      directions: "Get Directions",
      hours: "Mon-Fri: 9:30AM-6:00PM | Sat: 9:30AM-3:00PM",
      monday: "Monday: 9AM - 6PM",
      tuesday: "Tuesday: 9AM - 6PM",
      wednesday: "Wednesday: 9AM - 6PM",
      thursday: "Thursday: 9AM - 6PM",
      friday: "Friday: Closed",
      call_text: "Call / Text",
      whatsapp: "WhatsApp"
    },
    expertise: {
      facettes: "veneers",
      aligneurs: "aligners",
      couronnes: "crowns",
      blanchimentFlash: "flash whitening",
      implant: "implant",
      pedodontie: "pedodontics",
      traitementsCanalaires: "root canal treatments",
      parodontie: "periodontics",
      chirurgieOrale: "oral surgery"
    },
    blog_page: {
      hero: {
        tag: "APEX Blog",
        title_light: "Insights &",
        title_bold: "Expertise",
        desc: "Stay informed about the latest in dental technology, oral health tips, and clinic news from Dr. Reda Saoui."
      },
      read_more: "Read More",
      back_to_blog: "Back to Blog"
    },
    mobile_bar: {
      call: "Call",
      contact: "Contact Us"
    }
  },
  fr: {
    nav: {
      about: {
        label: "à propos",
        sub: ["rencontrer le docteur", "nouveaux patients", "options de paiement", "technologie", "blog"]
      },
      services: {
        label: "services",
        sub: {
          general: ["ponts", "couronnes", "prothèses", "plombages", "nettoyages", "urgence"],
          cosmetic: ["invisalign", "facettes", "blanchiment", "botox"],
          surgical: ["implants", "canal radiculaire", "extractions"]
        }
      },
      problems: "problèmes traités",
      schedule: "prendre rdv",
      call: PHONE
    },
    seo: {
      home: {
        title: "Clinique Dentaire APEX Tanger | Dr. Reda Saoui",
        description: "Découvrez l'excellence des soins dentaires à Tanger avec le Dr. Reda Saoui. Spécialiste en implants dentaires, facettes esthétiques et Invisalign. Clinique de haute technologie pour votre santé bucco-dentaire."
      },
      about: {
        title: "À Propos | Dr. Reda Saoui | Clinique APEX Tanger",
        description: "Découvrez le Dr. Reda Saoui et la philosophie de soins de la clinique APEX. Excellence et technologie pour votre sourire."
      },
      problems: {
        title: "Problèmes Traités & Soins | APEX Tanger",
        description: "Découvrez les soins dentaires proposés chez APEX : urgences, esthétique, implants et dentisterie numérique à Tanger."
      },
      doctor: {
        title: "Dr. Reda Saoui - Chirurgien Dentiste Tanger | APEX",
        description: "Parcours et expertise du Dr. Reda Saoui, votre dentiste de confiance au service de l'innovation dentaire à Tanger."
      },
      blog: {
        title: "Le Blog de l'Expert | Clinique APEX Tanger",
        description: "Conseils de santé bucco-dentaire et actualités sur les technologies dentaires par le Dr. Reda Saoui."
      },
      contact: {
        title: "Contactez-nous | Clinique APEX Tanger | Dr. Reda Saoui",
        description: "Contactez la clinique dentaire APEX à Tanger pour vos rendez-vous, questions ou urgences. Notre équipe d'experts est là pour vous accompagner."
      }
    },
    about_page: {
      hero: {
        tag: "Rencontrez le Dr. Reda Saoui",
        title_light: "Dédié à",
        title_bold: "Votre Sourire",
        desc: "Découvrez le fondateur et dentiste principal de <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>notre clinique à Tanger</a>, son parcours et son engagement envers l'excellence des soins dentaires."
      },
      story: {
        title_light: "Création de",
        title_bold: "APEX DENTAL CLINIC",
        p1: "Le Dr Med Reda Saoui a fondé <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>APEX à Tanger</a> avec la vision de révolutionner l'expérience du dentiste. Tout d'abord le nom vient du jargon médico-dentaire, l'APEX de la dent c'est son sommet, nous cherchons à devenir les meilleurs dans ce que nous faisons à l'échelle internationale. Choisir APEX DENTAL CLINIC c'est choisir une approche humaine, moderne et personnalisée pour vos besoins. Choisir APEX c'est choisir le sommet de la dentisterie moderne.",
        p2: "<b>Qui suis-je ?</b><br/><br/>Tangérois depuis l’âge de huit ans, j’ai toujours été animé par une profonde curiosité pour la médecine et les nouvelles technologies. Dès mes dix ans, je passais des heures sur internet à lire, observer, regarder des documentaires et apprendre sans relâche, avec cette envie presque enfantine de découvrir quelque chose de nouveau chaque jour et de le partager le lendemain à la cour de récréation.<br/><br/>Très tôt, cette soif de savoir s’est transformée en une véritable obsession : comprendre, analyser, expliquer. Une obsession saine, tournée vers la maîtrise et la précision. C’est avec cet état d’esprit que j’ai intégré la Faculté de Médecine Dentaire Publique de Rabat, et c’est cette même exigence intellectuelle qui me guide aujourd’hui dans ma pratique quotidienne.<br/><br/>Exercer l’art dentaire est pour moi un plaisir autant qu’une responsabilité. J’aime prendre le temps d’expliquer, de rassurer et de répondre aux questions qui préoccupent mes patients, car je suis convaincu qu’un soin de qualité commence toujours par la compréhension et la confiance.<br/><br/>C’est cette vision qui m’a naturellement conduit à créer une clinique pensée comme un véritable sanctuaire moderne, un espace apaisant et moderne, loin de l’univers stressant et impersonnel que beaucoup associent encore aux soins dentaires."
      },
      approach: {
        title: "L'approche du Dr. Saoui",
        desc: "En tant que dentiste, je crois en des soins dentaires complets et de qualité, centrés sur le patient. Je m'efforce de créer une expérience positive et confortable pour chaque invité tout en répondant à ses besoins et attentes dentaires. L'utilisation des dernières technologies ne concerne pas seulement l'efficacité ; il s'agit d'améliorer l'expérience globale du patient."
      },
      education: {
        title: "Éducation & Certifications",
        edu_label: "Formation",
        edu_list: [
          "Docteur en Chirurgie Dentaire (DDS) des meilleures institutions marocaines",
          "Formation avancée en implantologie et chirurgie orale",
          "Spécialisation en dentisterie numérique et technologies CAD/CAM"
        ],
        assoc_label: "Associations",
        assoc_list: [
          "Ordre National des Médecins Dentistes du Maroc",
          "Congrès International des Implantologues Oraux (ICOI)",
          "Association de Dentisterie Numérique Avancée"
        ],
        cert_label: "Certifications",
        cert_list: [
          "Praticien certifié Invisalign",
          "Certification avancée en dentisterie laser",
          "Spécialiste du robot implantaire Yomi",
          "Expert en reconstruction esthétique"
        ]
      },
      personal: {
        title_light: "En dehors",
        title_bold: "de la Clinique",
        desc: "Pendant son temps libre, le Dr Saoui est un passionné de sport. Il aime se mettre au défi à travers le basket-ball, le tennis et l'exploration des paysages magnifiques autour de Tanger. Il accorde une importance primordiale au temps passé en famille et pense qu'une vie équilibrée est essentielle pour prodiguer les meilleurs soins à ses patients.",
        fun_title: "Bon à savoir :",
        fun_list: [
          "Grand voyageur et passionné de culture",
          "Passionné par la technologie médicale et l'innovation",
          "Bénévole régulier dans les initiatives locales de santé communautaire",
          "Passe-temps favori : Explorer les sites historiques de Tanger en famille"
        ]
      },
      areas_of_focus: {
        title: "domaines d'expertise",
        services: [
          { title: "dentisterie esthétique", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/cosmetic-dentistry-icon.png" },
          { title: "implants dentaires", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/implant-icon.png" },
          { title: "reconstruction complète", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/full-mouth-reconstruction-icon.png" },
          { title: "invisalign", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/invisalign-icon.png" },
          { title: "frénectomies infantiles", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/infant-frenectomy-icon.png" },
          { title: "couronnes le jour même", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/crown-icon.png" },
          { title: "traitement des troubles de l'atm", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/tmd-icon.png" }
        ]
      }
    },
    hero: {
      tag: "Clinique Dentaire APEX - Tanger",
      title_part1: "Redessinez Votre Sourire",
      title_part2: "à Tanger",
      desc: "L'excellence des soins dentaires par le Dr. Reda Saoui. Technologie de pointe à Tanger.",
      cta_schedule: "Prendre RDV",
      cta_call: "Appelez-nous",
      discover: "Découvrir"
    },
    know_doctor: {
      title_light: "Rencontrez votre",
      title_bold: "docteur",
      desc: "Rencontrez le Dr Reda Saoui, chirurgien-dentiste à Tanger, dont la pratique s’inscrit dans une vision moderne et exigeante de la dentisterie. Animé par la précision, l’esthétique et le respect du patient, il accorde une importance particulière à l’écoute, à la compréhension et à la qualité de chaque soin.",
      list: [
        "Une expertise approfondie en dentisterie esthétique et implantaire",
        "Une approche sur mesure, fondée sur la confiance, la transparence et la bienveillance",
        "L’utilisation de technologies de pointe au service de soins précis, confortables et durables"
      ],
      cta: "En savoir plus sur le Dr Saoui"
    },
    details: {
      title_light: "Tout est dans",
      title_bold: "les détails",
      desc: "Notre clinique dentaire à Tanger redéfinit les standards des soins de première classe, en plaçant l’exigence, le confort et l’humain au cœur de chaque détail.",
      list: [
        "Des professionnels bienveillants, à l’écoute et sans jugement, accueillant des patients de tous âges",
        "Une expertise pointue en dentisterie esthétique et restauratrice, dédiée à des transformations naturelles et durables",
        "L’intégration des technologies les plus avancées pour un confort optimal et des résultats précis"
      ]
    },
    insurance: {
      title: "nous acceptons tous types d'assurances",
      desc: "vous n'avez pas d'assurance ? ne vous inquiéez pas — nous avons ce qu'il vous faut. nos tarifs abordables garantissent que des soins dentaires de qualité sont accessibles à tous, avec ou sans assurance."
    },
    implants: {
      title_light: "excellence en",
      title_bold: "implantologie dentaire",
      desc: "Grâce aux technologies de chirurgie implantaire guidée, le Dr. SAOUI et son équipe vous assure une procédure précise et confortable à 100% pour remplacer vos dents perdues.",
      cta: "explorer les soins chirurgicaux"
    },
    our_expertise: "notre expertise",
    tech_section: {
      title_main: "nos technologies",
      title_sub: "de pointe chez APEX",
      cta: "découvrir notre expertise",
      items: [
        {
          title: "dentisterie numérique 3D + impression 3D",
          desc: "Une précision inégalée pour vos restaurations, réalisée en un temps record grâce à nos flux numériques intégrés."
        },
        {
          title: "chirurgie guidée par ordinateur",
          desc: "La sécurité et la précision absolue pour vos implants, planifiées virtuellement pour des résultats optimaux."
        },
        {
          title: "imagerie radiographique avancée",
          desc: "Des diagnostics haute définition avec une exposition minimale, pour une compréhension totale de votre santé bucco-dentaire."
        }
      ]
    },
    smile_heading: {
      light: "votre",
      bold: "beau sourire"
    },
    smile_rows: {
      routine: {
        bold: "soins",
        light: "dentaires de routine",
        desc: "Prendre soin de votre sourire n’a jamais été aussi simple — ni aussi agréable. Nous accompagnons toute votre famille dans le maintien d’une santé dentaire durable, avec douceur, rigueur et attention.",
        cta: "explorer la dentisterie générale"
      },
      restorative: {
        bold: "procédures",
        light: "restauratrices",
        desc: "Grâce à une formation avancée et une expertise approfondie en reconstruction bucco-dentaire, nos praticiens proposent des soins de haut niveau destinés à restaurer des dents endommagées ou remplacer des dents manquantes, avec précision, garantie et respect de l’esthétique naturelle.",
        cta: "explorer nos procédures restauratrices"
      },
      cosmetic: {
        bold: "transformations",
        light: "esthétiques",
        desc: "Découvrez ce qui est possible grâce aux facettes, au blanchiment FLAESH ou aux aligneurs transparents. Nous avons accompagné et transformé des centaines de sourires. Chaque traitement est pensé sur mesure.",
        cta: "explorer la dentisterie esthétique"
      }
    },
    contact_team: {
      title_light: "notre équipe",
      title_bold: "contactez",
      get_directions: "obtenir l'itinéraire",
      placeholders: {
        name: "prénom *",
        lastName: "nom *",
        service: "choisissez un service *",
        specify: "veuillez préciser *",
        submit: "envoyer le message"
      },
      whatsapp_msg: "Bonjour Dr. Saoui, je m'appelle {name} {lastName}. Je souhaiterais avoir plus d'informations ou réserver une séance pour le service suivant : {service}."
    },
    intro: {
      tag: "L'expertise APEX",
      title: "Dr. Reda Saoui - Dentiste Tanger",
      years: "Années d'Expérience",
      satisfaction: "Satisfaction Patient",
      smiles: "Sourires Parfaits",
      p1: "Votre santé et votre esthétique sont notre mission. En tant que dentiste de référence à Tanger, le Dr. Reda Saoui combine vision artistique et expertise clinique de pointe au sein de la clinique APEX.",
      p2: "Notre clinique est conçue pour offrir un environnement serein et luxueux, garantissant que chaque visite soit confortable et sans stress.",
      p3: "Grâce à la technologie CAD/CAM et aux solutions laser sans douleur, nous redéfinissons l'expérience dentaire au Maroc."
    },
    smile: {
      title_light: "vous aider à",
      title_bold: "sourire à nouveau",
      desc1: "À la clinique du Dr. Reda Saoui, <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>votre dentiste à Tanger</a>, nous comprenons la frustration de vivre avec des problèmes dentaires. Mauvaise haleine, gencives qui saignent, dents ébréchées ou cassées, sourires croches – nous avons tout vu, et nous sommes là pour vous aider.",
      desc2: "Notre équipe dévouée est prête à s'attaquer de front à ces problèmes, en proposant des solutions de haute technologie qui restaurent votre confiance et votre bien-être.",
      cta: "Appelez-nous ou envoyez-nous un message au",
      cta_end: "et accueillez un sourire plus éclatant et plus sain."
    },
    faq: {
      title_bold: "Vous avez une question ?",
      title_light: "On vous répond.",
      q1: {
        title: "Puis-je savoir le prix des traitement ?",
        desc: "Pour avoir un devis détaillé de tout les traitements nous vous invitons à nous visiter pour faire une consultation , qui comprend un examen clinique détaillé et un examen radiologique , ces dernier vont nous aider à poser le bon diagnostic et donc le bon plan de traitement , a la fin notre rendez vous , notre secrétaire d'accueil va vous donner votre dossier qui comprend la radio et le devis personnalisé"
      },
      q2: {
        title: "Est ce que le détartrage fragilise les dents ?",
        desc: "Le détartrage dentaire est généralement considéré comme sûr et bénéfique pour la santé bucco-dentaire. En fait, il est recommandé de subir un détartrage régulier chez le dentiste pour prévenir les problèmes dentaires tels que la gingivite (inflammation des gencives) et la maladie parodontale (infection des tissus de soutien des dents). Le détartrage peut sembler agressif, car il implique l'utilisation d'instruments spéciaux, tels qu'un grattoir ou une sonde ultrasonique, pour enlever le tartre. Cependant, lorsqu’il est réalisé par un professionnel qualifié, le détartrage est généralement sûr et ne fragilise pas les dents. Au contraire, il permet de maintenir une bonne santé bucco-dentaire en éliminant les accumulations indésirables. Il est possible que certaines personnes ressentent une légère sensibilité dentaire après un détartrage, mais cela est généralement temporaire et disparaît rapidement."
      },
      q3: {
        title: "Est ce que le blanchiment dentaire fait mal ?",
        desc: "Le blanchiment dentaire peut parfois entraîner une sensibilité dentaire temporaire, mais il ne devrait pas causer de douleur intense. Certaines personnes peuvent ressentir une légère gêne ou sensibilité pendant ou après le traitement de blanchiment. Cela peut se manifester par une sensibilité accrue aux aliments chauds ou froids, aux boissons sucrées ou acides, ou même à l'air froid. La sensibilité dentaire après un blanchiment est généralement de courte durée et disparaît souvent dans les jours qui suivent le traitement. Il est recommandé d'utiliser un dentifrice pour dents sensibles et d'éviter les aliments et les boissons chauds ou froids pendant un certain temps."
      },
      q4: {
        title: "Est ce qu’on peut utiliser le bain de bouche tout les jours ?",
        desc: "Les bains de bouche ne sont pas conçus pour être utilisés quotidiennement. Certains bains de bouche contiennent des agents actifs plus puissants et peuvent être recommandés pour une utilisation à court terme, par exemple pour traiter une infection de la bouche ou des gencives. Une utilisation excessive de ces produits peut perturber l'équilibre naturel de la bouche et entraîner des effets indésirables, tels que des taches sur les dents ou une irritation des muqueuses."
      },
      q5: {
        title: "Quelle est la durée d'un traitement orthodontique ?",
        desc: "La durée d'un traitement orthodontique peut varier considérablement en fonction de plusieurs facteurs, tels que la complexité des problèmes orthodontiques, la méthode de traitement utilisée, la coopération du patient et la réponse individuelle aux traitements. Pour les cas orthodontiques mineurs, tels que des corrections mineures de l'alignement dentaire, un traitement peut durer de 6 à 12 mois. Cependant, pour des problèmes plus complexes, tels que des malocclusions sévères ou des mâchoires désalignées, le traitement peut prendre de 1 à 3 ans, voire plus dans certains cas."
      },
      q6: {
        title: "Quelle est la durée de traitement par facettes dentaires ?",
        desc: "La durée d'un traitement par facettes dentaires peut varier en fonction de plusieurs facteurs, tels que le nombre de dents à traiter, l'état initial des dents, les techniques utilisées et les objectifs esthétiques spécifiques du patient. En général, le processus de pose de facettes dentaires peut être divisé en plusieurs étapes, qui peuvent s'étaler sur plusieurs semaines."
      }
    },
    tech: {
      anxiety: "souffrez-vous d'anxiété dentaire ?",
      title: "découvrez notre solution Solea Laser",
      desc: "Au sein de notre <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>cabinet dentaire à Tanger</a>, nous traitons l'anxiété dentaire grâce au Solea Laser innovant, une solution sans douleur qui élimine le besoin de fraises, d'aiguilles, de scalpels ou de bruits forts pendant les traitements. Avec cette technologie, vous pouvez bénéficier de soins dentaires sans stress ni inconfort !"
    },
    schedule_banner: {
      title_bold: "planifiez",
      title_light: "votre première visite",
      btn: "Prendre Rendez-vous"
    },
    more_problems: {
      title_bold: "plus de",
      title_light: "problèmes dentaires",
      list: [
        { label: "Anxiété Dentaire", link: "#" },
        { label: "Réparation de Prothèses", link: "#" },
        { label: "Maladie des Gencives", link: "#" },
        { label: "Dents Manquantes", link: "#" },
        { label: "Sensibilité Dentaire", link: "#" },
        { label: "Dents Tachées", link: "#" }
      ]
    },
    problems: {
      title_bold: "problèmes",
      title_light: "traités",
      all: "tous les problèmes",
      list: [
        "mauvaise haleine / halitose",
        "frénectomies infantiles",
        "maladies des gencives",
        "grincement des dents",
        "gencives qui saignent",
        "apnée du sommeil et ronflement",
        "dents manquantes",
        "réparation de dents cassées",
        "anxiété dentaire",
        "sensibilité",
        "dents croches",
        "réparation de prothèses",
        "dents tachées"
      ]
    },
    testimonials: {
      kind: "témoignages",
      from: "de nos patients",
      reviews: "100+ Avis 5-Étoiles",
      list: [
        {
          text: "Le service est impeccable, le dentiste est très professionnel et compétent, il m'a très bien expliqué mon problème et m'a fait de superbes bridges pour mes dents.",
          author: "Nouhaila Salmoun"
        },
        {
          text: "Un très bon dentiste avec un excellent service client. Je recommande d'essayer la clinique, vous ne le regretterez pas.",
          author: "Ayoub Yaagoubi"
        },
        {
          text: "Je recommande vivement pour leur professionnalisme, leurs soins doux et leurs traitements modernes. Ils rendent chaque visite confortable.",
          author: "Mounib Tellal"
        },
        {
          text: "Le Docteur Saoui est un dentiste professionnel et compétent ! J'ai eu un plombage et une carie soignés. Le docteur a examiné ma santé, a expliqué le travail effectué et était très attentionné. Les assistants étaient également gentils et serviables. L'emplacement est facile à trouver, près du commissariat, et très propre and ordonné. Hautement recommandé !",
          author: "Theo traveler"
        }
      ]
    },
    contact: {
      our: "notre",
      office: "clinique à Tanger",
      directions: "Obtenir l'itinéraire",
      hours: "Lun-Ven: 9h30-18h00 | Sam: 9h30-15h00",
      monday: "Lundi : 09h00 - 18h00",
      tuesday: "Mardi : 09h00 - 18h00",
      wednesday: "Mercredi : 09h00 - 18h00",
      thursday: "Jeudi : 09h00 - 18h00",
      friday: "Vendredi : Fermé",
      call_text: "Appel / SMS",
      whatsapp: "WhatsApp"
    },
    expertise: {
      facettes: "facettes",
      aligneurs: "aligneurs",
      couronnes: "couronnes",
      blanchimentFlash: "blanchiment fläsh",
      implant: "implant",
      pedodontie: "pédodontie",
      traitementsCanalaires: "root canal treatments",
      parodontie: "parodontie",
      chirurgieOrale: "chirurgie orale"
    },
    blog_page: {
      hero: {
        tag: "Blog APEX",
        title_light: "Conseils &",
        title_bold: "Expertise",
        desc: "Restez informé des dernières technologies dentaires, des conseils de santé bucco-dentaire et des actualités de la clinique du Dr Reda Saoui."
      },
      read_more: "Lire la Suite",
      back_to_blog: "Retour au Blog"
    },
    mobile_bar: {
      call: "Appeler",
      contact: "Contactez-nous"
    }
  }
};

export const PROBLEMS: Problem[] = [
  { id: '1', title: 'bad breath / halitosis', image: '/photo6.webp', link: '#' },
  { id: '2', title: 'bleeding gums', image: '/hero-image.webp', link: '#' },
  { id: '3', title: 'chipped/cracked tooth repair', image: '/unnamed.webp', link: '#' },
  { id: '4', title: 'crooked teeth', image: '/photo5.webp', link: '#' },
  { id: '5', title: 'infant frenectomies', image: '/carousel2.webp', link: '#' },
  { id: '6', title: 'sleep apnea & snoring', image: '/DSCF7556.webp', link: '#' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Le service est impeccable, le dentiste est très professionnel and compétent, il m'a très bien expliqué mon problème and m'a fait de superbes bridges pour mes dents.",
    author: "Nouhaila Salmoun"
  },
  {
    text: "Un très bon dentiste avec un excellent service client. Je recommande d'essayer la clinique, vous ne le regretterez pas.",
    author: "Ayoub Yaagoubi"
  },
  {
    text: "Je recommande vivement pour leur professionnalisme, leurs soins doux and leurs traitements modernes. Ils rendent chaque visite confortable.",
    author: "Mounib Tellal"
  },
  {
    text: "Le Docteur Saoui est un dentiste professionnel and compétent ! J'ai eu un plombage and une carie soignés. Le docteur a examiné ma santé, a expliqué le travail effectué and était très attentionné. Les assistants étaient également gentils and serviables. L'emplacement est facile à trouver, près du commissariat, and très propre and ordonné. Hautement recommandé !",
    author: "Theo traveler"
  }
];
