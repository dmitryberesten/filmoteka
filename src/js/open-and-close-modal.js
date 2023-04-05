import { updateModalbuttons } from './add-to-watched&queue';
import { fetchMovieById } from './api';
import * as modalFunctions from './loading-into-modal';
import { getFromStorage, localStorageKeys } from './local-storage';
import { refs } from './refs';
import { state } from './state';

const modal = document.getElementById('info-modal');
const modalWind = document.getElementById('modal');

const animationLogic = () => {
  modalWind.classList.remove('openModalAnimation');
  modalWind.classList.add('closeModalAnimation');
  setTimeout(() => {
    modal.classList.remove('open');
    localStorage.removeItem('modalCardData');
  }, 600);
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    animationLogic();
  }
});

const backdrop = document.getElementById('close-modal');

backdrop.addEventListener('click', event => {
  if (event.target == backdrop) {
    animationLogic();
  }
});

window.onclick = event => {
  let modal = document.getElementById('info-modal');

  if (event.target == modal) {
    animationLogic();
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
    const watchedFilms = getFromStorage(localStorageKeys.WATCHED) || [];
    const queueFilms = getFromStorage(localStorageKeys.QUEUE) || [];

    if (watchedFilms.find(film => film.id === state.activeFilm.id)) {
      refs.addToWatchedBtn.innerText = 'REMOVE FROM WATCHED';
    } else {
      refs.addToWatchedBtn.innerText = 'ADD TO WATCHED';
    }
    if (queueFilms.find(film => film.id === state.activeFilm.id)) {
      refs.addToQueueBtn.innerText = 'REMOVE FROM QUEUE';
    } else {
      refs.addToQueueBtn.innerText = 'ADD TO QUEUE';
    }
    //buttons
  };
};

const openModal = () => {
  const modal = document.getElementById('info-modal');

  modal.classList.add('open');
  modalWind.classList.add('openModalAnimation');

  modalFunctions.getInitialModalData();
};
