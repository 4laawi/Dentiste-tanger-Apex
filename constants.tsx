
import { Problem, Testimonial } from './types.ts';

export const PHONE = "0666-061666";
export const ADDRESS = "Place des Nations, Avenue Abou Bakr Errazi, Résidence Zainab – rez-de-chaussée, cabinet n°8, 90000 Tanger, Maroc";

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      contact_label: "Contact",
      about: {
        label: "About",
        sub: ["Meet the doctor", "English Speaking Dentist", "New patients", "Payment options", "Technology", "Blog"]
      },
      services: {
        label: "Services",
        sub: {
          general: ["Bridges", "Crowns", "Dentures", "Fillings", "Cleanings", "Emergency"],
          cosmetic: ["Invisalign", "Veneers", "Whitening", "Botox"],
          surgical: ["Implants", "Root canal", "Extractions"]
        }
      },
      problems: "Problems we treat",
      urgence: "Emergencies",
      schedule: "Schedule now",
      call: PHONE
    },
    seo: {
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
        p2: "Who am I? A Tangier native since the age of eight, I have always been driven by a deep curiosity for medicine and new technologies. From the age of ten, I spent hours on the internet reading, observing, watching documentaries, and learning tirelessly, with that almost childlike desire to discover something new every day and share it the next day on the playground.",
        p3: "Very early on, this thirst for knowledge turned into a real obsession: to understand, analyze, explain. A healthy obsession, turned towards mastery and precision. It is with this state of mind that I joined the Faculty of Public Dental Medicine in Rabat, and it is this same intellectual requirement that guides me today in my daily practice.",
        p4: "Practicing the art of dentistry is for me a pleasure as much as a responsibility. I like to take the time to explain, reassure and answer the questions that concern my patients, because I am convinced that quality care always starts with understanding and trust. It is this vision that naturally led me to create a clinic designed as a true modern sanctuary, a soothing and modern space, far from the stressful and impersonal universe that many still associate with dental care."
      },
      approach: {
        title: "Dr. Saoui's Approach",
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
        title: "Areas of Focus",
        services: [
          { title: "Cosmetic Dentistry", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/cosmetic-dentistry-icon.png" },
          { title: "Dental Implants", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/implant-icon.png" },
          { title: "Full Mouth Reconstruction", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/full-mouth-reconstruction-icon.png" },
          { title: "Invisalign", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/invisalign-icon.png" },
          { title: "Infant Frenectomies", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/infant-frenectomy-icon.png" },
          { title: "Same-Day Crowns", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/crown-icon.png" },
          { title: "Treating TMD Disorders", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/tmd-icon.png" }
        ]
      }
    },
    hero: {
      tag: "APEX Dental Clinic - Tangier",
      title_part1: "Redefining Your Smile",
      title_part2: "in Tangier",
      desc: "Experience world-class dental care at APEX Dental Clinic, your premier center for high-tech dentistry in Tangier. Under the expert guidance of Dr. Reda Saoui, we combine innovation, artistic precision, and patient-centered care to transform your oral health and confidence.",
      cta_schedule: "Book Now",
      cta_call: "Call Us",
      discover: "Explore"
    },
    why_choose: {
      title_light: "Why Choose Our",
      title_bold: "Clinic in Tangier?",
      p1: "At APEX Dental Clinic, we go beyond traditional dentistry. As a leading dental center in Tangier, we provide a multidisciplinary approach combining surgical expertise and aesthetic vision. Our clinic is equipped with the latest CAD/CAM technologies and 3D imaging to ensure every treatment is precise, efficient, and tailored to your unique anatomy.",
      p2: "Whether you are looking for a routine cleaning, complex dental implants, or a complete smile makeover with Invisalign and veneers, Dr. Reda Saoui and his team are dedicated to providing a comfortable, pain-free experience. We prioritize patient education, ensuring you understand every step of your journey toward a perfect smile in our modern Tangier facility.",
      cta: "Discover our approach"
    },
    know_doctor: {
      title_light: "Meet Your",
      title_bold: "Doctor",
      desc: "Meet Dr. Reda Saoui, a dental surgeon in Tangier, whose practice is part of a modern and demanding vision of dentistry. Driven by precision, aesthetics and respect for the patient, he attaches particular importance to listening, understanding and the quality of each care.",
      list: [
        "In-depth expertise in aesthetic and implant dentistry",
        "A tailor-made approach, based on trust, transparency and benevolence",
        "The use of cutting-edge technology for precise, comfortable and durable care"
      ],
      cta: "Learn more about Dr. Saoui"
    },
    details: {
      title_light: "It's All In",
      title_bold: "The Details",
      desc: "Our dental clinic in Tangier redefines the standards of first-class care, placing requirements, comfort and the human heart at the core of every detail.",
      list: [
        "Caring professionals, listening and without judgment, welcoming patients of all ages",
        "Sharp expertise in aesthetic and restorative dentistry, dedicated to natural and sustainable transformations",
        "Integration of the most advanced technologies for optimal comfort and precise results"
      ]
    },
    insurance: {
      title: "We Accept All Types of Insurances",
      desc: "Don't have insurance? Don't worry — we've got you covered. Our affordable pricing ensures quality dental care is accessible to everyone, with or without insurance."
    },
    implants: {
      title_light: "Excellence In",
      title_bold: "Full-Arch Implants",
      desc: "Using advanced Yomi technology, Dr. Saoui ensures a precise, comfortable procedure to replace your natural teeth.",
      cta: "Explore surgical care"
    },
    our_expertise: "Our Expertise",
    tech_section: {
      title_main: "Our Technologies",
      title_sub: "At the Forefront of APEX",
      cta: "Discover our expertise",
      items: [
        {
          title: "3D Digital Dentistry + 3D Printing",
          desc: "Unmatched precision for your restorations, completed in record time thanks to our integrated digital workflows."
        },
        {
          title: "Computer-Guided Surgery",
          desc: "Absolute safety and precision for your implants, planned virtually for optimal results."
        },
        {
          title: "Advanced Radiographic Imaging",
          desc: "High-definition diagnostics with minimal exposure, for a complete understanding of your oral health."
        }
      ]
    },
    smile_heading: {
      light: "Your",
      bold: "Beautiful Smile"
    },
    smile_rows: {
      routine: {
        bold: "Routine",
        light: "Dental Care",
        desc: "Clean and healthy has never been this easy — or this enjoyable. We're your entire family's partner in dental health.",
        cta: "Explore general dentistry"
      },
      restorative: {
        bold: "Restorative",
        light: "Procedures",
        desc: "With advanced training and a focus on full-mouth reconstruction, our doctors provide premier care for those dealing with damaged or missing teeth.",
        cta: "Explore surgical dentistry"
      },
      cosmetic: {
        bold: "Cosmetic",
        light: "Transformations",
        desc: "See what's possible through veneers, GLO whitening, or clear aligners. We're a certified Invisalign provider and have designed thousands of confident smiles.",
        cta: "Explore cosmetic dentistry"
      }
    },
    contact_team: {
      title_light: "Our team",
      title_bold: "Contact",
      desc: "Our dedicated team in Tangier is here to answer your questions. Whether you need a simple check-up or complex dental surgery, we are located centrally for your convenience at Place des Nations.",
      get_directions: "Get directions",
      placeholders: {
        name: "Name *",
        lastName: "Last Name *",
        service: "Choose a Service *",
        specify: "Please Specify *",
        submit: "Submit message"
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
      title_light: "Helping you",
      title_bold: "Smile with Confidence",
      desc1: "At Dr. Reda Saoui's clinic, <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>your expert dentist in Tangier</a>, we specialize in transforming smiles and lives. Whether you are dealing with complex orthodontic issues, missing teeth requiring implants, or aesthetic concerns like stained or chipped teeth, we provide world-class solutions.",
      desc2: "Our approach integrates <b>Orthodontics</b> (Invisalign), <b>Implantology</b>, and <b>Cosmetic Dentistry</b> (Veneers) under one roof. We use digital smile design to plan your treatment, ensuring predictable, stunning results that harmonize with your face and personality.",
      cta: "Schedule your consultation at",
      cta_end: "and start your journey to a perfect smile."
    },
    faq: {
      title_bold: "Frequently Asked Questions",
      title_light: "We Answer",
      q1: {
        title: "How much do dental implants and veneers cost in Tangier?",
        desc: "To provide an accurate estimate for treatments like dental implants or veneers, we invite you for a comprehensive consultation. This includes a clinical exam and necessary X-rays (3D scan if needed) to establish a precise diagnosis. We then provide a personalized detailed quote tailored to your specific needs."
      },
      q2: {
        title: "Is teeth scaling safe for my enamel?",
        desc: "Yes, professional teeth scaling is essential for oral health and is safe when performed by experts. It removes tartar buildup that brushing misses, preventing gum disease (gingivitis) and periodontitis. Our gentle ultrasonic technology ensures your enamel remains unharmed while effectively cleaning your teeth."
      },
      q3: {
        title: "Does professional teeth whitening hurt?",
        desc: "Professional whitening with our Fläsh system is designed to minimize sensitivity. While some patients may experience temporary sensitivity to hot or cold drinks, this usually subsides within 24-48 hours. We use desensitizing agents to ensure your comfort during the procedure."
      },
      q4: {
        title: "Can I use mouthwash every day?",
        desc: "It depends on the type of mouthwash. Therapeutic mouthwashes with chlorhexidine should only be used as prescribed for short durations to treat infections. Daily cosmetic mouthwashes are safe but should not replace brushing and flossing."
      },
      q5: {
        title: "How long does orthodontic treatment take?",
        desc: "Orthodontic treatment duration varies. Minor corrections with Invisalign can take 6-12 months. More complex cases involving bite alignment might take 18-24 months. During your consultation, Dr. Saoui will provide a realistic timeline based on your digital scan."
      },
      q6: {
        title: "How long does the dental veneers process take?",
        desc: "The veneer process typically takes 2-3 visits over 2-3 weeks. First, we design your smile and prepare the teeth. Then, we place temporary veneers while your custom porcelain veneers are crafted. Finally, we bond your permanent veneers for a stunning new smile."
      }
    },
    tech: {
      anxiety: "Suffer from dental anxiety?",
      title: "Discover our Solea Laser solution",
      desc: "In our <a href='/en' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>dental practice in Tangier</a>, we address dental anxiety with the innovative Solea Laser, a pain-free solution that eliminates the need for drills, needles, scalpels, or loud noises during treatments. With this technology, you can experience dental care without stress or discomfort!"
    },
    schedule_banner: {
      title_bold: "Schedule",
      title_light: "Your first visit",
      btn: "Schedule now"
    },
    more_problems: {
      title_bold: "More",
      title_light: "Dental problems",
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
      title_bold: "Problems",
      title_light: "We treat",
      all: "All problems",
      list: [
        "Bad breath / Halitosis",
        "Infant frenectomies",
        "Gum disease",
        "Teeth grinding",
        "Bleeding gums",
        "Sleep apnea & snoring",
        "Missing teeth",
        "Chipped / Cracked tooth repair",
        "Dental anxiety",
        "Sensitivity",
        "Crooked teeth",
        "Denture repair",
        "Stained teeth"
      ]
    },
    testimonials: {
      kind: "Kind words",
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
      our: "Our",
      office: "Tangier Office",
      directions: "Get Directions",
      hours: "Mon-Fri: 9:30AM-6:00PM | Sat: 9:30AM-3:00PM",
      emergency_24h: "24/7 Open for Emergencies",
      monday: "Monday: 9AM - 6PM",
      tuesday: "Tuesday: 9AM - 6PM",
      wednesday: "Wednesday: 9AM - 6PM",
      thursday: "Thursday: 9AM - 6PM",
      friday: "Friday: Closed",
      call_text: "Call / Text",
      whatsapp: "WhatsApp"
    },
    expertise: {
      facettes: "Veneers",
      aligneurs: "Aligners",
      couronnes: "Crowns",
      blanchimentFlash: "Flash whitening",
      implant: "Implant",
      pedodontie: "Pedodontics",
      traitementsCanalaires: "Root canal treatments",
      parodontie: "Periodontics",
      chirurgieOrale: "Oral surgery"
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
    },
    urgence_page: {
      hero: {
        tag: "Dental Emergency Tangier - SOS Dentist",
        title_light: "Emergency Dentist",
        title_bold: "Open Now",
        desc: "Dental emergency in Tangier? Our emergency dental clinic in Tangier provides immediate care. Dentist on call available for toothache, SOS dentist and dental emergency in Morocco."
      },
      intro: {
        title: "Your Emergency Dental Clinic in Tangier & SOS Dentist",
        p1: "At APEX Clinic, we provide dental emergency services in Tangier. Whether it's a Saturday, Sunday, or even an emergency dentist tangier during the night, Dr. Reda Saoui and his team are ready to provide fast relief for severe toothache.",
        p2: "Located in the heart of Tangier, our clinic is your 'dentist open now tangier' solution. We have the latest technology to treat your dental emergencies 24/7 by priority appointment, ensuring immediate pain relief."
      },
      services: {
        title: "Dental Emergency Services Tangier",
        list: [
          { title: "Toothache Emergency", desc: "Fast relief for intense dental pain, pulpitis and 24h dental emergency." },
          { title: "Broken or Chipped Tooth", desc: "Immediate repair to save your tooth and restore your smile in emergency." },
          { title: "Abscess & SOS Dentist", desc: "Urgent drainage and treatment for infections, swelling and dental abscess." },
          { title: "Dentist on Call Tangier", desc: "Availability for urgent procedures on Saturday, Sunday and public holidays." },
          { title: "Trauma & Injury", desc: "Emergency care for sports injuries, accidental impacts or knocked-out teeth." },
          { title: "Night Dental Emergency", desc: "Management protocol for unbearable nocturnal dental pain." }
        ]
      },
      faq: {
        title_bold: "Frequently Asked Questions",
        title_light: "Emergency & On Call",
        q1: {
          title: "Are you looking for a dentist open now in Tangier?",
          desc: "Our clinic is ready to receive you for any dental emergency. Contact us by phone for immediate care."
        },
        q2: {
          title: "Is the clinic open on Sunday and Saturday?",
          desc: "Yes, we provide dental services on Saturday and Sunday in Tangier by emergency appointment to avoid prolonged suffering."
        },
        q3: {
          title: "What is considered a dental emergency?",
          desc: "Severe pain, swelling, uncontrolled bleeding, or a knocked-out tooth are all considered emergencies requiring immediate attention."
        },
        q4: {
          title: "Do I need an appointment for an emergency?",
          desc: "While we prioritize emergencies, please call us first so we can prepare for your arrival and provide immediate assistance."
        }
      },
      why_choose: {
        title: "Why Choose Our Clinic in Tangier?",
        desc: "Our expert team at APEX Clinic is dedicated to providing high-quality emergency dental care. With advanced equipment and 24/7 availability for priority cases, we are your trusted 'dental emergency Tangier' and 'dentist open now Tangier' solution.",
        badges: ["24/7 Priority Availability", "Expert Multi-disciplinary Team", "Advanced High-Tech Equipment", "Certified Sterilization Standards"]
      },
      coverage: {
        title: "Coverage Area / We Serve",
        desc: "We provide emergency dental services to the entire Tangier region and surrounding areas. Our fast-response team is ready to assist patients from various neighborhoods.",
        locations: ["Malabata", "Marshan", "City Center", "Fnideq", "Gzenaya", "Mesnana"],
        highlight: "Serving the entire Tangier metropolitan area."
      },
      tips: {
        title: "Quick Tips for Dental Emergencies",
        list: [
          { title: "Intense Toothache", desc: "Rinse with warm water and use floss to remove any trapped debris. Contact us immediately." },
          { title: "Broken Tooth", desc: "Save any pieces. Rinse your mouth and the pieces. Apply a cold compress to reduce swelling." },
          { title: "Knocked-out Tooth", desc: "Hold it by the crown, rinse gently, and try to re-insert it or keep it in milk while heading to the clinic." },
          { title: "Dental Abscess", desc: "Rinse with salt water and avoid applying heat. This is a serious infection requiring urgent care." }
        ],
        cta_call: "Call Emergency Now",
        cta_whatsapp: "WhatsApp Us"
      }
    },
    english_dentist_page: {
      hero: {
        tag: "English Speaking Dentist Tangier",
        title_light: "Premium Care for",
        title_bold: "English Speakers",
        desc: "World-class dental services in the heart of Tangier. Dr. Reda Saoui and his team provide comprehensive dental care tailored for international patients, expats, and travelers."
      },
      intro: {
        title: "Your English Speaking Dentist in Tangier",
        p1: "Navigating healthcare in a foreign country can be challenging. At APEX Dental Clinic, we remove the language barrier, providing clear communication and exceptional care in English.",
        p2: "Dr. Reda Saoui and his highly trained staff are dedicated to ensuring that your dental experience is comfortable, transparent, and of the highest international standards."
      },
      why_choose: {
        title: "Why Choose Our International Clinic?",
        desc: "We specialize in treating international patients and expatriates living in Tangier. Our clinic combines advanced Moroccan dental expertise with a global standard of patient care.",
        badges: ["Fluent English Communication", "Expat-Friendly Services", "International Standards", "Advanced Digital Technology"]
      },
      coverage: {
        title: "Serving the International Community",
        desc: "We are the preferred choice for the English-speaking community in Tangier, from digital nomads to long-term residents.",
        locations: ["Malabata", "City Center", "Marshan", "California District", "Iberia", "Gzenaya"],
        highlight: "The leading destination for English-speaking dental care in Northern Morocco."
      },
      services: {
        title: "Comprehensive Dental Solutions",
        list: [
          { title: "General Dentistry", desc: "Routine check-ups, cleanings, and preventative care provided with clear English explanations." },
          { title: "Cosmetic Dentistry", desc: "Transform your smile with veneers, whitening, or Invisalign by an English-speaking expert." },
          { title: "Dental Implants", desc: "Advanced implantology using the latest Yomi robot-assisted technology for precision." },
          { title: "Oral Surgery", desc: "Expert surgical procedures in a comfortable, high-tech environment." },
          { title: "Emergency Care", desc: "Immediate assistance for dental emergencies with 24/7 priority for urgent cases." },
          { title: "Pediatric Care", desc: "Gentle dental care for the whole family, ensuring a positive experience for your children." }
        ]
      },
      tips: {
        title: "Traveler's Dental Care Tips",
        list: [
          { title: "Stay Hydrated", desc: "The Moroccan climate can be dry. Drink plenty of water to maintain oral health." },
          { title: "Emergency Prep", desc: "Keep our contact details handy while traveling in Tangier for peace of mind." },
          { title: "Local Cuisine", desc: "Enjoy the food, but remember to maintain your routine brushing and flossing." },
          { title: "Regular Check-ups", desc: "Schedule a visit before long travels to avoid unexpected dental issues." }
        ],
        cta_call: "Call Us Today",
        cta_whatsapp: "WhatsApp Us"
      },
      faq: {
        title_bold: "Expat & Traveler",
        title_light: "Questions",
        q1: {
          title: "Do you really speak English?",
          desc: "Yes, Dr. Saoui and key staff members are fluent in English, ensuring clear communication regarding your diagnosis and treatment options."
        },
        q2: {
          title: "Do you accept international insurance?",
          desc: "We work with many international insurance providers. Please contact us with your details, and we can help you with the necessary documentation for your claim."
        },
        q3: {
          title: "Can I book an appointment on short notice?",
          desc: "We prioritize international travelers and emergencies. Contact us via WhatsApp for the fastest response on availability."
        },
        q4: {
          title: "What technology do you use?",
          desc: "We use the latest digital dentistry tools, including 3D scanners, Solea laser for pain-free treatment, and Yomi robot-assisted implant surgery."
        }
      },
      journey: {
        title: "The APEX Patient Journey",
        desc: "Designed for your comfort and peace of mind. Here is what you can expect when visiting us as an international patient.",
        steps: [
          {
            title: "Initial Contact",
            desc: "Reach out via WhatsApp or phone. Our English-speaking coordinator will assist you with scheduling and any initial questions."
          },
          {
            title: "Virtual Consultation",
            desc: "For major procedures, we can arrange a video call to discuss your needs and provide a preliminary treatment plan before you arrive."
          },
          {
            title: "Personalized Welcome",
            desc: "Upon arrival at our Tangier clinic, you'll be welcomed into our modern, tranquil environment by our friendly staff."
          },
          {
            title: "Advanced Care",
            desc: "Experience pain-free, high-tech dental treatments using the world's most advanced equipment, all explained clearly in English."
          }
        ]
      },
      environment: {
        title: "A Premium Clinic Environment",
        desc: "We've designed APEX to be a sanctuary of health and comfort, combining luxury aesthetics with the world's most advanced dental equipment.",
        features: [
          {
            title: "Painless Laser Care",
            desc: "The Solea Laser removes the need for drills and needles in many procedures."
          },
          {
            title: "Digital Workflow",
            desc: "3D scanning and printing for precise results in record time."
          },
          {
            title: "Robot-Assisted Mastery",
            desc: "Yomi-assisted implant surgery for unmatched surgical precision."
          },
          {
            title: "Luxury Serenity",
            desc: "A calm, stress-free environment designed for your ultimate comfort."
          }
        ]
      }
    },
    dental_implants_page: {
      hero: {
        tag: "Dental Implants Morocco",
        title_light: "Restore Your Smile in",
        title_bold: "Tangier, Morocco",
        desc: "World-class dental implants in Tangier at a fraction of the cost. Dr. Reda Saoui provides premium implantology services for international patients."
      },
      intro: {
        title: "Best Dentist in Tangier for Implants",
        p1: "Looking for dental implants in Morocco? APEX Dental Clinic in Tangier offers state-of-the-art implant solutions using Yomi robot-assisted technology.",
        p2: "Dr. Reda Saoui is a leading implantologist in Tangier, dedicated to restoring your confidence and oral health with precision and care."
      },
      why_choose: {
        title: "Why Choose Us for Implants?",
        desc: "We combine advanced technology with affordable pricing, making us the top choice for dental tourism in Morocco.",
        badges: ["Yomi Robot Precision", "International Standards", "Affordable Luxury", "English Speaking Team"]
      },
      coverage: {
        title: "Serving International Patients",
        desc: "Patients from across Europe and the world choose Tangier for their dental needs. We assist with your dental tourism journey.",
        locations: ["Spain", "France", "UK", "USA", "Canada"],
        highlight: "Your destination for premium dental implants in Morocco."
      },
      services: {
        title: "Implant Solutions",
        list: [
          { title: "Single Tooth Implant", desc: "Replace a missing tooth with a natural-looking, durable implant." },
          { title: "All-on-4 / All-on-6", desc: "Full arch restoration for a completely new smile in just one trip." },
          { title: "Bone Grafting", desc: "Advanced procedures to prepare your jaw for successful implantation." },
          { title: "Sinus Lift", desc: "Expert sinus augmentation ensures a solid foundation for your upper implants." },
          { title: "Immediate Loading", desc: "Walk out with a new smile the same day in selected cases." },
          { title: "Computer Guided Surgery", desc: "Minimally invasive surgery for faster healing and less discomfort." }
        ]
      },
      tips: {
        title: "Dental Tourism Tips",
        list: [
          { title: "Plan Ahead", desc: "Contact us before your trip to schedule a virtual consultation." },
          { title: "Enjoy Tangier", desc: "Combine your treatment with a vacation in our beautiful city." },
          { title: "Aftercare", desc: "We provide detailed aftercare instructions for your journey home." },
          { title: "Accommodation", desc: "We can recommend nearby hotels for your comfort." }
        ],
        cta_call: "Start Your Journey",
        cta_whatsapp: "WhatsApp Us"
      },
      faq: {
        title_bold: "Implant Questions",
        title_light: "Common",
        q1: {
          title: "How much do dental implants cost in Morocco?",
          desc: "Dental implants in Morocco are significantly more affordable than in Europe or the US, often saving you 50-70% without compromising on quality."
        },
        q2: {
          title: "Is it safe to get implants in Morocco?",
          desc: "Yes, especially at APEX. We adhere to strict international sterilization and safety protocols, matching or exceeding European standards."
        },
        q3: {
          title: "How long does the process take?",
          desc: "It typically involves two visits. The first for placement (3-5 days), and a second visit 3-6 months later for the final crown placement."
        },
        q4: {
          title: "What implant brands do you use?",
          desc: "We use premium, globally recognized implant brands to ensure long-term success and worldwide support."
        }
      },
      journey: {
        title: "Your Implant Journey",
        desc: "Step-by-step guide to your new smile in Tangier.",
        steps: [
          { title: "Step 1: Virtual Consult", desc: "Send us your X-rays for a preliminary plan and quote." },
          { title: "Step 2: Arrival & Surgery", desc: "Arrive in Tangier, comprehensive exam, and implant placement." },
          { title: "Step 3: Healing Period", desc: "Go home and heal while the implant integrates with your bone." },
          { title: "Step 4: Final Restoration", desc: "Return for the attachment of your permanent, beautiful teeth." }
        ]
      },
      environment: {
        title: "State-of-the-Art Facility",
        desc: "Our clinic is equipped with the latest technology for safe and precise implant surgery.",
        features: [
          { title: "Yomi Robot", desc: "Robotic assistance for perfect implant placement." },
          { title: "CBCT Scanner", desc: "3D imaging for accurate treatment planning." },
          { title: "Sterilization Center", desc: "Hospital-grade sterilization for your safety." },
          { title: "Recovery Room", desc: "Relax in comfort after your procedure." }
        ]
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      contact_label: "Contact",
      about: {
        label: "À propos",
        sub: ["Rencontrer le docteur", "Nouveaux patients", "Options de paiement", "Technologie", "Blog"]
      },
      services: {
        label: "Services",
        sub: {
          general: ["Ponts", "Couronnes", "Prothèses", "Plombages", "Nettoyages", "Urgence"],
          cosmetic: ["Invisalign", "Facettes", "Blanchiment", "Botox"],
          surgical: ["Implants", "Canal radiculaire", "Extractions"]
        }
      },
      problems: "Problèmes traités",
      urgence: "Urgences",
      schedule: "Prendre rdv",
      call: PHONE
    },
    seo: {
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
        p2: "Qui suis-je ? Tangérois depuis l’âge de huit ans, j’ai toujours été animé par une profonde curiosité pour la médecine et les nouvelles technologies. Dès mes dix ans, je passais des heures sur internet à lire, observer, regarder des documentaires et apprendre sans relâche, avec cette envie presque enfantine de découvrir quelque chose de nouveau chaque jour et de le partager le lendemain à la cour de récréation.",
        p3: "Très tôt, cette soif de savoir s’est transformée en une véritable obsession : comprendre, analyser, expliquer. Une obsession saine, tournée vers la maîtrise et la précision. C’est avec cet état d’esprit que j’ai intégré la Faculté de Médecine Dentaire Publique de Rabat, et c’est cette même exigence intellectuelle qui me guide aujourd’hui dans ma pratique quotidienne.",
        p4: "Exercer l’art dentaire est pour moi un plaisir autant qu’une responsabilité. J’aime prendre le temps d’expliquer, de rassurer et de répondre aux questions qui préoccupent mes patients, car je suis convaincu qu’un soin de qualité commence toujours par la compréhension et la confiance. C’est cette vision qui m’a naturellement conduit à créer une clinique pensée comme un véritable sanctuaire moderne, un espace apaisant et moderne, loin de l’univers stressant et impersonnel que beaucoup associent encore aux soins dentaires."
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
        title: "Domaines d'expertise",
        services: [
          { title: "Dentisterie esthétique", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/cosmetic-dentistry-icon.png" },
          { title: "Implants dentaires", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/implant-icon.png" },
          { title: "Reconstruction complète", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/full-mouth-reconstruction-icon.png" },
          { title: "Invisalign", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/invisalign-icon.png" },
          { title: "Frénectomies infantiles", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/infant-frenectomy-icon.png" },
          { title: "Couronnes le jour même", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/crown-icon.png" },
          { title: "Traitement des troubles de l'ATM", icon: "https://jacksonfamilydentalonline.com/wp-content/uploads/2024/03/tmd-icon.png" }
        ]
      }
    },
    hero: {
      tag: "APEX Dental Clinic - Tanger",
      title_part1: "Redessinez Votre Sourire",
      title_part2: "à Tanger",
      desc: "Vivez une expérience de soins dentaires d'exception chez APEX Dental Clinic, votre centre de référence en dentisterie de haute technologie à Tanger. Sous la direction experte du Dr Reda Saoui, nous combinons innovation, précision artistique et approche humaine pour transformer votre santé bucco-dentaire.",
      cta_schedule: "Prendre RDV",
      cta_call: "Appelez-nous",
      discover: "Explorer"
    },
    why_choose: {
      title_light: "Pourquoi Choisir Notre",
      title_bold: "Cabinet à Tanger ?",
      p1: "Chez APEX Dental Clinic, nous redéfinissons les standards du cabinet dentaire à Tanger. En alliant expertise chirurgicale et vision esthétique, nous offrons une approche multidisciplinaire unique. Notre clinique est équipée des dernières technologies CAD/CAM et d'imagerie 3D, garantissant des traitements précis, durables et parfaitement adaptés à votre anatomie.",
      p2: "Que vous cherchiez un détartrage de routine, des implants dentaires complexes ou une transformation complète de votre sourire via Invisalign et facettes, le Dr Reda Saoui et son équipe s'engagent à vous offrir une expérience sans douleur. Nous privilégions l’éducation thérapeutique pour que chaque patient comprenne son parcours de soin vers un sourire parfait à Tanger.",
      cta: "Découvrir notre approche"
    },
    know_doctor: {
      title_light: "Rencontrez votre",
      title_bold: "Docteur",
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
      title_bold: "les Détails",
      desc: "Notre clinique dentaire à Tanger redéfinit les standards des soins de première classe, en plaçant l’exigence, le confort et l’humain au cœur de chaque détail.",
      list: [
        "Des professionnels bienveillants, à l’écoute et sans jugement, accueillant des patients de tous âges",
        "Une expertise pointue en dentisterie esthétique et restauratrice, dédiée à des transformations naturelles et durables",
        "L’intégration des technologies les plus avancées pour un confort optimal et des résultats précis"
      ]
    },
    insurance: {
      title: "Nous acceptons tous types d'assurances",
      desc: "Vous n'avez pas d'assurance ? Ne vous inquiétez pas — nous avons ce qu'il vous faut. Nos tarifs abordables garantissent que des soins dentaires de qualité sont accessibles à tous, avec ou sans assurance."
    },
    implants: {
      title_light: "Excellence en",
      title_bold: "Implantologie dentaire",
      desc: "Grâce aux technologies de chirurgie implantaire guidée, le Dr. SAOUI et son équipe vous assure une procédure précise et confortable à 100% pour remplacer vos dents perdues.",
      cta: "Explorer les soins chirurgicaux"
    },
    our_expertise: "Notre expertise",
    tech_section: {
      title_main: "Nos Technologies",
      title_sub: "De pointe chez APEX",
      cta: "Découvrir notre expertise",
      items: [
        {
          title: "Dentisterie Numérique 3D + Impression 3D",
          desc: "Une précision inégalée pour vos restaurations, réalisée en un temps record grâce à nos flux numériques intégrés."
        },
        {
          title: "Chirurgie Guidée par Ordinateur",
          desc: "La sécurité et la précision absolue pour vos implants, planifiées virtuellement pour des résultats optimaux."
        },
        {
          title: "Imagerie Radiographique Avancée",
          desc: "Des diagnostics haute définition avec une exposition minimale, pour une compréhension totale de votre santé bucco-dentaire."
        }
      ]
    },
    smile_heading: {
      light: "Votre",
      bold: "Beau Sourire"
    },
    smile_rows: {
      routine: {
        bold: "Soins",
        light: "Dentaires de Routine",
        desc: "Prendre soin de votre sourire n’a jamais été aussi simple — ni aussi agréable. Nous accompagnons toute votre famille dans le maintien d’une santé dentaire durable, avec douceur, rigueur et attention.",
        cta: "Explorer la dentisterie générale"
      },
      restorative: {
        bold: "Procédures",
        light: "Restauratrices",
        desc: "Grâce à une formation avancée et une expertise approfondie en reconstruction bucco-dentaire, nos praticiens proposent des soins de haut niveau destinés à restaurer des dents endommagées ou remplacer des dents manquantes, avec précision, garantie et respect de l’esthétique naturelle.",
        cta: "Explorer nos procédures restauratrices"
      },
      cosmetic: {
        bold: "Transformations",
        light: "Esthétiques",
        desc: "Découvrez ce qui est possible grâce aux facettes, au blanchiment FLAESH ou aux aligneurs transparents. Nous avons accompagné et transformé des centaines de sourires. Chaque traitement est pensé sur mesure.",
        cta: "Explorer la dentisterie esthétique"
      }
    },
    contact_team: {
      title_light: "Notre Équipe",
      title_bold: "Contactez",
      desc: "Notre équipe dédiée à Tanger est à votre écoute. Situés idéalement à la Place des Nations, nous sommes prêts à vous accueillir pour tous vos besoins dentaires, de l'urgence à l'esthétique.",
      get_directions: "Obtenir l'itinéraire",
      placeholders: {
        name: "Prénom *",
        lastName: "Nom *",
        service: "Choisissez un service *",
        specify: "Veuillez préciser *",
        submit: "Envoyer le message"
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
      title_light: "Vous aider à",
      title_bold: "Sourire à Nouveau",
      desc1: "À la clinique du Dr. Reda Saoui, <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>votre expert dentiste à Tanger</a>, nous transformons bien plus que des sourires. Que vous souffriez de problèmes d'alignement complexes, de dents manquantes nécessitant des implants, ou de préoccupations esthétiques, nous apportons une solution d'excellence.",
      desc2: "Notre approche intègre <b>l'Orthodontie</b> (Invisalign), <b>l'Implantologie</b> et la <b>Dentisterie Esthétique</b> sous un même toit. Nous utilisons le Digital Smile Design pour planifier votre traitement, garantissant des résultats prévisibles et harmonieux avec votre visage.",
      cta: "Appelez-nous ou envoyez-nous un message au",
      cta_end: "et commencez votre voyage vers un sourire parfait."
    },
    faq: {
      title_bold: "Questions Fréquentes",
      title_light: "Nous Répondons",
      q1: {
        title: "Puis-je savoir le prix des implants et facettes ?",
        desc: "Pour obtenir un devis précis pour des implants dentaires ou des facettes, une consultation est nécessaire. Elle comprend un examen clinique et radiologique (scanner 3D si besoin) pour poser un diagnostic exact. Nous établirons ensuite un devis détaillé personnalisé adapté à votre santé bucco-dentaire."
      },
      q2: {
        title: "Est-ce que le détartrage abîme l'émail ?",
        desc: "Non, le détartrage réalisé par nos professionnels ne fragilise pas les dents. Au contraire, il est crucial pour éliminer le tartre que la brosse ne peut pas atteindre, prévenant ainsi les gingivites et parodontites. Nos instruments ultrasoniques nettoient en douceur sans endommager l'émail."
      },
      q3: {
        title: "Est-ce que le blanchiment dentaire fait mal ?",
        desc: "Le blanchiment dentaire professionnel (système Fläsh) est conçu pour minimiser la sensibilité. Une légère sensibilité au chaud/froid peut survenir mais disparaît généralement en 24-48h. Nous utilisons des agents désensibilisants pour maximiser votre confort."
      },
      q4: {
        title: "Puis-je utiliser un bain de bouche tous les jours ?",
        desc: "Les bains de bouche thérapeutiques ne doivent être utilisés que sur prescription. En revanche, les bains de bouche quotidiens sans alcool peuvent compléter le brossage, mais ne remplacent jamais l'action mécanique de la brosse et du fil dentaire."
      },
      q5: {
        title: "Combien de temps dure un traitement orthodontique ?",
        desc: "La durée varie : un alignement mineur avec Invisalign peut prendre 6 à 12 mois, tandis que des corrections d'occlusion complexes nécessitent 18 à 24 mois. Lors de votre consultation, le Dr Saoui vous donnera une estimation précise grâce à la planification numérique 3D."
      },
      q6: {
        title: "Quelle est la durée pour poser des facettes dentaires ?",
        desc: "Le processus de pose de facettes nécessite généralement 2 à 3 séances sur une période de 2 à 3 semaines. Cela inclut la conception du sourire (Smile Design), la préparation, la pose de facettes provisoires, et enfin le collage des facettes céramiques définitives."
      }
    },
    tech: {
      anxiety: "Souffrez-vous d'anxiété dentaire ?",
      title: "Découvrez notre solution Solea Laser",
      desc: "Au sein de notre <a href='/' class='underline decoration-brand-cyan hover:text-brand-cyan transition-colors'>cabinet dentaire à Tanger</a>, nous traitons l'anxiété dentaire grâce au Solea Laser innovant, une solution sans douleur qui élimine le besoin de fraises, d'aiguilles, de scalpels ou de bruits forts pendant les traitements. Avec cette technologie, vous pouvez bénéficier de soins dentaires sans stress ni inconfort !"
    },
    schedule_banner: {
      title_bold: "Planifiez",
      title_light: "Votre Première Visite",
      btn: "Prendre Rendez-vous"
    },
    more_problems: {
      title_bold: "Plus de",
      title_light: "Problèmes Dentaires",
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
      title_bold: "Problèmes",
      title_light: "Traités",
      all: "Tous les problèmes",
      list: [
        "Mauvaise haleine / Halitose",
        "Frénectomies infantiles",
        "Maladies des gencives",
        "Grincement des dents",
        "Gencives qui saignent",
        "Apnée du sommeil et ronflement",
        "Dents manquantes",
        "Réparation de dents cassées",
        "Anxiété dentaire",
        "Sensibilité",
        "Dents croches",
        "Réparation de prothèses",
        "Dents tachées"
      ]
    },
    testimonials: {
      kind: "Témoignages",
      from: "De nos patients",
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
      our: "Notre",
      office: "Clinique à Tanger",
      directions: "Obtenir l'itinéraire",
      hours: "Lun-Ven: 9h30-18h00 | Sam: 9h30-15h00",
      emergency_24h: "Ouvert 24h/24 et 7j/7 pour les urgences",
      monday: "Lundi : 09h00 - 18h00",
      tuesday: "Mardi : 09h00 - 18h00",
      wednesday: "Mercredi : 09h00 - 18h00",
      thursday: "Jeudi : 09h00 - 18h00",
      friday: "Vendredi : Fermé",
      call_text: "Appel / SMS",
      whatsapp: "WhatsApp"
    },
    expertise: {
      facettes: "Facettes",
      aligneurs: "Aligneurs",
      couronnes: "Couronnes",
      blanchimentFlash: "Blanchiment Fläsh",
      implant: "Implant",
      pedodontie: "Pédodontie",
      traitementsCanalaires: "Traitements Canalaires",
      parodontie: "Parodontie",
      chirurgieOrale: "Chirurgie Orale"
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
    },
    urgence_page: {
      hero: {
        tag: "Urgence Dentaire Tanger - Sos Dentiste",
        title_light: "Dentiste Urgence",
        title_bold: "Ouvert Maintenant",
        desc: "Urgence dentaire à Tanger ? Notre cabinet dentaire d'urgence à Tanger assure une prise en charge immédiate. Dentiste de garde disponible pour mal de dents, SOS dentiste et urgence dentaire Maroc."
      },
      intro: {
        title: "Votre Cabinet Dentaire d'Urgence à Tanger & SOS Dentiste",
        p1: "À la Clinique APEX, nous assurons un service d'urgence dentaire à Tanger. Que ce soit un samedi, un dimanche ou même en cas d'urgence dentiste tanger la nuit, le Dr. Reda Saoui et son équipe sont prêts à vous soulager rapidement pour tout mal de dents sévère.",
        p2: "Idéalement située au centre de Tanger, notre clinique est votre solution 'dentiste ouvert maintenant tanger'. Nous disposons des technologies les plus avancées pour traiter vos urgences dentaires 24h/24 sur rendez-vous privilégié, garantissant un soulagement de la douleur immédiat."
      },
      services: {
        title: "Services d'Urgence Dentaire Tanger",
        list: [
          { title: "Urgence Mal de Dents", desc: "Soulagement rapide pour intense douleur dentaire, pulpite et urgence dentaire 24h." },
          { title: "Dent Cassée ou Ébréchée", desc: "Restauration immédiate pour préserver votre dent et votre sourire en urgence." },
          { title: "Abcès & SOS Dentiste", desc: "Drainage et traitement urgent des infections, gonflements et abcès dentaires." },
          { title: "Dentiste de Garde Tanger", desc: "Disponibilité pour interventions urgentes le samedi, dimanche et jours fériés." },
          { title: "Traumatisme & Choc", desc: "Soins d'urgence suite à un choc, accident ou dent expulsée." },
          { title: "Urgence Dentaire Nuit", desc: "Protocole de prise en charge pour les douleurs dentaires nocturnes insupportables." }
        ]
      },
      faq: {
        title_bold: "Questions Fréquentes",
        title_light: "Urgences & Garde",
        q1: {
          title: "Cherchez-vous un dentiste ouvert maintenant à Tanger ?",
          desc: "Notre cabinet est prêt à vous recevoir pour toute urgence dentaire. Contactez-nous par téléphone pour une prise en charge immédiate."
        },
        q2: {
          title: "Le cabinet est-il ouvert le dimanche et samedi ?",
          desc: "Oui, nous assurons un service de dentiste samedi tanger et dentiste dimanche tanger sur rendez-vous d'urgence pour vous éviter toute souffrance."
        },
        q3: {
          title: "Qu'est-ce qui est considéré comme une urgence dentaire ?",
          desc: "Une douleur intense, un gonflement, un saignement incontrôlé ou une dent expulsée sont des urgences nécessitant une attention immédiate."
        },
        q4: {
          title: "Faut-il prendre rendez-vous pour une urgence ?",
          desc: "Bien que nous priorisions les urgences, merci de nous appeler au préalable pour que nous puissions préparer votre accueil."
        }
      },
      why_choose: {
        title: "Pourquoi Choisir Notre Cabinet à Tanger ?",
        desc: "L'équipe d'experts de la Clinique APEX se consacre à fournir des soins dentaires d'urgence de haute qualité. Avec un équipement de pointe et une disponibilité 24h/24 et 7j/7 pour les cas prioritaires, nous sommes votre solution de confiance pour toute 'urgence dentaire Tanger' et 'dentiste ouvert maintenant Tanger'.",
        badges: ["Disponibilité prioritaire 24/7", "Équipe multidisciplinaire experte", "Équipement de haute technologie", "Normes de stérilisation certifiées"]
      },
      coverage: {
        title: "Zone de Couverture / Nous Servons",
        desc: "Nous fournissons des services dentaires d'urgence à toute la région de Tanger et ses environs. Notre équipe est prête à assister les patients de divers quartiers.",
        locations: ["Malabata", "Marshan", "Centre-Ville", "Fnideq", "Gzenaya", "Mesnana"],
        highlight: "Nous servons toute la zone métropolitaine de Tanger."
      },
      tips: {
        title: "Conseils Rapides en Cas d’Urgence Dentaire",
        list: [
          { title: "Mal de dents intense", desc: "Rincez-vous la bouche à l'eau tiède et utilisez du fil dentaire pour déloger tout débris. Contactez-nous immédiatement." },
          { title: "Dent cassée", desc: "Conservez les morceaux. Rincez votre bouche et les fragments. Appliquez une compresse froide pour réduire le gonflement." },
          { title: "Dent expulsée", desc: "Tenez-la par la couronne, rincez-la délicatement et essayez de la replacer ou gardez-la dans du lait en venant à la clinique." },
          { title: "Abcès dentaire", desc: "Rincez à l'eau salée et évitez d'appliquer de la chaleur. C'est une infection sérieuse qui nécessite des soins urgents." }
        ],
        cta_call: "Appeler l'Urgence Now",
        cta_whatsapp: "WhatsApp"
      }
    },
    dental_implants_page: {
      hero: {
        tag: "Implants Dentaires Maroc",
        title_light: "Restaurez Votre Sourire à",
        title_bold: "Tanger, Maroc",
        desc: "Implants dentaires de classe mondiale à Tanger. Le Dr Reda Saoui offre des services d'implantologie haut de gamme pour les patients internationaux et locaux."
      },
      intro: {
        title: "Meilleur Dentiste à Tanger pour Implants",
        p1: "Vous cherchez des implants dentaires au Maroc ? APEX Dental Clinic à Tanger offre des solutions implantaires de pointe utilisant la technologie robotique Yomi.",
        p2: "Le Dr Reda Saoui est un implantologue de premier plan à Tanger, dédié à restaurer votre confiance et votre santé bucco-dentaire avec précision et soin."
      },
      why_choose: {
        title: "Pourquoi Nous Choisir ?",
        desc: "Nous combinons technologie avancée et tarifs abordables, faisant de nous le premier choix pour le tourisme dentaire au Maroc.",
        badges: ["Précision Robot Yomi", "Standards Internationaux", "Luxe Abordable", "Équipe Multilingue"]
      },
      coverage: {
        title: "Au Service des Patients",
        desc: "Des patients de toute l'Europe et du monde choisissent Tanger pour leurs besoins dentaires.",
        locations: ["Espagne", "France", "Royaume-Uni", "USA", "Canada"],
        highlight: "Votre destination pour des implants dentaires premium au Maroc."
      },
      services: {
        title: "Solutions Implantaires",
        list: [
          { title: "Implant Unitaire", desc: "Remplacez une dent manquante par un implant durable et naturel." },
          { title: "All-on-4 / All-on-6", desc: "Restauration complète de l'arcade pour un nouveau sourire en un seul voyage." },
          { title: "Greffe Osseuse", desc: "Procédures avancées pour préparer votre mâchoire à une implantation réussie." },
          { title: "Sinus Lift", desc: "L'élévation sinusale experte assure une base solide pour vos implants supérieurs." },
          { title: "Mise en Charge Immédiate", desc: "Repartez avec un nouveau sourire le même jour dans les cas sélectionnés." },
          { title: "Chirurgie Guidée", desc: "Chirurgie mini-invasive pour une guérison plus rapide et moins d'inconfort." }
        ]
      },
      tips: {
        title: "Conseils Tourisme Dentaire",
        list: [
          { title: "Prévoyez à l'avance", desc: "Contactez-nous avant votre voyage pour planifier une consultation virtuelle." },
          { title: "Profitez de Tanger", desc: "Combinez votre traitement avec des vacances dans notre belle ville." },
          { title: "Suivi", desc: "Nous fournissons des instructions de suivi détaillées pour votre retour." },
          { title: "Hébergement", desc: "Nous pouvons vous recommander des hôtels à proximité pour votre confort." }
        ],
        cta_call: "Commencez Votre Voyage",
        cta_whatsapp: "WhatsApp"
      },
      faq: {
        title_bold: "Questions Implants",
        title_light: "Fréquentes",
        q1: {
          title: "Combien coûtent les implants dentaires au Maroc ?",
          desc: "Les implants dentaires au Maroc sont nettement plus abordables qu'en Europe, vous permettant souvent d'économiser 50 à 70% sans compromettre la qualité."
        },
        q2: {
          title: "Est-ce sûr de se faire poser des implants au Maroc ?",
          desc: "Oui, surtout chez APEX. Nous respectons des protocoles de stérilisation et de sécurité internationaux stricts."
        },
        q3: {
          title: "Combien de temps dure le processus ?",
          desc: "Cela implique généralement deux visites. La première pour la pose (3-5 jours), et une seconde 3-6 mois plus tard pour la couronne finale."
        },
        q4: {
          title: "Quelles marques d'implants utilisez-vous ?",
          desc: "Nous utilisons des marques d'implants premium reconnues mondialement pour assurer un succès à long terme."
        }
      },
      journey: {
        title: "Votre Parcours Implanthaire",
        desc: "Guide étape par étape vers votre nouveau sourire à Tanger.",
        steps: [
          { title: "Étape 1: Consultation Virtuelle", desc: "Envoyez-nous vos radios pour un plan préliminaire et un devis." },
          { title: "Étape 2: Arrivée & Chirurgie", desc: "Arrivée à Tanger, examen complet et pose de l'implant." },
          { title: "Étape 3: Période de Guérison", desc: "Retour chez vous et guérison pendant que l'implant s'intègre." },
          { title: "Étape 4: Restauration Finale", desc: "Retour pour la pose de vos dents définitives et magnifiques." }
        ]
      },
      environment: {
        title: "Installation de Pointe",
        desc: "Notre clinique est équipée des dernières technologies pour une chirurgie implantaire sûre et précise.",
        features: [
          { title: "Robot Yomi", desc: "Assistance robotique pour une pose d'implant parfaite." },
          { title: "Scanner CBCT", desc: "Imagerie 3D pour une planification précise du traitement." },
          { title: "Centre de Stérilisation", desc: "Stérilisation de grade hospitalier pour votre sécurité." },
          { title: "Salle de Réveil", desc: "Détendez-vous confortablement après votre intervention." }
        ]
      }
    }
  }
};

export const PROBLEMS: Problem[] = [
  { id: '1', title: 'Bad breath / Halitosis', image: '/photo6.webp', link: '#' },
  { id: '2', title: 'Bleeding gums', image: '/hero-image.webp', link: '#' },
  { id: '3', title: 'Chipped/Cracked tooth repair', image: '/unnamed.webp', link: '#' },
  { id: '4', title: 'Crooked teeth', image: '/photo5.webp', link: '#' },
  { id: '5', title: 'Infant frenectomies', image: '/carousel2.webp', link: '#' },
  { id: '6', title: 'Sleep apnea & snoring', image: '/DSCF7556.webp', link: '#' },
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
