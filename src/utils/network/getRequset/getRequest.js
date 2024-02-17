

import { axiosGetClient } from "../apiClient"



export async function getRequest(url) {
    const result = {
        data: null,
        error: { status: null, msg: null }
    }
    try {
        await axiosGetClient.get(url)
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



const handlingResponseError = (status) => {
    if (status == "404") {
        return "paaaaage nooooot found"
    }

}