import { page } from './js/api';
import './js/api';
import './js/sound';
import './js/custom-components';
import './js/trailer';
import './js/loader';

import * as renderingFromStorage from './js/render-from-storage';
import './js/team-load-to-modal';
import './js/open-and-close-modal';
import { refs } from './js/refs';

import {
  onBtnAddToLibrary,
  updateMarkupLibrary,
} from './js/add-to-watched&queue';
import { onBtnPageClick } from './js/pagination';

window.addEventListener('load', renderingFromStorage.loadFromStorageWatched);
refs.watchedQueueBtnBlock.addEventListener(
  'click',
  renderingFromStorage.onClickWatched
);
refs.btnWrapper.addEventListener('click', onBtnAddToLibrary);
refs.btnWrapper.addEventListener('click', updateMarkupLibrary);
refs.pagination.addEventListener('click', onBtnPageClick);
