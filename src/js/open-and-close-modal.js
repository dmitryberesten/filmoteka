import * as modalFunctions from './loading-into-modal';

const modal = document.getElementById('info-modal');

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.remove('open');
    localStorage.removeItem('modalCardData');
  }
});

const backdrop = document.getElementById('close-modal');

backdrop.addEventListener('click', event => {
  console.log('111 event.target ', event.target);
  console.log('111 backdrop ', backdrop);
  if (event.target == backdrop) {
    console.log('!!! ');
    modal.classList.remove('open');
    localStorage.removeItem('modalCardData');
  }
});

window.onclick = event => {
  let modal = document.getElementById('info-modal');

  if (event.target == modal) {
    modal.classList.remove('open');
    localStorage.removeItem('modalCardData');
  }
};

window.onload = () => {
  const movieListItems = document.getElementsByClassName('movies')[0];
  console.log('movieListItems', movieListItems);
  movieListItems.addEventListener('click', e => {
    const cardData = { ...e.target.dataset };
    console.log('bla ', cardData);
    localStorage.setItem('modalCardData', JSON.stringify(cardData));
    openModal();
  });
};

const openModal = () => {
  const modal = document.getElementById('info-modal');
  modal.classList.add('open');
  modalFunctions.getInitialModalData();
};
