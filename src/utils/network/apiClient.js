import axios from "axios"

const BASE_URL = "http://192.168.20.101:7000/api/"

const axiosClient = axios.create({ baseURL: BASE_URL, })
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common["Content-Type"] = "application/json"

const APIs = {
    home: "home",
    dashBox: {
        create_box: "dashboard/new-dashboard"
    },
    dashBox: {
        new_dashBox: "dashbox/new-dashbox"
    },
    topSlider: {
        image_list: "slider/all",
        upload_image: "slider/image",
        deleteImage: "slider/"
    },
    journal: {
        image_list: "journal/all",
        upload_image: "journal/image",
        deleteImage: "journal/"
    }
}

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


export { APIs, axiosClient }