/**
 * Sistema de Internacionalização (i18n) e Manipulação do DOM
 * Idiomas Suportados: PT, EN, ES, FR, IT
 */

const translations = {
  pt: {
    nav_about: "Sobre Mim",
    nav_experience: "Experiência",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    hero_title: "Engenheiro de SRE & Observabilidade",
    hero_subtitle: "Especialista em confiabilidade, monitoramento de sistemas e infraestrutura em nuvem.",
    hero_cta: "Ver Projetos",
    hero_contact: "Entrar em Contato",
    about_title: "Sobre Mim",
    about_p1: "Olá! Sou um profissional focado na garantia de estabilidade, escalabilidade e visibilidade de aplicações de grande porte.",
    about_p2: "Tenho vasta experiência em monitoramento com ferramentas como Zabbix, Elastic Stack e ServiceNow, atuando na prevenção e resolução ágil de incidentes.",
    about_p3: "Minha base técnica inclui linguagens como Python, JavaScript, HTML5 e CSS3 para automação e criação de visões personalizadas.",
    about_p4: "Além disso, busco constantemente integrar práticas de DevSecOps, automação de infraestrutura e otimização de métricas de negócio.",
    about_p5: "Atualmente, minha orientação acadêmica e profissional se enfoca em <strong>Engenharia de Software</strong>, aprofundando em desenvolvimento Full-Stack, arquitetura de sistemas, Cloud e <strong>Inteligencia Artificial</strong>.",
    exp_title: "Experiência Profissional",
    exp_role1_title: "Jovem Aprendiz - SRE & Observabilidade",
    exp_role1_company: "Vivo (Telefonica Brasil)",
    exp_role1_period: "Maio 2025 - Presente",
    exp_role1_desc1: "Atuação no gerenciamento de saúde e confiabilidade dos sistemas legados e microserviços.",
    exp_role1_desc2: "Construção de dashboards de observabilidade no Zabbix e Elastic Stack.",
    exp_role1_desc3: "Análise de logs e métricas para redução do MTTR (Mean Time to Resolution) e suporte ao time de incidentes.",
    skills_title: "Habilidades Técnicas",
    skills_cat1: "Observabilidade & Monitoramento",
    skills_cat2: "Linguagens & Web",
    skills_cat3: "Ferramentas & ITSM",
    projects_title: "Projetos em Destaque",
    projects_view_code: "Ver Código",
    projects_view_demo: "Ver Demo",
    contact_title: "Contato",
    contact_subtitle: "Vamos conversar sobre infraestrutura, SRE ou novos projetos?",
    contact_name: "Seu Nome",
    contact_email: "Seu E-mail",
    contact_message: "Sua Mensagem",
    contact_send: "Enviar Mensagem",
    footer_text: "Todos os direitos reservados."
  },
  en: {
    nav_about: "About Me",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "SRE & Observability Engineer",
    hero_subtitle: "Specialist in system reliability, monitoring, and cloud infrastructure.",
    hero_cta: "View Projects",
    hero_contact: "Get in Touch",
    about_title: "About Me",
    about_p1: "Hello! I am a professional focused on ensuring stability, scalability, and visibility for large-scale applications.",
    about_p2: "I have extensive experience in monitoring with tools like Zabbix, Elastic Stack, and ServiceNow, working on swift incident prevention and resolution.",
    about_p3: "My technical foundation includes languages like Python, JavaScript, HTML5, and CSS3 for automation and custom views creation.",
    about_p4: "Additionally, I continuously seek to integrate DevSecOps practices, infrastructure automation, and business metrics optimization.",
    about_p5: "Currently, my academic and professional focus is on <strong>Software Engineering</strong>, deepening knowledge in Full-Stack development, system architecture, Cloud, and <strong>Artificial Intelligence</strong>.",
    exp_title: "Professional Experience",
    exp_role1_title: "Young Apprentice - SRE & Observability",
    exp_role1_company: "Vivo (Telefonica Brasil)",
    exp_role1_period: "May 2025 - Present",
    exp_role1_desc1: "Managing system health and reliability for legacy systems and microservices.",
    exp_role1_desc2: "Building observability dashboards using Zabbix and Elastic Stack.",
    exp_role1_desc3: "Analyzing logs and metrics to reduce MTTR (Mean Time to Resolution) and support the incident management team.",
    skills_title: "Technical Skills",
    skills_cat1: "Observability & Monitoring",
    skills_cat2: "Languages & Web",
    skills_cat3: "Tools & ITSM",
    projects_title: "Featured Projects",
    projects_view_code: "View Code",
    projects_view_demo: "View Demo",
    contact_title: "Contact",
    contact_subtitle: "Let's talk about infrastructure, SRE, or new projects?",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Message",
    footer_text: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('preferred_lang') || 'pt';

/**
 * Aplica o idioma selecionado nos elementos com data-i18n e data-i18n-placeholder
 */
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Idioma "${lang}" não encontrado. Usando 'pt' como fallback.`);
    lang = 'pt';
  }

  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;

  // Atualização de elementos de texto/HTML
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];

    if (translation !== undefined) {
      // Uso direto do innerHTML para manter suporte a tags (<strong>, <span>, etc)
      element.innerHTML = translation;
    }
  });

  // Atualização de Placeholders em formulários
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = translations[lang][key];

    if (translation !== undefined) {
      element.setAttribute('placeholder', translation);
    }
  });

  updateLanguageUI(lang);
}

/**
 * Atualiza o ícone e rótulo do seletor de idioma na interface
 */
function updateLanguageUI(activeLang) {
  const flags = {
    pt: 'fi-br',
    en: 'fi-us',
    es: 'fi-es',
    fr: 'fi-fr',
    it: 'fi-it'
  };

  const btnFlag = document.getElementById('btnFlag');
  const btnLang = document.getElementById('btnLang');

  if (btnFlag) {
    btnFlag.className = `fi ${flags[activeLang] || 'fi-br'}`;
  }
  if (btnLang) {
    btnLang.textContent = activeLang.toUpperCase();
  }
}

/**
 * Chamado diretamente via eventos ou onclick no HTML para alterar idioma
 */
function changeLanguage(lang) {
  setLanguage(lang);
  closeLangDropdown();
}

/**
 * Alterna visibilidade do menu suspenso de idiomas
 */
function toggleLangMenu() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    const isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
  }
}

function closeLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}// Continuação do objeto 'translations' (adicione estas chaves ao objeto principal)
Object.assign(translations, {
  es: {
    nav_about: "Sobre Mí",
    nav_experience: "Experiencia",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_title: "Ingeniero de SRE & Observabilidad",
    hero_subtitle: "Especialista en confiabilidad, monitoreo de sistemas e infraestructura en la nube.",
    hero_cta: "Ver Proyectos",
    hero_contact: "Ponerse en Contacto",
    about_title: "Sobre Mí",
    about_p1: "¡Hola! Soy un profesional enfocado en garantizar la estabilidad, escalabilidad y visibilidad de aplicaciones a gran escala.",
    about_p2: "Tengo amplia experiencia en monitoreo con herramientas como Zabbix, Elastic Stack y ServiceNow, trabajando en la prevención y resolución ágil de incidentes.",
    about_p3: "Mi base técnica incluye lenguajes como Python, JavaScript, HTML5 y CSS3 para automatización y creación de vistas personalizadas.",
    about_p4: "Además, busco constantemente integrar prácticas de DevSecOps, automatización de infraestructura y optimización de métricas de negocio.",
    about_p5: "Actualmente, mi orientación académica se enfoca en <strong>Ingeniería de Software</strong>, profundizando en desarrollo Full-Stack, arquitectura de sistemas, Cloud e <strong>Inteligencia Artificial</strong>.",
    exp_title: "Experiencia Profesional",
    exp_role1_title: "Joven Aprendiz - SRE & Observabilidad",
    exp_role1_company: "Vivo (Telefónica Brasil)",
    exp_role1_period: "Mayo 2025 - Presente",
    exp_role1_desc1: "Gestión de la salud y confiabilidad de sistemas legados y microservicios.",
    exp_role1_desc2: "Construcción de dashboards de observabilidad en Zabbix y Elastic Stack.",
    exp_role1_desc3: "Análisis de logs y métricas para la reducción del MTTR (Mean Time to Resolution) y soporte al equipo de incidentes.",
    skills_title: "Habilidades Técnicas",
    skills_cat1: "Observabilidad & Monitoreo",
    skills_cat2: "Lenguajes & Web",
    skills_cat3: "Herramientas & ITSM",
    projects_title: "Proyectos Destacados",
    projects_view_code: "Ver Código",
    projects_view_demo: "Ver Demo",
    contact_title: "Contacto",
    contact_subtitle: "¿Hablamos de infraestructura, SRE o nuevos proyectos?",
    contact_name: "Tu Nombre",
    contact_email: "Tu Correo Electrónico",
    contact_message: "Tu Mensaje",
    contact_send: "Enviar Mensaje",
    footer_text: "Todos los derechos reservados."
  },
  fr: {
    nav_about: "À Propos",
    nav_experience: "Expérience",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    hero_title: "Ingénieur SRE & Observabilité",
    hero_subtitle: "Spécialiste de la fiabilité, de la surveillance des systèmes et de l'infrastructure cloud.",
    hero_cta: "Voir les Projets",
    hero_contact: "Me Contacter",
    about_title: "À Propos de Moi",
    about_p1: "Bonjour ! Je suis un professionnel axé sur la garantie de la stabilité, de la scalabilité et de la visibilité des applications à grande échelle.",
    about_p2: "J'ai une vaste expérience de la surveillance avec des outils comme Zabbix, Elastic Stack et ServiceNow, travaillant sur la prévention et la résolution rapide des incidents.",
    about_p3: "Ma base technique comprend des langages tels que Python, JavaScript, HTML5 et CSS3 pour l'automatisation et la création de vues personnalisées.",
    about_p4: "De plus, je cherche constamment à intégrer les pratiques DevSecOps, l'automatisation des infrastructures et l'optimisation des métriques métier.",
    about_p5: "Actuellement, mon orientation académique et professionnelle se concentre sur le <strong>Génie Logiciel</strong>, en approfondissant le développement Full-Stack, l'architecture système, le Cloud et l'<strong>Intelligence Artificielle</strong>.",
    exp_title: "Expérience Professionnelle",
    exp_role1_title: "Jeune Apprenti - SRE & Observabilité",
    exp_role1_company: "Vivo (Telefonica Brasil)",
    exp_role1_period: "Mai 2025 - Présent",
    exp_role1_desc1: "Gestion de la santé et de la fiabilité des systèmes hérités et des microservices.",
    exp_role1_desc2: "Création de tableaux de bord d'observabilité sur Zabbix et Elastic Stack.",
    exp_role1_desc3: "Analyse des logs et des métriques pour réduire le MTTR (Mean Time to Resolution) et soutien à l'équipe d'incidents.",
    skills_title: "Compétences Techniques",
    skills_cat1: "Observabilité & Surveillance",
    skills_cat2: "Langages & Web",
    skills_cat3: "Outils & ITSM",
    projects_title: "Projets En Vedette",
    projects_view_code: "Voir le Code",
    projects_view_demo: "Voir la Demo",
    contact_title: "Contact",
    contact_subtitle: "Parlons d'infrastructure, de SRE ou de nouveaux projets ?",
    contact_name: "Votre Nom",
    contact_email: "Votre E-mail",
    contact_message: "Votre Message",
    contact_send: "Envoyer le Message",
    footer_text: "Tous droits réservés."
  },
  it: {
    nav_about: "Chi Sono",
    nav_experience: "Esperienza",
    nav_skills: "Competenze",
    nav_projects: "Progetti",
    nav_contact: "Contatti",
    hero_title: "Ingegnere SRE & Osservabilità",
    hero_subtitle: "Specialista in affidabilità, monitoraggio dei sistemi e infrastruttura cloud.",
    hero_cta: "Vedi Progetti",
    hero_contact: "Contattami",
    about_title: "Chi Sono",
    about_p1: "Ciao! Sono un professionista focalizzato nel garantire la stabilità, la scalabilità e la visibilità di applicazioni su larga scala.",
    about_p2: "Ho una vasta esperienza nel monitoraggio con strumenti come Zabbix, Elastic Stack e ServiceNow, operando nella prevenzione e risoluzione rapida degli incidenti.",
    about_p3: "La mia base tecnica include linguaggi come Python, JavaScript, HTML5 e CSS3 per l'automazione e la creazione di viste personalizzate.",
    about_p4: "Inoltre, cerco costantemente di integrare pratiche DevSecOps, automazione dell'infrastruttura e ottimizzazione delle metriche di business.",
    about_p5: "Attualmente, il mio orientamento accademico si concentra sull'<strong>Ingegneria del Software</strong>, approfondendo lo sviluppo Full-Stack, l'architettura dei sistemi, il Cloud e l'<strong>Intelligenza Artificiale</strong>.",
    exp_title: "Esperienza Professionale",
    exp_role1_title: "Giovane Apprendista - SRE & Osservabilità",
    exp_role1_company: "Vivo (Telefonica Brasil)",
    exp_role1_period: "Maggio 2025 - Presente",
    exp_role1_desc1: "Gestione della salute e dell'affidabilità dei sistemi legacy e dei microservizi.",
    exp_role1_desc2: "Creazione di dashboard di osservabilità su Zabbix ed Elastic Stack.",
    exp_role1_desc3: "Analisi di log e metriche per ridurre il MTTR (Mean Time to Resolution) e supporto al team di gestione incidenti.",
    skills_title: "Competenze Tecniche",
    skills_cat1: "Osservabilità & Monitoraggio",
    skills_cat2: "Linguaggi & Web",
    skills_cat3: "Strumenti & ITSM",
    projects_title: "Progetti in Evidenza",
    projects_view_code: "Vedi Codice",
    projects_view_demo: "Vedi Demo",
    contact_title: "Contatti",
    contact_subtitle: "Parliamo di infrastruttura, SRE o nuovi progetti?",
    contact_name: "Il Tuo Nome",
    contact_email: "La Tua Email",
    contact_message: "Il Tuo Messaggio",
    contact_send: "Invia Messaggio",
    footer_text: "Tutti i diritti riservati."
  }
});

/**
 * Inicialização e manipulação de eventos do DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o idioma salvo ou padrão
  setLanguage(currentLang);

  // Botão "Voltar ao topo"
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Fechar dropdown de idioma ao clicar fora dele
  document.addEventListener('click', (event) => {
    const langContainer = document.querySelector('.lang-selector-container');
    if (langContainer && !langContainer.contains(event.target)) {
      closeLangDropdown();
    }
  });

  // Manipulação básica do formulário de contato (prevenção de reload padrão)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Adicione a lógica de envio (ex: Formspree, EmailJS ou API própria) aqui
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
    });
  }
});

