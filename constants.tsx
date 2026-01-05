
import { Problem, Testimonial } from './types.ts';

export const PHONE = "0666-061666";
export const ADDRESS = "Numero 8, Résidence Zainab, Place des Nations, Av. Abou Bakr Errazi\n\nTangier 90010";

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
    about_page: {
      hero: {
        tag: "Meet Dr. Reda Saoui",
        title_light: "Dedicated to",
        title_bold: "Your Smile",
        desc: "Learn about the founder and lead dentist of our Tangier practice, his journey, and his commitment to excellence in dental care."
      },
      story: {
        title_light: "Founding",
        title_bold: "APEX",
        p1: "Dr. Reda Saoui founded APEX in Tangier with a vision to revolutionize the dental experience. His journey began with a passion for both medicine and technology, leading him to create a clinic that feels like a modern sanctuary rather than a traditional dental office.",
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
      title_light: "know your",
      title_bold: "doctor",
      desc: "Meet Dr. Reda Saoui, a leading dentist in Tanger dedicated to transforming smiles with precision and care.",
      list: [
        "Years of expertise in cosmetic and restorative dentistry",
        "Committed to providing personalized, compassionate care",
        "Utilizing cutting-edge technology for optimal results"
      ],
      cta: "learn more about dr. saoui"
    },
    details: {
      title_light: "it's all in",
      title_bold: "the details",
      desc: "Our Tanger dentist office is setting the new standard for first-class care.",
      list: [
        "Friendly faces who never judge and welcome all ages",
        "Expertise in transformative cosmetic and restorative procedures",
        "The latest technology for comfort and results"
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
      desc1: "At Dr. Reda Saoui's clinic, we understand the frustration of living with dental problems. Bad breath, bleeding gums, chipped or cracked teeth, crooked smiles – we’ve seen it all, and we’re here to help.",
      desc2: "Our dedicated team is ready to tackle these issues head-on, providing high-tech solutions that restore your confidence and well-being.",
      cta: "Call or text us at",
      cta_end: "and welcome a brighter, healthier smile."
    },
    faq: {
      title_bold: "questions about",
      title_light: "treating dental problems",
      q1: {
        title: "What makes Dr. Saoui different?",
        desc: "Our Tanger dentists combine modern technology with personalized care. From same-day crowns and laser fillings to advanced dental implants, we make every visit efficient."
      },
      q2: {
        title: "How do I know if I have a dental problem that needs treatment?",
        desc: "If you’re experiencing any oral discomfort, pain, or unusual symptoms, schedule an appointment with us. Our team will assess your condition."
      },
      q3: {
        title: "What should I do in a dental emergency?",
        desc: "In a dental emergency, follow these steps:",
        list: [
          "Stay calm and assess the situation.",
          "For bleeding, rinse gently with water and apply pressure.",
          "Manage pain with over-the-counter pain relievers."
        ],
        footer: "Call us immediately for prompt assistance."
      }
    },
    tech: {
      anxiety: "suffer from dental anxiety?",
      title: "discover our Solea Laser solution",
      desc: "We address dental anxiety with the innovative Solea Laser, a pain-free solution that eliminates the need for drills, needles, scalpels, or loud noises during treatments. With this technology, you can experience dental care without stress or discomfort!"
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
    about_page: {
      hero: {
        tag: "Rencontrez le Dr. Reda Saoui",
        title_light: "Dédié à",
        title_bold: "Votre Sourire",
        desc: "Découvrez le fondateur et dentiste principal de notre cabinet à Tanger, son parcours et son engagement envers l'excellence des soins dentaires."
      },
      story: {
        title_light: "Fondation de",
        title_bold: "APEX",
        p1: "Le Dr Reda Saoui a fondé APEX à Tanger avec la vision de révolutionner l'expérience dentaire. Son parcours a commencé par une passion pour la médecine et la technologie, ce qui l'a amené à créer une clinique qui ressemble plus à un sanctuaire moderne qu'à un cabinet dentaire traditionnel.",
        p2: "Notre objectif était de créer quelque chose de nouveau et d'innovant — un espace où les patients se sentent accueillis comme des amis de longue date, et où nous avons l'autonomie d'investir continuellement dans les dernières technologies pour fournir des soins exceptionnels."
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
        title_bold: "du Cabinet",
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
      tag: "Cabinet Dentaire APEX - Tanger",
      title_part1: "Redessinez Votre Sourire",
      title_part2: "à Tanger",
      desc: "L'excellence des soins dentaires par le Dr. Reda Saoui. Technologie de pointe à Tanger.",
      cta_schedule: "Prendre RDV",
      cta_call: "Appelez-nous",
      discover: "Découvrir"
    },
    know_doctor: {
      title_light: "découvrez votre",
      title_bold: "docteur",
      desc: "Rencontrez le Dr Reda Saoui, un dentiste de premier plan à Tanger dédié à la transformation des sourires avec précision et soin.",
      list: [
        "Des années d'expertise en dentisterie esthétique et restauratrice",
        "Engagé à fournir des soins personnalisés et compatissants",
        "Utilisation d'une technologie de pointe pour des résultats optimaux"
      ],
      cta: "en savoir plus sur le dr. saoui"
    },
    details: {
      title_light: "tout est dans",
      title_bold: "les détails",
      desc: "Notre cabinet dentaire à Tanger établit la nouvelle norme pour des soins de première classe.",
      list: [
        "Des visages amicaux qui ne jugent jamais et accueillent tous les âges",
        "Expertise dans les procédures esthétiques et restauratrices transformatrices",
        "La dernière technologie pour le confort et les résultats"
      ]
    },
    insurance: {
      title: "nous acceptons tous types d'assurances",
      desc: "vous n'avez pas d'assurance ? ne vous inquiéez pas — nous avons ce qu'il vous faut. nos tarifs abordables garantissent que des soins dentaires de qualité sont accessibles à tous, avec ou sans assurance."
    },
    implants: {
      title_light: "excellence en",
      title_bold: "implants complets",
      desc: "Grâce à la technologie avancée Yomi, le Dr Saoui assure une procédure précise et confortable pour remplacer vos dents naturelles.",
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
        desc: "Propre et sain n'a jamais été aussi facile — ou aussi agréable. Nous sommes le partenaire de toute votre famille pour la santé dentaire.",
        cta: "explorer la dentisterie générale"
      },
      restorative: {
        bold: "procédures",
        light: "restauratrices",
        desc: "Avec une formation avancée et un accent sur la reconstruction complète de la bouche, nos docteurs fournissent des soins de premier ordre pour ceux qui ont des dents endommagées ou manquantes.",
        cta: "explorer la dentisterie chirurgicale"
      },
      cosmetic: {
        bold: "transformations",
        light: "esthétiques",
        desc: "Découvrez ce qui est possible grâce aux facettes, au blanchiment GLO ou aux aligneurs transparents. Nous sommes un fournisseur certifié Invisalign et avons conçu des milliers de sourires confiants.",
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
      p1: "Votre santé et votre esthétique sont notre mission. En tant que dentiste de référence à Tanger, le Dr. Reda Saoui combine vision artistique et expertise clinique de pointe au sein du cabinet APEX.",
      p2: "Notre cabinet est conçu pour offrir un environnement serein et luxueux, garantissant que chaque visite soit confortable et sans stress.",
      p3: "Grâce à la technologie CAD/CAM et aux solutions laser sans douleur, nous redéfinissons l'expérience dentaire au Maroc."
    },
    smile: {
      title_light: "vous aider à",
      title_bold: "sourire à nouveau",
      desc1: "Au cabinet du Dr. Reda Saoui, nous comprenons la frustration de vivre avec des problèmes dentaires. Mauvaise haleine, gencives qui saignent, dents ébréchées ou cassées, sourires croches – nous avons tout vu, et nous sommes là pour vous aider.",
      desc2: "Notre équipe dévouée est prête à s'attaquer de front à ces problèmes, en proposant des solutions de haute technologie qui restaurent votre confiance et votre bien-être.",
      cta: "Appelez-nous ou envoyez-nous un message au",
      cta_end: "et accueillez un sourire plus éclatant et plus sain."
    },
    faq: {
      title_bold: "questions sur",
      title_light: "le traitement des problèmes dentaires",
      q1: {
        title: "Qu'est-ce qui rend le Dr Saoui différent ?",
        desc: "Nos dentistes à Tanger combinent technologie moderne et soins personnalisés. Des couronnes le jour même aux plombages laser, nous optimisons chaque visite."
      },
      q2: {
        title: "How do I know if I have a dental problem that needs treatment?",
        desc: "Si vous ressentez une gêne buccale, une douleur ou des symptômes inhabituels, prenez rendez-vous. Notre équipe évaluera votre état."
      },
      q3: {
        title: "Que faire en cas d'urgence ?",
        desc: "En cas d'urgence dentaire, suivez ces étapes :",
        list: [
          "Restez calme et évaluez la situation.",
          "Pour les saignements, rincez doucement.",
          "Gérez la douleur avec des analgésiques."
        ],
        footer: "Appelez-nous immédiatement."
      }
    },
    tech: {
      anxiety: "souffrez-vous d'anxiété dentaire ?",
      title: "découvrez notre solution Solea Laser",
      desc: "Nous traitons l'anxiété dentaire avec le Solea Laser innovant, une solution sans douleur qui élimine le besoin de fraises, d'aiguilles, de scalpels ou de bruits forts pendant les traitements. Avec cette technologie, vous pouvez bénéficier de soins dentaires sans stress ni inconfort !"
    },
    schedule_banner: {
      title_bold: "planifiez",
      title_light: "votre première visite",
      btn: "Prendre RDV"
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
      office: "cabinet à Tanger",
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
        desc: "Restez informé des dernières technologies dentaires, des conseils de santé bucco-dentaire et des actualités du cabinet du Dr Reda Saoui."
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
  { id: '6', title: 'sleep apnea & snoring', image: '/DSCF7556.jpg', link: '#' },
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
