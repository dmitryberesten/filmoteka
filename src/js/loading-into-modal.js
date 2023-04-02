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

  filmImg.src = cardData.poster_path ? `${cardData.poster_path}` : 'N/A';
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
