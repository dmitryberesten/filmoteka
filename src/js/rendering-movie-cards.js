import { fetchPopularMovies } from './api';
import { renderGallery } from './create-gallery-markup';
import { renderPaginationMarkup, resetCurrentPage } from './pagination';
import { state } from './state';
export const moviesEl = document.querySelector('.movies');

window.addEventListener('load', () => {
  resetCurrentPage();
  fetchPopularMovies(state.currentPage)
    .then(res => {
      if (state.whatPaginated === 'local') return;
      state.whatPaginated = 'main';
      const { results, total_pages } = res;
      state.totalPages = total_pages;
      renderPaginationMarkup();
      return renderGallery(results);
    })
    .then(res => {
      moviesEl?.insertAdjacentHTML('beforeend', res);
    });
});
