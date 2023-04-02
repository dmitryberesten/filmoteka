// Тут будуть імпортуватись:
// 1. Рендер із локал сториджа.
// 2. Відкирття та закриття модалки.
// 3. Модалка учасників команди.
import { page } from './js/api';
import './js/api';
import './js/trailer';
import * as renderingFromStorage from './js/render-from-storage';
import * as openModal from './js/open-and-close-modal';
import { refs } from './js/refs';
// import * as teamModal from './js/team-load-to-modal';
window.addEventListener('load', renderingFromStorage.loadFromStorageWatched);
refs.watchedQueueBtnBlock.addEventListener(
  'click',
  renderingFromStorage.onClickWatched
);
