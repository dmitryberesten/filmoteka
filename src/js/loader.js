// РЕКОМЕНДАЦІЇ
// 1. Додати логіку показу/скриття лоадера.

import { refs } from './constants/refs';

export default function loader() {
  refs.loader.classList.toggle('backdrop__is-hidden');
}