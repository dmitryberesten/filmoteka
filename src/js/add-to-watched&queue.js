import {
  getFromStorage,
  localStorageKeys,
  setToLocalStorage,
} from './local-storage';
import { refs } from './refs';
import { renderMoviesList } from './render-from-storage';
import {
  clearLibraryMarkup,
  loadFromStorageWatched,
  onClickWatched,
  renderMoviesList,
} from './render-from-storage';
import { moviesEl } from './rendering-movie-cards';
import { state } from './state';

export const updateButton = (button, action, btnText) => {
  if (action === 'add') {
    button.dataset.value = 'remove';
    button.innerText = `REMOVE FROM ${btnText}`;
  } else {
    button.dataset.value = 'add';
    button.innerText = `ADD TO ${btnText}`;
  }
};

export const onBtnAddToLibrary = evt => {
  if (evt.target.nodeName !== 'BUTTON') return;

  const btnText = evt.target.classList.contains('add-to-queue-btn')
    ? 'QUEUE'
    : 'WATCHED';

  const array = getFromStorage(localStorageKeys[btnText]) || [];
  const watchedFilms = getFromStorage(localStorageKeys.WATCHED) || [];
  const queueFilms = getFromStorage(localStorageKeys.QUEUE) || [];
  if (evt.target.dataset.value === 'add') {
    if (
      btnText === 'QUEUE' &&
      watchedFilms.find(film => film.id === state.activeFilm.id)
    ) {
      deleteFromStorageFilm(watchedFilms, 'watched');

      saveToStorageFilm(queueFilms, 'queue');
      updateButton(refs.addToQueueBtn, 'add', 'QUEUE');
      updateButton(refs.addToWatchedBtn, 'remove', 'WATCHED');

      return;
    } else if (
      btnText === 'WATCHED' &&
      queueFilms.find(film => film.id === state.activeFilm.id)
    ) {
      deleteFromStorageFilm(queueFilms, 'queue');
      saveToStorageFilm(watchedFilms, 'watched');
      updateButton(refs.addToWatchedBtn, 'add', 'WATCHED');
      updateButton(refs.addToQueueBtn, 'remove', 'QUEUE');

      return;
    }

    saveToStorageFilm(array, btnText.toLowerCase());
    updateButton(evt.target, 'add', btnText);
  } else {
    deleteFromStorageFilm(array, btnText.toLowerCase());
    updateButton(evt.target, 'remove', btnText);
  }
};

function saveToStorageFilm(array, key) {
  array.push(state.activeFilm);
  setToLocalStorage(key, array);
}
function deleteFromStorageFilm(array, key) {
  const filteredFilms = array.filter(film => film.id !== state.activeFilm.id);
  setToLocalStorage(key, filteredFilms);
}
export function updateModalbuttons() {
  const watchedFilms = getFromStorage(localStorageKeys.WATCHED) || [];
  const queueFilms = getFromStorage(localStorageKeys.QUEUE) || [];

  if (watchedFilms.find(film => film.id === state.activeFilm.id)) {
    updateButton(refs.addToWatchedBtn, 'add', 'WATCHED');
    updateButton(refs.addToQueueBtn, 'remove', 'QUEUE');
  } else if (queueFilms.find(film => film.id === state.activeFilm.id)) {
    updateButton(refs.addToQueueBtn, 'add', 'QUEUE');
    updateButton(refs.addToWatchedBtn, 'remove', 'WATCHED');
  } else {
    updateButton(refs.addToWatchedBtn, 'remove', 'WATCHED');
    updateButton(refs.addToQueueBtn, 'remove', 'QUEUE');
  }
}

export function updateMarkupLibrary(evt) {
  if (evt.target.innerText === 'ADD TO WATCHED') {
    deleteFromWatchedMarkup();
  } else if (evt.target.innerText === 'REMOVE FROM WATCHED') {
    deleteFromWatchedMarkup();
  } else if (evt.target.innerText === 'ADD TO QUEUE') {
    deleteFromQueueMarkup();
  } else if (evt.target.innerText === 'REMOVE FROM QUEUE') {
    deleteFromQueueMarkup();
  }
}
function deleteFromWatchedMarkup() {
  refs.moviesLib.innerHTML = '';
  const watchedFilmsinLocalStorage =
    getFromStorage(localStorageKeys.WATCHED) || [];
  refs.moviesLib.insertAdjacentHTML(
    'beforeend',
    renderMoviesList(watchedFilmsinLocalStorage)
  );
}

function deleteFromQueueMarkup() {
  refs.moviesLib.innerHTML = '';
  const queueFilmsinLocalStorage = getFromStorage(localStorageKeys.QUEUE) || [];
  refs.moviesLib.insertAdjacentHTML(
    'beforeend',
    renderMoviesList(queueFilmsinLocalStorage)
  );
}
