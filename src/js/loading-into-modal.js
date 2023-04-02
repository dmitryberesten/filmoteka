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

  filmImg.src = `${cardData.poster_path}`;
  filmTitle.innerText = `${cardData.title}`;
  about.innerText = `${cardData.overview}`;
  averageElement.className = 'average';
  countElement.className = 'count';
  averageElement.innerText = `${(cardData.vote_average * 1).toFixed(2)}`;
  countElement.innerText = `/ ${cardData.vote_count}`;

  votes.append(averageElement, countElement);

  popul.innerText = `${cardData.popularity}`;
  origTitle.innerText = `${cardData.original_title}`;
  genre.innerText = `${cardData.genre_ids}`;
};
