const getFromlocalStorage = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log("err");
  }
};

const setToLocalStorage = (key) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(key));
  } catch (err) {
    console.log(err);
  }
};

export { getFromlocalStorage, setToLocalStorage };
