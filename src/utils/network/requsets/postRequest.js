

import { axiosClient } from "../apiClient"
import handlingResponseError from "./handlingError"
import createFormData from "./createFormData"



export async function postRequest(url, data, isFormdata = false) {

    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    axiosClient.defaults.headers.common["Content-Type"] = isFormdata? "multipart/form-data":"application/json"
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

