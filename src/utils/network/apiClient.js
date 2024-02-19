import axios from "axios"

const BASE_URL = "http://192.168.20.101:7000/api/"



const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
const axiosPostClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        "Content-Type": "multipart/form-data"
    }
})


const APIs = {
    home: "home",
    topSlider: {
        image_List: "slider/all",
        upload_image: "slider/image",
        deleteImage: "slider/"
    },
    journal:{
        image_List: "journal/all",
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


export { APIs, axiosClient, axiosPostClient }