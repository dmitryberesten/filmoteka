// РЕКОМЕНДАЦІЇ
// 1. Створити константу refs з DOM елементами.
// 2. Експортувати константу refs.

foterLink: document.querySelector('.footer__link');
export const refs = {
  pagination: document.querySelector('.pagination'),
  slider: document.querySelector('.swiper-wrapper'),
};
