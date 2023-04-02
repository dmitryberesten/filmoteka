import { fetchMoviesByQuery, BASE_URL, API_KEY, query } from './api';
import { renderGallery } from './create-gallery-markup';
import { moviesEl } from './rendering-movie-cards';

const searchFormEl = document.querySelector('.header-search-form');
const inputEl = document.querySelector('.form-input');

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();
  moviesEl.innerHTML = '';

  fetchMoviesByQuery(inputEl.value, 1)
    .then(res => {
      const obj = res.results;
      return renderGallery(obj);
    })
    .then(res => {
      moviesEl.insertAdjacentHTML('beforeend', res);
    });
});
