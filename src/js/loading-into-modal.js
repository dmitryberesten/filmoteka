// РЕКОМЕНДАЦІЇ
// 1. Додати необхідні імпорти для модалки.
// 2. Додати функціонал мадалки.
// 2. Додати рендер модалки.

const modal = document.getElementById('info-modal');

const cardData = localStorage.getItem('modalCardData');

console.log('!!!!!! DATA !!!!!! ', cardData);

const movieCards = document.querySelectorAll('.movie-card');

// movieCards.forEach(movieCard => {
//   movieCard.addEventListener('click', () => {
//     const movie = movieCard.dataset;

//     const filmImg = document.getElementById('film-img');
//     const filmTitle = document.getElementById('film-title');
//     const description = document.getElementById('description');
//     const votes = document.getElementById('votes');
//     const popul = document.getElementById('popul');
//     const origTitle = document.getElementById('origTitle');
//     const genre = document.getElementById('genre');

//     filmImg.src = `${movie.img}`;
//     filmTitle.innerText = `Movie ${movie.title}`;
//     description.innerText = `Description of Movie ${movie.description}`;
//     votes.innerText = 'smth';
//     popul.innerText = 'smth';
//     origTitle.innerText = 'smth';
//     genre.innerText = 'smth';

//     modal.style.display = 'block';
//   });
// });
