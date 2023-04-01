// РЕКОМЕНДАЦІЇ
// 1. Додати логіку показу/скриття лоадера.

import { refs } from './constants/refs';

export default function loader() {
  refs.loader.classList.toggle('backdrop__is-hidden');
}

export const sk = {
  html: `<div class="sk-chase sk-center">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>`,

  run(tag) {
    //...

    tag.insertAdjacentHTML('beforebegin', this.html);
  },

  stop() {
    const divSpinner = document.querySelector('.sk-chase');
    divSpinner.parentNode.removeChild(divSpinner);
  },
};
