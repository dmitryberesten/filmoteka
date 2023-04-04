import { fetchMoviesByQuery } from './api';
import { renderGallery } from './create-gallery-markup';
import { moviesEl } from './rendering-movie-cards';
import Notiflix from 'notiflix';
import {
  clearPagination,
  renderPaginationMarkup,
  resetCurrentPage,
} from './pagination';
import { state } from './state';
const searchFormEl = document.querySelector('.header-search-form');
const inputEl = document.querySelector('.form-input');



resetCurrentPage();

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!inputEl.value.trim()) {
    return Notiflix.Notify.failure('Please enter a search query for the movie');
  }
  state.whatPaginated = 'search';
  resetCurrentPage();
  state.query = inputEl.value.trim();
  moviesEl.innerHTML = '';
  clearPagination();
  fetchMoviesByQuery(state.query, state.currentPage)
    .then(res => {
      const { results, total_pages } = res;
      state.totalPages = total_pages;

      if (state.totalPages > 1) {
        renderPaginationMarkup();

        Notiflix.Notify.success(
          'Hooray! We found something interesting for you :)'
        );
        inputEl.value = '';
        removeNotifMeme();
      } else {
        Notiflix.Notify.failure('Nothing found, sorry :(');
        inputEl.value = '';
        addNotifMeme()
      }

      return renderGallery(results);
    })
    .then(res => {
      moviesEl.insertAdjacentHTML('beforeend', res);
    });
});

function addNotifMeme() {
  const memeNothing = document.querySelector('.meme-notif-nothing');
  memeNothing.style.display = 'block';
}

function removeNotifMeme() {
  const memeNothing = document.querySelector('.meme-notif-nothing');
  memeNothing.style.display = 'none';
}