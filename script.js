// Dicionário com as traduções dos textos marcados
const translations = {
  pt: {
    nav_about: "Sobre mim",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    nav_skills: "Habilidades Técnicas",
    nav_achievements: "Conquistas",
    download_cv: "Baixar Currículo!",
    about_title: "Sobre mim"
  },
  en: {
    nav_about: "About me",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_skills: "Technical Skills",
    nav_achievements: "Achievements",
    download_cv: "Download CV!",
    about_title: "About me"
  },
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    nav_skills: "Habilidades Técnicas",
    nav_achievements: "Logros",
    download_cv: "¡Descargar CV!",
    about_title: "Sobre mí"
  },
  it: {
    nav_about: "Su di me",
    nav_projects: "Progetti",
    nav_contact: "Contatto",
    nav_skills: "Competenze Tecniche",
    nav_achievements: "Traguardi",
    download_cv: "Scarica CV!",
    about_title: "Su di me"
  }
};

// Alterna o dropdown do menu
function toggleLangMenu() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.toggle('show');
}

// Fecha o menu se clicar fora
window.onclick = function(event) {
  if (!event.target.matches('.lang-btn') && !event.target.matches('.lang-btn *')) {
    const dropdowns = document.getElementsByClassName("lang-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Aplica a tradução dinamicamente na página
function changeLanguage(lang) {
  if (!translations[lang]) return;

  // Atualiza todos os elementos que possuem o atributo data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Atualiza o indicador do botão principal
  const langText = document.querySelector('.lang-text');
  if (langText) {
    langText.innerText = lang.toUpperCase();
  }

  // Atualiza a tag lang da página HTML
  document.documentElement.lang = lang;
}
