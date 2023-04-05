export let filmId;

const NO_POSTER = 'https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png';

const averageElement = document.createElement('span');
const countElement = document.createElement('span');
export const getInitialModalData = () => {
  const cardData = JSON.parse(localStorage.getItem('modalCardData'));

  const filmImg = document.getElementById('film-img');
  const filmTitle = document.getElementById('film-title');
  const votes = document.getElementById('votes');
  const popul = document.getElementById('popul');
  const origTitle = document.getElementById('origTitle');
  const genre = document.getElementById('genre');
  const trailerBtn = document.querySelector('.trailer-btn');

  trailerBtn.dataset.filmId = cardData.id;
  filmId = cardData.id;
  filmImg.src =
    cardData.poster_path !== 'null'
      ? (filmImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${cardData.poster_path}')`)
      : (filmImg.style.backgroundImage = `url('${NO_POSTER}')`);
  filmTitle.innerText = cardData.title ? `${cardData.title}` : 'N/A';
  about.innerText = cardData.overview ? `${cardData.overview}` : 'N/A';
  averageElement.className = 'average';
  countElement.className = 'count';
  averageElement.innerText = cardData.vote_average
    ? `${(cardData.vote_average * 1).toFixed(1)}`
    : 'N/A';
  countElement.innerText = cardData.vote_count
    ? `/ ${cardData.vote_count}`
    : 'N/A';

  votes.append(averageElement, countElement);

  popul.innerText = cardData.popularity
    ? `${(cardData.popularity * 1).toFixed(1)}`
    : 'N/A';
  origTitle.innerText = cardData.original_title
    ? `${cardData.original_title}`
    : 'N/A';
  genre.innerText = cardData.genre_ids ? `${cardData.genre_ids}` : 'N/A';
};
