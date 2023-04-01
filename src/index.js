// Тут будуть імпортуватись:
// 1. Рендер карток фільму.
// 2. Пошук по ключовому слову.
// 3. Відкирття та закриття модалки.
// 4. Модалка учасників команди.

// import './js/api';
import './js/trailer';
import * as customComponent from './js/custom-components';
import * as renderingMovieCards from './js/rendering-movie-cards';
import * as searchByKeyword from './js/search-by-keyword';
import * as openModal from './js/open-and-close-modal';
import * as teamModal from './js/team-load-to-modal';
import * as galleryMarkup from './js/create-gallery-markup';

import * as modalFilm from './js/loading-into-modal';
import * as openAndCloseModal from './js/open-and-close-modal';

import { refs } from './js/refs';
import { onBtnPageClick } from './js/pagination';
import { onLinkPlayClick, onLoadMarkup, swiper } from './js/slider';
import { onBtnAddToLibrary } from './js/add-to-watched&queue';
window.addEventListener('load', onLoadMarkup);
refs.pagination.addEventListener('click', onBtnPageClick);
refs.slider.addEventListener('click', onLinkPlayClick);
refs.btnWrapper.addEventListener('click', onBtnAddToLibrary);
