// РЕКОМЕНДАЦІЇ
// 1. Зберігати ключі в константах.
// 2. Використовувати в назвах функцій ключові слова get, set.

export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.messege);
  }
};
export const getFromStorage = key => {
  try {
    const serialisedState = localStorage.getItem(key);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.messege);
  }
};

export const localStorageKeys = {
  WATCHED: 'watched',
  QUEUE: 'queue',
};
