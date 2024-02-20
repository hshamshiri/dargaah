

import axios from "axios"
import { axiosClient } from "../apiClient"
import handlingResponseError from "./handlingError"



export async function postRequest(url, data, isFormdata = false) {


    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    isFormdata && (axiosClient.defaults.headers.common["Content-Type"] = "multipart/form-data")

    const sendData = isFormdata ? createFormData(data) : data

    try {
        await axiosClient.post(url, sendData)
            .then(response => {
                console.log("okkkkk:", response)
                if (response.data) {
                    result.data = response.data
                }
            })
            .catch(function (error) {
                console.log("error:", error)
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
    formData.append("link", data.imageLink)
    formData.append("file", data.file)
    return formData
}