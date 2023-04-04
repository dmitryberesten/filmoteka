import { fetchPopularMovies, fetchMoviesByQuery } from './api';
import { renderGallery } from './create-gallery-markup';
import { setScrollToUp } from './custom-components';
import { getFromStorage, localStorageKeys } from './local-storage';
import { refs } from './refs';
import { localPaginate } from './render-from-storage';
import { moviesEl } from './rendering-movie-cards';
import { state } from './state';

const { pagination } = refs;
export const resetCurrentPage = () => {
  state.currentPage = 1;
};

export const clearPagination = () => {
  pagination.innerHTML = '';
};
const whatPaginated = async where => {
  let markupGallery;
  switch (where) {
    case 'main':
      try {
        const { results } = await fetchPopularMovies(state.currentPage);
        markupGallery = await renderGallery(results);
        moviesEl.insertAdjacentHTML('beforeend', markupGallery);
      } catch (error) {
        console.error(error.message);
      }
      break;
    case 'search':
      try {
        const { results } = await fetchMoviesByQuery(
          state.query,
          state.currentPage
        );
        markupGallery = await renderGallery(results);
        moviesEl.insertAdjacentHTML('beforeend', markupGallery);
      } catch (error) {
        console.error(error.message);
      }
      break;
    case 'local':
      try {
        const films =
          state.whatchedOrQueue === 'WATCHED'
            ? getFromStorage(localStorageKeys.WATCHED) || []
            : getFromStorage(localStorageKeys.QUEUE) || [];
        markupGallery = await renderGallery(
          localPaginate(films, state.currentPage)
        );
      } catch (error) {
        console.error(error.message);
      }
      break;
    default:
      throw new Error(`Invalid 'where' parameter: ${where}`);
  }

  moviesEl.insertAdjacentHTML('beforeend', markupGallery);
};
const paginate = (totalPages, currentPage) => {
  const groupSize = 5;
  const numGroups = Math.ceil(totalPages / groupSize);
  const currentGroup = Math.ceil(currentPage / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const hasPrevGroup = currentGroup > 1;
  const hasNextGroup = currentGroup < numGroups;
  return {
    pages,
    hasPrevGroup,
    hasNextGroup,
  };
};
const paginationMarkup = () => {
  if (state.totalPages <= 1) return;
  const { pages, hasPrevGroup, hasNextGroup } = paginate(
    state.totalPages,
    state.currentPage
  );
  const firstPage = `<button type="button" class="start-btn page-btn">1</button>`;
  const lastPage = `<button type="button" class="end-btn page-btn">${state.totalPages}</button>`;
  const prev = `<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">
    <use xlink:href="${state.sprite}#icon-arrow-left"></use>
  </svg></button>`;
  const next = `<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">
    <use xlink:href="${state.sprite}#icon-arrow-right"></use>
  </svg></button>`;
  const dotsBtnPrev = `<button class="page-btn prev-dots">...</button>`;
  const dotsBtnNext = `<button class="page-btn next-dots">...</button>`;
  const btnPages = pages
    .map(num => {
      const isActive = num === state.currentPage ? 'active-page' : '';
      return `<button type="button" class="page-btn ${isActive}
        ">${num}</button>`;
    })
    .join('');

  const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : '';
  const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : '';
  return leftGroup + btnPages + rightGroup;
};

export const renderPaginationMarkup = () => {
  pagination.insertAdjacentHTML('beforeend', paginationMarkup());
};

const updateCurrentPage = newPage => {
  state.currentPage = newPage;
  clearPagination();

  renderPaginationMarkup();
};

const goToNextPage = () => {
  updateCurrentPage(state.currentPage + 1);
};
const goToPrevPage = () => {
  updateCurrentPage(state.currentPage - 1);
};
const goToNextGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const lastPageOfCurrentGroup = pages[pages.length - 1];
  const newPage = Math.min(lastPageOfCurrentGroup + 1, state.totalPages);
  state.currentPage = pages[pages.length - 1] + 1;
  updateCurrentPage(newPage);
};
const goToPrevGroupBtn = () => {
  const { pages } = paginate(state.totalPages, state.currentPage);
  const firstPageOfCurrentGroup = pages[0];
  const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
  updateCurrentPage(newPage);
};
const changePageByClick = evt => {
  const activeBtn = document.querySelector('.active-page');
  const selectedPage = Number(evt.target.textContent) || state.currentPage;
  if (selectedPage === state.currentPage) return;

  updateCurrentPage(selectedPage);
  activeBtn.classList.remove('active-page');
  evt.target.classList.add('active-page');
};

export const onBtnPageClick = async evt => {
  if (evt.target.nodeName !== 'BUTTON') return;
  if (Number(evt.target.textContent) === state.currentPage) return;
  if (evt.target.classList.contains('next-btn')) goToNextPage();
  if (evt.target.classList.contains('prev-btn')) goToPrevPage();
  if (evt.target.classList.contains('next-dots')) goToNextGroupBtn();
  if (evt.target.classList.contains('prev-dots')) goToPrevGroupBtn();
  changePageByClick(evt);
  window.scrollTo({
    top: 0,
  });
  moviesEl.innerHTML = '';
  whatPaginated(state.whatPaginated);
};
