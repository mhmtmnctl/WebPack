const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };
  const getItem = (key) => {
    return localStorage.getItem(key);
  };
  export { setItem, getItem};
  //yorum dosyaları da webpackde olmuyor. kendisi kaldırıyor.

