const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
  observer.observe(el);
});



// ORVIA full bilingual language toggle
const translations = {
  "fr": {
    "navServices": "Services",
    "navProcess": "Méthode",
    "navWork": "Réalisations",
    "navTestimonials": "Avis",
    "navContact": "Contact",
    "navCta": "Demander un devis",
    "heroEyebrow": "Studio digital premium · Sites web · Identité · Conversion",
    "heroTitle": "Des sites web premium, fluides et pensés pour inspirer confiance.",
    "heroText": "ORVIA conçoit des expériences digitales haut de gamme pour les entreprises qui veulent paraître crédibles, modernes et désirables dès le premier clic.",
    "heroPrimary": "Créer mon site",
    "heroSecondary": "Découvrir l’offre",
    "mockMini": "Premium Web Presence",
    "mockTitle": "Votre entreprise mérite une image irréprochable.",
    "mockText": "Design minimal, contenu clair, performance rapide, mobile-first.",
    "mockCard1": "+42% demandes qualifiées",
    "mockCard2": "SEO ready",
    "mockCard3": "Design Apple-like",
    "strip": "Conçu pour les restaurants, cabinets, indépendants, artisans premium, agences et PME.",
    "servicesEyebrow": "Ce que l’on fait",
    "servicesTitle": "Une présence digitale complète, pas juste “un site”.",
    "service1Title": "Site vitrine premium",
    "service1Text": "Un site élégant, rapide et responsive pour présenter votre activité, vos services et votre univers avec une image haut de gamme.",
    "service2Title": "Landing page de conversion",
    "service2Text": "Une page pensée pour transformer les visiteurs en prospects : message clair, CTA forts, structure persuasive et design impactant.",
    "service3Title": "Refonte complète",
    "service3Text": "On transforme un site daté en expérience moderne, fluide et crédible, avec une meilleure hiérarchie visuelle et plus de confiance.",
    "service4Title": "Identité digitale",
    "service4Text": "Couleurs, typographies, direction artistique, ton de marque et cohérence visuelle pour donner une vraie personnalité à votre entreprise.",
    "service5Title": "Optimisation mobile",
    "service5Text": "Une expérience impeccable sur téléphone, car la majorité des clients découvrent aujourd’hui une entreprise depuis leur mobile.",
    "service6Title": "SEO & crédibilité",
    "service6Text": "Structure propre, textes optimisés, performance, balises essentielles et éléments de réassurance pour inspirer confiance immédiatement.",
    "packagesEyebrow": "Offres",
    "packagesTitle": "Des formules simples, premium et transparentes.",
    "price1Title": "Essentiel",
    "price1Price": "À partir de 690€",
    "price1Item1": "Site one-page premium",
    "price1Item2": "Design responsive",
    "price1Item3": "Formulaire de contact",
    "price1Item4": "Mise en ligne",
    "priceBadge": "Le plus demandé",
    "price2Title": "Signature",
    "price2Price": "À partir de 1 490€",
    "price2Item1": "Site complet 4–6 pages",
    "price2Item2": "Direction artistique premium",
    "price2Item3": "Textes optimisés",
    "price2Item4": "SEO de base",
    "price2Item5": "Animations fluides",
    "price3Title": "Elite",
    "price3Price": "Sur devis",
    "price3Item1": "Site sur mesure avancé",
    "price3Item2": "Identité digitale complète",
    "price3Item3": "Stratégie de conversion",
    "price3Item4": "Accompagnement premium",
    "processEyebrow": "Méthode ORVIA",
    "processTitle": "Un processus clair, rapide et maîtrisé.",
    "step1Title": "Diagnostic",
    "step1Text": "On comprend votre activité, vos clients, vos objectifs et l’image que vous voulez transmettre.",
    "step2Title": "Direction artistique",
    "step2Text": "On définit une esthétique premium : couleurs, style, typographie, structure et ambiance.",
    "step3Title": "Création",
    "step3Text": "On construit le site avec une attention forte portée à la fluidité, au mobile et aux détails visuels.",
    "step4Title": "Lancement",
    "step4Text": "On met le site en ligne, connecte le domaine et vérifie que l’expérience est parfaitement propre.",
    "workEyebrow": "Signature Concepts",
    "workTitle": "Trois univers premium pour montrer ce qu’ORVIA peut créer.",
    "portfolio1Kicker": "Hospitality · Restaurant premium",
    "portfolio1Title": "Maison Atelier",
    "portfolio1Text": "Une expérience immersive pour un restaurant parisien haut de gamme : atmosphère cinématique, réservation évidente, menu lisible et image instantanément plus désirable.",
    "portfolio1Point1": "Homepage éditoriale",
    "portfolio1Point2": "Réservation optimisée",
    "portfolio1Point3": "Direction artistique luxe",
    "portfolio2Kicker": "Health · Clinic premium",
    "portfolio2Title": "Lumina Clinic",
    "portfolio2Text": "Un site clair et rassurant pour une clinique esthétique : design lumineux, parcours patient simple, informations structurées et prise de contact fluide.",
    "portfolio2Point1": "Confiance immédiate",
    "portfolio2Point2": "Parcours mobile-first",
    "portfolio2Point3": "Image médicale premium",
    "portfolio3Kicker": "Real estate · Architecture",
    "portfolio3Title": "Aster Realty",
    "portfolio3Text": "Une présence digitale inspirée des magazines d’architecture : grands visuels, biens mis en scène, crédibilité renforcée et génération de leads qualifiés.",
    "portfolio3Point1": "Portfolio immobilier",
    "portfolio3Point2": "Look architectural",
    "portfolio3Point3": "Demandes qualifiées",
    "concept1P": "Maison Atelier",
    "concept1H": "French dining, reimagined.",
    "concept1Btn": "Reserve a table",
    "concept1Mobile1": "Menu",
    "concept1Mobile2": "Atelier",
    "concept1Mobile3": "Book tonight",
    "concept2P": "Lumina Clinic",
    "concept2H": "Precision care. Calm experience.",
    "concept2Btn": "Book consultation",
    "concept2Mobile1": "Consultation",
    "concept2Mobile2": "Lumina",
    "concept2Mobile3": "Start safely",
    "concept3P": "Aster Realty",
    "concept3H": "Exceptional spaces, curated.",
    "concept3Btn": "View properties",
    "concept3Mobile1": "Paris XVI",
    "concept3Mobile2": "Quiet luxury",
    "concept3Mobile3": "Explore",
    "testimonialsEyebrow": "Avis clients",
    "testimonialsTitle": "Des retours qui parlent d’eux-mêmes.",
    "test1": "“ORVIA a complètement transformé notre image. Le site donne immédiatement une impression de sérieux et de luxe.”",
    "test1Name": "Claire M.",
    "test1Role": "Fondatrice, Maison Atelier",
    "test2": "“Le résultat est fluide, élégant et beaucoup plus professionnel que ce que nous avions imaginé. Nos demandes entrantes ont augmenté.”",
    "test2Name": "Thomas R.",
    "test2Role": "Directeur, Cabinet Conseil",
    "test3": "“Très haut niveau de finition. Le site est rapide, beau sur mobile et parfaitement aligné avec notre positionnement premium.”",
    "test3Name": "Sarah L.",
    "test3Role": "Gérante, Restaurant Paris",
    "stat1Value": "7j",
    "stat1Text": "pour une première version",
    "stat2Value": "100%",
    "stat2Text": "responsive mobile",
    "stat3Value": "Premium",
    "stat3Text": "design & contenu",
    "stat4Value": "Clé en main",
    "stat4Text": "domaine + mise en ligne",
    "contactEyebrow": "Lancer un projet",
    "contactTitle": "Prêt à donner à votre entreprise le site qu’elle mérite ?",
    "contactText": "Expliquez-nous votre activité, votre objectif et le type d’image que vous voulez transmettre. ORVIA vous répond avec une proposition claire.",
    "linkedinBtn": "LinkedIn",
    "footerText": "Sites web premium pour entreprises ambitieuses.",
    "footerRights": "© 2026 ORVIA Agency. Tous droits réservés."
  },
  "en": {
    "navServices": "Services",
    "navProcess": "Process",
    "navWork": "Work",
    "navTestimonials": "Reviews",
    "navContact": "Contact",
    "navCta": "Get a quote",
    "heroEyebrow": "Premium digital studio · Websites · Identity · Conversion",
    "heroTitle": "Premium websites designed to inspire trust, feel fluid and convert.",
    "heroText": "ORVIA creates high-end digital experiences for businesses that want to look credible, modern and desirable from the very first click.",
    "heroPrimary": "Build my website",
    "heroSecondary": "Explore services",
    "mockMini": "Premium Web Presence",
    "mockTitle": "Your business deserves an impeccable digital image.",
    "mockText": "Minimal design, clear messaging, fast performance, mobile-first.",
    "mockCard1": "+42% qualified leads",
    "mockCard2": "SEO ready",
    "mockCard3": "Apple-like design",
    "strip": "Designed for restaurants, clinics, independent professionals, premium artisans, agencies and growing businesses.",
    "servicesEyebrow": "What we do",
    "servicesTitle": "A complete digital presence, not just “a website”.",
    "service1Title": "Premium showcase website",
    "service1Text": "An elegant, fast and responsive website to present your business, services and brand world with a high-end image.",
    "service2Title": "Conversion landing page",
    "service2Text": "A page designed to turn visitors into prospects: clear messaging, strong CTAs, persuasive structure and impactful design.",
    "service3Title": "Complete redesign",
    "service3Text": "We transform dated websites into modern, fluid and credible experiences with stronger visual hierarchy and trust.",
    "service4Title": "Digital identity",
    "service4Text": "Colors, typography, art direction, brand tone and visual consistency to give your business a distinctive personality.",
    "service5Title": "Mobile optimization",
    "service5Text": "A flawless mobile experience, because most clients now discover businesses from their phone.",
    "service6Title": "SEO & credibility",
    "service6Text": "Clean structure, optimized copy, performance, essential tags and reassurance elements to inspire trust immediately.",
    "packagesEyebrow": "Packages",
    "packagesTitle": "Simple, premium and transparent offers.",
    "price1Title": "Essential",
    "price1Price": "From €690",
    "price1Item1": "Premium one-page website",
    "price1Item2": "Responsive design",
    "price1Item3": "Contact form",
    "price1Item4": "Launch setup",
    "priceBadge": "Most requested",
    "price2Title": "Signature",
    "price2Price": "From €1,490",
    "price2Item1": "Complete 4–6 page website",
    "price2Item2": "Premium art direction",
    "price2Item3": "Optimized copywriting",
    "price2Item4": "Basic SEO",
    "price2Item5": "Fluid animations",
    "price3Title": "Elite",
    "price3Price": "Custom quote",
    "price3Item1": "Advanced custom website",
    "price3Item2": "Complete digital identity",
    "price3Item3": "Conversion strategy",
    "price3Item4": "Premium support",
    "processEyebrow": "ORVIA Method",
    "processTitle": "A clear, fast and controlled process.",
    "step1Title": "Diagnosis",
    "step1Text": "We understand your business, clients, goals and the image you want to communicate.",
    "step2Title": "Art direction",
    "step2Text": "We define a premium aesthetic: colors, style, typography, structure and atmosphere.",
    "step3Title": "Creation",
    "step3Text": "We build the website with strong attention to fluidity, mobile experience and visual details.",
    "step4Title": "Launch",
    "step4Text": "We put the website online, connect the domain and make sure the experience is perfectly clean.",
    "workEyebrow": "Signature Concepts",
    "workTitle": "Three premium worlds showing what ORVIA can create.",
    "portfolio1Kicker": "Hospitality · Premium restaurant",
    "portfolio1Title": "Maison Atelier",
    "portfolio1Text": "An immersive experience for a high-end Parisian restaurant: cinematic atmosphere, clear reservations, readable menus and instantly more desirable branding.",
    "portfolio1Point1": "Editorial homepage",
    "portfolio1Point2": "Optimized booking",
    "portfolio1Point3": "Luxury art direction",
    "portfolio2Kicker": "Health · Premium clinic",
    "portfolio2Title": "Lumina Clinic",
    "portfolio2Text": "A clear and reassuring website for an aesthetic clinic: bright design, simple patient journey, structured information and smooth contact flow.",
    "portfolio2Point1": "Immediate trust",
    "portfolio2Point2": "Mobile-first journey",
    "portfolio2Point3": "Premium medical image",
    "portfolio3Kicker": "Real estate · Architecture",
    "portfolio3Title": "Aster Realty",
    "portfolio3Text": "A digital presence inspired by architecture magazines: large visuals, refined property storytelling, stronger credibility and qualified lead generation.",
    "portfolio3Point1": "Real estate portfolio",
    "portfolio3Point2": "Architectural look",
    "portfolio3Point3": "Qualified leads",
    "concept1P": "Maison Atelier",
    "concept1H": "French dining, reimagined.",
    "concept1Btn": "Reserve a table",
    "concept1Mobile1": "Menu",
    "concept1Mobile2": "Atelier",
    "concept1Mobile3": "Book tonight",
    "concept2P": "Lumina Clinic",
    "concept2H": "Precision care. Calm experience.",
    "concept2Btn": "Book consultation",
    "concept2Mobile1": "Consultation",
    "concept2Mobile2": "Lumina",
    "concept2Mobile3": "Start safely",
    "concept3P": "Aster Realty",
    "concept3H": "Exceptional spaces, curated.",
    "concept3Btn": "View properties",
    "concept3Mobile1": "Paris XVI",
    "concept3Mobile2": "Quiet luxury",
    "concept3Mobile3": "Explore",
    "testimonialsEyebrow": "Client feedback",
    "testimonialsTitle": "Results and impressions that speak for themselves.",
    "test1": "“ORVIA completely transformed our image. The website immediately creates a feeling of seriousness and luxury.”",
    "test1Name": "Claire M.",
    "test1Role": "Founder, Maison Atelier",
    "test2": "“The result is fluid, elegant and far more professional than we imagined. Our inbound requests increased.”",
    "test2Name": "Thomas R.",
    "test2Role": "Director, Consulting Firm",
    "test3": "“A very high level of finish. The site is fast, beautiful on mobile and perfectly aligned with our premium positioning.”",
    "test3Name": "Sarah L.",
    "test3Role": "Manager, Paris Restaurant",
    "stat1Value": "7 days",
    "stat1Text": "for a first version",
    "stat2Value": "100%",
    "stat2Text": "mobile responsive",
    "stat3Value": "Premium",
    "stat3Text": "design & copy",
    "stat4Value": "Turnkey",
    "stat4Text": "domain + launch",
    "contactEyebrow": "Start a project",
    "contactTitle": "Ready to give your business the website it deserves?",
    "contactText": "Tell us about your business, your objective and the image you want to communicate. ORVIA will reply with a clear proposal.",
    "linkedinBtn": "LinkedIn",
    "footerText": "Premium websites for ambitious businesses.",
    "footerRights": "© 2026 ORVIA Agency. All rights reserved."
  }
};

const languageToggle = document.querySelector('.language-toggle');
const currentLangLabel = document.querySelector('.lang-current');
const nextLangLabel = document.querySelector('.lang-next');

function setLanguage(lang) {
  const copy = translations[lang] || translations.fr;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (copy[key]) element.textContent = copy[key];
  });

  if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();
  if (nextLangLabel) nextLangLabel.textContent = lang === 'fr' ? 'EN' : 'FR';

  document.documentElement.lang = lang;
  document.title = lang === 'fr'
    ? 'ORVIA Agency — Création de sites web premium'
    : 'ORVIA Agency — Premium Web Design Studio';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', lang === 'fr'
      ? 'ORVIA Agency crée des sites web premium, élégants et performants pour entreprises ambitieuses.'
      : 'ORVIA Agency creates premium, elegant and high-performing websites for ambitious businesses.');
  }

  localStorage.setItem('orvia-language', lang);
}

const savedLanguage = localStorage.getItem('orvia-language') || 'fr';
setLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const current = localStorage.getItem('orvia-language') || 'fr';
    setLanguage(current === 'fr' ? 'en' : 'fr');
  });
}
