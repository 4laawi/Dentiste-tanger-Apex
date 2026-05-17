export interface SEOServiceData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroTag: string;
  heroDesc: string;
  description: string;
  benefits: { title: string; desc: string }[];
  priceRange: string;
  beforeAfterMention: string;
  faqs: { question: string; answer: string }[];
}

export const SEO_SERVICES: Record<string, SEOServiceData> = {
  "facettes-dentaires-tanger": {
    slug: "facettes-dentaires-tanger",
    title: "Facettes Dentaires à Tanger",
    seoTitle: "Facettes Dentaires à Tanger | Sourire Parfait | Dr. Reda Saoui",
    seoDescription: "Transformez votre sourire avec des facettes dentaires sur mesure à Tanger. Expertise en esthétique dentaire par le Dr. Reda Saoui. Réservez votre consultation.",
    heroTag: "Dentisterie Esthétique",
    heroDesc: "Retrouvez un sourire éclatant et naturel grâce à la pose de facettes dentaires en céramique ultra-fines à Tanger.",
    description: "Les facettes dentaires sont de fines pellicules de céramique collées sur la face visible de vos dents pour corriger leur teinte, leur forme ou leur alignement. Dans notre clinique APEX à Tanger, le Dr. Reda Saoui utilise des technologies de conception numérique (Digital Smile Design) pour créer un sourire sur mesure qui s'harmonise parfaitement avec votre visage, le tout sans douleur et avec une préparation minimale de vos dents naturelles.",
    benefits: [
      { title: "Esthétique Parfaite", desc: "Correction instantanée des dents tachées, ébréchées ou mal alignées pour un sourire hollywoodien." },
      { title: "Résistance et Durabilité", desc: "La céramique utilisée est extrêmement résistante aux taches (café, thé, tabac) et dure de nombreuses années." },
      { title: "Approche Conservatrice", desc: "La pose nécessite une préparation minimale, préservant au maximum l'émail de vos dents naturelles." },
      { title: "Résultat Rapide", desc: "Votre nouveau sourire est conçu et posé en seulement quelques séances." }
    ],
    priceRange: "Le prix des facettes dentaires varie selon le matériau et le nombre de dents, généralement à partir de 3000 DHS par dent. Un devis précis est fourni après l'étude de votre sourire.",
    beforeAfterMention: "Découvrez dans notre cabinet nos cas de 'Avant / Après' : nous réalisons des simulations numériques et des mock-ups (essayages en bouche) pour que vous puissiez valider votre nouveau sourire avant même le début du traitement.",
    faqs: [
      {
        question: "La pose de facettes dentaires est-elle douloureuse ?",
        answer: "Non, la procédure est indolore. Nous utilisons une anesthésie locale très légère lors de la préparation des dents. Vous ne ressentirez aucune douleur."
      },
      {
        question: "Quelle est la durée de vie des facettes en céramique ?",
        answer: "Avec une bonne hygiène bucco-dentaire et des visites régulières, les facettes en céramique peuvent durer entre 10 et 15 ans, voire plus."
      },
      {
        question: "Est-ce que je dois limer beaucoup mes dents ?",
        answer: "Non. Grâce aux avancées technologiques, nous n'enlevons qu'une couche infime d'émail (environ 0,3 à 0,5 mm), et parfois aucune préparation n'est nécessaire (facettes pelliculaires)."
      },
      {
        question: "Puis-je manger normalement avec des facettes ?",
        answer: "Absolument. Une fois fixées, les facettes sont extrêmement solides. Vous pouvez manger normalement, bien qu'il soit conseillé d'éviter de croquer des objets très durs comme des stylos ou des coquilles de noix."
      },
      {
        question: "Les facettes peuvent-elles se tacher ?",
        answer: "La céramique de haute qualité que nous utilisons est non poreuse. Contrairement à l'émail naturel, elle ne se tache pas avec le café, le thé ou le tabac."
      }
    ]
  },
  "invisalign-tanger": {
    slug: "invisalign-tanger",
    title: "Invisalign à Tanger",
    seoTitle: "Invisalign Tanger | Appareil Dentaire Invisible | Dr. Reda Saoui",
    seoDescription: "Alignez vos dents discrètement avec Invisalign à Tanger. Gouttières transparentes sur mesure à APEX Clinic. Prenez rendez-vous avec le Dr. Reda Saoui.",
    heroTag: "Orthodontie Invisible",
    heroDesc: "La solution la plus avancée et discrète pour aligner vos dents. Obtenez le sourire de vos rêves sans bagues métalliques à Tanger.",
    description: "Invisalign est un traitement d'orthodontie moderne utilisant une série de gouttières transparentes et amovibles (aligneurs) fabriquées sur mesure. Contrairement aux appareils traditionnels, Invisalign est pratiquement invisible. Au sein d'APEX Dental Clinic à Tanger, nous scannons vos dents en 3D pour planifier précisément chaque étape de votre traitement. Que vous soyez un adulte cherchant à corriger un défaut d'alignement ou un adolescent, Invisalign s'adapte à votre mode de vie.",
    benefits: [
      { title: "Quasi-invisible", desc: "Les gouttières transparentes passent inaperçues, idéales pour les professionnels et les adultes." },
      { title: "Confortable et Amovible", desc: "Pas de fils métalliques irritants. Vous pouvez les retirer pour manger, brosser vos dents et passer le fil dentaire." },
      { title: "Prédictibilité 3D", desc: "Visualisez le résultat final sur écran avant même de commencer le traitement." },
      { title: "Moins de rendez-vous", desc: "Les visites de contrôle sont plus rapides et espacées par rapport à un traitement classique." }
    ],
    priceRange: "Le coût du traitement Invisalign à Tanger dépend de la complexité de votre cas. Les tarifs débutent aux alentours de 15000 DHS pour des corrections légères. Des facilités de paiement sont possibles.",
    beforeAfterMention: "Demandez votre simulation 3D lors de votre première consultation ! Nous vous montrerons un Avant/Après digital de l'évolution de vos dents jusqu'au résultat final.",
    faqs: [
      {
        question: "Combien de temps dure un traitement Invisalign ?",
        answer: "La durée moyenne est de 6 à 18 mois, selon la complexité des mouvements dentaires requis. Vous porterez chaque jeu de gouttières pendant 1 à 2 semaines."
      },
      {
        question: "Combien d'heures par jour dois-je porter les gouttières ?",
        answer: "Pour un résultat optimal, il est recommandé de les porter 20 à 22 heures par jour, en les retirant uniquement pour manger et vous brosser les dents."
      },
      {
        question: "Est-ce que Invisalign fait mal ?",
        answer: "Il est normal de ressentir une légère pression pendant les premiers jours suivant le changement de gouttière. C'est le signe que vos dents se déplacent doucement. C'est beaucoup moins douloureux que les bagues traditionnelles."
      },
      {
        question: "Puis-je boire du café avec mes aligneurs ?",
        answer: "Il est fortement conseillé de retirer vos gouttières avant de boire du café, du thé ou toute autre boisson colorée ou chaude pour éviter de les tacher ou de les déformer."
      },
      {
        question: "Est-ce que mon élocution sera affectée ?",
        answer: "Vous pourriez avoir un léger zézaiement le premier jour ou deux, le temps que votre langue s'habitue, mais cela disparaît très rapidement."
      }
    ]
  },
  "implants-dentaires-tanger": {
    slug: "implants-dentaires-tanger",
    title: "Implants Dentaires à Tanger",
    seoTitle: "Implants Dentaires Tanger | Remplacement de Dents | APEX Clinic",
    seoDescription: "Retrouvez vos dents fixes grâce aux implants dentaires à Tanger. Technologie de pointe et chirurgie guidée par le Dr. Reda Saoui. Devis personnalisé.",
    heroTag: "Implantologie Avancée",
    heroDesc: "La solution définitive et la plus naturelle pour remplacer vos dents manquantes avec une précision robotique à Tanger.",
    description: "L'implant dentaire est une racine artificielle en titane, insérée dans l'os de la mâchoire, sur laquelle est fixée une couronne en céramique. C'est aujourd'hui le standard d'or pour remplacer une ou plusieurs dents perdues. À APEX Clinic Tanger, le Dr. Reda Saoui utilise la tomographie 3D et la chirurgie guidée par ordinateur (technologie Yomi) pour assurer un positionnement millimétré de l'implant, garantissant une intervention sans douleur, une guérison rapide et une durabilité à vie.",
    benefits: [
      { title: "Résultat Naturel", desc: "L'implant reproduit l'apparence, la sensation et la fonction d'une dent naturelle." },
      { title: "Préservation Osseuse", desc: "Contrairement aux ponts classiques, l'implant stimule l'os et empêche la perte osseuse au niveau de la mâchoire." },
      { title: "Durable à vie", desc: "Avec un bon entretien, un implant dentaire est une solution permanente qui peut durer toute la vie." },
      { title: "Protection des dents adjacentes", desc: "Il n'est pas nécessaire de tailler les dents voisines pour remplacer la dent manquante." }
    ],
    priceRange: "Le tarif d'un implant dentaire à Tanger varie selon la marque de l'implant et la complexité (besoin de greffe osseuse, etc.). Généralement, le prix commence à partir de 6000 DHS. Un diagnostic 3D précis permet de vous fournir un devis exact.",
    beforeAfterMention: "Nos patients témoignent : passer d'un dentier amovible à des dents fixes sur implants transforme radicalement le visage et la qualité de vie (Avant/Après complet).",
    faqs: [
      {
        question: "La pose d'un implant dentaire est-elle douloureuse ?",
        answer: "L'intervention est réalisée sous anesthésie locale et est totalement indolore. Les suites opératoires sont généralement très légères, bien gérées avec des antalgiques classiques."
      },
      {
        question: "Combien de temps dure le traitement total ?",
        answer: "Après la pose de l'implant, il faut attendre entre 2 et 4 mois pour que l'os fusionne avec le titane (ostéointégration). Ensuite, l'empreinte est prise pour poser la couronne définitive."
      },
      {
        question: "Y a-t-il un risque de rejet de l'implant ?",
        answer: "Le taux de succès des implants dentaires est supérieur à 95%. Le titane est un matériau hautement biocompatible, le véritable \"rejet\" n'existe pas, il s'agit plutôt d'un défaut d'intégration souvent lié au tabac ou à l'hygiène."
      },
      {
        question: "Faut-il remplacer toutes ses dents une par une ?",
        answer: "Non. Si vous n'avez plus de dents, la technique All-on-4 ou All-on-6 permet de fixer une arcade dentaire complète sur seulement 4 ou 6 implants."
      },
      {
        question: "Ai-je besoin d'une greffe osseuse ?",
        answer: "Si l'imagerie 3D révèle un volume osseux insuffisant pour soutenir l'implant, une petite greffe osseuse ou un comblement sinusien sera réalisé préalablement ou pendant la pose."
      }
    ]
  },
  "blanchiment-dentaire-tanger": {
    slug: "blanchiment-dentaire-tanger",
    title: "Blanchiment Dentaire à Tanger",
    seoTitle: "Blanchiment Dentaire Tanger | Technologie Fläsh | APEX",
    seoDescription: "Éclaircissez votre sourire en une séance avec le blanchiment dentaire Fläsh à Tanger. Soin professionnel, sûr et efficace par le Dr. Reda Saoui.",
    heroTag: "Esthétique du Sourire",
    heroDesc: "Gagnez plusieurs teintes de blancheur en une seule séance grâce à la technologie professionnelle allemande Fläsh.",
    description: "Le blanchiment dentaire au fauteuil est la solution la plus rapide et la plus sûre pour éliminer les taches tenaces et retrouver la blancheur naturelle de vos dents. À APEX Dental Clinic, nous utilisons le système de pointe Fläsh (Allemagne), qui combine un gel blanchissant de haute qualité et une lampe LED spécifique. Cette méthode protège votre émail, minimise la sensibilité dentaire et offre des résultats spectaculaires visibles immédiatement après votre sortie du cabinet.",
    benefits: [
      { title: "Résultat Immédiat", desc: "Un sourire éclatant et des dents plus blanches en seulement 1 heure au cabinet." },
      { title: "Technologie Sûre", desc: "Le système Fläsh est scientifiquement prouvé pour protéger l'émail et les gencives pendant le traitement." },
      { title: "Sensibilité Réduite", desc: "L'utilisation de gels professionnels calibrés réduit considérablement l'hypersensibilité post-traitement." },
      { title: "Confiance Renouvelée", desc: "Un sourire blanc améliore instantanément votre image et votre confiance en vous." }
    ],
    priceRange: "Le blanchiment dentaire professionnel complet au cabinet (Technologie Fläsh) est proposé aux alentours de 2500 DHS. Un détartrage préalable est souvent recommandé pour un résultat optimal.",
    beforeAfterMention: "La différence est immédiate. Nous prenons une photo de la teinte de vos dents avec le teintier 'Avant' et la comparons avec la teinte obtenue 'Après' la séance. L'effet whaou est garanti !",
    faqs: [
      {
        question: "Le blanchiment abîme-t-il l'émail des dents ?",
        answer: "Non, le blanchiment réalisé par un chirurgien-dentiste avec des produits conformes aux normes médicales (comme Fläsh) est totalement sûr et n'altère pas la structure de l'émail."
      },
      {
        question: "Combien de temps dure l'effet du blanchiment ?",
        answer: "Les résultats durent généralement entre 1 et 3 ans, selon vos habitudes de vie (consommation de café, thé, tabac). Un petit entretien régulier permet de prolonger l'effet."
      },
      {
        question: "Mes dents seront-elles sensibles après ?",
        answer: "Une légère sensibilité au froid peut survenir pendant 24 à 48 heures, mais le système Fläsh contient un agent désensibilisant qui rend le processus très confortable."
      },
      {
        question: "Le blanchiment fonctionne-t-il sur les couronnes et les facettes ?",
        answer: "Non, les produits de blanchiment n'agissent que sur la dent naturelle. Si vous avez des couronnes ou des résines composites visibles, il faudra peut-être les remplacer après le blanchiment pour uniformiser la teinte."
      },
      {
        question: "Que dois-je éviter de manger après la séance ?",
        answer: "Il est conseillé d'éviter les aliments et boissons très colorés (café, thé noir, vin rouge, épices, fruits rouges) pendant au moins 48 heures après le traitement."
      }
    ]
  }
};
