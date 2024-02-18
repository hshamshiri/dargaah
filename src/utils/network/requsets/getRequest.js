

import { axiosClient } from "../apiClient"
import handlingResponseError from "./handlingError"



export async function getRequest(url) {
    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    try {
        await axiosClient.get(url)
            .then(response => {
                console.log("ppppppp", response)
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


