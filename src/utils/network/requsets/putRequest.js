

import { axiosClient } from "../apiClient"
import handlingResponseError from "./handlingError"



export async function putRequest(url, data) {

    const result = {
        data: null,
        error: { status: null, msg: null }
    }

    try {
        await axiosClient.put(url, data)
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
