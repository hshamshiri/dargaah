

import { axiosClient } from "../apiClient"
import handlingResponseError from "./handlingError"



export async function postRequest(url, data, isFormdata = false) {

    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    if (isFormdata) {
        console.log("ooooo")
        axiosClient.defaults.headers.common["Content-Type"] = "multipart/form-data"
    } else {
        console.log("pppppp")
        axiosClient.defaults.headers.common["Content-Type"] = "application/json"
    }


    const sendData = isFormdata ? createFormData(data) : data

    try {
        await axiosClient.post(url, sendData)
            .then(response => {
                if (response.data) {
                    result.data = response.data
                }
            })
            .catch(function (error) {
                if (error.response && error.response.status) {
                    result.error.status = error.response.status
                    result.error.msg = handlingResponseError(error.response.status)
                }
            })
    } catch (error) {
        result.error.msg = error
    }

    return result
}


const createFormData = (data) => {
    let formData = new FormData()
    data?.file && formData.append("file", data.file)
    data?.link && formData.append("link", data.link)
    data?.label && formData.append("label", data.label)

    return formData
}