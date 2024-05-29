export default function retriveData(key) {
  try {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log("err");
  }
}
