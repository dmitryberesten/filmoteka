import { fetchPopularMovies } from './api';
import { renderGallery } from './create-gallery-markup';
import { renderPaginationMarkup, state } from './pagination';
import { showHideLoader } from './loader';
import refs from './refs';
export const moviesEl = document.querySelector('.movies');
state.currentPage = 1;

fetchPopularMovies(state.currentPage)
  .then(res => {
    const { results, total_pages } = res;
    state.totalPages = total_pages;
    if (state.totalPages > 1) {
      renderPaginationMarkup();
    }

    return renderGallery(results);
  })
  .then(res => {
    moviesEl.insertAdjacentHTML('beforeend', res);
  });
