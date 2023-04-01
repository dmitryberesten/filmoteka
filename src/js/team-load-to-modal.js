// РЕКОМЕНДАЦІЇ
// 1. Створити модалку команди.
// 2. Рендер розмітки модалки.
// 2. Додати логіку показу/закриття по бекдропу та ESCAPE.

const refs = {
    openModal: document.querySelector('.open-modal-team'),
    closeModal: document.querySelector('.close-modal-team'),
    teamBackdrop: document.querySelector('.backdrop-modal'),
  };

refs.openModal.addEventListener('click', openModalTeam);
refs.closeModal.addEventListener('click', closeModalTeam);

function openModalTeam(event) {
    refs.teamBackdrop.classList.remove('team__backdrop--hidden');
    document.addEventListener('keydown', onEscapeClose);
    document.addEventListener('click', onBackdropClose);
    document.body.style.overflow = 'hidden';
  }

function closeModalTeam(event) {
    refs.teamBackdrop.classList.add('team__backdrop--hidden');
    document.removeEventListener('keydown', onEscapeClose);
    document.body.style.overflow = '';
  }

  function onEscapeClose(event) {
    if (event.code === 'Escape') {
      closeModalTeam();
    }
  }
  
  function onBackdropClose(event) {
    if (event.target === refs.teamBackdrop) {
      closeModalTeam();
    }
  }
