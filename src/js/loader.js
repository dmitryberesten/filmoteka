// РЕКОМЕНДАЦІЇ
// 1. Додати логіку показу/скриття лоадера.

const mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
});
