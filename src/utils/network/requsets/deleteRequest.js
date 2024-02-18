

import { axiosClient } from "../apiClient";
import handlingResponseError from "./handlingError"


export async function deleteRequest(url, id) {

    const result = {
        data: null,
        error: {
            status: null,
            msg: null
        }
    }

    try {
        await axiosClient.delete(url + id)
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


