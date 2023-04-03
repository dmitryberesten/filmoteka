import { fetchMoviesByQuery, BASE_URL, API_KEY, query } from './api';
import { renderGallery } from './create-gallery-markup';
import { moviesEl } from './rendering-movie-cards';
import Notiflix from 'notiflix';
import { renderPaginationMarkup, state } from './pagination';
import { refs } from './refs';

const searchFormEl = document.querySelector('.header-search-form');
const inputEl = document.querySelector('.form-input');
const { pagination } = refs;

state.currentPage = 1;

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!inputEl.value.trim()) {
    return Notiflix.Notify.failure(
      'Please enter a search query for the movie'
    );
  }

  moviesEl.innerHTML = '';
  pagination.innerHTML = '';

  fetchMoviesByQuery(inputEl.value.trim(), state.currentPage)
    .then(res => {
      const { results, total_pages } = res;
      state.totalPages = total_pages;

      if (state.totalPages > 1) {
        renderPaginationMarkup();
        
        Notiflix.Notify.success(
          'Hooray! We found something interesting for you :)'
        );
        inputEl.value = '';
      } else {
        Notiflix.Notify.failure(
          'Nothing found, sorry :('
        );
        inputEl.value = '';
      }

      return renderGallery(results);
    })
    .then(res => {
      moviesEl.insertAdjacentHTML('beforeend', res);
    });

});