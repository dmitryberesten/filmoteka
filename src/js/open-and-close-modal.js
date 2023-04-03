import { updateModalbuttons } from './add-to-watched&queue';
import { fetchMovieById } from './api';
import * as modalFunctions from './loading-into-modal';
import { getFromStorage, localStorageKeys } from './local-storage';
import { refs } from './refs';
import { state } from './state';

const modal = document.getElementById('info-modal');

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.remove('open');
    localStorage.removeItem('modalCardData');
  }
});

const backdrop = document.getElementById('close-modal');

backdrop.addEventListener('click', event => {
  if (event.target == backdrop) {
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
  const movieLib = document.getElementsByClassName('movies-lib')[0];

  movieListItems?.addEventListener('click', e => {
    onMovieItemHandler(e);
  });
  movieLib?.addEventListener('click', e => {
    onMovieItemHandler(e);
  });

  const onMovieItemHandler = e => {
    const cardData = { ...e.target.dataset };
    if (!Object.keys(cardData).length) {
      return;
    }
    ////buttons
    state.activeFilm = cardData;
    ////buttons

    localStorage.setItem('modalCardData', JSON.stringify(cardData));
    openModal();

    //buttons
    updateModalbuttons();
    //buttons
  };
};

const openModal = () => {
  const modal = document.getElementById('info-modal');

  modal.classList.add('open');
  modalFunctions.getInitialModalData();
};
