// РЕКОМЕНДАЦІЇ
// 1. Отримувати дані про трендові фільми.

// ТУТ ПРАЦЮЄ ОЛЕКСАНДР ГАЙДУК


// import { fetchPopularMovies } from './api';

// function renderMovies(data) {
//   const moviesEl = document.querySelector('.movies');
//   data.results.forEach(movie => {
//     const movieEl = document.createElement('li');
//     movieEl.classList.add('movie');
//     movieEl.dataset.id = movie.id;
//     movieEl.innerHTML = `
//     <div class="movie__cover-inner">
//         <img
//           src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
//           class="movie__cover"
//           alt="${movie.title}"
//         />
//         <div class="movie__cover--darkened"></div>
//     </div>
//       <div class="movie__info">
//         <div class="movie__title">${movie.title}</div>
//         <div class="movie__genre">${movie.genre_ids.map(
//           genre => ` ${genre}`
//         )}</div>

//         <div class="movie__average">${movie.vote_average.toFixed(1)}</div>

//       </div>`;
//     moviesEl.appendChild(movieEl);
//   });
// }
// fetchPopularMovies(1).then(res => {
//   renderMovies(res);
// });
