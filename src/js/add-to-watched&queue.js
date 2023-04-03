import {
  getFromStorage,
  localStorageKeys,
  setToLocalStorage,
} from './local-storage';
import { refs } from './refs';
import {
  clearLibraryMarkup,
  loadFromStorageWatched,
  onClickWatched,
  renderMoviesList,
} from './render-from-storage';
import { state } from './state';

export const onBtnAddToLibrary = evt => {
  const watchedFilmsArray = getFromStorage(localStorageKeys.WATCHED) || [];
  const queueFilmsUsersArray = getFromStorage(localStorageKeys.QUEUE) || [];

  if (evt.target.innerText === 'ADD TO WATCHED') {
    saveToStorageFilm(
      watchedFilmsArray,
      localStorageKeys.WATCHED,
      'WATCHED',
      evt
    );
  } else if (evt.target.innerText === 'REMOVE FROM WATCHED') {
    deleteFromStorageFilm(
      watchedFilmsArray,
      localStorageKeys.WATCHED,
      'WATCHED',
      evt
    );

    ////chang markup after remove from watched fims
    refs.moviesLib.innerHTML = '';
    const watchedFilmsinLocalStorage =
      getFromStorage(localStorageKeys.WATCHED) || [];

    refs.moviesLib.insertAdjacentHTML(
      'beforeend',
      renderMoviesList(watchedFilmsinLocalStorage)
    );
  } else if (evt.target.innerText === 'ADD TO QUEUE') {
    saveToStorageFilm(
      queueFilmsUsersArray,
      localStorageKeys.QUEUE,
      'QUEUE',
      evt
    );
  } else if (evt.target.innerText === 'REMOVE FROM QUEUE') {
    deleteFromStorageFilm(
      queueFilmsUsersArray,
      localStorageKeys.QUEUE,
      'QUEUE',
      evt
    );

    ////chang markup after remove from queue fims
    refs.moviesLib.innerHTML = '';
    const queueFilmsinLocalStorage =
      getFromStorage(localStorageKeys.QUEUE) || [];

    refs.moviesLib.insertAdjacentHTML(
      'beforeend',
      renderMoviesList(queueFilmsinLocalStorage)
    );
  }
};

function saveToStorageFilm(array, key, keyValue, evt) {
  array.push(state.activeFilm);
  setToLocalStorage(key, array);
  evt.target.innerText = `REMOVE FROM ${keyValue}`;
}
function deleteFromStorageFilm(array, key, keyValue, evt) {
  const filteredFilms = array.filter(film => film.id !== state.activeFilm.id);
  setToLocalStorage(key, filteredFilms);
  evt.target.innerText = `ADD TO ${keyValue}`;
}
