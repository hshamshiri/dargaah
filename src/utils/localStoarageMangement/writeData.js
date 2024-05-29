export default function writeData(key) {
  try {
    window.localStorage.setItem(key,JSON.stringify(key));
  } catch (error) {
    console.log(error);
  }
}
