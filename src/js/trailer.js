import * as basicLightbox from 'basiclightbox';
import { fetchTrailerById } from './api';
import 'basiclightbox/dist/basicLightbox.min.css';

export const openTrailer = async evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A') return;
  try {
    const { results } = await fetchTrailerById(evt.target.dataset.id);
    const { key } = results[0];
    const closeModal = e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    };
    const instance = basicLightbox.create(
      `<iframe class="youtube-frame" width="900" height="600" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">     
     </button>`,
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
const trailerBtn = document.querySelector('.trailer-btn');
trailerBtn.addEventListener('click', openTrailer);
