// РЕКОМЕНДАЦІЇ
// 1. Написати логіку відкриття/закриття модалки.
// 2. Написати логіку закриття модалки по клавіші ESCAPE.
// 3. Написати логіку закриття модалки по бекдропу.

const closeButton = document.querySelector(
  '#modal #buttonWrapper button:nth-child(2)'
);
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    localStorage.setItem('modalCardData');
  }
};
document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;
  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
};

window.onclick = function (event) {
  let modal = document.getElementById('info-modal');

  if (event.target == modal) {
    modal.classList.remove('open');
  }
};

window.onload = () => {
  const movieListItems = document.getElementsByClassName('movies')[0];
  console.log('movieListItems', movieListItems);
  movieListItems.addEventListener('click', e => {
    const cardData = { ...e.target.dataset };
    console.log('£££££££ ', cardData);
    localStorage.setItem('modalCardData', cardData);
    openModal();
  });
};

function openModal() {
  let modal = document.getElementById('info-modal');
  modal.classList.add('open');
}
