// Abre/Fecha o menu de idiomas ao clicar no botão
function toggleLangMenu() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.toggle('show');
}

// Fecha o menu se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.lang-btn')) {
    const dropdowns = document.getElementsByClassName("lang-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Função para mudar o idioma da página
function changeLanguage(lang) {
  // Exemplo de redirecionamento para páginas traduzidas (se existirem):
  // window.location.href = `index_${lang}.html`;

  alert("Idioma selecionado: " + lang.toUpperCase());
}
