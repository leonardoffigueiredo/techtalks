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
  

  function redirectToInstagram01() {
    window.location.href = "https://www.instagram.com/lf.figueiredo";
  }

  function redirectToInstagram02() {
    window.location.href = "https://www.instagram.com/sokaio904";
  }

  function redirectToInstagram03() {
    window.location.href = "https://www.instagram.com/dy_soulz";
  }

  function redirectToInstagram04() {
    window.location.href = "https://www.instagram.com/_felipe566";
  }

