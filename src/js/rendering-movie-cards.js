// РЕКОМЕНДАЦІЇ
// 1. Отримувати дані про трендові фільми.

// ТУТ ПРАЦЮЄ ОЛЕКСАНДР ГАЙДУК

import { fetchPopularMovies } from './api';
import { renderGallery } from './create-gallery-markup';
const moviesEl = document.querySelector('.movies');

fetchPopularMovies(1)
  .then(res => {
    const obj = res.results;
    return renderGallery(obj);
  })
  .then(res => {
    moviesEl.insertAdjacentHTML('beforeend', res);
  });
