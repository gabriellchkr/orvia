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


// ORVIA language toggle
const translations = {
  fr: {
    navServices: "Services",
    navProcess: "Méthode",
    navWork: "Réalisations",
    navTestimonials: "Avis",
    navContact: "Contact",
    navCta: "Demander un devis",
    heroEyebrow: "Studio digital premium · Sites web · Identité · Conversion",
    heroTitle: "Des sites web premium, fluides et pensés pour inspirer confiance.",
    heroText: "ORVIA conçoit des expériences digitales haut de gamme pour les entreprises qui veulent paraître crédibles, modernes et désirables dès le premier clic.",
    heroPrimary: "Créer mon site",
    heroSecondary: "Découvrir l’offre",
    mockMini: "Premium Web Presence",
    mockTitle: "Votre entreprise mérite une image irréprochable.",
    mockText: "Design minimal, contenu clair, performance rapide, mobile-first.",
    strip: "Conçu pour les restaurants, cabinets, indépendants, artisans premium, agences et PME.",
    servicesEyebrow: "Ce que l’on fait",
    servicesTitle: "Une présence digitale complète, pas juste “un site”.",
    packagesEyebrow: "Offres",
    packagesTitle: "Des formules simples, premium et transparentes.",
    processEyebrow: "Méthode ORVIA",
    processTitle: "Un processus clair, rapide et maîtrisé.",
    workEyebrow: "Signature Concepts",
    workTitle: "Trois univers premium pour montrer ce qu’ORVIA peut créer.",
    testimonialsEyebrow: "Avis clients",
    testimonialsTitle: "Des retours qui parlent d’eux-mêmes.",
    contactEyebrow: "Lancer un projet",
    contactTitle: "Prêt à donner à votre entreprise le site qu’elle mérite ?",
    contactText: "Expliquez-nous votre activité, votre objectif et le type d’image que vous voulez transmettre. ORVIA vous répond avec une proposition claire.",
    footerText: "Sites web premium pour entreprises ambitieuses.",
    footerRights: "© 2026 ORVIA Agency. Tous droits réservés.",
    langCurrent: "FR",
    langNext: "EN"
  },
  en: {
    navServices: "Services",
    navProcess: "Process",
    navWork: "Work",
    navTestimonials: "Reviews",
    navContact: "Contact",
    navCta: "Get a quote",
    heroEyebrow: "Premium digital studio · Websites · Identity · Conversion",
    heroTitle: "Premium websites designed to feel fluid, credible and unforgettable.",
    heroText: "ORVIA creates high-end digital experiences for businesses that want to look credible, modern and desirable from the very first click.",
    heroPrimary: "Build my website",
    heroSecondary: "Explore services",
    mockMini: "Premium Web Presence",
    mockTitle: "Your business deserves an impeccable digital image.",
    mockText: "Minimal design, clear messaging, fast performance, mobile-first.",
    strip: "Designed for restaurants, clinics, independents, premium artisans, agencies and small businesses.",
    servicesEyebrow: "What we do",
    servicesTitle: "A complete digital presence, not just “a website”.",
    packagesEyebrow: "Packages",
    packagesTitle: "Simple, premium and transparent offers.",
    processEyebrow: "ORVIA Method",
    processTitle: "A clear, fast and controlled process.",
    workEyebrow: "Signature Concepts",
    workTitle: "Three premium worlds showing what ORVIA can create.",
    testimonialsEyebrow: "Client feedback",
    testimonialsTitle: "Results and impressions that speak for themselves.",
    contactEyebrow: "Start a project",
    contactTitle: "Ready to build a digital presence worthy of your ambition?",
    contactText: "Tell us about your business, your goals and the image you want to convey. ORVIA will reply with a clear proposal.",
    footerText: "Premium websites for ambitious businesses.",
    footerRights: "© 2026 ORVIA Agency. All rights reserved.",
    langCurrent: "EN",
    langNext: "FR"
  }
};

const languageSelectors = {
  navServices: '.nav-links a[href="#services"]',
  navProcess: '.nav-links a[href="#process"]',
  navWork: '.nav-links a[href="#work"]',
  navTestimonials: '.nav-links a[href="#testimonials"]',
  navContact: '.nav-links a[href="#contact"]',
  navCta: '.nav-cta',
  heroEyebrow: '.hero .eyebrow',
  heroTitle: '.hero-title',
  heroText: '.hero-text',
  heroPrimary: '.hero-actions .primary',
  heroSecondary: '.hero-actions .secondary',
  mockMini: '.mock-copy .mini',
  mockTitle: '.mock-copy h2',
  mockText: '.mock-copy p:last-child',
  strip: '.logo-strip p',
  servicesEyebrow: '#services .section-heading .eyebrow',
  servicesTitle: '#services .section-heading h2',
  packagesEyebrow: '.packages .section-heading .eyebrow',
  packagesTitle: '.packages .section-heading h2',
  processEyebrow: '#process .section-heading .eyebrow',
  processTitle: '#process .section-heading h2',
  workEyebrow: '#work .section-heading .eyebrow',
  workTitle: '#work .section-heading h2',
  testimonialsEyebrow: '#testimonials .section-heading .eyebrow',
  testimonialsTitle: '#testimonials .section-heading h2',
  contactEyebrow: '#contact .eyebrow',
  contactTitle: '#contact h2',
  contactText: '#contact .contact-card > p:not(.eyebrow)',
  footerText: '.footer > p',
  footerRights: '.footer > span'
};

const languageToggle = document.querySelector('.language-toggle');
const currentLangLabel = document.querySelector('.lang-current');
const nextLangLabel = document.querySelector('.lang-next');

function setLanguage(lang) {
  const copy = translations[lang];
  Object.entries(languageSelectors).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element && copy[key]) element.textContent = copy[key];
  });

  if (currentLangLabel) currentLangLabel.textContent = copy.langCurrent;
  if (nextLangLabel) nextLangLabel.textContent = copy.langNext;

  document.documentElement.lang = lang;
  localStorage.setItem('orvia-language', lang);
}

const savedLanguage = localStorage.getItem('orvia-language') || 'fr';
setLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLanguage = (localStorage.getItem('orvia-language') || 'fr') === 'fr' ? 'en' : 'fr';
    setLanguage(nextLanguage);
  });
}
