// РЕКОМЕНДАЦІЇ
// 1. Додати логіку показу/скриття лоадера.

// Preloader //

const preloaderEl = document.querySelector('.preloader');

if (preloaderEl) {
  window.addEventListener('load', hidePreloader);

  function hidePreloader() {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      preloaderEl.classList.add('preloader--hide');
      document.body.style.overflow = 'auto';
    }, 2500);
    setTimeout(() => {
      preloaderEl.remove();
    }, 3500);
  }
}
// Loader-spinner //

function showLoader() {
  document.body.style.overflow = 'hidden';

  const loaderSpinner = `
    <div class="loading">
      <div class="loading__spinner"></div>
      <img class="loading__logo" src="${new URL(
        '../images/logo.png',
        import.meta.url
      )}" alt="logo" />
      <p class="loading__text">Loading...</p>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', loaderSpinner);
}

function hideLoader() {
  const loaderSpinnerEl = document.querySelector('.loading');
  loaderSpinnerEl.classList.add('loading--hide');

  setTimeout(() => {
    loaderSpinnerEl.remove();
    document.body.style.overflow = 'auto';
  }, 300);
}

export { showLoader, hideLoader };