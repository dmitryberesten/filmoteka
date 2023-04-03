import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { refs } from './refs';
import { fetchTodayPopularMovies, fetchTrailerById } from './api';
import { state } from './state';
import * as basicLightbox from 'basiclightbox';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  slidesPerView: 8,
  spaceBetween: 8,
  autoplay: {
    enabled: true,
    delay: 1500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 4,
    },
    1278: {
      slidesPerView: 8,
      spaceBetween: 8,
    },
  },
});
const renderMarkupSlider = movies => {
  const markup = movies
    .map(({ id, title, poster_path }) => {
      return `<li class="swiper-slide">
        <a class="swiper-link" href="#" data-id="${id}"><img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
            <div class="swiper-backdrop">
                <svg class="icon-play">
                    <use href="${state.sprite}#icon-play"></use>
                </svg>
            </div>
        </a>
      </li>`;
    })
    .join('');
  refs.slider.insertAdjacentHTML('beforeend', markup);
};

export const onLoadMarkup = async () => {
  try {
    const { results } = await fetchTodayPopularMovies();
    renderMarkupSlider(results);
  } catch (error) {
    console.error(error.message);
  }
};

export const onLinkPlayClick = async evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A') return;
  try {
    const { results } = await fetchTrailerById(evt.target.dataset.id);
    const { key } = results[results.length - 1];
    const closeModal = e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    };
    const instance = basicLightbox.create(
      `<iframe class="youtube-frame" width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      {
        onShow: () => {
          document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
          document.removeEventListener('keydown', closeModal);
        },
      }
    );

    instance.show();
  } catch (error) {
    console.error(error.message);
  }
};
