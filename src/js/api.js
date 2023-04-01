let page;
let query;

//основа для запиту
const BASE_URL = 'https://api.themoviedb.org/3';
//персональний ключ
const API_KEY = 'db5c04dbd9637821020050cea594d5e0';
// const WATCH_KEY = 'watched';
// const QUEUE_KEY = 'queue';

//запит на отримання популярних фільмів
async function fetchPopularMovies(page) {
  const url = new URL(`${BASE_URL}/trending/movie/week`);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('page', page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function fetchTodayPopularMovies() {
  const url = new URL(`${BASE_URL}/trending/movie/day`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
// `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}&adult=false`;
console.log(fetchPopularMovies(3));

//запит на отримання фільмів по запиту
async function fetchMoviesByQuery(query, page) {
  const url = new URL(`${BASE_URL}/search/movie`);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('query', query);
  url.searchParams.append('page', page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
// `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&adult=false&query=${query}`;
// console.log(fetchMoviesByQuery('avengers', 1));

//запит на отримання фільму по id
async function fetchMovieById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
// `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
// console.log(fetchMovieById(299534));

//запит на отримання трейлера по id
async function fetchTrailerById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}/videos`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
// `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;
// console.log(fetchTrailerById(299534));

//запит на отримання жанрів
async function fetchGenres() {
  const url = new URL(`${BASE_URL}/genre/movie/list`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data.genres;
}

// `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
// console.log(fetchGenres());

//Експорт запитів
export {
  fetchPopularMovies,
  fetchTodayPopularMovies,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchTrailerById,
  fetchGenres,
  BASE_URL,
  API_KEY,
};

// РЕКОМЕНДАЦІЇ
// 1. Імпортувати axios.
// 2. Зберегти в змінних ключ та URL.
// 3. Створити та експортувати асинхронні запити по:
// трендах, ключовому слові, інфо фільму, інфо відео, масив фільмів.
