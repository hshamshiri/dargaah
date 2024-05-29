import axios from "axios";
import retriveData from "../localStoarageMangement/retriveData";

const BASE_URL = "http://192.168.8.187:7000/api/";

let AUTH_TOKEN = await retriveData("token");

const defaultOptions = {
  baseURL: BASE_URL,
  Headers,
};

const axiosClient = axios.create(defaultOptions);
axiosClient.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common["Content-Type"] = "application/json"

const APIs = {
  home: "home",
  login: {
    login: "oauth2/login",
  },
  dashBox: {
    new_dashBox: "dashbox/new-dashbox",
    delete_dashbox: "dashbox/dashbox/",
    update_dashbox: "dashbox/title/",
  },
  dashButton: {
    new_dashbutton: "dashbox/new-button/",
    delete_button: "dashbox/button/",
    update_button: "dashbox/update-button/",
  },
  topSlider: {
    image_list: "slider/all",
    upload_image: "slider/image",
    delete_Image: "slider/",
  },
  journal: {
    image_list: "journal/all",
    upload_image: "journal/image",
    delete_Image: "journal/",
  },
};

//check authentication
// axiosClient.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         let res = error.response;
//         if (res.status == 401) {
//             window.location.href = "http://192.168.20.101:7000/login";
//         }
//         console.error("Looks like there was a problem. Status Code:" + res.status);
//         return Promise.reject(error);
//     }
// )

export { APIs, axiosClient };
