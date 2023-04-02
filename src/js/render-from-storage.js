import { getClassByRate } from './create-gallery-markup';
import { getFromStorage, localStorageKeys } from './local-storage';
import { refs } from './refs';

export const loadFromStorageWatched = () => {
  const data = getFromStorage(localStorageKeys.WATCHED);
  const warning = `<li class="watched-warning">Please add your favorite film</li>`;
  let markup;
  if (data === undefined || data.length === 0) {
    markup = warning;
  } else {
    markup = renderMoviesList(data);
  }
  refs.moviesLib.insertAdjacentHTML('beforeend', markup);
};
export const onClickWatched = evt => {
  if (evt.target.nodeName !== 'BUTTON') return;
  if (evt.target.classList.contains('active')) return;
  const activeBtn = document.querySelector('.active');
  let key = evt.target.dataset.value.toUpperCase();

  const data = getFromStorage(localStorageKeys[key]);
  const warning =
    evt.target.dataset.value.toUpperCase() === 'WATCHED'
      ? `<li class="watched-warning">Please add your favorite film</li>`
      : `<li class="watched-warning">No movies have been added yet. Let's go pick something to your liking</li>`;

  let markup;
  if (data === undefined || data.length === 0) {
    markup = warning;
  } else {
    markup = renderMoviesList(data);
  }

  refs.moviesLib.innerHTML = '';
  refs.moviesLib.insertAdjacentHTML('beforeend', markup);
  activeBtn.classList.remove('active');
  evt.target.classList.add('active');
};

function renderMoviesList(movies) {
  return movies
    .map(
      ({
        id,
        poster_path,
        title,
        release_date,
        genre_ids,
        original_title,
        vote_average,
        popularity,
        vote_count,
        overview,
      } = movies) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : NO_POSTER;
        const releaseYear = release_date
          ? release_date.split('-')[0]
          : 'Unknown';
        return `
      <li class='movie_list_item' data-id="${id}" >
      <div href="" class='movie_list_link link' id=${id}>
      <div class="movie__cover--darkened"
        data-id="${id}"
        data-poster_path="${poster}"
        data-title="${title}"
        data-original_title="${original_title}"
        data-vote_average="${vote_average}"
        data-popularity="${popularity}"
        data-vote_count="${vote_count}"
        data-genre_ids="${genre_ids}"
        data-overview="${overview}"
      ></div>
        <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='movie-info'>
            <p class='movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='movie-date'>
              <span>${genre_ids} | ${releaseYear}</span>
            </p>
            <div class="movie__average movie__average--${getClassByRate(
              vote_average
            )}">${Number(vote_average).toFixed(1)}</div>
        </div>
        </div>
      </li>
      `;
      }
    )
    .join('');
}
