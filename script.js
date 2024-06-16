// JavaScript para abrir e fechar o pop-up de contato

const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

contactBtn.addEventListener('click', () => {
    contactPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
    }
});

function abrirNoticia(url) {
    window.open(url, '_blank');
  }
  