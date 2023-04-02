// РЕКОМЕНДАЦІЇ
// 1. Створити константу refs з DOM елементами.
// 2. Експортувати константу refs.

foterLink: document.querySelector('.footer__link');
export const refs = {
  form: document.querySelector('.header-search-form'),
  pagination: document.querySelector('.pagination'),
  slider: document.querySelector('.swiper-wrapper'),
  btnWrapper: document.querySelector('#buttonWrapper'),
  addToWatchedBtn: document.querySelector('.add-to-watched-btn'),
  addToQueueBtn: document.querySelector('.add-to-queue-btn'),
  moviesLib: document.querySelector('.movies-lib'),
  watchedQueueBtnBlock: document.querySelector('.buttons-block'),
};
