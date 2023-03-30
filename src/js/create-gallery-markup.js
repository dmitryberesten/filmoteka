// РЕКОМЕНДАЦІЇ

// 1. Створити та експортувати функцію яка перебирає фільми та повертає розмітку.
import { fetchGenres } from "./api";

const NO_POSTER = `https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png`;

export function getGenres(arrayId, genres) {
  const arr = [];
  for (const value of genres) {
    if (arrayId.includes(value.id)) {
      arr.push(value.name);
    }
  }
  if (arrayId.length > 2) {
    arr.splice(2, arr.length - 2, 'Other');
  }

  return arr.join(', ');
}

async function renderGallery(movies) {
  const genres = await fetchGenres();
  return movies
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : NO_POSTER;
      const releaseYear = release_date ? release_date.split('-')[0] : 'Unknown';
      const checkGenres = genre_ids ? getGenres(genre_ids, genres) : 'Unknown';
      return `
      <li class='movie_list_item' data-id="${id}>
      <a href="" class='movie_list_link link' id=${id}>
        <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='movie-info'>
            <p class='movie-title'>
              <b>${title}</b>
            </p>
            <p class='movie-date'>
              <span>${checkGenres} | ${releaseYear}</span>
            </p>
        </div>
        </a>
      </li>
      `;
    })
        .join('');
}



