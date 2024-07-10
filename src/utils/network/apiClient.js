import axios from "axios";

const BASE_URL = "http://192.168.8.187/dashboard/api/v2/";
//v1 without token
//v2 need token

const defaultOptions = {
  baseURL: BASE_URL,
  Headers,
};

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

const axiosClient = axios.create(defaultOptions);

const APIs = {
  home: "home",
  captcha: {
    getCaptcha: `getcaptcha/`,
    checkCaptcha: `checkcaptcha/`,
  },
  login: {
    login: "oauth2/login",
  },
  user: {
    log: "user/log",
  },
  dashBox: {
    new_dashBox: `dashbox/new-dashbox`,
    delete_dashbox: `dashbox/dashbox/`,
    update_dashbox: `dashbox/title/`,
  },
  dashButton: {
    new_dashbutton: `dashbox/new-button/`,
    delete_button: `dashbox/button/`,
    update_button: `dashbox/update-button/`,
  },
  topSlider: {
    image_list: `slider/all`,
    upload_image: `slider/image`,
    delete_Image: `slider/`,
  },
  journal: {
    add_journal: `journal/new-slider`,
    image_list: `journal/all`,
    upload_image: `journal/image`,
    delete_Image: `journal/`,
    delete_journal: `journal/`,
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

export { APIs, axiosClient, BASE_URL };
