// РЕКОМЕНДАЦІЇ
// 1. Додати логіку показу/скриття лоадера.

export function showHideLoader(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}
